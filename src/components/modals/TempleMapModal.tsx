"use client";

import React from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { TEMPLE_ZONES } from "@/lib/templeData";
import { MapPin, Compass } from "lucide-react";

interface TempleMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentZone: string;
  onSelectZone: (zoneId: string) => void;
}

export default function TempleMapModal({
  isOpen,
  onClose,
  currentZone,
  onSelectZone,
}: TempleMapModalProps) {
  const handleSelect = (zoneId: string) => {
    onSelectZone(zoneId);
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Bản Đồ Chùa An Duyên"
      subtitle="Chạm vào một khu vực để di chuyển tức thời"
    >
      <div className="space-y-4">
        {/* Visual Map Layout Graphic */}
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-b from-stone-900 to-amber-950/60 border border-amber-800/40 p-3 flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-between text-xs text-amber-300 font-serif">
            <span className="flex items-center gap-1 font-semibold">
              <Compass size={14} className="text-amber-400" />
              Sơ Đồ Tam Bảo
            </span>
            <span className="text-[10px] text-amber-400/70">Hướng Bắc chánh điện</span>
          </div>

          {/* Map Nodes */}
          <div className="relative z-10 grid grid-cols-3 gap-2 text-center my-auto">
            {/* Left: Thap Chuong */}
            <button
              onClick={() => handleSelect("belltower")}
              className={`p-2 rounded-xl text-xs font-serif transition-all ${
                currentZone === "belltower"
                  ? "bg-amber-600 text-stone-950 font-bold shadow-lg ring-2 ring-amber-300"
                  : "bg-stone-900/80 text-amber-200 border border-amber-900/50 hover:bg-stone-800"
              }`}
            >
              🔔 Tháp Chuông
            </button>

            {/* Center: Chanh Dien */}
            <button
              onClick={() => handleSelect("hall")}
              className={`p-2 rounded-xl text-xs font-serif transition-all ${
                currentZone === "hall"
                  ? "bg-amber-600 text-stone-950 font-bold shadow-lg ring-2 ring-amber-300"
                  : "bg-stone-900/80 text-amber-200 border border-amber-900/50 hover:bg-stone-800"
              }`}
            >
              🏛️ Chánh Điện
            </button>

            {/* Right: Ho Sen */}
            <button
              onClick={() => handleSelect("pond")}
              className={`p-2 rounded-xl text-xs font-serif transition-all ${
                currentZone === "pond"
                  ? "bg-amber-600 text-stone-950 font-bold shadow-lg ring-2 ring-amber-300"
                  : "bg-stone-900/80 text-amber-200 border border-amber-900/50 hover:bg-stone-800"
              }`}
            >
              🪷 Hồ Sen
            </button>
          </div>

          {/* Bottom Nodes */}
          <div className="relative z-10 grid grid-cols-2 gap-2 text-center">
            <button
              onClick={() => handleSelect("yard")}
              className={`p-1.5 rounded-xl text-xs font-serif transition-all ${
                currentZone === "yard"
                  ? "bg-amber-600 text-stone-950 font-bold ring-2 ring-amber-300"
                  : "bg-stone-900/80 text-amber-200 border border-amber-900/50 hover:bg-stone-800"
              }`}
            >
              🪵 Sân Chùa
            </button>
            <button
              onClick={() => handleSelect("gate")}
              className={`p-1.5 rounded-xl text-xs font-serif transition-all ${
                currentZone === "gate"
                  ? "bg-amber-600 text-stone-950 font-bold ring-2 ring-amber-300"
                  : "bg-stone-900/80 text-amber-200 border border-amber-900/50 hover:bg-stone-800"
              }`}
            >
              ⛩️ Cổng Tam Quan
            </button>
          </div>
        </div>

        {/* Detailed Zone List */}
        <div className="space-y-2">
          {TEMPLE_ZONES.map((zone) => {
            const isCurrent = zone.id === currentZone;
            return (
              <button
                key={zone.id}
                onClick={() => handleSelect(zone.id)}
                className={`w-full p-3 rounded-2xl text-left border flex items-center justify-between transition-all ${
                  isCurrent
                    ? "bg-amber-950/70 border-amber-500/80 shadow-md ring-1 ring-amber-400/40"
                    : "bg-stone-900/40 border-stone-800/80 hover:bg-amber-950/30 hover:border-amber-800/50"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-semibold text-sm text-amber-100">
                      {zone.name}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 border border-amber-500/40">
                        Đang ở đây
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-400 line-clamp-1">{zone.desc}</p>
                </div>

                <MapPin
                  size={16}
                  className={isCurrent ? "text-amber-400" : "text-stone-500"}
                />
              </button>
            );
          })}
        </div>
      </div>
    </ModalWrapper>
  );
}

