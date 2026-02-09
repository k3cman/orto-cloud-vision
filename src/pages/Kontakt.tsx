import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const CONTACT_OPTIONS = ["Pacijent", "Doktor", "Ostalo"] as const;

const Kontakt = () => {
  const { toast } = useToast();
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      toast({
        title: "Izaberite opciju",
        description: "Molimo izaberite da li ste pacijent, doktor ili ostalo.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Poruka poslata!",
      description: "Odgovorićemo vam u najkraćem roku.",
    });
    setRole("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="bg-cream py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Kontakt
              </h1>
              <p className="text-muted-foreground text-lg">
                Pošaljite nam poruku — odgovorićemo što je pre moguće.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-foreground text-sm">
                    Ja sam <span className="text-primary">*</span>
                  </Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Izaberite..." />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-sm">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vas@email.rs"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground text-sm">
                    Poruka <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Vaša poruka..."
                    className="min-h-[160px] resize-y"
                  />
                </div>
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full sm:w-auto gap-2"
                >
                  <Send className="w-4 h-4" />
                  Pošalji
                </Button>
              </form>

              <p className="mt-8 text-sm text-muted-foreground text-center">
                Za lokacije rendgen centara i telefone pogledajte{" "}
                <Link
                  to="/lokacije"
                  className="text-primary font-medium hover:underline"
                >
                  stranicu Lokacije
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
