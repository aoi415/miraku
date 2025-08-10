"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop", className: "col-span-2 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=800&auto=format&fit=crop" },
  { id: 3, src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop" },
  { id: 4, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
  { id: 5, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop" },
  { id: 6, src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop" },
];

export function Gallery() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">ギャラリー</h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-[140px]">
        {photos.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className={["group relative overflow-hidden rounded-xl", p.className].filter(Boolean).join(" ")}
          >
            <Image src={p.src} alt="カフェ写真" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
