"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (started.current) return;
      if (entries[0].isIntersecting) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setValue(Math.round(p * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    };
    const io = new IntersectionObserver(onIntersect, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

export function Stats() {
  const beans = useCountUp(1200);
  const guests = useCountUp(350);
  const recipes = useCountUp(48);

  return (
    <section className="container mx-auto grid gap-8 px-6 py-16 text-center sm:grid-cols-3">
      <div ref={beans.ref}>
        <div className="text-4xl font-bold">{beans.value}kg+</div>
        <div className="mt-1 text-sm text-muted-foreground">年間焙煎豆</div>
      </div>
      <div ref={guests.ref}>
        <div className="text-4xl font-bold">{guests.value}+</div>
        <div className="mt-1 text-sm text-muted-foreground">月間来店</div>
      </div>
      <div ref={recipes.ref}>
        <div className="text-4xl font-bold">{recipes.value}+</div>
        <div className="mt-1 text-sm text-muted-foreground">レシピ</div>
      </div>
    </section>
  );
}
