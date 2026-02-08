import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Duška Kocić",
      role: "",
      content:
        "Odlična usluga snimanja zuba, pre svega pohvale za ljubazan kadar. Lokacija, pouzdanost, profesionalnost, preciznost. Preporučujem za snimanja na način koji vam najviše odgovara.",
      rating: 5,
    },
    {
      name: "Aleksandar",
      role: "",
      content:
        "The staff was very friendly, everything was clean and tidy, and there was no line. The x-rays were taken well, everything was explained, and the results were sent to the doctor and to my personal account. I highly recommend them 😊",
      rating: 5,
    },
    {
      name: "Maja Matović",
      role: "Stomatolog",
      content:
        "Vrlo profesionalni pristup pacijentu i snimanju za 10. Super snimci. Bravo za ekipu na svim propozicijama!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Šta kažu naši <span className="text-primary">korisnici</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="soft-card p-8 relative group hover:shadow-raised transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                {testimonial.role && (
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
