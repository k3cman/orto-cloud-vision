import { Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export { Usluge2D } from "./usluge/Usluge2D";
export { Usluge3D } from "./usluge/Usluge3D";
export { UslugeKefa } from "./usluge/UslugeKefa";

const USLUGE_TAB_PATHS = ["2d", "3d", "kefalometrija"] as const;
const USLUGE_TAB_LABELS: Record<(typeof USLUGE_TAB_PATHS)[number], string> = {
  "2d": "2D Snimanje",
  "3d": "3D Snimanje",
  kefalometrija: "Kefalometrija",
};

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UslugeLayout;
