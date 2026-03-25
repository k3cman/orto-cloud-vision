import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UslugeCenovnik } from "./Usluge";

const Cenovnik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-24">
        <UslugeCenovnik />
      </main>
      <Footer />
    </div>
  );
};

export default Cenovnik;

