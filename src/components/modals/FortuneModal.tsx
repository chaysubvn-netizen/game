"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { sound } from "@/lib/soundEngine";
import { FORTUNES, Fortune } from "@/lib/fortuneData";
import { Sparkles, RotateCw, Share2, BookOpen } from "lucide-react";

interface FortuneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMerit: (amount: number, reason: string) => void;
}

export default function FortuneModal({ isOpen, onClose, onAddMerit }: FortuneModalProps) {
  const [isShaking, setIsShaking] = useState(false);
  const [resultFortune, setResultFortune] = useState<Fortune | null>(null);

  const handleShake = () => {
    setIsShaking(true);
    setResultFortune(null);

    // Play shaking sounds
    let shakes = 0;
    const interval = setInterval(() => {
      sound.playShakeTube();
      shakes++;
      if (shakes > 6) {
        clearInterval(interval);
        setIsShaking(false);
        // Pick random fortune
        const picked = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
        setResultFortune(picked);
        sound.playFortuneDrop();
        onAddMerit(5, `Gieo được ${picked.title}`);
      }
    }, 220);
  };

  const handleReset = () => {
    setResultFortune(null);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Xin Xăm Quan Âm Cầu Duyên & Cầu An"
      subtitle="Chắp tay thành tâm, lắc ống xăm cầu điềm lành chỉ lối"
      maxWidth="max-w-md"
    >
      <div className="flex flex-col items-center">
        {!resultFortune ? (
          <div className="py-6 flex flex-col items-center text-center space-y-6">
            {/* Bamboo Tube Graphics */}
            <div className="relative">
              {/* Shaking Tube Container */}
              <div
                className={`w-28 h-44 rounded-b-2xl rounded-t-lg bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 border-2 border-amber-500/60 shadow-2xl relative flex flex-col items-center justify-start pt-3 overflow-visible ${
                  isShaking ? "animate-shake-tube" : ""
                }`}
              >
                {/* Bamboo sticks sticking out */}
                <div className="absolute -top-7 flex gap-1 items-end">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-t-sm bg-gradient-to-t from-amber-300 to-amber-100 border border-amber-700/60 shadow"
                      style={{
                        height: `${32 + (i % 3) * 6}px`,
                        transform: `rotate(${(i - 2.5) * 4}deg)`,
                      }}
                    />
                  ))}
                </div>

                {/* Tube Label */}
                <div className="mt-8 px-2 py-1 bg-amber-950/80 border border-amber-600/40 rounded text-[11px] font-serif text-amber-300 font-bold tracking-widest">
                  QUẺ QUAN ÂM
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-serif text-amber-200">
                {isShaking ? "Đang lắc ống xăm thành tâm..." : "Tâm thành tất ứng, nguyện thiện tất toại"}
              </p>
              <p className="text-xs text-stone-400">
                Hãy tĩnh lặng tâm hồn trước khi gieo quẻ
              </p>
            </div>

            {/* Shake Button */}
            <button
              onClick={handleShake}
              disabled={isShaking}
              className={`w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-serif font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform ${
                isShaking ? "opacity-75 cursor-not-allowed" : "hover:brightness-110 active:scale-98"
              }`}
            >
              <Sparkles size={17} />
              {isShaking ? "Đang gieo quẻ..." : "Lắc Ống Xăm"}
            </button>
          </div>
        ) : (
          /* Result Fortune Card */
          <div className="w-full space-y-4 animate-in zoom-in-95 duration-300 py-1">
            {/* Header Badge */}
            <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border border-amber-600/50 rounded-2xl p-4 text-center space-y-1">
              <div className="inline-block px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-semibold border border-amber-500/40 mb-1">
                {resultFortune.rank} · {resultFortune.category}
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-100">
                {resultFortune.title}
              </h3>
            </div>

            {/* Poem */}
            <div className="bg-stone-900/60 border border-amber-900/40 rounded-2xl p-4 text-center">
              <div className="text-xs text-amber-400/80 uppercase tracking-widest font-serif mb-2 font-semibold">
                — Thơ Thần Quẻ —
              </div>
              <div className="font-serif text-base text-amber-200 italic space-y-1 leading-relaxed">
                {resultFortune.poem.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            {/* Explanations */}
            <div className="bg-stone-950/60 border border-amber-900/30 rounded-2xl p-4 space-y-3 text-xs leading-relaxed">
              <div>
                <b className="text-amber-300 block mb-0.5">🌟 Luận giải chung:</b>
                <span className="text-stone-300">{resultFortune.meaning}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-amber-900/20">
                <div>
                  <b className="text-amber-400 block mb-0.5">💼 Công danh:</b>
                  <span className="text-stone-300">{resultFortune.career}</span>
                </div>
                <div>
                  <b className="text-rose-400 block mb-0.5">❤️ Tình duyên:</b>
                  <span className="text-stone-300">{resultFortune.love}</span>
                </div>
              </div>
              <div className="pt-1 border-t border-amber-900/20">
                <b className="text-emerald-400 block mb-0.5">🌿 Sức khỏe:</b>
                <span className="text-stone-300">{resultFortune.health}</span>
              </div>
              <div className="pt-1 border-t border-amber-900/20 bg-amber-950/20 p-2 rounded-lg">
                <b className="text-amber-300 block mb-0.5">📿 Lời khuyên tu tập:</b>
                <span className="text-amber-100 italic">{resultFortune.advice}</span>
              </div>
            </div>

            {/* Reset / Actions */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-amber-900/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCw size={13} />
                Gieo Quẻ Khác
              </button>
              <button
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(
                      `${resultFortune.title} - ${resultFortune.rank}\n${resultFortune.poem.join(
                        "\n"
                      )}\nLên chùa cùng mình tại didenchua.online`
                    );
                    alert("Đã sao chép lời quẻ!");
                  }
                }}
                className="flex-1 py-2.5 rounded-xl bg-amber-700/80 hover:bg-amber-600 text-amber-100 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <Share2 size={13} />
                Lưu / Sao Chép Quẻ
              </button>
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}

