"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1920&auto=format&fit=crop"
          alt="カフェの店内"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        {/* パララックス用の装飾 */}
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-32 w-[120%] -translate-y-10 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative container mx-auto px-6 py-28 md:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            素材と時間を味わう
            <br />
            街の小さなカフェ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            自家焙煎コーヒーと季節の焼き菓子。朝の一杯から、午後の小休止まで。あなたの一日に寄り添う味を。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex gap-4"
          >
            <Button className="px-6" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
              メニューを見る
            </Button>
            <Button variant="outline" className="px-6" onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}>
              アクセス
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
