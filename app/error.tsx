"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center">
      <h1 className="text-2xl font-semibold">エラーが発生しました</h1>
      <p className="text-sm text-muted-foreground">ページの読み込みに失敗しました。再読み込みしてください。</p>
      <button onClick={() => reset()} className="underline">再読み込み</button>
    </div>
  );
}
