export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Miraku Cafe</p>
        <nav className="flex gap-6">
          <a href="#menu" className="hover:underline">メニュー</a>
          <a href="#location" className="hover:underline">アクセス</a>
          <a href="mailto:info@example.com" className="hover:underline">お問い合わせ</a>
        </nav>
      </div>
    </footer>
  );
}
