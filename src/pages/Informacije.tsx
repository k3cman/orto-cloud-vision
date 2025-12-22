import { motion } from "framer-motion";
import { Clock, CalendarX, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const infoCards = [
  {
    icon: CalendarX,
    title: "Bez Zakazivanja",
    text: "Snimanje zuba i vilica se ne zakazuje. Dođite kada vama odgovara.",
  },
  {
    icon: Clock,
    title: "Trajanje",
    text: "Ceo proces traje između 5 i 10 minuta.",
  },
  {
    icon: Sparkles,
    title: "Priprema",
    text: "Nije potrebna nikakva specijalna priprema pre dolaska.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Dolazak",
    text: "Dođite u naš centar. Uput nije neophodan, ali je poželjan radi preciznosti.",
  },
  {
    number: "02",
    title: "Prijem",
    text: "Naši tehničari unose vaše podatke. Prihvatamo i digitalne upute (sa telefona).",
  },
  {
    number: "03",
    title: "Priprema",
    text: "Uklanjanje metalnih predmeta (nakit, naočare) traje samo par trenutaka.",
  },
  {
    number: "04",
    title: "Pozicioniranje",
    text: "Bezbolno i komforno pozicioniranje uz pomoć tehničara.",
  },
  {
    number: "05",
    title: "Snimanje",
    text: "Sam proces snimanja traje kratko. Koristimo moderne aparate sa minimalnim zračenjem.",
  },
  {
    number: "06",
    title: "Rezultati (OrtoCloud)",
    text: "Dobijate korisničko ime i lozinku. Snimak možete pogledati, preuzeti ili podeliti bilo kad i bilo gde.",
  },
];

const faqItems = [
  {
    question: "Bezbednost i Zračenje",
    answer: "Ovo je svetski priznata dijagnostička metoda. Naši moderni aparati višestruko smanjuju dozu zračenja u odnosu na stare metode.",
  },
  {
    question: "Deca i Snimanje",
    answer: "Poseban režim rada za decu gde je zračenje dodatno smanjeno i do 70%.",
  },
  {
    question: "Šta je OrtoCloud?",
    answer: "Sistem za arhiviranje gde vaš stomatolog trenutno dobija snimak na svom računaru, a vi mu pristupate putem šifre.",
  },
];

const Informacije = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Sve što treba da znate o snimanju zuba.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Brzo, komforno i bez zakazivanja. Vaš vodič kroz proces u Ortodentu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Kako izgleda proces?
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-first lg:order-last"
              >
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Slika procesa snimanja
                      </p>
                    </div>
                  </div>
                  {/* Pink shadow effect */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10 blur-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Česta pitanja i bezbednost
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Posetite nas još danas.
              </h2>
              <Button variant="glow" size="lg" asChild>
                <Link to="/lokacije">
                  <MapPin className="w-5 h-5 mr-2" />
                  Pronađi lokaciju
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Informacije;
