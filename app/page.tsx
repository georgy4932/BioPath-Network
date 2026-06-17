import type { Metadata } from "next";
import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import KrebsHubCallout from "@/components/landing/KrebsHubCallout";
import JourneyCardsSection from "@/components/landing/JourneyCardsSection";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "BioPath — Metabolism is a network, not a list",
  description:
    "Step-by-step metabolic pathway journeys from organism to molecule. Follow glucose and oxygen through the body, understand how pathways connect, and practice what you learn.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060d1a] text-white">
      <LandingNav />
      <main>
        <HeroSection />
        <KrebsHubCallout />
        <JourneyCardsSection />
      </main>
      <LandingFooter />
    </div>
  );
}
