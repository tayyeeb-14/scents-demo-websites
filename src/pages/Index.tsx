import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { VisitStore } from "@/components/VisitStore";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { OfferBanner } from "@/components/OfferBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Collections />
      <VisitStore />
      <Reviews />
      <Contact />
      <OfferBanner />
      <Footer />
    </div>
  );
};

export default Index;
