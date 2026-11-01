"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-lg",
}: ModalWrapperProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div
        className={`relative w-full ${maxWidth} zen-glass rounded-t-3xl sm:rounded-3xl border border-amber-600/30 overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-in slide-in-from-bottom-6 duration-300`}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-amber-900/40 flex items-center justify-between bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-amber-950/40">
          <div>
            <h2 className="text-xl font-serif font-semibold text-amber-200 tracking-wide flex items-center gap-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs text-amber-300/70 mt-0.5 font-sans">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-amber-300/70 hover:text-amber-100 hover:bg-amber-900/50 transition-colors"
            aria-label="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto flex-1 font-sans text-sm text-stone-200">
          {children}
        </div>
      </div>
    </div>
  );
}

