"use client";
import { useEffect, useRef } from "react";

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id = 0;
    let offset = 0;
    const speed = 0.5;
    const step = () => {
      offset -= speed;
      el.style.transform = `translateX(${offset}px)`;
      // ループ
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0;
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  const items = [
    "自家焙煎", "季節のケーキ", "ハンドドリップ", "スコーン", "モーニング", "ラテアート",
  ];

  return (
    <section className="border-y bg-background/60 py-6">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap will-change-transform" ref={ref}>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mr-10 inline-flex items-center text-sm opacity-70">
              {items.map((t) => (
                <span key={`${i}-${t}`} className="mx-5">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
