"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function FAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild className="h-12 w-12 rounded-full shadow-lg">
        <a href="tel:0000000000" aria-label="電話予約">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
