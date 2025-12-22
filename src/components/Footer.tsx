import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Usluge", href: "#usluge" },
    { label: "Lokacije", href: "#lokacije" },
    { label: "Cenovnik", href: "#cenovnik" },
    { label: "Za Doktore", href: "#za-doktore" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const services = [
    { label: "2D Snimanje", href: "#2d" },
    { label: "3D CBCT", href: "#3d" },
    { label: "Kefalometrija", href: "#kefalometrija" },
    { label: "OrtoCloud", href: "#ortocloud" },
  ];

  const locations = [
    { city: "Beograd", address: "Bulevar Kralja Aleksandra 73" },
    { city: "Novi Sad", address: "Bulevar Oslobođenja 42" },
    { city: "Pančevo", address: "Vojvode Radomira Putnika 12" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">D</span>
              </div>
              <span className="font-serif text-xl font-semibold">OrtoDent</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Lider u dentalnoj radiologiji sa preko 15 godina iskustva. Najsavremenija tehnologija za vašu dijagnostiku.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
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
            <h4 className="font-serif font-semibold text-lg">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
            <h4 className="font-serif font-semibold text-lg">Usluge</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-serif font-semibold text-lg">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">+381 11 123 4567</p>
                  <p className="text-primary-foreground/50 text-xs">Ponedeljak - Petak</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm">info@ortodent.rs</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">08:00 - 20:00</p>
                  <p className="text-primary-foreground/50 text-xs">Subotom do 14:00</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 OrtoDent. Sva prava zadržana.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Politika privatnosti
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Uslovi korišćenja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
