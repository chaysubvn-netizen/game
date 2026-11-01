"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import confetti from "canvas-confetti";
import { Send, Sparkles } from "lucide-react";

interface LanternModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReleaseLantern: (text: string, color: string) => void;
}

const LANTERN_COLORS = [
  { label: "Sen Hồng", color: "#f43f5e", bg: "bg-rose-500", name: "Cát Tường" },
  { label: "Sen Vàng", color: "#eab308", bg: "bg-yellow-500", name: "Trí Tuệ" },
  { label: "Sen Trắng", color: "#f8fafc", bg: "bg-slate-100", name: "Thanh Tịnh" },
  { label: "Sen Xanh", color: "#38bdf8", bg: "bg-sky-400", name: "An Nhiên" },
  { label: "Sen Đỏ", color: "#ef4444", bg: "bg-red-500", name: "Phước Báu" },
];

const PRESET_WISHES = [
  "Cầu gia đạo bình an, cha mẹ mạnh khỏe, vạn sự cát tường.",
  "Cầu duyên lành sớm gặp người tri kỷ tâm đầu ý hợp.",
  "Cầu công danh sáng tỏ, học hành đỗ đạt, sự nghiệp hanh thông.",
  "Nguyện buông bỏ phiền lo, thân tâm thường lạc, tâm an trí sáng.",
  "Cầu cho muôn người ấm no, thế giới hòa bình, tai ương tiêu trừ.",
];

export default function LanternModal({ isOpen, onClose, onReleaseLantern }: LanternModalProps) {
  const [selectedColor, setSelectedColor] = useState(LANTERN_COLORS[0]);
  const [wishText, setWishText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRelease = (e: React.FormEvent) => {
    e.preventDefault();
    const finalWish = wishText.trim() || PRESET_WISHES[0];

    onReleaseLantern(finalWish, selectedColor.color);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: [selectedColor.color, "#f59e0b", "#ffffff"],
      });
    } catch {}

    setTimeout(() => {
      setIsSuccess(false);
      setWishText("");
      onClose();
    }, 1800);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Thả Đèn Hoa Đăng Cầu Nguyện"
      subtitle="Gửi gắm ước nguyện thành tâm trôi theo dòng nước hồ sen"
    >
      {isSuccess ? (
        <div className="py-8 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-3xl animate-bounce">
            🪷
          </div>
          <h3 className="text-lg font-serif font-semibold text-amber-200">
            Nguyện Ước Đã Thả Xuống Hồ Sen
          </h3>
          <p className="text-xs text-stone-300 max-w-xs font-serif italic">
            &ldquo;Đèn sen chở ánh trăng trôi,
            <br />
            Mang theo nguyện ước sáng ngời muôn phương.&rdquo;
          </p>
        </div>
      ) : (
        <form onSubmit={handleRelease} className="space-y-5">
          {/* Pick Lantern Color */}
          <div>
            <label className="text-xs text-amber-300/80 mb-2 block font-medium">
              1. Chọn màu hoa đăng
            </label>
            <div className="grid grid-cols-5 gap-2">
              {LANTERN_COLORS.map((col, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setSelectedColor(col)}
                  className={`flex flex-col items-center p-2 rounded-xl border transition-all ${
                    selectedColor.color === col.color
                      ? "border-amber-400 bg-amber-900/40 ring-2 ring-amber-400/40"
                      : "border-stone-800 bg-stone-900/60 hover:border-stone-600"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full ${col.bg} shadow-md mb-1`}
                  />
                  <span className="text-[11px] font-medium text-stone-200">
                    {col.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Preset Wishes */}
          <div>
            <label className="text-xs text-amber-300/80 mb-2 block font-medium">
              2. Chọn lời nguyện ước gợi ý
            </label>
            <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto pr-1">
              {PRESET_WISHES.map((pw, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setWishText(pw)}
                  className="text-left text-xs p-2 rounded-xl bg-stone-900/50 hover:bg-amber-900/30 border border-stone-800/80 hover:border-amber-700/60 text-stone-300 transition-colors line-clamp-1"
                >
                  • {pw}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Wish Input */}
          <div>
            <label className="text-xs text-amber-300/80 mb-2 block font-medium">
              3. Hoặc tự viết tâm nguyện của bạn
            </label>
            <textarea
              value={wishText}
              onChange={(e) => setWishText(e.target.value)}
              placeholder="Nhập lời cầu an, cầu duyên, tâm nguyện của bạn..."
              rows={3}
              maxLength={200}
              className="w-full bg-stone-950/80 border border-amber-900/50 rounded-xl p-3 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-semibold font-serif text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <Sparkles size={16} />
            Thả Hoa Đăng Xuống Nước
          </button>
        </form>
      )}
    </ModalWrapper>
  );
}

