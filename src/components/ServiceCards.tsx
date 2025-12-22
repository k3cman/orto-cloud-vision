import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import service2d from "@/assets/service-2d.png";
import service3d from "@/assets/service-3d.png";
import serviceCephalometry from "@/assets/service-cephalometry.png";

interface ServiceCardProps {
  image: string;
  title: string;
  subtitle: string;
  index: number;
}

const ServiceCard = ({ image, title, subtitle, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-card">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Pink Gradient Overlay */}
        <div className="absolute inset-0 card-gradient-overlay" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <motion.div
            initial={{ y: 10, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
              {title}
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base">
              {subtitle}
            </p>
            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 text-primary-foreground font-medium text-sm">
                Saznaj više
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      image: service2d,
      title: "2D Snimanje",
      subtitle: "Ortopan, Retroalveolar",
    },
    {
      image: service3d,
      title: "3D Snimanje",
      subtitle: "CBCT, Implantologija",
    },
    {
      image: serviceCephalometry,
      title: "Kefalometrija",
      subtitle: "Analize za ortodonte",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Naše <span className="text-primary">Usluge</span>
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
