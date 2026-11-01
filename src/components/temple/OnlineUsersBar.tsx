"use client";

import React, { useState } from "react";
import { sound } from "@/lib/soundEngine";
import {
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Sunset,
  Share2,
  Users,
  Copy,
  Check,
  Award,
} from "lucide-react";

interface OnlineUsersBarProps {
  room: string;
  onlineCount: number;
  timeOfDay: number;
  onSetTimeOfDay: (hour: number) => void;
  userMerit: number;
  userName: string;
  onOpenMerit: () => void;
  onChangeRoom: (newRoom: string) => void;
}

export default function OnlineUsersBar({
  room,
  onlineCount,
  timeOfDay,
  onSetTimeOfDay,
  userMerit,
  userName,
  onOpenMerit,
  onChangeRoom,
}: OnlineUsersBarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isRoomPromptOpen, setIsRoomPromptOpen] = useState(false);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playChantBell();
    }
  };

  const cycleTimeOfDay = () => {
    if (timeOfDay >= 6 && timeOfDay < 17) {
      onSetTimeOfDay(18); // Sunset
    } else if (timeOfDay >= 17 && timeOfDay < 20) {
      onSetTimeOfDay(22); // Night
    } else {
      onSetTimeOfDay(10); // Noon Day
    }
    sound.playWindChime();
  };

  const copyRoomLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePromptRoom = () => {
    const entered = prompt("Nhập tên phòng muốn vào (VD: chua-1, chua-2, cau-an):", room);
    if (entered && entered.trim()) {
      onChangeRoom(entered.trim());
    }
  };

  const isNight = timeOfDay < 6 || timeOfDay >= 19;
  const isTwilight = timeOfDay >= 17 && timeOfDay < 19;

  return (
    <header className="fixed top-2 sm:top-3 inset-x-2 sm:inset-x-4 z-30 flex items-center justify-between pointer-events-none">
      {/* Left: Brand & Room Tag */}
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
        <div className="zen-glass rounded-2xl px-3 py-1.5 flex items-center gap-2 border border-amber-600/30 shadow-lg">
          <div className="w-6 h-6 rounded-lg bg-amber-600/30 border border-amber-500/50 flex items-center justify-center text-sm shadow">
            🪷
          </div>
          <div>
            <h1 className="font-serif font-bold text-xs sm:text-sm text-amber-200 tracking-wide leading-tight">
              An Duyên
            </h1>
            <p className="text-[9px] text-amber-400/80 font-serif leading-none">
              Chùa online
            </p>
          </div>
        </div>

        {/* Room badge */}
        <button
          onClick={handlePromptRoom}
          className="zen-glass-pill rounded-full px-2.5 py-1 text-[11px] text-amber-300 font-serif border border-amber-700/40 hover:border-amber-400 transition-colors shadow flex items-center gap-1"
          title="Chạm để đổi phòng viếng chùa"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{room}</span>
        </button>

        {/* Copy Room Link button */}
        <button
          onClick={copyRoomLink}
          className="zen-glass-pill rounded-full p-1.5 text-stone-300 hover:text-amber-200 border border-amber-800/40 shadow transition-colors"
          title="Sao chép liên kết phòng này để rủ bạn bè"
        >
          {copiedLink ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
        </button>
      </div>

      {/* Right: Presence Count, Day/Night toggle, Audio toggle, Merit Profile */}
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
        {/* Live Users Counter */}
        <div className="hidden md:flex zen-glass-pill rounded-full px-2.5 py-1 text-[11px] text-amber-200 items-center gap-1.5 border border-amber-700/30 shadow">
          <Users size={12} className="text-amber-400" />
          <span>{onlineCount} người có duyên</span>
        </div>

        {/* Day / Sunset / Night Switcher */}
        <button
          onClick={cycleTimeOfDay}
          className="zen-glass rounded-xl p-2 text-amber-300 hover:text-amber-100 border border-amber-700/40 shadow transition-transform active:scale-95"
          title={`Thời gian: ${
            isNight ? "Ban đêm" : isTwilight ? "Hoàng hôn" : "Ban ngày"
          } (Chạm để đổi)`}
        >
          {isNight ? (
            <Moon size={15} className="text-indigo-300" />
          ) : isTwilight ? (
            <Sunset size={15} className="text-orange-400" />
          ) : (
            <Sun size={15} className="text-amber-400" />
          )}
        </button>

        {/* Mute/Unmute audio */}
        <button
          onClick={toggleSound}
          className="zen-glass rounded-xl p-2 text-amber-300 hover:text-amber-100 border border-amber-700/40 shadow transition-transform active:scale-95"
          title={isMuted ? "Bật âm thanh chuông mõ" : "Tắt âm thanh"}
        >
          {isMuted ? (
            <VolumeX size={15} className="text-stone-400" />
          ) : (
            <Volume2 size={15} className="text-amber-400" />
          )}
        </button>

        {/* User Merit Pill */}
        <button
          onClick={onOpenMerit}
          className="zen-glass rounded-2xl px-2.5 py-1.5 flex items-center gap-2 border border-amber-500/40 shadow hover:border-amber-400 transition-all active:scale-95"
          title="Xem hồ sơ tu tập & bia công đức"
        >
          <div className="text-left hidden sm:block">
            <div className="text-[11px] font-serif font-semibold text-amber-200 line-clamp-1 max-w-[80px]">
              {userName}
            </div>
            <div className="text-[9px] text-amber-400/80 leading-none">
              {userMerit} công đức
            </div>
          </div>
          <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-xs text-amber-300 font-bold">
            ✨
          </div>
        </button>
      </div>
    </header>
  );
}

