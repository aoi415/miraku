"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const specials = [
  {
    title: "季節の苺タルト",
    desc: "朝どれ苺を贅沢に使用",
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "シングルオリジン",
    desc: "浅煎りで華やかな酸味",
    src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "焦がしバターのスコーン",
    desc: "外はさっくり中はしっとり",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Specials() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">季節のおすすめ</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {specials.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-xl border bg-card"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-56 w-full">
              <Image src={s.src} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 40%)" }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
