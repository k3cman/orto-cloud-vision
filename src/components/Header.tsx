import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Cloud, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navItems = [
    { name: "Informacije", href: "#informacije" },
    { name: "Lokacije", href: "#lokacije" },
    { name: "Za Doktore", href: "#za-doktore" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const uslugeItems = [
    { name: "2D Snimanje", href: "/usluge?tab=2d" },
    { name: "3D Snimanje", href: "/usluge?tab=3d" },
    { name: "Kefalometrija", href: "/usluge?tab=kefa" },
    { name: "Cenovnik", href: "/usluge?tab=cenovnik" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-serif font-bold text-xl">D</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">OrtoDent</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Usluge Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
                Usluge
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-48 bg-card border border-border shadow-raised"
            >
              {uslugeItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link 
                    to={item.href} 
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
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
            <span className="hidden sm:inline">Lokacije</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
