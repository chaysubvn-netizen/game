"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { sound } from "@/lib/soundEngine";
import { TEMPLE_ZONES } from "@/lib/templeData";

interface Peer {
  id: string;
  name: string;
  robe: string;
  pos: [number, number, number];
  action: "pray" | "kneel" | "idle";
}

interface FloatingLantern {
  id: string;
  text: string;
  color: string;
  mesh?: THREE.Group;
  pos: [number, number, number];
  driftSpeed: number;
}

interface Temple3DSceneProps {
  currentZone: string;
  timeOfDay: number; // 0 - 24
  lanterns: { id: string; text: string; color: string }[];
  isIncenseActive: boolean;
  isBowing: boolean;
  onZoneClick?: (zoneId: string) => void;
  onObjectClick?: (actionType: string) => void;
}

export default function Temple3DScene({
  currentZone,
  timeOfDay,
  lanterns,
  isIncenseActive,
  isBowing,
  onZoneClick,
  onObjectClick,
}: Temple3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Targets for smooth camera lerp
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, 10));
  const targetCamLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const currentCamLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));

  // Dynamic meshes references
  const buddhaHaloRef = useRef<THREE.Mesh | null>(null);
  const incenseSmokeRef = useRef<THREE.Points | null>(null);
  const bellMeshRef = useRef<THREE.Group | null>(null);
  const lanternsGroupRef = useRef<THREE.Group | null>(null);
  const peerMeshesRef = useRef<Map<string, THREE.Group>>(new Map());

  // Sunlight and ambient
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const pointLightsRef = useRef<THREE.PointLight[]>([]);

  // Mouse drag / touch look around
  const isDragging = useRef(false);
  const prevPointer = useRef({ x: 0, y: 0 });
  const orbitAngle = useRef({ yaw: 0, pitch: 0 });

  // Simulated Peers in room
  const [peers] = useState<Peer[]>([
    { id: "p1", name: "Diệu Tâm", robe: "#3b82f6", pos: [-2.2, 0, 3.5], action: "kneel" },
    { id: "p2", name: "Minh Trí", robe: "#78716c", pos: [2.5, 0, 4.0], action: "pray" },
    { id: "p3", name: "Tuệ An", robe: "#d97706", pos: [-1.2, 0, -1.5], action: "kneel" },
    { id: "p4", name: "Thiện Nhân", robe: "#3b82f6", pos: [1.6, 0, -1.8], action: "kneel" },
    { id: "p5", name: "Chân Tuệ", robe: "#78716c", pos: [10.5, 0, 2.5], action: "pray" },
    { id: "p6", name: "Diệu Hoa", robe: "#ec4899", pos: [11.8, 0, -1.5], action: "idle" },
    { id: "p7", name: "An Nhiên", robe: "#3b82f6", pos: [-8.5, 0, 1.2], action: "pray" },
  ]);

  // Update target camera position when zone changes
  useEffect(() => {
    const zone = TEMPLE_ZONES.find((z) => z.id === currentZone);
    if (zone) {
      targetCamPos.current.set(...zone.cameraPos);
      targetCamLook.current.set(...zone.cameraTarget);
      orbitAngle.current = { yaw: 0, pitch: 0 };
    }
  }, [currentZone]);

  // Build the 3D Temple Scene
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background fog for infinite mystical depth
    scene.fog = new THREE.FogExp2(0x1a120b, 0.015);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.set(0, 3, 10);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const hemiLight = new THREE.HemisphereLight(0xffecd2, 0x24180d, 0.6);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const sunLight = new THREE.DirectionalLight(0xfff1dc, 1.2);
    sunLight.position.set(20, 35, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 100;
    sunLight.shadow.camera.left = -25;
    sunLight.shadow.camera.right = 25;
    sunLight.shadow.camera.top = 25;
    sunLight.shadow.camera.bottom = -25;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Warm sanctuary golden light from Buddha statue
    const buddhaLight = new THREE.PointLight(0xffb703, 2.5, 18, 1.2);
    buddhaLight.position.set(0, 4.5, -6);
    scene.add(buddhaLight);
    pointLightsRef.current.push(buddhaLight);

    // Candle lights on altar
    const candleL = new THREE.PointLight(0xff8811, 1.2, 8, 1.5);
    candleL.position.set(-1.8, 2.3, -4);
    scene.add(candleL);
    pointLightsRef.current.push(candleL);

    const candleR = new THREE.PointLight(0xff8811, 1.2, 8, 1.5);
    candleR.position.set(1.8, 2.3, -4);
    scene.add(candleR);
    pointLightsRef.current.push(candleR);

    // Pond lantern ambient light
    const pondLight = new THREE.PointLight(0xf43f5e, 1.5, 15, 1.2);
    pondLight.position.set(11, 1.5, 1);
    scene.add(pondLight);
    pointLightsRef.current.push(pondLight);

    // -------------------------------------------------------------
    // BUILD TEMPLE ARCHITECTURE
    // -------------------------------------------------------------

    // A. Courtyard Ground (Gạch Bát Tràng cổ kính)
    const groundGeo = new THREE.PlaneGeometry(60, 60, 32, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x3d2b1f,
      roughness: 0.88,
      metalness: 0.08,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Pathway of smooth polished flagstones
    const pathGeo = new THREE.PlaneGeometry(3.6, 28);
    const pathMat = new THREE.MeshStandardMaterial({
      color: 0x5a4638,
      roughness: 0.7,
      metalness: 0.1,
    });
    const path = new THREE.Mesh(pathGeo, pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.02, 6);
    path.receiveShadow = true;
    scene.add(path);

    // B. Chánh Điện (Đại Hùng Bảo Điện) Foundation & Sanctuary
    const hallGroup = new THREE.Group();
    hallGroup.position.set(0, 0, -8);

    // Stone base platform (Nền đá tam cấp)
    const baseGeo = new THREE.BoxGeometry(16, 1.0, 14);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x47392d, roughness: 0.9 });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = 0.5;
    baseMesh.receiveShadow = true;
    hallGroup.add(baseMesh);

    // Sanctuary Floor
    const floorGeo = new THREE.BoxGeometry(14.8, 0.2, 12.8);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x5c321d, roughness: 0.4 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = 1.05;
    floorMesh.receiveShadow = true;
    hallGroup.add(floorMesh);

    // Front stone stairs (Bậc tam cấp)
    for (let s = 0; s < 3; s++) {
      const stepGeo = new THREE.BoxGeometry(6, 0.35, 1.0);
      const stepMesh = new THREE.Mesh(stepGeo, baseMat);
      stepMesh.position.set(0, 0.18 + s * 0.35, 7.3 - s * 0.9);
      stepMesh.receiveShadow = true;
      hallGroup.add(stepMesh);
    }

    // Wooden Pillars (8 cột gỗ lim trầm)
    const pillarGeo = new THREE.CylinderGeometry(0.38, 0.42, 6.2, 16);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x3d1f11, roughness: 0.65 });

    const pillarCoords = [
      [-6.5, 0], [-2.5, 0], [2.5, 0], [6.5, 0],
      [-6.5, 5.5], [-2.5, 5.5], [2.5, 5.5], [6.5, 5.5],
      [-6.5, -5.5], [-2.5, -5.5], [2.5, -5.5], [6.5, -5.5],
    ];

    pillarCoords.forEach(([px, pz]) => {
      const col = new THREE.Mesh(pillarGeo, pillarMat);
      col.position.set(px, 4.1, pz);
      col.castShadow = true;
      col.receiveShadow = true;
      hallGroup.add(col);
    });

    // Back & Side walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x6e472e, roughness: 0.8 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(14.5, 5.5, 0.3), wallMat);
    backWall.position.set(0, 3.8, -5.8);
    hallGroup.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.5, 11.5), wallMat);
    leftWall.position.set(-6.8, 3.8, 0);
    hallGroup.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.5, 11.5), wallMat);
    rightWall.position.set(6.8, 3.8, 0);
    hallGroup.add(rightWall);

    // Double Tiered Curved Roof (Mái ngói cong đầu đao)
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x8b2512, roughness: 0.6 });

    // Lower Roof Tier
    const lowerRoof = new THREE.Mesh(new THREE.ConeGeometry(12, 3.2, 4), roofMat);
    lowerRoof.rotation.y = Math.PI / 4;
    lowerRoof.position.set(0, 7.8, 0);
    lowerRoof.scale.set(1.4, 0.6, 1.2);
    lowerRoof.castShadow = true;
    hallGroup.add(lowerRoof);

    // Upper Roof Tier
    const upperRoof = new THREE.Mesh(new THREE.ConeGeometry(9.5, 3.6, 4), roofMat);
    upperRoof.rotation.y = Math.PI / 4;
    upperRoof.position.set(0, 9.8, 0);
    upperRoof.scale.set(1.2, 0.65, 1.1);
    upperRoof.castShadow = true;
    hallGroup.add(upperRoof);

    // Golden Roof Ridge Ornament (Kim Đỉnh Chùa)
    const ridgeGeo = new THREE.SphereGeometry(0.45, 16, 16);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.25,
    });
    const ridgeMesh = new THREE.Mesh(ridgeGeo, goldMat);
    ridgeMesh.position.set(0, 11.2, 0);
    hallGroup.add(ridgeMesh);

    // Hoành Phi Câu Đối: "ĐẠI HÙNG BẢO ĐIỆN" Plaque
    const plaqueGeo = new THREE.BoxGeometry(4.2, 1.1, 0.15);
    const plaqueMat = new THREE.MeshStandardMaterial({ color: 0x781408, roughness: 0.5 });
    const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
    plaque.position.set(0, 6.2, 6.0);
    hallGroup.add(plaque);

    // Golden trim on plaque
    const plaqueTrim = new THREE.Mesh(new THREE.BoxGeometry(4.35, 1.25, 0.08), goldMat);
    plaqueTrim.position.set(0, 6.2, 5.95);
    hallGroup.add(plaqueTrim);

    // C. TƯỢNG PHẬT THÍCH CA HOÀNG KIM (Golden Buddha Statue)
    const buddhaGroup = new THREE.Group();
    buddhaGroup.position.set(0, 2.2, 1.5);

    // Altar Table (Bàn Tam Bảo)
    const altarGeo = new THREE.BoxGeometry(5.2, 1.3, 2.5);
    const altarMat = new THREE.MeshStandardMaterial({ color: 0x451a08, roughness: 0.4 });
    const altar = new THREE.Mesh(altarGeo, altarMat);
    altar.position.set(0, 0.65, 0);
    altar.castShadow = true;
    altar.receiveShadow = true;
    buddhaGroup.add(altar);

    // Red Altar Cloth (Khăn trải gấm đỏ viền vàng)
    const clothGeo = new THREE.BoxGeometry(5.24, 0.6, 2.54);
    const clothMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.7 });
    const cloth = new THREE.Mesh(clothGeo, clothMat);
    cloth.position.set(0, 1.0, 0);
    buddhaGroup.add(cloth);

    // Lotus Pedestal (Tòa Sen Tinh Xảo)
    const lotusBaseGeo = new THREE.CylinderGeometry(1.5, 1.7, 0.6, 16);
    const lotusPetalMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.85,
      roughness: 0.3,
    });
    const lotusBase = new THREE.Mesh(lotusBaseGeo, lotusPetalMat);
    lotusBase.position.set(0, 1.6, 0);
    buddhaGroup.add(lotusBase);

    // Buddha Body (Thân Đức Phật Tọa Thiền)
    // Legs crossed
    const legsGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.5, 16);
    const legs = new THREE.Mesh(legsGeo, lotusPetalMat);
    legs.position.set(0, 2.05, 0);
    buddhaGroup.add(legs);

    // Torso (Áo cà sa hoàng kim)
    const torsoGeo = new THREE.CylinderGeometry(0.75, 1.0, 1.4, 16);
    const torso = new THREE.Mesh(torsoGeo, lotusPetalMat);
    torso.position.set(0, 2.85, 0);
    torso.castShadow = true;
    buddhaGroup.add(torso);

    // Head & Ushnisha (Nhục kế)
    const headGeo = new THREE.SphereGeometry(0.52, 20, 20);
    const head = new THREE.Mesh(headGeo, lotusPetalMat);
    head.position.set(0, 3.85, 0);
    buddhaGroup.add(head);

    const ushnishaGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const ushnisha = new THREE.Mesh(ushnishaGeo, lotusPetalMat);
    ushnisha.position.set(0, 4.38, 0);
    buddhaGroup.add(ushnisha);

    // Buddha Radiant Halo (Vầng Hào Quang Phát Sáng Rực Rỡ)
    const haloGeo = new THREE.RingGeometry(0.8, 1.7, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffe066,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.position.set(0, 3.85, -0.2);
    buddhaGroup.add(halo);
    buddhaHaloRef.current = halo;

    // Twin Candles on Altar
    const candleStickGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.6, 12);
    const candleMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8 });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });

    [-1.6, 1.6].forEach((cx) => {
      const stand = new THREE.Mesh(candleStickGeo, candleMat);
      stand.position.set(cx, 1.6, 0.8);
      buddhaGroup.add(stand);

      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), flameMat);
      flame.scale.set(1, 2, 1);
      flame.position.set(cx, 1.95, 0.8);
      buddhaGroup.add(flame);
    });

    hallGroup.add(buddhaGroup);
    scene.add(hallGroup);

    // D. LƯ HƯƠNG ĐỒNG CỔ Ở SÂN CHÙA (Courtyard Incense Burner)
    const burnerGroup = new THREE.Group();
    burnerGroup.position.set(0, 0, 2.5);

    // Tripod stone pedestal
    const burnerPedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.35, 16), baseMat);
    burnerPedestal.position.y = 0.17;
    burnerPedestal.receiveShadow = true;
    burnerGroup.add(burnerPedestal);

    // Bronze incense vessel
    const vesselMat = new THREE.MeshStandardMaterial({
      color: 0x3d3228,
      metalness: 0.75,
      roughness: 0.45,
    });
    const vessel = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.7, 1.1, 16), vesselMat);
    vessel.position.y = 0.95;
    vessel.castShadow = true;
    burnerGroup.add(vessel);

    // Incense ash surface
    const ash = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.05, 16), new THREE.MeshStandardMaterial({ color: 0x8a847e }));
    ash.position.y = 1.48;
    burnerGroup.add(ash);

    // Burning Incense Sticks (Nén hương trầm bốc khói)
    const stickMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c });
    const stickTipMat = new THREE.MeshBasicMaterial({ color: 0xff3b30 });

    const stickOffsets = [
      [0, 0], [-0.15, 0.1], [0.15, 0.08], [-0.25, -0.1], [0.25, -0.05],
    ];

    stickOffsets.forEach(([sx, sz]) => {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 8), stickMat);
      stick.position.set(sx, 1.85, sz);
      burnerGroup.add(stick);

      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), stickTipMat);
      tip.position.set(sx, 2.26, sz);
      burnerGroup.add(tip);
    });

    // Animated Incense Smoke Particle System (Khói trầm nghi ngút)
    const smokeCount = 85;
    const smokeGeo = new THREE.BufferGeometry();
    const smokePositions = new Float32Array(smokeCount * 3);
    for (let i = 0; i < smokeCount; i++) {
      smokePositions[i * 3] = (Math.random() - 0.5) * 0.4;
      smokePositions[i * 3 + 1] = 2.3 + Math.random() * 3.5;
      smokePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    }
    smokeGeo.setAttribute("position", new THREE.BufferAttribute(smokePositions, 3));
    const smokeMat = new THREE.PointsMaterial({
      color: 0xddd6ce,
      size: 0.18,
      transparent: true,
      opacity: 0.45,
    });
    const smokePoints = new THREE.Points(smokeGeo, smokeMat);
    burnerGroup.add(smokePoints);
    incenseSmokeRef.current = smokePoints;

    scene.add(burnerGroup);

    // E. HỒ SEN ÁNH TRĂNG & CẦU KIỀU (Lotus Pond & Moon Bridge)
    const pondGroup = new THREE.Group();
    pondGroup.position.set(13, 0, 1);

    // Water Surface (Mặt nước hồ sen tĩnh lặng óng ánh)
    const waterGeo = new THREE.CircleGeometry(6.5, 32);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0f2a3a,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.92,
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.08;
    water.receiveShadow = true;
    pondGroup.add(water);

    // Pond Stone Rim (Bờ đá hồ sen)
    const rimGeo = new THREE.RingGeometry(6.4, 7.2, 32);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x4a3b30, roughness: 0.9 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = -Math.PI / 2;
    rim.position.y = 0.09;
    pondGroup.add(rim);

    // Lotus pads & flowers (Lá sen & hoa sen nở)
    const padGeo = new THREE.CircleGeometry(0.55, 16);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
    const lotusMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.4 });

    for (let l = 0; l < 18; l++) {
      const angle = (l / 18) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 1.2 + Math.random() * 4.6;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;

      const pad = new THREE.Mesh(padGeo, padMat);
      pad.rotation.x = -Math.PI / 2;
      pad.position.set(lx, 0.1, lz);
      pad.scale.setScalar(0.7 + Math.random() * 0.5);
      pondGroup.add(pad);

      // Blossom
      if (l % 2 === 0) {
        const flower = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.35, 8), lotusMat);
        flower.position.set(lx, 0.28, lz);
        pondGroup.add(flower);
      }
    }

    // Group for Floating Lanterns (Hoa đăng thả nước)
    const lanternsGroup = new THREE.Group();
    lanternsGroup.position.set(13, 0, 1);
    scene.add(lanternsGroup);
    lanternsGroupRef.current = lanternsGroup;

    scene.add(pondGroup);

    // F. THÁP CHUÔNG ĐẠI HỒNG (Bell Tower Pavilion)
    const towerGroup = new THREE.Group();
    towerGroup.position.set(-13, 0, 1);

    // 4 Columns
    for (let bx of [-2, 2]) {
      for (let bz of [-2, 2]) {
        const tPillar = new THREE.Mesh(pillarGeo, pillarMat);
        tPillar.position.set(bx, 3.1, bz);
        tPillar.scale.set(0.8, 1, 0.8);
        towerGroup.add(tPillar);
      }
    }

    // Tower Roof
    const tRoof = new THREE.Mesh(new THREE.ConeGeometry(4.5, 2.5, 4), roofMat);
    tRoof.rotation.y = Math.PI / 4;
    tRoof.position.set(0, 6.8, 0);
    towerGroup.add(tRoof);

    // Great Bronze Bell (Đại Hồng Chung)
    const bellGroup = new THREE.Group();
    bellGroup.position.set(0, 3.8, 0);

    const bellGeo = new THREE.CylinderGeometry(0.65, 0.95, 1.8, 16);
    const bellMat = new THREE.MeshStandardMaterial({
      color: 0x6e451e,
      metalness: 0.85,
      roughness: 0.35,
    });
    const bell = new THREE.Mesh(bellGeo, bellMat);
    bell.castShadow = true;
    bellGroup.add(bell);

    // Wooden striker log (Dùi gõ chuông)
    const striker = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.6, 12), pillarMat);
    striker.rotation.z = Math.PI / 2;
    striker.position.set(1.1, -0.4, 0);
    bellGroup.add(striker);

    towerGroup.add(bellGroup);
    bellMeshRef.current = bellGroup;

    scene.add(towerGroup);

    // G. CỔNG TAM QUAN (Trigram Temple Gate)
    const gateGroup = new THREE.Group();
    gateGroup.position.set(0, 0, 18);

    // 4 Tall Gate Pillars
    const gatePillarGeo = new THREE.CylinderGeometry(0.42, 0.48, 7.5, 16);
    [-4.5, -1.8, 1.8, 4.5].forEach((gx) => {
      const gCol = new THREE.Mesh(gatePillarGeo, pillarMat);
      gCol.position.set(gx, 3.75, 0);
      gateGroup.add(gCol);
    });

    // Gate Roof
    const gRoof = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.8, 2.6), roofMat);
    gRoof.position.set(0, 7.8, 0);
    gateGroup.add(gRoof);

    const gUpperRoof = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.8, 2.8), roofMat);
    gUpperRoof.position.set(0, 9.2, 0);
    gateGroup.add(gUpperRoof);

    // Plaque "AN DUYÊN TỰ"
    const gPlaque = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.9, 0.1), plaqueMat);
    gPlaque.position.set(0, 8.5, 1.35);
    gateGroup.add(gPlaque);

    scene.add(gateGroup);

    // H. CÂY BỒ ĐỀ LINH THIÊNG (Sacred Bodhi Tree)
    const treeGroup = new THREE.Group();
    treeGroup.position.set(-6.5, 0, 8.5);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.9, 4.5, 12),
      new THREE.MeshStandardMaterial({ color: 0x3d2719, roughness: 0.9 })
    );
    trunk.position.y = 2.25;
    treeGroup.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x22543d,
      roughness: 0.75,
    });
    const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4), foliageMat);
    f1.position.set(0, 5.0, 0);
    treeGroup.add(f1);

    const f2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.8), foliageMat);
    f2.position.set(1.4, 5.6, 0.8);
    treeGroup.add(f2);

    const f3 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.7), foliageMat);
    f3.position.set(-1.2, 4.8, -0.9);
    treeGroup.add(f3);

    scene.add(treeGroup);

    // -------------------------------------------------------------
    // RENDER PEER AVATARS (Thiện nam tín nữ đang viếng chùa)
    // -------------------------------------------------------------
    peers.forEach((peer) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(...peer.pos);

      // Body (Áo lam / áo tràng)
      const robeColor = new THREE.Color(peer.robe);
      const robeMat = new THREE.MeshStandardMaterial({ color: robeColor, roughness: 0.6 });
      const pBody = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 1.2, 12), robeMat);
      pBody.position.y = 0.6;
      pGroup.add(pBody);

      // Head
      const pHead = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshStandardMaterial({ color: 0xffdbac }));
      pHead.position.y = 1.35;
      pGroup.add(pHead);

      // Hands clasped in prayer (Chắp tay niệm Phật)
      const pHand = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.22), new THREE.MeshStandardMaterial({ color: 0xffdbac }));
      pHand.position.set(0, 0.82, 0.28);
      pGroup.add(pHand);

      scene.add(pGroup);
      peerMeshesRef.current.set(peer.id, pGroup);
    });

    // -------------------------------------------------------------
    // MOUSE DRAG / TOUCH INTERACTION (Look around freely)
    // -------------------------------------------------------------
    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      prevPointer.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - prevPointer.current.x;
      const dy = e.clientY - prevPointer.current.y;
      prevPointer.current = { x: e.clientX, y: e.clientY };

      orbitAngle.current.yaw -= dx * 0.004;
      orbitAngle.current.pitch = Math.max(-0.5, Math.min(0.5, orbitAngle.current.pitch - dy * 0.003));
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Click on 3D objects with Raycaster
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let obj: THREE.Object3D | null = intersects[0].object;
        while (obj && obj !== scene) {
          if (obj === hallGroup || obj === buddhaGroup) {
            onZoneClick?.("hall");
            return;
          }
          if (obj === burnerGroup) {
            onZoneClick?.("yard");
            onObjectClick?.("thaphuong");
            return;
          }
          if (obj === pondGroup || obj === lanternsGroup) {
            onZoneClick?.("pond");
            onObjectClick?.("thahoadang");
            return;
          }
          if (obj === towerGroup || obj === bellGroup) {
            onZoneClick?.("belltower");
            onObjectClick?.("thinhchuong");
            return;
          }
          if (obj === gateGroup) {
            onZoneClick?.("gate");
            return;
          }
          obj = obj.parent;
        }
      }
    };

    container.addEventListener("click", onClick);

    // Resize handler
    const onResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // -------------------------------------------------------------
    // ANIMATION LOOP
    // -------------------------------------------------------------
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // 1. Smooth Camera Transition towards target position
      camera.position.lerp(targetCamPos.current, 0.04);

      // Add user orbit angle to look-at
      const lookOffset = new THREE.Vector3(
        Math.sin(orbitAngle.current.yaw) * 4,
        orbitAngle.current.pitch * 3,
        -Math.cos(orbitAngle.current.yaw) * 4
      );
      const desiredLook = targetCamLook.current.clone().add(lookOffset);
      currentCamLook.current.lerp(desiredLook, 0.05);
      camera.lookAt(currentCamLook.current);

      // 2. Animate Buddha Halo Glow
      if (buddhaHaloRef.current) {
        const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
        buddhaHaloRef.current.scale.set(pulse, pulse, 1);
      }

      // 3. Animate Incense Smoke rising
      if (incenseSmokeRef.current) {
        const positions = incenseSmokeRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < smokeCount; i++) {
          positions[i * 3 + 1] += 0.015; // rise up
          positions[i * 3] += Math.sin(elapsedTime + i) * 0.003;
          if (positions[i * 3 + 1] > 6.0) {
            positions[i * 3 + 1] = 2.3;
            positions[i * 3] = (Math.random() - 0.5) * 0.3;
          }
        }
        incenseSmokeRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // 4. Subtle Peer Avatars breathing / praying
      peerMeshesRef.current.forEach((mesh, id) => {
        const subtleBreath = Math.sin(elapsedTime * 1.5 + Number(id.replace("p", ""))) * 0.02;
        mesh.position.y = subtleBreath;
      });

      // 5. Candle lights flicker
      candleL.intensity = 1.0 + Math.sin(elapsedTime * 8) * 0.2 + Math.random() * 0.1;
      candleR.intensity = 1.0 + Math.cos(elapsedTime * 7) * 0.2 + Math.random() * 0.1;

      // 6. Floating lanterns in lake gentle drift
      if (lanternsGroupRef.current) {
        lanternsGroupRef.current.children.forEach((child, idx) => {
          child.position.x += Math.sin(elapsedTime * 0.5 + idx) * 0.002;
          child.position.z += Math.cos(elapsedTime * 0.5 + idx) * 0.002;
          child.rotation.y = Math.sin(elapsedTime * 0.3 + idx) * 0.1;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("click", onClick);
      renderer.dispose();
    };
  }, []);

  // Update Daylight / Night Cycle
  useEffect(() => {
    if (!sunLightRef.current || !hemiLightRef.current || !sceneRef.current) return;

    // Time of day logic (0 to 24h)
    // 6-8: dawn (bình minh), 9-16: day (ngày), 17-19: sunset (hoàng hôn), 20-5: night (đêm)
    let isNight = timeOfDay < 6 || timeOfDay >= 19;
    let isTwilight = (timeOfDay >= 5 && timeOfDay < 7) || (timeOfDay >= 17 && timeOfDay < 19);

    if (isNight) {
      sceneRef.current.fog?.color.setHex(0x0e0906);
      hemiLightRef.current.color.setHex(0x382a4d);
      hemiLightRef.current.groundColor.setHex(0x160f0a);
      hemiLightRef.current.intensity = 0.4;
      sunLightRef.current.color.setHex(0x7c8ba1);
      sunLightRef.current.intensity = 0.35;
      sunLightRef.current.position.set(-15, 25, -20);
    } else if (isTwilight) {
      sceneRef.current.fog?.color.setHex(0x2d1810);
      hemiLightRef.current.color.setHex(0xff7744);
      hemiLightRef.current.groundColor.setHex(0x2b1509);
      hemiLightRef.current.intensity = 0.65;
      sunLightRef.current.color.setHex(0xff9944);
      sunLightRef.current.intensity = 0.9;
      sunLightRef.current.position.set(25, 12, 15);
    } else {
      sceneRef.current.fog?.color.setHex(0x1a120b);
      hemiLightRef.current.color.setHex(0xffecd2);
      hemiLightRef.current.groundColor.setHex(0x24180d);
      hemiLightRef.current.intensity = 0.8;
      sunLightRef.current.color.setHex(0xfff5ea);
      sunLightRef.current.intensity = 1.35;
      sunLightRef.current.position.set(20, 35, 20);
    }
  }, [timeOfDay]);

  // Synchronize 3D Floating Lanterns from state
  useEffect(() => {
    if (!lanternsGroupRef.current) return;
    const group = lanternsGroupRef.current;
    group.clear();

    const petalMat = new THREE.MeshStandardMaterial({ roughness: 0.3 });
    const candleGlow = new THREE.MeshBasicMaterial({ color: 0xffaa22 });

    lanterns.forEach((lan, idx) => {
      const lanGroup = new THREE.Group();
      const angle = (idx / Math.max(lanterns.length, 1)) * Math.PI * 2 + idx * 0.4;
      const radius = 1.5 + (idx % 4) * 0.9;
      lanGroup.position.set(Math.cos(angle) * radius, 0.12, Math.sin(angle) * radius);

      // Lotus petals
      const flower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.1, 0.22, 8),
        new THREE.MeshStandardMaterial({ color: lan.color || 0xf43f5e, roughness: 0.4 })
      );
      lanGroup.add(flower);

      // Candle in center
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8), candleGlow);
      candle.position.y = 0.15;
      lanGroup.add(candle);

      // Tiny point light for each lantern
      const pLight = new THREE.PointLight(0xffaa33, 0.6, 3);
      pLight.position.y = 0.25;
      lanGroup.add(pLight);

      group.add(lanGroup);
    });
  }, [lanterns]);

  // Handle bell swing animation when sound is rung
  const ringBell3D = () => {
    if (!bellMeshRef.current) return;
    const bell = bellMeshRef.current;
    let t = 0;
    const interval = setInterval(() => {
      t += 0.1;
      bell.rotation.z = Math.sin(t * 8) * Math.exp(-t * 0.6) * 0.25;
      if (t > 4) {
        bell.rotation.z = 0;
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="relative w-full h-full select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

