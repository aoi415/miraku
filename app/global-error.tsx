"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ja">
      <body>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center">
          <h1 className="text-2xl font-semibold">アプリケーションエラー</h1>
          <p className="text-sm text-muted-foreground">一時的な不具合が発生しました。</p>
          <button onClick={() => reset()} className="underline">再試行</button>
        </div>
      </body>
    </html>
  );
}
