import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-girl.png";
const Hero = () => {
  const locations = ["BEOGRAD", "NOVI SAD", "PANČEVO"];
  return <section className="min-h-screen pt-20 bg-background relative overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 lg:py-20 flex-1 py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left - Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="space-y-8">
            <div className="space-y-4">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight text-foreground" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                Više od snimka.
                <br />
                Vizija <span className="text-primary">osmeha</span>.
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                Najpreciznija 2D i 3D dijagnostika. Minimalno zračenje.
                <br />
                Rezultati dostupni odmah na OrtoCloud-u.
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              <Button variant="glow" size="xl">
                <MapPin className="w-5 h-5 mr-2" />
                Pronađi Lokacije
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative flex justify-center lg:justify-end items-end h-full">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />

              <motion.img src={heroImage} alt="Dental professional holding X-ray tablet" className="relative z-10 max-w-full h-auto object-contain drop-shadow-2xl" style={{
              maxHeight: "calc(100vh - 200px)"
            }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location Strip - Now part of Hero */}
      <div className="border-t border-border/30 py-[12px]">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Dostupni u 3 grada
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {locations.map((location, index) => <div key={location} className="flex items-center gap-4 md:gap-8">
                  <motion.span initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.15
              }} className="text-2xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
                    {location}
                  </motion.span>
                  {index < locations.length - 1 && <motion.span initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                duration: 0.3,
                delay: 1 + index * 0.15
              }} className="w-2 h-2 rounded-full bg-primary hidden md:block" />}
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;