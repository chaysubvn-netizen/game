"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { MERIT_LEVELS } from "@/lib/templeData";
import { Trophy, Award, Flame, Heart, Share2, Edit3, Check } from "lucide-react";

interface MeritBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: {
    name: string;
    merit: number;
    bows: number;
    beadRounds: number;
    incenseCount: number;
    lanternCount: number;
    streakDays: number;
  };
  onUpdateName: (newName: string) => void;
}

const LEADERBOARD = [
  { rank: 1, name: "Diệu Âm", merit: 1850, level: "Đại Từ Bi", title: "Thượng Tọa" },
  { rank: 2, name: "Thanh Lương", merit: 1420, level: "Tuệ Giác An Nhiên", title: "Cư Sĩ" },
  { rank: 3, name: "Minh Tâm", merit: 1180, level: "Chánh Niệm Tâm", title: "Thiện Tri Thức" },
  { rank: 4, name: "Tuệ Đăng", merit: 890, level: "Bồ Đề Tâm", title: "Phật Tử" },
  { rank: 5, name: "Quang Minh", merit: 640, level: "Tâm Tinh Tấn", title: "Phật Tử" },
];

export default function MeritBoardModal({
  isOpen,
  onClose,
  userProfile,
  onUpdateName,
}: MeritBoardModalProps) {
  const [tab, setTab] = useState<"profile" | "leaderboard">("profile");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(userProfile.name);

  // Determine user rank level
  const currentRank =
    [...MERIT_LEVELS]
      .reverse()
      .find((lvl) => userProfile.merit >= lvl.minMerit) || MERIT_LEVELS[0];

  const nextRank = MERIT_LEVELS.find((lvl) => lvl.minMerit > userProfile.merit);

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
      setIsEditingName(false);
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Bia Công Đức & Hồ Sơ Tu Tập"
      subtitle="Ghi nhận bước đường tinh tấn và huân tu công đức"
    >
      <div className="space-y-4">
        {/* Tab switch */}
        <div className="flex w-full bg-stone-950/70 p-1 rounded-xl border border-amber-900/40">
          <button
            onClick={() => setTab("profile")}
            className={`flex-1 py-1.5 rounded-lg font-serif text-xs transition-all ${
              tab === "profile"
                ? "bg-amber-800/80 text-amber-100 shadow font-semibold"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            📿 Hồ Sơ Cá Nhân
          </button>
          <button
            onClick={() => setTab("leaderboard")}
            className={`flex-1 py-1.5 rounded-lg font-serif text-xs transition-all ${
              tab === "leaderboard"
                ? "bg-amber-800/80 text-amber-100 shadow font-semibold"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🏆 Bảng Vàng Công Đức
          </button>
        </div>

        {tab === "profile" ? (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* User Badge Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/70 via-stone-900/80 to-amber-950/50 border border-amber-600/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-400/50 flex items-center justify-center text-2xl shadow">
                  {currentRank.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {isEditingName ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={tempName}
                          onChange={(e) => setTempName(e.target.value)}
                          className="bg-stone-950 px-2 py-0.5 rounded border border-amber-400 text-xs text-amber-100 focus:outline-none w-28"
                          autoFocus
                        />
                        <button
                          onClick={handleSaveName}
                          className="p-1 text-emerald-400 hover:text-emerald-300"
                        >
                          <Check size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-serif font-bold text-amber-100 text-base">
                          {userProfile.name}
                        </h3>
                        <button
                          onClick={() => {
                            setTempName(userProfile.name);
                            setIsEditingName(true);
                          }}
                          className="text-stone-400 hover:text-amber-300 transition-colors"
                          title="Đổi pháp danh"
                        >
                          <Edit3 size={12} />
                        </button>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-amber-400/90 font-serif">
                    Cấp {currentRank.level}: {currentRank.title}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-serif font-bold text-amber-300">
                  {userProfile.merit}
                </div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">
                  Công đức
                </div>
              </div>
            </div>

            {/* Next Level Progress */}
            {nextRank && (
              <div className="space-y-1.5 bg-stone-900/50 p-3 rounded-xl border border-amber-900/30">
                <div className="flex justify-between text-xs text-amber-200/80">
                  <span>Tiến trình đến cấp: {nextRank.title}</span>
                  <span>
                    {userProfile.merit} / {nextRank.minMerit}
                  </span>
                </div>
                <div className="w-full bg-stone-950 rounded-full h-2 overflow-hidden border border-amber-900/40">
                  <div
                    className="bg-gradient-to-r from-amber-600 to-amber-400 h-full transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        (userProfile.merit / nextRank.minMerit) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-900/30 text-center">
                <div className="text-lg font-bold text-amber-200 font-serif">
                  {userProfile.bows}
                </div>
                <div className="text-[11px] text-stone-400">Lần lạy Phật</div>
              </div>

              <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-900/30 text-center">
                <div className="text-lg font-bold text-amber-200 font-serif">
                  {userProfile.beadRounds}
                </div>
                <div className="text-[11px] text-stone-400">Vòng chuỗi niệm</div>
              </div>

              <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-900/30 text-center">
                <div className="text-lg font-bold text-amber-200 font-serif">
                  {userProfile.incenseCount}
                </div>
                <div className="text-[11px] text-stone-400">Lần dâng hương</div>
              </div>

              <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-900/30 text-center">
                <div className="text-lg font-bold text-amber-200 font-serif">
                  {userProfile.lanternCount}
                </div>
                <div className="text-[11px] text-stone-400">Hoa đăng đã thả</div>
              </div>
            </div>

            {/* Streak */}
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-600/30 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-amber-200">
                <Flame size={15} className="text-amber-500" />
                Chuỗi ngày tinh tấn lên chùa:
              </span>
              <b className="text-amber-300 text-sm font-serif">
                {userProfile.streakDays} ngày liên tiếp
              </b>
            </div>
          </div>
        ) : (
          /* Leaderboard */
          <div className="space-y-2 animate-in fade-in duration-200">
            <div className="text-[11px] text-amber-300/80 text-center font-serif mb-2">
              Bảng vàng tri ân các thiện tri thức gieo duyên cùng chùa
            </div>

            <div className="space-y-1.5">
              {LEADERBOARD.map((item) => (
                <div
                  key={item.rank}
                  className={`p-2.5 rounded-xl flex items-center justify-between border ${
                    item.rank === 1
                      ? "bg-amber-950/70 border-amber-500/60 shadow"
                      : item.rank === 2
                      ? "bg-stone-900/70 border-amber-700/40"
                      : item.rank === 3
                      ? "bg-stone-900/50 border-amber-900/40"
                      : "bg-stone-950/40 border-stone-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.rank === 1
                          ? "bg-amber-500 text-stone-950"
                          : item.rank === 2
                          ? "bg-amber-700 text-amber-100"
                          : item.rank === 3
                          ? "bg-amber-900 text-amber-200"
                          : "text-stone-400"
                      }`}
                    >
                      {item.rank}
                    </span>
                    <div>
                      <div className="font-serif font-semibold text-xs text-amber-100">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-stone-400">
                        {item.level} · {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-serif font-bold text-amber-300">
                      {item.merit}
                    </span>
                    <span className="text-[10px] text-stone-400 block">
                      công đức
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}

