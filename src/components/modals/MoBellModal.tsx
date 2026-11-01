"use client";

import React, { useState, useEffect, useRef } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { sound } from "@/lib/soundEngine";
import { Bell, Play, Pause, Sparkles, Volume2 } from "lucide-react";

interface MoBellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMerit: (amount: number, reason: string) => void;
}

export default function MoBellModal({ isOpen, onClose, onAddMerit }: MoBellModalProps) {
  const [tab, setTab] = useState<"mo" | "bell">("mo");
  const [moCount, setMoCount] = useState(0);
  const [bellCount, setBellCount] = useState(0);
  const [isAutoMo, setIsAutoMo] = useState(false);
  const [bpm, setBpm] = useState(50);
  const [isMoStriking, setIsMoStriking] = useState(false);
  const [isBellStriking, setIsBellStriking] = useState(false);

  const autoMoTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto Mo Loop
  useEffect(() => {
    if (isAutoMo && isOpen && tab === "mo") {
      const intervalMs = (60 / bpm) * 1000;
      autoMoTimer.current = setInterval(() => {
        handleMoStrike();
      }, intervalMs);
    } else {
      if (autoMoTimer.current) clearInterval(autoMoTimer.current);
    }

    return () => {
      if (autoMoTimer.current) clearInterval(autoMoTimer.current);
    };
  }, [isAutoMo, bpm, isOpen, tab]);

  const handleMoStrike = () => {
    sound.playMo();
    setIsMoStriking(true);
    setTimeout(() => setIsMoStriking(false), 120);

    setMoCount((prev) => {
      const next = prev + 1;
      if (next % 10 === 0) {
        onAddMerit(1, "Gõ mõ tụng niệm tinh tấn");
      }
      return next;
    });
  };

  const handleBellStrike = () => {
    sound.playBell(180);
    setIsBellStriking(true);
    setTimeout(() => setIsBellStriking(false), 300);

    setBellCount((prev) => {
      const next = prev + 1;
      onAddMerit(3, "Thỉnh chuông Đại Hồng thức tỉnh");
      return next;
    });
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={() => {
        setIsAutoMo(false);
        onClose();
      }}
      title="Gõ Mõ & Thỉnh Chuông"
      subtitle="Thanh âm thức tỉnh chánh niệm và lắng đọng tâm tư"
    >
      <div className="flex flex-col items-center space-y-5">
        {/* Tab switch */}
        <div className="flex w-full bg-stone-950/70 p-1 rounded-xl border border-amber-900/40">
          <button
            onClick={() => {
              setIsAutoMo(false);
              setTab("mo");
            }}
            className={`flex-1 py-2 rounded-lg font-serif text-sm transition-all ${
              tab === "mo"
                ? "bg-amber-800/80 text-amber-100 shadow font-semibold"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🪵 Mõ Tụng Kinh
          </button>
          <button
            onClick={() => {
              setIsAutoMo(false);
              setTab("bell");
            }}
            className={`flex-1 py-2 rounded-lg font-serif text-sm transition-all ${
              tab === "bell"
                ? "bg-amber-800/80 text-amber-100 shadow font-semibold"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🔔 Đại Hồng Chung
          </button>
        </div>

        {/* Tab 1: Mõ Gỗ */}
        {tab === "mo" && (
          <div className="w-full flex flex-col items-center space-y-5 animate-in fade-in duration-200">
            {/* Interactive Wooden Fish Area */}
            <div className="relative py-2">
              <div
                className={`w-40 h-40 rounded-full bg-gradient-to-br from-amber-800 via-amber-950 to-stone-950 border-4 border-amber-600/50 flex flex-col items-center justify-center p-4 shadow-2xl cursor-pointer transition-transform duration-100 active:scale-95 ${
                  isMoStriking ? "scale-92 border-amber-400 bg-amber-900" : "hover:border-amber-400"
                }`}
                onClick={handleMoStrike}
              >
                <div className="text-4xl mb-1">🪵</div>
                <div className="text-xs font-serif text-amber-200 font-semibold">
                  Gõ Mõ
                </div>
                <div className="text-[10px] text-amber-400/70 mt-1">
                  Chạm để gõ
                </div>
              </div>
            </div>

            <div className="text-sm text-amber-200 font-serif">
              Đã gõ: <b className="text-lg text-amber-400">{moCount}</b> tiếng mõ
            </div>

            {/* Auto Mo Controls */}
            <div className="w-full bg-stone-900/50 p-3.5 rounded-2xl border border-amber-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-200/90 font-medium flex items-center gap-1.5">
                  <Volume2 size={14} className="text-amber-400" />
                  Tự động gõ nhịp thiền định
                </span>
                <button
                  onClick={() => setIsAutoMo(!isAutoMo)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isAutoMo
                      ? "bg-amber-500 text-stone-950"
                      : "bg-amber-900/60 text-amber-200 hover:bg-amber-800"
                  }`}
                >
                  {isAutoMo ? <Pause size={13} /> : <Play size={13} />}
                  {isAutoMo ? "Dừng gõ" : "Tự động gõ"}
                </button>
              </div>

              {isAutoMo && (
                <div className="space-y-1 pt-1 animate-in fade-in">
                  <div className="flex justify-between text-xs text-stone-300">
                    <span>Nhịp gõ: {bpm} nhịp/phút</span>
                    <span>{Math.round((60 / bpm) * 10) / 10}s mỗi nhịp</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    value={bpm}
                    onChange={(e) => setBpm(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Chuông Đại Hồng */}
        {tab === "bell" && (
          <div className="w-full flex flex-col items-center space-y-5 animate-in fade-in duration-200">
            <div className="relative py-2">
              <div
                className={`w-40 h-40 rounded-full bg-gradient-to-br from-amber-600 via-amber-900 to-stone-900 border-4 border-amber-500/60 flex flex-col items-center justify-center p-4 shadow-2xl cursor-pointer transition-transform duration-200 active:scale-95 ${
                  isBellStriking ? "scale-95 border-amber-300 ring-4 ring-amber-400/30" : "hover:border-amber-400"
                }`}
                onClick={handleBellStrike}
              >
                <Bell size={44} className="text-amber-300 mb-1" />
                <div className="text-xs font-serif text-amber-100 font-semibold">
                  Thỉnh Chuông
                </div>
                <div className="text-[10px] text-amber-400/70 mt-1">
                  Chạm để gióng chuông
                </div>
              </div>
            </div>

            <div className="text-sm text-amber-200 font-serif">
              Đã thỉnh: <b className="text-lg text-amber-400">{bellCount}</b> hồi chuông
            </div>

            <div className="w-full bg-stone-900/50 p-3.5 rounded-2xl border border-amber-900/40 text-xs text-amber-200/80 leading-relaxed font-serif text-center italic">
              &ldquo;Nghe tiếng chuông phiền não tan mây khói,
              <br />
              Ý lặng tâm an miệng mỉm cười.&rdquo;
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}

