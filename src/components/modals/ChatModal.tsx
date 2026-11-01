"use client";

import React, { useState } from "react";
import ModalWrapper from "../ui/ModalWrapper";
import { Send, Smile, Sparkles, MessageCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMe?: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onSendEmote: (emote: string) => void;
}

const QUICK_PHRASES = [
  "Nam Mô A Di Đà Phật 🙏",
  "Chúc vạn sự bình an, tâm thường an lạc ✨",
  "Tâm an vạn sự an 🪷",
  "Nguyện hồi hướng công đức cho muôn loài 🕊️",
  "Chào các bạn hữu đồng tu 👋",
];

const QUICK_EMOTES = ["🙏", "🪷", "🕯️", "✨", "🕊️", "📿", "💛", "🌿"];

export default function ChatModal({
  isOpen,
  onClose,
  roomName,
  messages,
  onSendMessage,
  onSendEmote,
}: ChatModalProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={`Kênh Trò Chuyện Chánh Niệm`}
      subtitle={`Đang trong phòng: ${roomName} · Gặp gỡ bạn có duyên`}
    >
      <div className="flex flex-col h-[65vh] max-h-[500px]">
        {/* Quick Floating Emote Bar */}
        <div className="flex items-center gap-1.5 pb-2.5 overflow-x-auto border-b border-amber-900/30">
          <span className="text-[11px] text-amber-300/80 font-medium whitespace-nowrap mr-1">
            Thả cảm xúc:
          </span>
          {QUICK_EMOTES.map((emo, idx) => (
            <button
              key={idx}
              onClick={() => onSendEmote(emo)}
              className="text-lg p-1 hover:scale-125 transition-transform active:scale-95 bg-stone-900/50 hover:bg-amber-900/40 rounded-lg px-2 border border-stone-800"
              title="Thả cảm xúc bay lên màn hình"
            >
              {emo}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 text-xs">
              <MessageCircle size={32} className="text-stone-600 mb-1" />
              Chưa có lời nhắn nào. Hãy gửi lời chào thiện duyên!
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.isMe ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-stone-400 mb-0.5">
                  <span className={msg.isMe ? "text-amber-400 font-medium" : "text-amber-300/80 font-medium"}>
                    {msg.sender}
                  </span>
                  <span>{msg.time}</span>
                </div>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-sm ${
                    msg.isMe
                      ? "bg-amber-700/80 text-amber-50 rounded-tr-none border border-amber-600/40"
                      : "bg-stone-900/80 text-stone-200 rounded-tl-none border border-stone-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Phrases */}
        <div className="py-2 border-t border-amber-900/30 flex gap-1.5 overflow-x-auto whitespace-nowrap">
          {QUICK_PHRASES.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => onSendMessage(phrase)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-stone-900/60 hover:bg-amber-900/40 border border-stone-800 text-stone-300 hover:text-amber-200 transition-colors"
            >
              {phrase}
            </button>
          ))}
        </div>

        {/* Text Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhắn gửi lời an lành tới bạn đồng tu..."
            className="flex-1 bg-stone-950/80 border border-amber-900/50 rounded-xl px-3 py-2 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors shadow flex items-center justify-center cursor-pointer"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
}

