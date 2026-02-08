import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Map, List, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Location {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  // Beograd (8 lokacija)
  { id: 1, city: "Beograd", name: "Ortodent Vračar", address: "Bulevar Kralja Aleksandra 78", phone: "+381 11 234 5678", email: "vracar@ortodent.rs", lat: 44.8015, lng: 20.4785 },
  { id: 2, city: "Beograd", name: "Ortodent Novi Beograd", address: "Bulevar Mihajla Pupina 165", phone: "+381 11 301 2233", email: "novibeograd@ortodent.rs", lat: 44.8186, lng: 20.4177 },
  { id: 3, city: "Beograd", name: "Ortodent Zemun", address: "Glavna ulica 32", phone: "+381 11 316 4455", email: "zemun@ortodent.rs", lat: 44.8438, lng: 20.4112 },
  { id: 4, city: "Beograd", name: "Ortodent Voždovac", address: "Vojvode Stepe 285", phone: "+381 11 244 6677", email: "vozdovac@ortodent.rs", lat: 44.7681, lng: 20.4872 },
  { id: 5, city: "Beograd", name: "Ortodent Čukarica", address: "Požeška 83a", phone: "+381 11 355 8899", email: "cukarica@ortodent.rs", lat: 44.7833, lng: 20.4167 },
  { id: 6, city: "Beograd", name: "Ortodent Palilula", address: "Takovska 12", phone: "+381 11 322 1100", email: "palilula@ortodent.rs", lat: 44.8125, lng: 20.4698 },
  { id: 7, city: "Beograd", name: "Ortodent Stari Grad", address: "Knez Mihailova 42", phone: "+381 11 263 4421", email: "starigrad@ortodent.rs", lat: 44.8176, lng: 20.4569 },
  { id: 8, city: "Beograd", name: "Ortodent Rakovica", address: "Patrisa Lumumbe 55", phone: "+381 11 358 7766", email: "rakovica@ortodent.rs", lat: 44.7572, lng: 20.4508 },
  // Novi Sad (4 lokacije)
  { id: 9, city: "Novi Sad", name: "Ortodent Centar NS", address: "Bulevar Oslobođenja 100", phone: "+381 21 450 1122", email: "nscentar@ortodent.rs", lat: 45.2551, lng: 19.8425 },
  { id: 10, city: "Novi Sad", name: "Ortodent Liman", address: "Narodnog Fronta 23", phone: "+381 21 469 3344", email: "liman@ortodent.rs", lat: 45.2461, lng: 19.8282 },
  { id: 11, city: "Novi Sad", name: "Ortodent Detelinara", address: "Sentandrejski put 11", phone: "+381 21 895 5566", email: "detelinara@ortodent.rs", lat: 45.2671, lng: 19.8351 },
  { id: 12, city: "Novi Sad", name: "Ortodent Petrovaradin", address: "Preradovićeva 7", phone: "+381 21 643 7788", email: "petrovaradin@ortodent.rs", lat: 45.2507, lng: 19.8617 },
  // Pančevo (2 lokacije)
  { id: 13, city: "Pančevo", name: "Ortodent Centar PА", address: "Vojvode Radomira Putnika 18", phone: "+381 13 345 9900", email: "pancevo@ortodent.rs", lat: 44.8708, lng: 20.6403 },
  { id: 14, city: "Pančevo", name: "Ortodent Strelište", address: "Žarka Zrenjanina 44", phone: "+381 13 315 2211", email: "streliste@ortodent.rs", lat: 44.8751, lng: 20.6508 },
];

