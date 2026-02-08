import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Monitor,
  Smartphone,
  Cloud,
  Play,
  ArrowRight,
  Check,
  FileText,
  Zap,
  Download,
  Headset,
} from "lucide-react";
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
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SECTION 1: Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Partner u koga se možete pouzdati.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Najsavremenija dijagnostika, rezultati dostupni odmah, i softver
                koji štedi Vaše vreme.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow" size="lg" asChild>
                  <a href="#registration">
                    Postanite partner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline-soft" size="lg">
                  Otvorite OrtoCloud nalog
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-accent to-primary/10 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground/60 text-sm">
                    Doctor with Tablet Image
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OrtoCloud */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="soft-card p-8">
                <div className="aspect-[4/3] bg-muted/50 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Monitor className="w-8 h-8 text-primary" />
                      </div>
                      <div className="w-10 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground/60 text-sm">
                      OrtoCloud Interface
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                OrtoCloud: Vaša ordinacija na dlanu.
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Šaljite upute direktno kroz aplikaciju. Zaboravite na papire i
                  telefoniranje. Pratite status snimanja u realnom vremenu.
                  Pogledajte, preuzmite ili podelite snimke sa kolegama jednim
                  klikom.
                </p>
                <p>
                  Uz web aplikaciju i verzije dostupne na Google Play, App Store
                  i App Gallery, OrtoCloud možete koristiti bilo kada i bilo gde
                  – putem telefona, tableta ili računara.
                </p>
              </div>

              <Button variant="raised" size="lg">
                Saznaj više o OrtoCloudu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* App Store Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["OrtoCloud", "Google Play", "App Store", "AppGallery"].map(
                  (store) => (
                    <div
                      key={store}
                      className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2"
                    >
                      <Cloud className="w-3 h-3" />
                      {store}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3D/CBCT dijagnostika */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            3D/CBCT dijagnostika
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left - Text */}
            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pruža mogućnost prikaza Vaše dijagnoze iz svakog ugla i u
                visokoj rezoluciji. CBCT snimci su zlatni standard za
                implantologiju, endodonciju, ortodonciju, oralnu hirurgiju i TMZ
                dijagnostiku.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-primary text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Zašto birati nas?
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Koristimo CBCT tehnologiju koja daje precizne 3D prikaze
                      sa minimalnom dozom zračenja, čineći snimanje bezbednim i
                      za najmlađe pacijente.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Uz brzu digitalnu obradu, snimci su dostupni na
                      OrtoCloudu u roku od nekoliko minuta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      Tri veličine polja: 5×5 cm, 8×5 cm i 8×8 cm / 9×12 cm za
                      širok spektar indikacija.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent to-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground/60 text-sm">
                    3D CBCT prikaz
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Technology & Video */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Moćna tehnologija koju ćete savladati za 5 minuta.
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              3D/CBCT interfejs je dostupan svim korisnicima, korišćenjem
              besplatnog DICOM pregledača kao što je RadiAnt koji možete preuzeti
              sa Interneta. Jednostavan je za korišćenje, a obuka traje svega 5
              minuta.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-card relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              https://www.youtube.com/watch?v=example
            </p>
          </motion.div>

          {/* Two info cards below video */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <motion.div {...fadeInUp} className="soft-card p-6 text-center">
              <Download className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground text-sm mb-1">
                Vodich tutotijali
              </h4>
              <p className="text-muted-foreground text-xs">
                Step-by-step video uputstva za korišćenje 3D DICOM pregledača.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="soft-card p-6 text-center"
            >
              <Headset className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground text-sm mb-1">
                Naša podrška
              </h4>
              <p className="text-muted-foreground text-xs">
                Kontaktirajte naš tim za podršku za pomoć sa 3D softverom.
              </p>
            </motion.div>
          </div>

          {/* Software links */}
          <motion.div
            {...fadeInUp}
            className="text-center text-xs text-muted-foreground space-y-1 max-w-3xl mx-auto"
          >
            <p>
              Preporučeni softver za pregled: <strong className="text-primary">RadiAnt</strong>,{" "}
              <strong className="text-primary">Horos</strong> (macOS),{" "}
              <strong className="text-primary">3D Slicer</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Kefalometrijske Analize */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Kefalometrijske analize
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left - Image */}
            <motion.div {...fadeInUp}>
              <div className="soft-card p-6">
                <div className="aspect-[4/5] bg-muted/50 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center border-2 border-dashed border-primary/30 mx-auto mb-4">
                      <FileText className="w-10 h-10 text-primary/50" />
                    </div>
                    <p className="text-muted-foreground/60 text-sm">
                      Kefalometrijski Tracing
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-primary">KefAnalize</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Da bi planiranje Vaše terapije fiksnom protezom bilo potpuno
                precizno, stomatologu je potreban detaljan uvid u odnos Vaših
                zuba i struktura lica. Naše digitalne kefalometrijske analize
                pružaju lekaru neophodne podatke za sigurno i precizno
                planiranje Vaše terapije.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  Ključne karakteristike
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Vrhunska digitalna preciznost.
                      </strong>{" "}
                      Koristimo savremeni softver za precizno iscrtavanje.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Digitalna dostupnost.
                      </strong>{" "}
                      Vaši rezultati su dostupni na OrtoCloudu u digitalnom
                      formatu.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tipovi analiza */}
              <div className="space-y-2">
                <h4 className="font-bold text-primary flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  Tipovi analiza
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                  <div>
                    <p className="font-bold text-foreground mb-1">
                      Standardna
                    </p>
                    <p>Ricketts</p>
                    <p>Steiner</p>
                    <p>McNamara</p>
                    <p>Wits Procena</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">
                      Ortodontska
                    </p>
                    <p>Tweed</p>
                    <p>Jarabak</p>
                    <p>Downs</p>
                    <p>Holdaway</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">
                      Specijalna / Hirurška
                    </p>
                    <p>Soft-tissue</p>
                    <p>Arnett-Gunson</p>
                    <p>Burstone</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Vaši snimci i rezultati se čuvaju na{" "}
                <strong className="text-primary">OrtoCloudu</strong> i
                dostupni su Vama i Vašem stomatologu u digitalnom formatu za
                pregled i preuzimanje.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Registration Form */}
      <section id="registration" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Postanite deo OrtoDent mreže
              </h2>
              <p className="text-muted-foreground text-sm">
                Popunite formular da biste otvorili nalog i postali naš partner.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="soft-card p-8 space-y-5"
            >
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">
                  Ime i Prezime <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="Dr. Petar Petrović"
                />
              </div>

              <div>
                <Label htmlFor="clinic" className="text-foreground text-sm">
                  Naziv Ordinacije
                </Label>
                <Input
                  id="clinic"
                  type="text"
                  maxLength={100}
                  value={formData.clinic}
                  onChange={(e) =>
                    setFormData({ ...formData, clinic: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="Stomatološka ordinacija..."
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-foreground text-sm">
                  Adresa Ordinacije
                </Label>
                <Input
                  id="address"
                  type="text"
                  maxLength={200}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="Ulica i broj, Grad"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground text-sm">
                  Telefon <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="+381 60 123 4567"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email Adresa <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5"
                  placeholder="email@ordinacija.rs"
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="w-full mt-4"
              >
                Pošalji zahtev
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZaDoktore;
