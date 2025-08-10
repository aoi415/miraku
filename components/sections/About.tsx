"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">私たちについて</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            毎朝ローストする豆、丁寧に仕込む焼き菓子、そして心地よい音楽。忙しい日々の中で、少しだけ呼吸を整えられる場所でありたい。そんな想いで、素材と手仕事に向き合っています。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-video rounded-xl bg-accent/40"/>
      </div>
    </section>
  );
}
