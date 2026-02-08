import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-girl.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const locations = ["BEOGRAD", "NOVI SAD", "PANČEVO"];

  return (
    <section className="min-h-screen pt-20 bg-background relative overflow-hidden flex flex-col">
      {/* Diagonal Geometric Background */}
      <div className="absolute top-0 right-0 w-[65%] h-full z-0 hidden lg:block">
        {/* Main diagonal stripe - crimson/red */}
        <div 
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[140%] bg-secondary opacity-90"
          style={{ transform: 'rotate(-20deg)' }}
        />
        {/* Orange stripe */}
        <div 
          className="absolute -top-[10%] -right-[5%] w-[50%] h-[130%] bg-accent opacity-85"
          style={{ transform: 'rotate(-25deg)' }}
        />
        {/* Golden accent stripe */}
        <div 
          className="absolute -top-[5%] right-0 w-[30%] h-[120%] bg-golden opacity-80"
          style={{ transform: 'rotate(-28deg)' }}
        />
      </div>

      {/* Mobile diagonal bg */}
      <div className="absolute top-0 right-0 w-full h-[40%] z-0 lg:hidden">
        <div 
          className="absolute -top-[30%] -right-[30%] w-[120%] h-[200%] bg-secondary opacity-20"
          style={{ transform: 'rotate(-20deg)' }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 flex-1 flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="italic text-secondary">Više</span> od snimka.
                <br />
                Vizija <span className="text-secondary font-extrabold">osmeha.</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
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
              <Button variant="outline" size="lg" asChild>
                <Link to="/lokacije">
                  <MapPin className="w-5 h-5 mr-2" />
                  Pronađi Lokacije
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-end h-full"
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="Dental professional holding X-ray tablet"
                className="relative z-10 max-w-full h-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: "calc(100vh - 200px)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location Strip - Dark Maroon Bar */}
      <div className="bg-primary py-6 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center space-y-2"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 font-semibold">
              Dostupni u 3 grada
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {locations.map((location, index) => (
                <div key={location} className="flex items-center gap-4 md:gap-8">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                    className="text-xl md:text-3xl font-extrabold text-primary-foreground tracking-wide"
                  >
                    {location}
                  </motion.span>
                  {index < locations.length - 1 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.15 }}
                      className="w-2 h-2 rounded-full bg-accent hidden md:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
