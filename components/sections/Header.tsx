"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Miraku Cafe
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#menu" className="text-foreground/80 hover:text-foreground">メニュー</a>
          <a href="#location" className="text-foreground/80 hover:text-foreground">アクセス</a>
          <a href="#gallery" className="text-foreground/80 hover:text-foreground">ギャラリー</a>
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="テーマ切替" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">テーマ切替</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="メニュー" onClick={() => setOpen(true)}>
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-5/6 max-w-sm bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="font-semibold">メニュー</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="閉じる">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="mt-6 grid gap-4 text-base">
              <a href="#menu" onClick={() => setOpen(false)} className="hover:underline">メニュー</a>
              <a href="#location" onClick={() => setOpen(false)} className="hover:underline">アクセス</a>
              <a href="#gallery" onClick={() => setOpen(false)} className="hover:underline">ギャラリー</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
