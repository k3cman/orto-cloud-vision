import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import service2d from "@/assets/service-2d.png";
import service3d from "@/assets/service-3d.png";
import serviceCephalometry from "@/assets/service-cephalometry.png";

interface ServiceCardProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
  index: number;
}

const ServiceCard = ({ image, title, subtitle, href, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative group cursor-pointer"
    >
      <Link to={href}>
        <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-card">
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {subtitle}
              </p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 text-primary-foreground/80 group-hover:text-primary-foreground font-medium text-sm transition-colors">
                  Saznaj više
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      image: service2d,
      title: "2D snimanje",
      subtitle: "Ortopan, dentalni radiogram, kefalogram...",
      href: "/usluge?tab=2d",
    },
    {
      image: service3d,
      title: "3D snimanje",
      subtitle: "CBCT",
      href: "/usluge?tab=3d",
    },
    {
      image: serviceCephalometry,
      title: "Kefalometrijske analize",
      subtitle: "Analize za ortodonte",
      href: "/usluge?tab=kefa",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Naše Usluge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koristimo najsavremeniju tehnologiju za preciznu dijagnostiku uz minimalno zračenje
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
