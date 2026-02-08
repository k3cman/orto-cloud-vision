import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Phone, Check, Zap, Clock, FileText } from "lucide-react";

const ImagePlaceholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`bg-muted/60 rounded-xl flex items-center justify-center ${className}`}>
    <span className="text-muted-foreground/60 text-sm">{label}</span>
  </div>
);

const Tab2D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-4xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">2D rendgenski snimci</h2>
    </div>

    {/* Section 1: Retroalveolarni */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Retroalveolarni i retrokoronalni snimak
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Ovi mali, ciljani snimci visoke rezolucije <strong className="text-foreground">dentalni radiogrami</strong>, poznati i kao "<strong className="text-foreground">mali snimci</strong>" prikazuju pojedinačne zube sa njihovim potpornim strukturama. Koriste se za detaljnu procenu stanja zubne krune (otkrivanje karijesa između zuba), analizu korenskih kanala i uočavanje procesa na vrhu korena, kao i za kontrolu nakon terapijskih zahvata.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <ImagePlaceholder label="Retroalveolarni snimak" className="h-48" />
        <ImagePlaceholder label="Retrokoronalni snimak" className="h-48" />
      </div>
    </div>

    {/* Section 2: Ortopantomogram */}
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">Ortopantomogram</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Ortopantomogram ("<strong className="text-foreground">ortopan</strong>") je panoramski snimak koji pruža sveobuhvatan pregled obe vilice, svih zuba, villičnih zglobova i okolnih struktura. Kao najtraženiji snimak, predstavlja osnovni alat u početnoj dijagnostici i planiranju terapije u gotovo svim granama stomatologije.
      </p>
      <div className="soft-card p-6">
        <ImagePlaceholder label="Ortopantomogram" className="h-56" />
      </div>
    </div>

    {/* Section 3: Lateralni & PA Cefalogram */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Lateralni kefalogram</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lateralni kefalogram ("<strong className="text-foreground">telerendgen</strong>") je profilni rendgenski snimak glave koji prikazuje kosti, zube i meka tkiva u bočnoj projekciji. Neophodan je u ortodonciji za analizu odnosa vilica, planiranje terapije Telecom pristupom i praćenje napretka lečenja.
        </p>
        <div className="soft-card p-4">
          <ImagePlaceholder label="Lateralni kefalogram" className="h-48" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">PA (posteroanteriorni) kefalogram</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          PA kefalogram je rendgenski snimak glave iz prednje projekcije. Koristi se za procenu simetrije lica, širine vilica i položaja dentoalveolarnih struktura. Posebno je koristan kod planiranja ortodontskih i hirurških intervencija.
        </p>
        <div className="soft-card p-4">
          <ImagePlaceholder label="PA kefalogram" className="h-48" />
        </div>
      </div>
    </div>

    {/* Section 4: Paranazalne šupljine & TM zglobovi */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Snimak paranazalnih šupljina</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ovaj snimak vizualizuje maksilarne, frontalne i druge sinuse, prušajući uvid u njihovu prohodnost i stanje. Pomaže u dijagnostici upalnih procesa, otkrivanju cista ili polipa, kao i u utvrđivanju odnosa između zuba gornje vilice i sinusnog dna pre hirurških zahvata.
        </p>
        <div className="soft-card p-4">
          <ImagePlaceholder label="Snimak paranazalnih šupljina" className="h-48" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Snimak TM (temporomandibularnih) zglobova</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Snimak villičnih zglobova omogućava procenu položaja i oblika zglobnih površina u otvorenom i zatvorenom položaju usta. Koristi se kod pacijenata koji osećaju bol, pucketanje ili nemogućnost pri žvakanju, kako bi se precizno dijagnostikovale strukturne, traumatske ili degenerativne promene zgloba.
        </p>
        <div className="soft-card p-4">
          <ImagePlaceholder label="Snimak TM zgloba" className="h-48" />
        </div>
      </div>
    </div>

    {/* Section 5: Tomografske analize */}
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">Tomografske analize</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Tomografska analiza predstavlja specijalne 2D preseke izvučene iz različitih 3D snimaka skeniranih izabranog segmenta vilice. Ovi preseci omogućavaju lekaru da vidi poprečni presek kosti, što je od presudnog značaja za sigurno planiranje i ugradnju implantata.
      </p>
      <div className="soft-card p-6">
        <ImagePlaceholder label="Snimak tomografije sa analizom za implantologiju" className="h-56" />
      </div>
    </div>

    {/* Bottom Note */}
    <div className="text-center pt-4">
      <p className="text-sm text-muted-foreground">
        2D snimci se otpremaju na <strong className="text-primary">OrtoCloud</strong>, gde su 2 godine dostupni Vama i Vašem stomatologu.
      </p>
    </div>
  </motion.div>
);

const Tab3D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-8"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
        3D/CBCT <span className="text-primary">(Cone Beam Computed Tomography)</span>
      </h2>
      <p className="text-muted-foreground max-w-3xl mx-auto">
        Trodimenzionalni snimci koji pružaju detaljne prostorne informacije. 
        Zlatni standard za implantologiju, ortodonciju, endodonciju i oralnu hirurgiju.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - 3D Image Card */}
      <div className="relative soft-card overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative p-8">
          <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-5xl">🦷</span>
              </div>
              <span className="text-muted-foreground">3D CBCT Prikaz</span>
            </div>
          </div>
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-card/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Right - Field of View Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-foreground mb-6">Tri veličine polja</h3>
        
        <div className="soft-card p-6 border-l-4 border-primary hover:shadow-raised transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">S</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Malo Polje (5 × 5 cm)</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Obuhvata frontalni deo ili jednu stranu gornje ili donje vilice. 
                Idealno za pojedinačne implante i endodontske tretmane.
              </p>
            </div>
          </div>
        </div>

        <div className="soft-card p-6 border-l-4 border-primary/70 hover:shadow-raised transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">M</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Srednje Polje (8.5 × 5 cm)</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Obuhvata celu gornju ili celu donju vilicu. 
                Pogodno za višestruke implante i analizu jedne vilice.
              </p>
            </div>
          </div>
        </div>

        <div className="soft-card p-6 border-l-4 border-primary/50 hover:shadow-raised transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">L</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Veliko Polje (8.5 × 8.5 cm / 9 × 12 cm)</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Obuhvata obe vilice (Full Face). Za kompletne rehabilitacije, 
                ortodontske analize i maksilofacijalnu hirurgiju.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-6 p-4 bg-muted/50 rounded-xl">
          3D snimci se izdaju na CD-u i otpremaju na <strong className="text-primary">OrtoCloud</strong>, 
          gde su 15 dana dostupni Vama i Vašem stomatologu. Pristup je moguć isključivo putem računara.
        </p>
      </div>
    </div>
  </motion.div>
);

