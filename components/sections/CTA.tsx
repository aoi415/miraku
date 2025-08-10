"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-6 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-accent/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border bg-card/80 p-10 text-center backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">ご予約・テイクアウトの事前注文</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            混雑時もスムーズに受け取り。受け取り時刻をご指定ください。
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="px-6">予約する</Button>
            <Button variant="outline" className="px-6">問い合わせ</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
