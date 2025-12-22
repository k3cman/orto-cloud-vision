import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Poverenje hiljada stomatologa i pacijenata širom Srbije
          </p>
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
              className="soft-card p-8 relative group hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
