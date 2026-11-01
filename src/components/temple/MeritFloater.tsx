"use client";

import React from "react";

export interface FloatingItem {
  id: string;
  text: string;
  amount?: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  type?: "merit" | "emote";
}

interface MeritFloaterProps {
  items: FloatingItem[];
}

export default function MeritFloater({ items }: MeritFloaterProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-merit-float font-serif font-bold text-amber-300 drop-shadow-lg flex items-center gap-1 select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        >
          {item.type === "emote" ? (
            <span className="text-3xl filter drop-shadow-md">{item.text}</span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/60 text-amber-200 text-xs sm:text-sm shadow-xl backdrop-blur-sm">
              +{item.amount} Công Đức ✨
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

