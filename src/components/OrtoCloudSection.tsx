import { motion } from "framer-motion";
import { Cloud, Smartphone, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import tabletXray from "@/assets/tablet-xray.png";

const OrtoCloudSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Pristup sa bilo kog uređaja",
      description: "Pregledajte snimke na telefonu, tabletu ili računaru",
    },
    {
      icon: Share2,
      title: "Lako deljenje",
      description: "Podelite snimke sa vašim stomatologom jednim klikom",
    },
    {
      icon: Shield,
      title: "Sigurno čuvanje",
      description: "Vaši snimci su zaštićeni i dostupni godinama",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - OrtoCloud Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Cloud className="w-4 h-4" />
                <span className="text-sm font-medium">OrtoCloud Platforma</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Vaši snimci, <span className="text-primary">uvek dostupni</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg">
                Pristupite vašim dentalnim snimcima bilo kad, bilo gde. Sigurno, brzo, jednostavno.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-soft flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="glow" size="lg">
              <Cloud className="w-5 h-5 mr-2" />
              Pristupite OrtoCloud-u
            </Button>
          </motion.div>

          {/* Right - Tablet Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={tabletXray}
                alt="OrtoCloud na tabletu - dentalni snimak"
                className="w-full max-w-md rounded-2xl shadow-elevated"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-light/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrtoCloudSection;
