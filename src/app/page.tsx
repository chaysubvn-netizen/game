"use client";

import React, { useEffect, useState, Suspense } from "react";
import Script from "next/script";

const QUOTES = [
  "Đi chậm một chút, thở sâu một chút.",
  "Lòng lặng rồi, ở đâu cũng là chùa.",
  "Gieo một hạt lành, đợi một mùa an.",
  "Buông bớt một điều, nhẹ thêm một bước.",
  "Nụ cười hiền là nén hương thơm nhất.",
  "Lên chùa hôm nay, mang bình an về nhà.",
  "Mỗi tiếng chuông là một lần trở về.",
];

function TempleView() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(q);
  }, []);

  return (
    <>
      <canvas id="scene"></canvas>
      <div id="hud"></div>
      <div id="loading">
        <div className="loading-mark">An Duyên</div>
        <div className="loading-text">Đang mở cổng chùa…</div>
        <div className="loading-bar">
          <span></span>
        </div>
        <div className="loading-quote">
          {quote ? `“${quote}”` : ""}
        </div>
      </div>

      <Script
        src="/assets/temple.js"
        type="module"
        strategy="afterInteractive"
      />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <TempleView />
    </Suspense>
  );
}
