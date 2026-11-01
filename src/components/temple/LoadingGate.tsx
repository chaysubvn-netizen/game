"use client";

import React, { useEffect, useState } from "react";
import { MEDITATIVE_QUOTES } from "@/lib/templeData";

interface LoadingGateProps {
  onEnter: () => void;
}

export default function LoadingGate({ onEnter }: LoadingGateProps) {
  const [quote, setQuote] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Pick random meditative quote
    const q = MEDITATIVE_QUOTES[Math.floor(Math.random() * MEDITATIVE_QUOTES.length)];
    setQuote(q);

    // Simulate opening temple gate
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onEnter(), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onEnter]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#140c06] text-amber-100 p-6 select-none transition-opacity duration-700">
      {/* Background Zen Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      {/* Brand Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-700/60 to-amber-950 border border-amber-500/40 shadow-2xl flex items-center justify-center text-4xl animate-pulse">
          🪷
        </div>
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-widest text-amber-200 mb-2">
        An Duyên
      </h1>
      <p className="text-xs sm:text-sm font-serif text-amber-300/80 tracking-wider uppercase mb-8">
        Lên chùa cầu an · Gặp người có duyên
      </p>

      {/* Loading Progress Bar */}
      <div className="w-64 max-w-full space-y-2 mb-6">
        <div className="flex justify-between text-xs text-amber-400/80 font-serif">
          <span>Đang mở cổng chùa…</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden border border-amber-900/40">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Meditative Quote */}
      <div className="max-w-sm text-center px-4">
        <p className="font-serif italic text-sm text-amber-200/90 leading-relaxed drop-shadow">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Skip button if needed */}
      <button
        onClick={onEnter}
        className="mt-8 text-xs text-stone-500 hover:text-amber-300 transition-colors uppercase tracking-widest"
      >
        Vào ngay
      </button>
    </div>
  );
}

