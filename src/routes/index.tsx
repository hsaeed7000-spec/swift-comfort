import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Stats } from "@/components/site/Stats";
import { Categories } from "@/components/site/Categories";
import { Showcase } from "@/components/site/Showcase";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastwave — Premium Wheels, Tyres & 4×4 Gear in UAE" },
      {
        name: "description",
        content:
          "Fastwave: UAE's premier destination for luxury alloy wheels, performance tyres and 4×4 accessories. Nationwide delivery across Dubai, Abu Dhabi & Sharjah.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Stats />
        <Categories />
        <Showcase />
        <Footer />
      </main>
    </>
  );
}
