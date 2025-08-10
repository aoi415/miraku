"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section id="location" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">アクセス</h2>
          <p className="mt-6 text-muted-foreground">東京都〇〇区〇〇 1-2-3 〇〇ビル1F（最寄り駅から徒歩5分）</p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              title="Google Map"
              className="h-full w-full"
              src="https://www.google.com/maps?q=Tokyo&hl=ja&z=14&output=embed"
              loading="lazy"
            />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted-foreground">営業時間</dt>
              <dd>8:00 - 19:00（L.O.18:30）</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">定休日</dt>
              <dd>火曜日</dd>
            </div>
          </dl>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-semibold">ニュースレター</h3>
          <p className="mt-2 text-sm text-muted-foreground">季節のメニューやイベント情報をお届けします。</p>
          <div className="mt-6 flex gap-3">
            <Input type="email" placeholder="メールアドレス" required />
            <Button type="submit">登録</Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
