import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationStrip from "@/components/LocationStrip";
import TrustStats from "@/components/TrustStats";
import ServiceCards from "@/components/ServiceCards";
import Timeline from "@/components/Timeline";
import OrtoCloudSection from "@/components/OrtoCloudSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LocationStrip />
        <TrustStats />
        <ServiceCards />
        <Timeline />
        <OrtoCloudSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
