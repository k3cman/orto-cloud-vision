import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-girl.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="italic">Više</span> od snimka.
                <br />
                Vizija <span className="text-primary">osmeha</span>.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Najpreciznija 2D i 3D dijagnostika. Minimalno zračenje.
                <br />
                Rezultati dostupni odmah na OrtoCloud-u.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="glow" size="xl">
                <MapPin className="w-5 h-5 mr-2" />
                Pronađi Lokacije
              </Button>
              <Button variant="raised" size="xl">
                <Cloud className="w-5 h-5 mr-2" />
                OrtoCloud Login
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
              
              <motion.img
                src={heroImage}
                alt="Dental professional holding X-ray tablet"
                className="relative z-10 max-w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
