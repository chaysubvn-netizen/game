"use client";

import React from "react";
import { Sparkles, MessageCircle, Map, Trophy } from "lucide-react";

interface ActionBarProps {
  onOpenBeads: () => void;
  onBow: () => void;
  onIncense: () => void;
  onOpenMoBell: () => void;
  onOpenLantern: () => void;
  onOpenFortune: () => void;
  onOpenDonation: () => void;
  onOpenChat: () => void;
  onOpenMap: () => void;
  onOpenMerit: () => void;
  isBowing: boolean;
}

export default function ActionBar({
  onOpenBeads,
  onBow,
  onIncense,
  onOpenMoBell,
  onOpenLantern,
  onOpenFortune,
  onOpenDonation,
  onOpenChat,
  onOpenMap,
  onOpenMerit,
  isBowing,
}: ActionBarProps) {
  return (
    <div className="fixed bottom-3 inset-x-0 z-30 flex flex-col items-center pointer-events-none px-2 sm:px-4">
      {/* Primary Actions Bar */}
      <div className="pointer-events-auto zen-glass rounded-2xl sm:rounded-full px-2 py-1.5 flex items-center gap-1 sm:gap-2 shadow-2xl border border-amber-500/30 max-w-full overflow-x-auto scrollbar-none">
        {/* 1. Tràng hạt */}
        <button
          onClick={onOpenBeads}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Tràng hạt niệm Phật"
        >
          <span className="text-xl">📿</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Tràng hạt</span>
        </button>

        {/* 2. Lạy Phật */}
        <button
          onClick={onBow}
          disabled={isBowing}
          className={`flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full text-amber-200 transition-transform active:scale-90 ${
            isBowing ? "bg-amber-700/60 ring-2 ring-amber-400" : "hover:bg-amber-900/40"
          }`}
          title="Lạy Phật bái lễ"
        >
          <span className="text-xl">🙏</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Lạy Phật</span>
        </button>

        {/* 3. Thắp hương */}
        <button
          onClick={onIncense}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Thắp nén hương thơm"
        >
          <span className="text-xl">🕯️</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Thắp hương</span>
        </button>

        {/* 4. Gõ Mõ & Chuông */}
        <button
          onClick={onOpenMoBell}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Gõ Mõ & Thỉnh Chuông"
        >
          <span className="text-xl">🪵</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Mõ chuông</span>
        </button>

        {/* 5. Thả hoa đăng */}
        <button
          onClick={onOpenLantern}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Thả hoa đăng cầu an"
        >
          <span className="text-xl">🪷</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Hoa đăng</span>
        </button>

        {/* 6. Xin Xăm */}
        <button
          onClick={onOpenFortune}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Xin Xăm Quan Âm"
        >
          <span className="text-xl">🎋</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Xin xăm</span>
        </button>

        {/* 7. Công đức Tam Bảo */}
        <button
          onClick={onOpenDonation}
          className="flex flex-col items-center justify-center w-12 sm:w-14 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-200 transition-transform active:scale-90"
          title="Hòm công đức"
        >
          <span className="text-xl">🧧</span>
          <span className="text-[10px] font-serif font-medium mt-0.5">Công đức</span>
        </button>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-amber-800/40 mx-0.5 hidden sm:block" />

        {/* 8. Chat */}
        <button
          onClick={onOpenChat}
          className="flex flex-col items-center justify-center w-11 sm:w-12 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-300 transition-transform active:scale-90"
          title="Phòng trò chuyện"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] font-serif font-medium mt-0.5">Trò chuyện</span>
        </button>

        {/* 9. Bản đồ */}
        <button
          onClick={onOpenMap}
          className="flex flex-col items-center justify-center w-11 sm:w-12 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-300 transition-transform active:scale-90"
          title="Bản đồ chùa"
        >
          <Map size={18} />
          <span className="text-[10px] font-serif font-medium mt-0.5">Bản đồ</span>
        </button>

        {/* 10. Bảng Vàng */}
        <button
          onClick={onOpenMerit}
          className="flex flex-col items-center justify-center w-11 sm:w-12 h-12 rounded-xl sm:rounded-full hover:bg-amber-900/40 text-amber-300 transition-transform active:scale-90"
          title="Bia công đức & Hồ sơ"
        >
          <Trophy size={18} />
          <span className="text-[10px] font-serif font-medium mt-0.5">Bia phước</span>
        </button>
      </div>
    </div>
  );
}

