import { motion } from "framer-motion";
import { MapPin, Camera, FileCheck, Clock } from "lucide-react";

const Timeline = () => {
  const steps = [
    {
      icon: MapPin,
      number: "1",
      title: "Poseta",
      description: "Dođite u najbliži centar bez čekanja",
    },
    {
      icon: Camera,
      number: "2",
      title: "Snimanje",
      description: "Brzo i bezbolno snimanje",
    },
    {
      icon: FileCheck,
      number: "3",
      title: "Rezultat",
      description: "Snimak odmah na OrtoCloud-u",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Kako <span className="text-primary">funkcioniše</span>?
          </h2>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center space-y-4 flex-shrink-0"
                >
                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-soft">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-glow">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-[180px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="hidden md:block timeline-connector origin-left"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Time Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-accent/80 rounded-full px-6 py-3 shadow-soft">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">
                Ceo proces traje samo <span className="text-primary font-bold">15 minuta</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
