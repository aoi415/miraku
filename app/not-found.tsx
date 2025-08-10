export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center">
      <h1 className="text-2xl font-semibold">ページが見つかりませんでした</h1>
      <p className="text-sm text-muted-foreground">URL をご確認の上、トップへお戻りください。</p>
      <a href="/" className="mt-2 underline">トップへ戻る</a>
    </div>
  );
}
