"use client";
import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Menu } from "../components/sections/Menu";
import { Gallery } from "../components/sections/Gallery";
import { Location } from "../components/sections/Location";
import { Footer } from "../components/sections/Footer";
import { Marquee } from "../components/sections/Marquee";
import { Stats } from "../components/sections/Stats";
import { Specials } from "../components/sections/Specials";
import { Testimonials } from "../components/sections/Testimonials";
import { CTA } from "../components/sections/CTA";
import { FAB } from "../components/sections/FAB";
import { ProgressBar } from "../components/sections/ProgressBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ProgressBar />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Menu />
      <Specials />
      <Gallery />
      <Location />
      <Testimonials />
      <CTA />
      <Footer />
      <FAB />
    </main>
  );
}
