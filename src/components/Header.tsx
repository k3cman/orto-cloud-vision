import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Informacije", href: "/informacije", isRoute: true },
    { name: "Za Stomatologe", href: "/za-doktore", isRoute: true },
    { name: "Lokacije i Kontakt", href: "/lokacije", isRoute: true },
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
            <span className="text-primary-foreground font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-semibold text-foreground">OrtoDent</span>
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
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            )
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="glow" size="default" asChild>
            <Link to="#ortocloud">
              <Cloud className="w-4 h-4 mr-1" />
              OrtoCloud
            </Link>
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border/50"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to="/usluge"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Usluge
            </Link>
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
