"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { sound } from "@/lib/soundEngine";
import confetti from "canvas-confetti";
import { Heart, QrCode, Copy, Check, Sparkles } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMerit: (amount: number, reason: string) => void;
}

const AMOUNTS = [
  { label: "10.000đ", val: 10000 },
  { label: "20.000đ", val: 20000 },
  { label: "50.000đ", val: 50000 },
  { label: "100.000đ", val: 100000 },
  { label: "Tùy tâm", val: 0 },
];

export default function DonationModal({ isOpen, onClose, onAddMerit }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState(20000);
  const [donorName, setDonorName] = useState("");
  const [copied, setCopied] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  // Bank Info
  const bank = "VIB";
  const account = "076037442";
  const accountName = "BUI VAN QUYET";
  const note = `CONG DUC CHUA ${donorName ? donorName.toUpperCase() : "AN DUYEN"}`;

  // VietQR URL
  const qrUrl = `https://img.vietqr.io/image/${bank}-${account}-compact2.png?amount=${selectedAmount}&addInfo=${encodeURIComponent(
    note
  )}&accountName=${encodeURIComponent(accountName)}`;

  const handleCopyAccount = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleConfirm = () => {
    sound.playBell();
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f59e0b", "#ec4899", "#10b981"],
      });
    } catch {}

    setHasConfirmed(true);
    onAddMerit(50, `Công đức Tam Bảo tuỳ hỷ (${selectedAmount ? selectedAmount.toLocaleString() + "đ" : "Tùy tâm"})`);

    setTimeout(() => {
      setHasConfirmed(false);
      onClose();
    }, 2500);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Hòm Công Đức & Góp Gạo Nuôi Chùa"
      subtitle="Góp chút duyên lành trợ duyên Tam Bảo, phước báu vô lượng"
    >
      {hasConfirmed ? (
        <div className="py-8 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-3xl animate-bounce">
            🙏
          </div>
          <h3 className="text-lg font-serif font-semibold text-amber-200">
            Tri Ân Công Đức Của Quý Thiện Nam Tín Nữ
          </h3>
          <p className="text-xs text-stone-300 max-w-xs font-serif italic">
            &ldquo;Một hạt gạo cúng dường, vạn đời gieo phước đức.
            <br />
            Nguyện hồi hướng bình an cho bạn và gia quyến.&rdquo;
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Amount buttons */}
          <div>
            <label className="text-xs text-amber-300/80 mb-2 block font-medium">
              1. Mức công đức tùy hỷ
            </label>
            <div className="grid grid-cols-3 gap-2">
              {AMOUNTS.map((amt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedAmount(amt.val)}
                  className={`py-2 px-1 rounded-xl text-xs font-serif transition-all ${
                    selectedAmount === amt.val
                      ? "bg-amber-600 text-stone-950 font-bold ring-2 ring-amber-300 shadow"
                      : "bg-stone-900/60 border border-stone-800 text-stone-200 hover:border-amber-700/60"
                  }`}
                >
                  {amt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name input */}
          <div>
            <label className="text-xs text-amber-300/80 mb-1.5 block font-medium">
              2. Pháp danh / Tên người công đức
            </label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="VD: Diệu Tâm, Nguyễn Văn A..."
              className="w-full bg-stone-950/80 border border-amber-900/50 rounded-xl px-3 py-2 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* VietQR Code Display */}
          <div className="bg-stone-950/80 rounded-2xl p-4 border border-amber-900/40 flex flex-col items-center text-center space-y-3">
            <div className="p-2 bg-white rounded-xl shadow-lg inline-block">
              <img
                src={qrUrl}
                alt="VietQR Cong Duc"
                className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="space-y-1 text-xs">
              <div className="text-amber-300 font-serif font-semibold">
                Ngân hàng VIB
              </div>
              <div className="flex items-center justify-center gap-1.5 text-stone-300">
                <span>Số TK: <b>{account}</b></span>
                <button
                  onClick={handleCopyAccount}
                  className="p-1 rounded hover:bg-stone-800 text-amber-400 transition-colors"
                  title="Sao chép số tài khoản"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
              <div className="text-[11px] text-stone-400">
                Chủ TK: {accountName}
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-serif font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer"
          >
            <Sparkles size={16} />
            Đã Chuyển Khoản & Lưu Công Đức (+50 Công Đức)
          </button>
        </div>
      )}
    </ModalWrapper>
  );
}
