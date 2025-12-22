import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

const AnimatedStat = ({ value, label, delay }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      const suffix = value.replace(/[0-9]/g, "");
      const duration = 2000;
      const steps = 60;
      const stepValue = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current) + suffix);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center space-y-2"
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
        {displayValue}
      </span>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

const TrustStats = () => {
  const stats = [
    { value: "900+", label: "Ordinacija" },
    { value: "2M+", label: "Snimaka" },
    { value: "15", label: "Godina Iskustva" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="soft-card p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