const TabKefa = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-8"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Kefalometrijske Analize</h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left - Image */}
      <div className="soft-card p-6">
        <div className="aspect-[4/5] bg-muted rounded-xl flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <div className="w-48 h-48 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center border-2 border-dashed border-primary/30">
              <FileText className="w-16 h-16 text-primary/50" />
            </div>
            <span className="text-muted-foreground text-sm">Kefalometrijski Tracing</span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-serif text-foreground mb-4">KefAnalize</h3>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Kefalometrijska analiza</strong> je specijalizovana dijagnostička metoda 
            koja se zasniva na preciznom merenju odnosa kostiju lica, vilica, zuba i mekih tkiva na cefalogramima. 
            Ove analize najveću primenu imaju u ortodonciji za planiranje terapije i praćenje rezultata lečenja.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          OrtoDent nudi uslugu izrade kefalometrijskih analiza, putem specijalizovanog programa, 
          uz kontrolu specijaliste ortodoncije, koji omogućava Vašim stomatolozima da dobiju precizne 
          i stručno obrađene analize brzo, <strong className="text-foreground">u roku od 48h i brže</strong>.
        </p>

        <div className="space-y-3">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Ključne karakteristike
          </h4>
          <ul className="space-y-2">
            {[
              "Digitalno iscrtavanje (Tracing)",
              "Dostupno online na OrtoCloudu",
              "Podrška za sve tipove analiza (Tip 1, Tip 2, Tip 3)",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-accent rounded-xl">
          <p className="text-sm text-accent-foreground">
            <strong>Isporuka:</strong> Analize se isporučuju kao dva dokumenta: 
            Izveštaj i Snimak sa obeleženim tačkama, ravnima i uglovima.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Za izradu KefAnalize potrebni su <strong>cefalogrami (lateralni i PA)</strong> snimljeni 
          u nekom od OrtoDent rendgen centara, uz napomenu Vašeg stomatologa o željenom tipu analize.
        </p>
      </div>
    </div>
  </motion.div>
);

const TabCenovnik = () => {
  const pricing = {
    "2D SNIMCI": [
      { name: "Retroalveolarni (RA) snimak", price: "700 din" },
      { name: "Ortopantomogram", price: "2100 din" },
      { name: "Lateralni cefalogram", price: "2100 din" },
      { name: "PA cefalogram", price: "2100 din" },
      { name: "Snimak paranazalnih šupljina", price: "2100 din" },
      { name: "Snimak TM zglobova", price: "2100 din" },
      { name: "Tomografska analiza", price: "2100 din" },
    ],
    "DODACI": [
      { name: "Izrada na filmu (Mala folija)", price: "200 din" },
      { name: "Izrada na filmu (Velika folija)", price: "400 din" },
      { name: "CD", price: "400 din" },
    ],
    "3D SNIMANJA": [
      { name: "3D polje 5×5 S", price: "4500 din" },
      { name: "3D polje 8×5 M", price: "5500 din" },
      { name: "3D polje 8×8 – 9×12 L", price: "6500 din" },
      { name: "3D maksilarnih sinusa", price: "6500 din" },
      { name: "3D TM zglobova", price: "6500 din" },
    ],
    "KEFALOMETRIJSKE ANALIZE": [
      { name: "KefAnalize", price: "1500 din" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Cenovnik</h2>
        <p className="text-muted-foreground">Sve cene su izražene u dinarima (RSD)</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {Object.entries(pricing).map(([category, items]) => (
          <div key={category} className="soft-card overflow-hidden">
            <div className="bg-muted px-6 py-4">
              <h3 className="font-semibold text-foreground uppercase tracking-wider text-sm">{category}</h3>
            </div>
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center px-6 py-4 ${
                    index % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                  }`}
                >
                  <span className="text-foreground">{item.name}</span>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-6 bg-accent rounded-2xl">
          <p className="text-sm text-accent-foreground leading-relaxed">
            2D snimci se mogu poslati putem <strong>e-mail</strong>-a i otpremaju na{" "}
            <strong className="text-primary">OrtoCloud</strong>, gde se bezbedno čuvaju 2 godine, 
            i odmah su dostupni Vama i Vašem stomatologu putem aplikacije ili web pregledača – 
            za pregled, preuzimanje i deljenje.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Usluge = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "2d";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-12 bg-muted/50 p-1 rounded-full">
              <TabsTrigger 
                value="2d" 
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
              >
                2D Snimanje
              </TabsTrigger>
              <TabsTrigger 
                value="3d"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
              >
                3D Snimanje
              </TabsTrigger>
              <TabsTrigger 
                value="kefa"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
              >
                Kefalometrija
              </TabsTrigger>
              <TabsTrigger 
                value="cenovnik"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
              >
                Cenovnik
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="2d" className="mt-0">
                <Tab2D />
              </TabsContent>
              <TabsContent value="3d" className="mt-0">
                <Tab3D />
              </TabsContent>
              <TabsContent value="kefa" className="mt-0">
                <TabKefa />
              </TabsContent>
              <TabsContent value="cenovnik" className="mt-0">
                <TabCenovnik />
              </TabsContent>
            </AnimatePresence>
          </Tabs>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Svi snimci se arhiviraju na <strong className="text-primary">OrtoCloudu</strong> 2 godine. 
              Pristup je moguć isključivo putem računara.
            </p>
          </div>
        </div>
      </main>

      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button variant="glow" size="lg" className="rounded-full shadow-glow">
          <Phone className="w-5 h-5 mr-2" />
          Zakažite Snimanje
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
