"use client";
import { motion } from "framer-motion";

const voices = [
  { name: "Taro S.", text: "朝の一杯がここでの定番。香りが抜群です。" },
  { name: "Mika K.", text: "季節のケーキがいつも楽しみ。内装も素敵。" },
  { name: "Ken I.", text: "落ち着いて作業できる空間。スコーンが最高。" },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">お客様の声</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {voices.map((v, i) => (
          <motion.blockquote
            key={v.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border bg-card p-6 text-sm text-muted-foreground"
          >
            <p>“{v.text}”</p>
            <footer className="mt-4 text-right text-xs text-foreground/80">— {v.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
