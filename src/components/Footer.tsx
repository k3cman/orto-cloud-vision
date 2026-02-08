import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Lokacije i Kontakt", href: "/lokacije", isRoute: true },
    { label: "Cenovnik", href: "/usluge?tab=cenovnik", isRoute: true },
    { label: "Za Doktore", href: "/za-doktore", isRoute: true },
    { label: "Informacije", href: "/informacije", isRoute: true },
  ];

  const services = [
    { label: "2D Snimanje", href: "/usluge?tab=2d", isRoute: true },
    { label: "3D CBCT", href: "/usluge?tab=3d", isRoute: true },
    { label: "Kefalometrija", href: "/usluge?tab=kefa", isRoute: true },
    { label: "OrtoCloud", href: "#ortocloud", isRoute: false },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground relative overflow-hidden">
      {/* Diagonal accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-accent-line" />

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">OrtoDent</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Lider u dentalnoj radiologiji sa preko 17 godina iskustva. Najsavremenija tehnologija za vašu dijagnostiku.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-lg">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-lg">Usluge</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  {service.isRoute ? (
                    <Link
                      to={service.href}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {service.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-sm text-primary-foreground/40">
            © 2025 OrtoDent. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
