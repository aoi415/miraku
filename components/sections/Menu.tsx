"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    name: "ハンドドリップコーヒー",
    desc: "産地別シングルオリジン",
    price: 580,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "カフェラテ",
    desc: "自家製ミルクフォーム",
    price: 650,
    img: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "季節のケーキ",
    desc: "旬の果物を使った手作り",
    price: 720,
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "スコーン",
    desc: "発酵バターと国産小麦",
    price: 420,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
  },
];

export function Menu() {
  return (
    <section id="menu" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">メニュー</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-right font-semibold">￥{item.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
