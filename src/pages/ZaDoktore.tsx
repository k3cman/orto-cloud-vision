import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Download, 
  Headset, 
  BookOpen, 
  Smartphone, 
  Monitor, 
  Cloud,
  Play,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ZaDoktore = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Zahtev poslat!",
      description: "Kontaktiraćemo vas u najkraćem roku.",
    });
    setFormData({ name: "", clinic: "", address: "", phone: "", email: "" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* SECTION 1: Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
                Partner u koga se možete pouzdati.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Najsavremenija dijagnostika, rezultati dostupni odmah, i softver koji štedi Vaše vreme.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow" size="xl" asChild>
                  <a href="#registration">
                    Postanite partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline-soft" size="xl">
                  Otvorite OrtoDent nalog
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-accent to-muted rounded-3xl flex items-center justify-center shadow-card overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Doctor with Tablet Image</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OrtoCloud Ecosystem */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Visual */}
            <motion.div
              {...fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="aspect-[4/3] bg-card rounded-3xl shadow-card flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-20 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Monitor className="w-10 h-10 text-primary" />
                      </div>
                      <div className="w-12 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">OrtoCloud Interface Mockup</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow">
                  <Cloud className="w-5 h-5 inline mr-2" />
                  OrtoCloud
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                OrtoCloud: Vaša ordinacija na dlanu.
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Šaljite upute direktno kroz aplikaciju. Zaboravite na papire i telefoniranje. 
                  Pratite status snimanja u realnom vremenu. Pogledajte, preuzmite ili podelite 
                  snimke sa kolegama jednim klikom.
                </p>
                <p>
                  Uz web aplikaciju i verzije dostupne na Google Play, App Store i App Gallery, 
                  OrtoCloud možete koristiti bilo kada i bilo gde – putem telefona, tableta ili računara.
                </p>
              </div>

              {/* Data Retention Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-primary font-bold">2D</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">2D Snimci</h4>
                  <p className="text-sm text-muted-foreground">Čuvaju se 2 godine. Dostupni odmah (App/Web).</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-primary font-bold">3D</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">3D Snimci</h4>
                  <p className="text-sm text-muted-foreground">Dostupni 15 dana. Download i pregled (PC).</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-primary font-bold">K</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Kefalometrija</h4>
                  <p className="text-sm text-muted-foreground">Dostavlja se kao: Analiza + Snimak sa tačkama.</p>
                </div>
              </div>

              <Button variant="raised" size="lg">
                Saznaj više o OrtoCloudu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Doctor's Toolkit */}
      <section className="py-8 bg-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <motion.a
              href="#"
              {...fadeInUp}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Preuzmite Uput (PDF)</span>
            </motion.a>
            <motion.a
              href="#"
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                <Headset className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Tehnička Podrška</span>
            </motion.a>
            <motion.a
              href="#"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Uputstvo za Softver</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 4: Technology & Software (Video Section) */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Moćna tehnologija koju ćete savladati za 5 minuta.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Koristimo softver koji je intuitivan, brz i ne zahteva sate obuke.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Thumbnail 1 */}
            <motion.div
              {...fadeInUp}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-card relative">
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mt-4 text-center">
                Uvod u 3D Interfejs
              </h3>
            </motion.div>

            {/* Video Thumbnail 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-card relative">
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mt-4 text-center">
                Napredne Alate i Merenja
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Kefalometrijske Analize */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-12"
          >
            Precizne Kefalometrijske Analize
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-raised transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Standardna Analiza
              </h3>
              <p className="text-muted-foreground">
                Detaljna analiza skeletnih i dentalnih odnosa neophodna za planiranje ortodontske terapije. 
                Uključuje standardna merenja uglova i linearnih dimenzija.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-raised transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v6M12 16v6M4 12h6M14 12h6" />
                  <path d="M7 7l3 3M14 14l3 3M7 17l3-3M14 10l3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ortodontska Analiza
              </h3>
              <p className="text-muted-foreground">
                Fokusirana na specifične ortodontske parametre, procenu rasta i razvoja, kao i 
                predviđanje toka terapije. Prilagođena specifičnim školama (npr. Ricketts, Steiner, Tweed).
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-raised transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 4" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Specijalna / Hirurška Analiza
              </h3>
              <p className="text-muted-foreground">
                Napredna analiza za kompleksne slučajeve koji zahtevaju ortognatsku hirurgiju. 
                Precizan prikaz mekih i tvrdih tkiva za predviđanje post-hirurškog profila.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Registration Form */}
      <section id="registration" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Postanite deo OrtoDent mreže
              </h2>
              <p className="text-muted-foreground">
                Popunite formular da biste otvorili nalog i postali naš partner.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card border border-border/50">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Ime i Prezime <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5"
                    placeholder="Dr. Petar Petrović"
                  />
                </div>

                <div>
                  <Label htmlFor="clinic" className="text-foreground">
                    Naziv Ordinacije
                  </Label>
                  <Input
                    id="clinic"
                    type="text"
                    value={formData.clinic}
                    onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                    className="mt-1.5"
                    placeholder="Stomatološka ordinacija..."
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-foreground">
                    Adresa Ordinacije
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-1.5"
                    placeholder="Ulica i broj, Grad"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Telefon <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5"
                    placeholder="+381 60 123 4567"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Adresa <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5"
                    placeholder="email@ordinacija.rs"
                  />
                </div>

                <Button type="submit" variant="glow" size="lg" className="w-full mt-6">
                  Pošalji Zahtev
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZaDoktore;
