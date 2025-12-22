import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Cloud } from "lucide-react";

const Header = () => {
  const navItems = ["Usluge", "Informacije", "Lokacije", "Za Doktore", "Kontakt"];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-serif font-bold text-xl">D</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">OrtoDent</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline-soft" size="default" className="hidden sm:inline-flex">
            <Cloud className="w-4 h-4 mr-1" />
            OrtoCloud Login
          </Button>
          <Button variant="glow" size="default">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">OrtoCloud</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
