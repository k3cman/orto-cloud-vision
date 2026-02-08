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
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">Ortopantomogram</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Ortopantomogram ("<strong className="text-foreground">ortopan</strong>") je panoramski snimak koji pruža sveobuhvatan pregled obe vilice, svih zuba, villičnih zglobova i okolnih struktura. Kao najtraženiji snimak, predstavlja osnovni alat u početnoj dijagnostici i planiranju terapije u gotovo svim granama stomatologije.
      </p>
      <ImagePlaceholder label="Ortopantomogram" className="h-56" />
    </div>

    {/* Section 3: Lateralni & PA Cefalogram */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Lateralni kefalogram</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lateralni kefalogram ("<strong className="text-foreground">telerendgen</strong>") je profilni rendgenski snimak glave koji prikazuje kosti, zube i meka tkiva u bočnoj projekciji. Neophodan je u ortodonciji za analizu odnosa vilica, planiranje terapije Telecom pristupom i praćenje napretka lečenja.
        </p>
        <ImagePlaceholder label="Lateralni kefalogram" className="h-48" />
      </div>

      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">PA (posteroanteriorni) kefalogram</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          PA kefalogram je rendgenski snimak glave iz prednje projekcije. Koristi se za procenu simetrije lica, širine vilica i položaja dentoalveolarnih struktura. Posebno je koristan kod planiranja ortodontskih i hirurških intervencija.
        </p>
        <ImagePlaceholder label="PA kefalogram" className="h-48" />
      </div>
    </div>

    {/* Section 4: Paranazalne šupljine & TM zglobovi */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Snimak paranazalnih šupljina</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ovaj snimak vizualizuje maksilarne, frontalne i druge sinuse, prušajući uvid u njihovu prohodnost i stanje. Pomaže u dijagnostici upalnih procesa, otkrivanju cista ili polipa, kao i u utvrđivanju odnosa između zuba gornje vilice i sinusnog dna pre hirurških zahvata.
        </p>
        <ImagePlaceholder label="Snimak paranazalnih šupljina" className="h-48" />
      </div>

      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Snimak TM (temporomandibularnih) zglobova</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Snimak villičnih zglobova omogućava procenu položaja i oblika zglobnih površina u otvorenom i zatvorenom položaju usta. Koristi se kod pacijenata koji osećaju bol, pucketanje ili nemogućnost pri žvakanju, kako bi se precizno dijagnostikovale strukturne, traumatske ili degenerativne promene zgloba.
        </p>
        <ImagePlaceholder label="Snimak TM zgloba" className="h-48" />
      </div>
    </div>

    {/* Section 5: Tomografske analize */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">Tomografske analize</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Tomografska analiza predstavlja specijalne 2D preseke izvučene iz različitih 3D snimaka skeniranih izabranog segmenta vilice. Ovi preseci omogućavaju lekaru da vidi poprečni presek kosti, što je od presudnog značaja za sigurno planiranje i ugradnju implantata.
      </p>
      <ImagePlaceholder label="Snimak tomografije sa analizom za implantologiju" className="h-56" />
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
    className="space-y-12 max-w-5xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        3D/CBCT <span className="text-primary">(Cone Beam Computed Tomography)</span>
      </h2>
    </div>

    {/* Split: Image Left, Text Right */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - 3D Image Placeholder */}
      <div className="soft-card p-8">
        <div className="aspect-[4/5] bg-muted/50 rounded-2xl flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-28 h-28 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-5xl">🦷</span>
            </div>
            <span className="text-muted-foreground/60 text-sm">3D CBCT Prikaz</span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-primary">
          3D/CBCT – Zlatni standard dijagnostike
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          CBCT tehnologija koristi konusni snop rendgenskih zraka za dobijanje preciznog 3D prikaza Vaših zuba i vilica. Za razliku od klasičnog skenera (CT), CBCT koristi neuporedivo manje doze zračenja, čineći snimanje maksimalno bezbednim.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Za Vas to znači precizniju dijagnozu, bezbedniju intervenciju i plan lečenja potpuno prilagođen Vašoj anatomiji.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm">
            Gde se sve koristi 3D snimak?
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Implantologija i hirurgija:</strong> Sigurno postavljanje implantata i bezbedno vađenje umnjaka uz jasan uvid u položaj nerava.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Endodoncija:</strong> Precizno otkrivanje kanala i upalnih procesa na vrhu korena zuba.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Ortodoncija i TMZ:</strong> Analiza koštanih struktura lica i jasan prikaz viličnih zglobova (temporomandibularni zglob).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Maksilofacijalna hirurgija:</strong> Detekcija trauma, preloma i patoloških promena u koštanom tkivu.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* Tri veličine polja - 3 column row */}
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-foreground text-center">Tri veličine polja</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">S</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">Malo Polje (5 × 5 cm)</h5>
          <p className="text-muted-foreground text-xs">Obuhvata frontalni deo ili jednu stranu gornje ili donje vilice.</p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">M</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">Srednje Polje (8 × 5 cm)</h5>
          <p className="text-muted-foreground text-xs">Obuhvata celu gornju ili celu donju vilicu.</p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">L</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">Veliko Polje (8 × 8 cm / 12 × 9 cm)</h5>
          <p className="text-muted-foreground text-xs">Obuhvata obe vilice.</p>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="p-4 bg-muted/50 rounded-xl text-center">
      <p className="text-sm text-muted-foreground">
        3D snimci se izdaju na CD-u i otpremaju na <strong className="text-primary">OrtoCloud</strong>, gde su 15 dana dostupni Vama i Vašem stomatologu. Pristup je moguć isključivo putem računara.
      </p>
    </div>
  </motion.div>
);

const TabKefa = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-5xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Kefalometrijske analize</h2>
    </div>

    {/* Split: Image Left, Text Right */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - Image Placeholder */}
      <div className="soft-card p-6">
        <div className="aspect-[4/5] bg-muted/50 rounded-xl flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <div className="w-32 h-32 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center border-2 border-dashed border-primary/30">
              <FileText className="w-12 h-12 text-primary/50" />
            </div>
            <span className="text-muted-foreground/60 text-sm">Kefalometrijski Tracing</span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-primary">KefAnalize</h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          Da bi planiranje Vaše terapije fiksnom protezom bilo potpuno precizno, stomatologu je potreban detaljan uvid u odnos Vaših zuba i struktura lica. Naše digitalne kefalometrijske analize pružaju lekaru neophodne podatke za sigurno i precizno planiranje Vaše terapije.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            Ključne karakteristike
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Vrhunska digitalna preciznost:</strong> Koristimo savremeni softver za precizno iscrtavanje ključnih tačaka lica i vilica, čime eliminišemo mogućnost manuelne greške.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Efikasniji put do novog osmeha:</strong> Digitalna obrada podataka značajno skraćuje vreme potrebno za izradu plana lečenja, omogućavajući Vašem stomatologu da se brže i više posveti početku Vaše terapije.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Digitalna dostupnost:</strong> Vaši rezultati se čuvaju u OrtoCloudu Vašeg stomatologa u digitalnom formatu, omogućavajući brz i jednostavan uvid kad god je to potrebno tokom procesa lečenja.</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          Za izradu KefAnalize potrebni su <strong className="text-foreground">kefalogrami (lateralni i PA)</strong> snimljeni u nekom od OrtoDent rendgen centara, uz napomenu Vašeg stomatologa o željenom tipu analize.
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
