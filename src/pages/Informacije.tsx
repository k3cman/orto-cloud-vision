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
    text: "Ceo proces traje između 5 i 15 minuta.",
  },
  {
    icon: Sparkles,
    title: "Priprema",
    text: "Nije potrebna nikakva specijalna priprema pre dolaska.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Dolazak",
    text: "Dođite u naš rendgen centar. Uput nije neophodan, ali je poželjan radi preciznosti.",
  },
  {
    number: "2",
    title: "Prijem",
    text: "Registracija pacijenta, unos osnovnih podataka i odabir željenog tipa snimka.",
  },
  {
    number: "3",
    title: "Priprema",
    text: "Uklanjanje metalnih predmeta (nakit, naočare) i srodnih proteza.",
  },
  {
    number: "4",
    title: "Pozicioniranje",
    text: "Precizno pozicioniranje uz pomoć radnog zaposlenog.",
  },
  {
    number: "5",
    title: "Snimanje",
    text: "Sam proces snimanja traje svega nekoliko sekundi.",
  },
  {
    number: "6",
    title: "Rezultati (OrtoCloud)",
    text: "Dobijate korisničko ime i lozinku.",
  },
];

const faqItems = [
  {
    question: "Zašto mi je potreban snimak zuba?",
    answer:
      "Snimak zuba omogućava stomatologu detaljan uvid u stanje vaših zuba, vilica i okolnih struktura koji nije moguć golim okom. To je ključan dijagnostički alat za planiranje terapije, otkrivanje karijesa, procenu stanja korena i mnoge druge procedure.",
  },
  {
    question:
      "Da li mi je potreban uput stomatologa i da li mora biti u papirnoj formi?",
    answer:
      "Uput nije obavezan, ali je poželjan radi preciznosti snimanja. Prihvatamo i digitalne upute – možete ih pokazati sa telefona. Ukoliko nemate uput, naši tehničari će vam pomoći da odaberete odgovarajući tip snimka.",
  },
  {
    question: "Da li je snimanje zuba bezbedno?",
    answer:
      "Da, ovo je svetski priznata dijagnostička metoda. Naši moderni digitalni aparati višestruko smanjuju dozu zračenja u odnosu na starije metode. Doza zračenja pri dentalnom snimanju je veoma niska i smatra se potpuno bezbednom.",
  },
  {
    question: "Da li deca smeju da snimaju zube?",
    answer:
      "Da, deca mogu da snimaju zube. Koristimo poseban režim rada za decu gde je zračenje dodatno smanjeno i do 70%. Snimanje je brzo i bezbolno, a naši tehničari su obučeni za rad sa najmlađim pacijentima.",
  },
  {
    question: "Da li trudnice i dojilje smeju da snimaju zube?",
    answer:
      "Generalno se preporučuje izbegavanje rendgenskog snimanja tokom trudnoće, osim u hitnim slučajevima. Dojilje mogu bezbedno da snimaju zube. Za sve nedoumice, konsultujte se sa vašim lekarom pre dolaska.",
  },
  {
    question:
      "Kada i na koji način dobijam svoj snimak i kako mogu da ga podelim sa stomatologom?",
    answer:
      "Snimak dobijate odmah nakon snimanja putem OrtoCloud platforme. Dobićete korisničko ime i lozinku kojima možete pristupiti snimku sa bilo kog uređaja, pregledati ga, preuzeti ili podeliti sa vašim stomatologom jednim klikom.",
  },
  {
    question: "Koliko dugo je snimak zuba validan za stomatologa?",
    answer:
      "Validnost snimka zavisi od tipa i svrhe snimanja. Generalno, 2D snimci su relevantni 6-12 meseci, dok 3D snimci mogu biti korisni i duže. Vaš stomatolog će proceniti da li je potreban novi snimak u zavisnosti od planiranog tretmana.",
  },
];

const Informacije = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sve što treba da znate o snimanju zuba.
              </h1>
              <p className="text-muted-foreground text-lg">
                Vaš vodič kroz proces snimanja u Ortodentu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Info Cards */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="soft-card p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Kako izgleda proces?
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
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
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-muted-foreground/60 text-sm">
                        Slika procesa snimanja
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Česta pitanja
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 shadow-card"
                  >
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Posetite nas još danas.
              </h2>
              <Button
                variant="raised"
                size="lg"
                asChild
              >
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
