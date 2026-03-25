import { Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Phone, Check, Zap, FileText } from "lucide-react";

const USLUGE_TAB_PATHS = ["2d", "3d", "kefalometrija"] as const;
const USLUGE_TAB_LABELS: Record<(typeof USLUGE_TAB_PATHS)[number], string> = {
  "2d": "2D Snimanje",
  "3d": "3D Snimanje",
  kefalometrija: "Kefalometrija",
};

const RETROALVEOLARNI_SNIMAK_SRC = encodeURI(
  "/images/Retroalveolarni snimak.jpg",
);
const RETROKORONALNI_SNIMAK_SRC = "/images/Retrokoronalni snimak.jpg";

const ImagePlaceholder = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => (
  <div
    className={`bg-muted/60 rounded-xl flex items-center justify-center ${className}`}
  >
    <span className="text-muted-foreground/60 text-sm">{label}</span>
  </div>
);

/** Mimics intraoral radiographs on blue-green film base (clinical “printed film” look). */
const DentalXrayFilmFrame = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title?: string;
}) => (
  <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl border border-cyan-950/25 bg-[hsl(206,44%,15%)]">
    <img
      src={src}
      alt={alt}
      title={title}
      className="relative z-[1] h-full w-full object-contain brightness-[1.04] contrast-[1.07]"
      loading="lazy"
      decoding="async"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] bg-gradient-to-b from-sky-300/25 via-cyan-600/38 to-blue-950/45 mix-blend-color"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[3] rounded-[inherit] mix-blend-soft-light bg-gradient-to-tr from-white/[0.07] via-transparent to-cyan-950/20"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] shadow-[inset_0_0_90px_rgba(8,28,45,0.55)]"
    />
  </div>
);