const MapPlaceholder = ({ selectedLocation }: { selectedLocation: Location | null }) => {
  return (
    <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Grid pattern to simulate map */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Simulated map markers */}
      <div className="absolute inset-0">
        {locations.map((loc) => {
          const isSelected = selectedLocation?.id === loc.id;
          // Normalize coordinates to percentage positions within the container
          const minLat = 44.75, maxLat = 45.28;
          const minLng = 19.82, maxLng = 20.66;
          const top = 100 - ((loc.lat - minLat) / (maxLat - minLat)) * 80 - 10;
          const left = ((loc.lng - minLng) / (maxLng - minLng)) * 80 + 10;

          return (
            <motion.div
              key={loc.id}
              className="absolute"
              style={{ top: `${top}%`, left: `${left}%` }}
              animate={isSelected ? { scale: 1.5 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`w-4 h-4 rounded-full border-2 border-card shadow-md transition-colors duration-300 ${
                isSelected ? 'bg-primary w-5 h-5' : 'bg-primary/60'
              }`} />
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card shadow-raised rounded-lg px-3 py-1.5 whitespace-nowrap z-10"
                >
                  <p className="text-xs font-semibold text-foreground">{loc.name}</p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-card rotate-45 shadow-sm" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Center label */}
      {!selectedLocation && (
        <div className="text-center z-10 p-6">
          <Map className="w-12 h-12 text-primary/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm font-medium">Izaberite lokaciju za prikaz na mapi</p>
        </div>
      )}
    </div>
  );
};

const LocationCard = ({ 
  location, 
  isSelected, 
  onClick 
}: { 
  location: Location; 
  isSelected: boolean; 
  onClick: () => void;
}) => {
  const cityColor = location.city === "Beograd" 
    ? "bg-primary/10 text-primary" 
    : location.city === "Novi Sad" 
      ? "bg-accent text-accent-foreground" 
      : "bg-muted text-muted-foreground";

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`soft-card p-5 cursor-pointer transition-all duration-300 border-2 ${
        isSelected 
          ? 'border-primary/40 shadow-glow' 
          : 'border-transparent hover:border-primary/10 hover:shadow-raised'
      }`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground text-base">{location.name}</h3>
          <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 ${cityColor}`}>
            {location.city}
          </span>
        </div>
        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <MapPin className="w-4 h-4 text-primary/50 mt-0.5 flex-shrink-0" />
          {location.address}
        </p>
        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="w-4 h-4 text-primary/50 flex-shrink-0" />
          {location.phone}
        </a>
        <a href={`mailto:${location.email}`} className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
          <Mail className="w-4 h-4 text-primary/50 flex-shrink-0" />
          {location.email}
        </a>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>Pon-Pet 08-20h</span>
        </div>
        <Button variant="glow" size="sm" className="text-xs h-8 px-4" onClick={(e) => e.stopPropagation()}>
          Zakaži termin
        </Button>
      </div>
    </motion.div>
  );
};

const Lokacije = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showMap, setShowMap] = useState(false);

  const groupedLocations = {
    "Beograd": locations.filter(l => l.city === "Beograd"),
    "Novi Sad": locations.filter(l => l.city === "Novi Sad"),
    "Pančevo": locations.filter(l => l.city === "Pančevo"),
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setShowMap(true); // On mobile, auto-switch to map
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-cream py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Lokacije <span className="text-gradient-pink">&</span> Kontakt
              </h1>
              <p className="text-muted-foreground text-lg">
                Pronađite najbližu Ortodent lokaciju. Bez zakazivanja — dođite kada Vam odgovara.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Desktop Layout */}
        <section className="hidden lg:block">
          <div className="container mx-auto px-6">
            <div className="flex h-[calc(100vh-220px)] gap-6 py-6">
              {/* Left: Location List */}
              <div className="w-[42%] overflow-y-auto pr-4">
                <div className="space-y-8">
                  {Object.entries(groupedLocations).map(([city, locs]) => (
                    <div key={city}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <h2 className="text-lg font-semibold text-foreground">{city}</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {locs.length} {locs.length === 1 ? 'lokacija' : locs.length < 5 ? 'lokacije' : 'lokacija'}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {locs.map((loc) => (
                          <LocationCard
                            key={loc.id}
                            location={loc}
                            isSelected={selectedLocation?.id === loc.id}
                            onClick={() => setSelectedLocation(loc)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Map */}
              <div className="w-[58%]">
                <MapPlaceholder selectedLocation={selectedLocation} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Layout */}
        <section className="lg:hidden">
          <AnimatePresence mode="wait">
            {!showMap ? (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto px-6 py-6 pb-24 space-y-6"
              >
                {Object.entries(groupedLocations).map(([city, locs]) => (
                  <div key={city}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <h2 className="text-base font-semibold text-foreground">{city}</h2>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {locs.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {locs.map((loc) => (
                        <LocationCard
                          key={loc.id}
                          location={loc}
                          isSelected={selectedLocation?.id === loc.id}
                          onClick={() => handleLocationClick(loc)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto px-6 h-[calc(100vh-140px)] py-4 pb-24"
              >
                <MapPlaceholder selectedLocation={selectedLocation} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Toggle Button */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <Button
              variant="glow"
              size="lg"
              onClick={() => setShowMap(!showMap)}
              className="shadow-glow px-6 gap-2"
            >
              {showMap ? (
                <>
                  <List className="w-5 h-5" />
                  Prikaži Listu
                </>
              ) : (
                <>
                  <Map className="w-5 h-5" />
                  Prikaži Mapu
                </>
              )}
            </Button>
          </div>
        </section>
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default Lokacije;
