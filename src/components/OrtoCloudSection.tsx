import { motion } from "framer-motion";
import { Cloud, Smartphone, Share2, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

  const testimonials = [
    {
      name: "Dr. Marija Petrović",
      role: "Stomatolog, Beograd",
      content: "OrtoCloud nam je drastično ubrzao rad. Snimci su dostupni trenutno i u visokoj rezoluciji.",
      rating: 5,
    },
    {
      name: "Milan Jovanović",
      role: "Pacijent",
      content: "Fantastična usluga! Snimak sam imao na telefonu pre nego što sam izašao iz ordinacije.",
      rating: 5,
    },
    {
      name: "Dr. Ana Nikolić",
      role: "Ortodont, Novi Sad",
      content: "Kefalometrijske analize su precizne i dolaze sa svim potrebnim merenjima. Preporučujem!",
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
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

          {/* Right - Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="soft-card p-8 md:p-10">
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  key={currentTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-serif text-foreground leading-relaxed"
                >
                  "{testimonials[currentTestimonial].content}"
                </motion.p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial ? "bg-primary w-6" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrtoCloudSection;
