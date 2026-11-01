"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { sound } from "@/lib/soundEngine";
import { MANTRA_LIST } from "@/lib/templeData";
import { RotateCw, Check, Sparkles } from "lucide-react";

interface BeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMerit: (amount: number, reason: string) => void;
}

export default function BeadsModal({ isOpen, onClose, onAddMerit }: BeadsModalProps) {
  const [currentBead, setCurrentBead] = useState(1);
  const [totalRounds, setTotalRounds] = useState(0);
  const [mantraIndex, setMantraIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalBeads = 108;
  const currentMantra = MANTRA_LIST[mantraIndex];

  const handleNextBead = () => {
    sound.playBeadClick();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    if (currentBead >= totalBeads) {
      setCurrentBead(1);
      setTotalRounds((prev) => prev + 1);
      sound.playChantBell();
      onAddMerit(10, "Hoàn thành 1 chuỗi 108 hạt niệm Phật");
    } else {
      setCurrentBead((prev) => prev + 1);
      if (currentBead % 10 === 0) {
        onAddMerit(1, "Lần hạt niệm Phật tinh tấn");
      }
    }
  };

  const handleReset = () => {
    setCurrentBead(1);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Chuỗi Tràng Hạt Niệm Phật"
      subtitle="Chạm để lần từng hạt và an trú trong câu niệm Phật"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Mantra Selector */}
        <div className="w-full bg-stone-900/60 p-3 rounded-2xl border border-amber-900/40">
          <label className="text-xs text-amber-300/80 mb-1.5 block">
            Chọn câu niệm Phật
          </label>
          <select
            value={mantraIndex}
            onChange={(e) => setMantraIndex(Number(e.target.value))}
            className="w-full bg-stone-950/80 border border-amber-700/50 rounded-xl px-3 py-2 text-amber-100 font-serif text-sm focus:outline-none focus:border-amber-400"
          >
            {MANTRA_LIST.map((m, idx) => (
              <option key={idx} value={idx}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Big Bead Clickable Area */}
        <div className="relative my-2">
          {/* Animated Glow Rings */}
          <div className="absolute -inset-4 rounded-full bg-amber-500/10 blur-xl animate-pulse" />

          {/* Interactive Wood Bead Wheel */}
          <button
            onClick={handleNextBead}
            className={`relative w-48 h-48 rounded-full bg-gradient-to-br from-amber-700 via-amber-900 to-stone-950 border-4 border-amber-500/50 shadow-2xl flex flex-col items-center justify-center p-4 transition-transform duration-150 active:scale-95 hover:border-amber-400 cursor-pointer ${
              isAnimating ? "scale-98 border-amber-300" : ""
            }`}
          >
            <div className="text-amber-400 font-serif text-xs mb-1 tracking-widest uppercase">
              Hạt số
            </div>
            <div className="text-4xl font-serif font-bold text-amber-100 drop-shadow-md">
              {currentBead}
              <span className="text-base text-amber-400/70 font-normal">
                /{totalBeads}
              </span>
            </div>
            <div className="text-xs text-amber-300/80 mt-2 font-serif italic max-w-[140px] truncate">
              {currentMantra}
            </div>

            <div className="absolute bottom-3 text-[10px] text-amber-400/60 font-sans">
              Chạm để lần hạt
            </div>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-1.5">
          <div className="flex justify-between text-xs text-amber-200/80">
            <span>Tiến độ chuỗi</span>
            <span>{Math.round((currentBead / totalBeads) * 100)}%</span>
          </div>
          <div className="w-full bg-stone-950/80 rounded-full h-2.5 overflow-hidden border border-amber-900/40">
            <div
              className="bg-gradient-to-r from-amber-600 to-amber-400 h-full transition-all duration-200"
              style={{ width: `${(currentBead / totalBeads) * 100}%` }}
            />
          </div>
        </div>

        {/* Stats and Reset */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-amber-900/30 text-xs">
          <div className="flex items-center gap-1.5 text-amber-300">
            <Sparkles size={14} className="text-amber-400" />
            <span>Đã hoàn thành: <b>{totalRounds}</b> chuỗi</span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-stone-400 hover:text-amber-300 transition-colors py-1 px-2.5 rounded-lg bg-stone-900/40 border border-stone-800"
          >
            <RotateCw size={12} />
            Lần lại từ đầu
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

