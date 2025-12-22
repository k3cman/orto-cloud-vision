import { motion } from "framer-motion";

const LocationStrip = () => {
  const locations = ["BEOGRAD", "NOVI SAD", "PANČEVO"];

  return (
    <section className="py-12 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Dostupni u 3 grada
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {locations.map((location, index) => (
              <div key={location} className="flex items-center gap-4 md:gap-8">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-2xl md:text-4xl font-serif font-bold text-foreground tracking-tight"
                >
                  {location}
                </motion.span>
                {index < locations.length - 1 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="w-2 h-2 rounded-full bg-primary hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationStrip;