export const Usluge2D = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-4xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        2D rendgenski snimci
      </h2>
    </div>

    {/* Section 1: Retroalveolarni */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Retroalveolarni i retrokoronalni snimak
      </h3>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
        <p>
          Ovi <strong className="text-foreground">intraoralni snimci</strong> (
          <strong className="text-foreground">dentalni radiogrami</strong>)
          poznati i kao &quot;
          <strong className="text-foreground">mali snimci</strong>
          &quot; omogućavaju detaljan uvid u pojedinačne zube i okolne
          strukture.
        </p>
        <p>
          -{" "}
          <strong className="text-foreground">
            Retroalveolarni snimak (RA)
          </strong>
          : Prikazuje ceo zub (krunu i koren) sa okolnom kosti. Nezaobilazan je
          za analizu korenskih kanala, uočavanje upalnih procesa na vrhu korena
          i kontrolu nakon terapijskih zahvata.
        </p>
        <p>
          -{" "}
          <strong className="text-foreground">
            Retrokoronalni snimak (RK / Bite-wing)
          </strong>
          : Prikazuje samo krune zuba gornje i donje vilice, idealan je za
          otkrivanje karijesa u međuzubnim prostorima kao i za ranu detekciju
          problema na spojevima postojećih plombi i krunica.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <figure className="m-0 space-y-2">
          <DentalXrayFilmFrame
            src={RETROALVEOLARNI_SNIMAK_SRC}
            alt="Retroalveolarni snimak (RA) – rendgenski prikaz kruna, korena i okolne kosti zuba"
            title="Retroalveolarni snimak (RA)"
          />
          <figcaption className="text-center text-sm text-muted-foreground leading-snug px-1">
            <span className="font-medium text-foreground">
              Retroalveolarni snimak (RA)
            </span>
            <span className="block mt-0.5">
              Prikaz kruna, korena i alveolarne kosti pojedinačnih zuba.
            </span>
          </figcaption>
        </figure>
        <figure className="m-0 space-y-2">
          <DentalXrayFilmFrame
            src={RETROKORONALNI_SNIMAK_SRC}
            alt="Retrokoronalni snimak (RK), bite-wing – rendgenski prikaz kruna gornje i donje vilice"
            title="Retrokoronalni snimak – bite-wing (RK)"
          />
          <figcaption className="text-center text-sm text-muted-foreground leading-snug px-1">
            <span className="font-medium text-foreground">
              Retrokoronalni snimak (RK) — bite-wing
            </span>
            <span className="block mt-0.5">
              Prikaz međuzubnih površina — korisno za dijagnostiku karijesa i
              kontakt plombi.
            </span>
          </figcaption>
        </figure>
      </div>
    </div>

    {/* Section 2: Ortopantomogram */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Ortopantomogram
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Ortopantomogram ("<strong className="text-foreground">ortopan</strong>")
        je panoramski snimak koji pruža sveobuhvatan prikaz obe vilice, svih
        zuba, viličnih zglobova i okolnih struktura. Zahvaljujući širem uvidu u
        stanje zuba i kosti, ortopantomogram predstavlja osnovni alat u početnoj
        dijagnostici i stomatolozima je često potreban već pri prvoj poseti, kao
        i pri kontrolnim pregledima.
      </p>
      <ImagePlaceholder label="Ortopantomogram" className="h-56" />
    </div>

    {/* Section 3: Lateralni & PA Cefalogram */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Lateralni kefalogram
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lateralni kefalogram ("
          <strong className="text-foreground">telerendgen</strong>") je profilni
          rendgenski snimak glave koji prikazuje kosti, zube i meka tkiva u
          bočnoj projekciji. Neophodan je u ortodonciji za analizu odnosa
          vilica, planiranje terapije fiksnom protezom i praćenje napretka
          lečenja.
        </p>
        <ImagePlaceholder label="Lateralni kefalogram" className="h-48" />
      </div>

      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          PA (posteroanteriorni) kefalogram
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          PA kefalogram je rendgenski snimak glave iz prednje projekcije.
          Koristi se za procenu simetrije lica, širine vilica i položaja
          dentoalveolarnih struktura. Posebno je koristan kod planiranja
          ortodontskih i hirurških intervencija.
        </p>
        <ImagePlaceholder label="PA kefalogram" className="h-48" />
      </div>
    </div>

    {/* Section 4: Paranazalne šupljine & TM zglobovi */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Snimak paranazalnih šupljina
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ovaj snimak vizuelizuje maksilarne, frontalne i druge sinuse,
          pružajući uvid u njihovu prohodnost i stanje. Pomaže u dijagnostici
          upalnih procesa, otkrivanju cista ili polipa, kao i u definisanju
          odnosa između zuba gornje vilice i sinusne šupljine pre hirurških
          zahvata.
        </p>
        <ImagePlaceholder
          label="Snimak paranazalnih šupljina"
          className="h-48"
        />
      </div>

      <div className="soft-card p-6 md:p-8 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Snimak TM zglobova
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Snimak viličnih zglobova omogućava procenu položaja i oblika zglobnih
          površina u otvorenom i zatvorenom položaju usta. Koristi se kod
          pacijenata koji osećaju bol, pucketanje ili nelagodu pri žvakanju,
          kako bi se precizno dijagnostikovala disfunkcija, trauma ili
          degenerativne promene zgloba.
        </p>
        <ImagePlaceholder label="Snimak TM zgloba" className="h-48" />
      </div>
    </div>

    {/* Section 5: Tomografske analize */}
    <div className="soft-card p-8 md:p-10 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Tomografske analize
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        Tomografske analize predstavljaju specijalne 2D preseke izvučene iz
        načinjenih 3D snimaka kreirane radi detaljnije analize specifičnih
        regija. Ovi precizni prikazi omogućavaju lekaru da vidi poprečni presek
        kosti, što je od presudnog značaja za sigurno planiranje i ugradnju
        implantata.
      </p>
      <ImagePlaceholder
        label="Snimak tomografije sa analizom za implantologiju"
        className="h-56"
      />
    </div>

    {/* Bottom Note */}
    <div className="text-center pt-4">
      <p className="text-sm text-muted-foreground">
        2D snimci se otpremaju na{" "}
        <strong className="text-primary">OrtoCloud</strong>, gde su 2 godine
        dostupni Vama i Vašem stomatologu.
      </p>
    </div>
  </motion.div>
);

export const Usluge3D = () => (
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
        3D/CBCT{" "}
        <span className="text-primary">(Cone Beam Computed Tomography)</span>
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
            <span className="text-muted-foreground/60 text-sm">
              3D CBCT Prikaz
            </span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-primary">
          3D/CBCT – Zlatni standard dijagnostike
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          CBCT tehnologija koristi konusni snop rendgenskih zraka za dobijanje
          preciznog 3D prikaza Vaših zuba i vilica. Za razliku od klasičnog
          skenera (CT), CBCT koristi neuporedivo manje doze zračenja, čineći
          snimanje maksimalno bezbednim.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Za Vas to znači precizniju dijagnozu, bezbedniju intervenciju i plan
          lečenja potpuno prilagođen Vašoj anatomiji.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm">
            Gde se sve koristi 3D snimak?
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Implantologija i hirurgija:
                </strong>{" "}
                Sigurno postavljanje implantata i bezbedno vađenje umnjaka uz
                jasan uvid u položaj nerava.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Endodoncija:</strong>{" "}
                Precizno otkrivanje kanala i upalnih procesa na vrhu korena
                zuba.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">Ortodoncija i TMZ:</strong>{" "}
                Analiza koštanih struktura lica i jasan prikaz viličnih zglobova
                (temporomandibularni zglob).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong className="text-foreground">
                  Maksilofacijalna hirurgija:
                </strong>{" "}
                Detekcija trauma, preloma i patoloških promena u koštanom tkivu.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Tri veličine polja - 3 column row */}
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-foreground text-center">
        Tri veličine polja
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">S</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Malo Polje (5 × 5 cm)
          </h5>
          <p className="text-muted-foreground text-xs">
            Obuhvata frontalni deo ili jednu stranu gornje ili donje vilice.
          </p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">M</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Srednje Polje (8 × 5 cm)
          </h5>
          <p className="text-muted-foreground text-xs">
            Obuhvata celu gornju ili celu donju vilicu.
          </p>
        </div>

        <div className="soft-card p-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">L</span>
          </div>
          <h5 className="font-semibold text-foreground text-sm">
            Veliko Polje (8 × 8 cm / 12 × 9 cm)
          </h5>
          <p className="text-muted-foreground text-xs">Obuhvata obe vilice.</p>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="p-4 bg-muted/50 rounded-xl text-center">
      <p className="text-sm text-muted-foreground">
        3D snimci se izdaju na CD-u i otpremaju na{" "}
        <strong className="text-primary">OrtoCloud</strong>, gde su 15 dana
        dostupni Vama i Vašem stomatologu. Pristup je moguć isključivo putem
        računara.
      </p>
    </div>
  </motion.div>
);

export const UslugeKefa = () => (
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
        Kefalometrijske analize
      </h2>
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
            <span className="text-muted-foreground/60 text-sm">
              Kefalometrijski Tracing
            </span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-primary">KefAnalize</h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          Da bi planiranje Vaše terapije fiksnom protezom bilo potpuno precizno,
          stomatologu je potreban detaljan uvid u odnos Vaših zuba i struktura
          lica. Naše digitalne kefalometrijske analize pružaju lekaru neophodne
          podatke za sigurno i precizno planiranje Vaše terapije.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            Ključne karakteristike
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Vrhunska digitalna preciznost:
                </strong>{" "}
                Koristimo savremeni softver za precizno iscrtavanje ključnih
                tačaka lica i vilica, čime eliminišemo mogućnost manuelne
                greške.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Efikasniji put do novog osmeha:
                </strong>{" "}
                Digitalna obrada podataka značajno skraćuje vreme potrebno za
                izradu plana lečenja, omogućavajući Vašem stomatologu da se brže
                i više posveti početku Vaše terapije.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Digitalna dostupnost:
                </strong>{" "}
                Rezultati se čuvaju u OrtoCloudu Vašeg stomatologa u digitalnom
                formatu, omogućavajući brz i jednostavan uvid kad god je to
                potrebno tokom procesa lečenja.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          Za izradu KefAnalize potrebni su{" "}
          <strong className="text-foreground">
            kefalogrami (lateralni i PA)
          </strong>{" "}
          snimljeni u nekom od OrtoDent rendgen centara, uz napomenu Vašeg
          stomatologa o željenom tipu analize.
        </p>
      </div>
    </div>
  </motion.div>
);

export const UslugeCenovnik = () => {
  const pricing = {
    "2D SNIMCI": [
      { name: "Retroalveolarni i retrokoronalni snimak", price: "800" },
      { name: "Ortopantomogram", price: "2500" },
      { name: "Lateralni cefalogram", price: "2500" },
      { name: "PA cefalogram", price: "2500" },
      { name: "Snimak paranazalnih šupljina", price: "2500" },
      { name: "Snimak TM zglobova", price: "2500" },
      { name: "Tomografska analiza", price: "2500" },
    ],
    DODACI: [
      { name: "Izrada na filmu (Mala folija)", price: "100" },
      { name: "Izrada na filmu (Velika folija)", price: "200" },
      { name: "CD", price: "200" },
    ],
    "3D SNIMANJA": [
      { name: "3D polje 5×5 - S", price: "4500" },
      { name: "3D polje 8×5 - M", price: "5500" },
      { name: "3D polje 8×8 / 9×12 - L", price: "6500" },
      { name: "3D TM zglobova", price: "6500" },
    ],
    "KEFALOMETRIJSKE ANALIZE": [{ name: "KefAnalize", price: "1500" }],
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
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Cenovnik
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {Object.entries(pricing).map(([category, items]) => (
          <div key={category} className="soft-card overflow-hidden">
            <div className="bg-muted px-6 py-4">
              <h3 className="font-semibold text-foreground uppercase tracking-wider text-sm">
                {category}
              </h3>
            </div>
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-6 py-4 ${
                    index % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <span className="text-foreground">{item.name}</span>
                  <span className="font-medium text-primary">
                    {item.price} RSD
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-6 rounded-2xl">
          <p className="text-sm leading-relaxed">
            Plaćanje je moguće izvršiti gotovinom ili platnim karticama,
            isključivo u dinarskoj protivvrednosti.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const UslugeLayout = () => {
  const { pathname } = useLocation();
  const pathSegment = pathname.replace(/^\/usluge\/?/, "") || "2d";
  const currentTab = USLUGE_TAB_PATHS.includes(
    pathSegment as (typeof USLUGE_TAB_PATHS)[number],
  )
    ? pathSegment
    : "2d";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Tabs value={currentTab} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12 bg-muted/50 p-1 rounded-full">
              {USLUGE_TAB_PATHS.map((path) => (
                <TabsTrigger
                  key={path}
                  value={path}
                  asChild
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all"
                >
                  <Link to={`/usluge/${path}`}>{USLUGE_TAB_LABELS[path]}</Link>
                </TabsTrigger>
              ))}
            </TabsList>

            <Outlet />
          </Tabs>

          {/* Footer Note */}
          {/* <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Svi snimci se arhiviraju na{" "}
              <strong className="text-primary">OrtoCloudu</strong> 2 godine.
              Pristup je moguć isključivo putem računara.
            </p>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UslugeLayout;
