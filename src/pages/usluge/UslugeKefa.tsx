import { motion } from "framer-motion";
import { Check, FileText, Zap } from "lucide-react";

export const UslugeKefa = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-12 max-w-5xl mx-auto"
  >
    {/* Title */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Kefalometrijske analize
      </h2>
    </div>

    {/* Split: Image Left, Text Right */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - Image Placeholder */}
      <div className="soft-card p-6">
        <div className="aspect-[4/5] bg-muted/50 rounded-xl flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <div className="w-32 h-32 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center border-2 border-dashed border-primary/30">
              <FileText className="w-12 h-12 text-primary/50" />
            </div>
            <span className="text-muted-foreground/60 text-sm">
              Kefalometrijski Tracing
            </span>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-primary">KefAnalize</h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          Da bi planiranje Vaše terapije fiksnom protezom bilo potpuno precizno,
          stomatologu je potreban detaljan uvid u odnos Vaših zuba i struktura
          lica. Naše digitalne kefalometrijske analize pružaju lekaru neophodne
          podatke za sigurno i precizno planiranje Vaše terapije.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            Ključne karakteristike
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Vrhunska digitalna preciznost:
                </strong>{" "}
                Koristimo savremeni softver za precizno iscrtavanje ključnih
                tačaka lica i vilica, čime eliminišemo mogućnost manuelne
                greške.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Efikasniji put do novog osmeha:
                </strong>{" "}
                Digitalna obrada podataka značajno skraćuje vreme potrebno za
                izradu plana lečenja, omogućavajući Vašem stomatologu da se brže
                i više posveti početku Vaše terapije.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">
                  Digitalna dostupnost:
                </strong>{" "}
                Rezultati se čuvaju u OrtoCloudu Vašeg stomatologa u digitalnom
                formatu, omogućavajući brz i jednostavan uvid kad god je to
                potrebno tokom procesa lečenja.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          Za izradu KefAnalize potrebni su{" "}
          <strong className="text-foreground">
            kefalogrami (lateralni i PA)
          </strong>{" "}
          snimljeni u nekom od OrtoDent rendgen centara, uz napomenu Vašeg
          stomatologa o željenom tipu analize.
        </p>
      </div>
    </div>
  </motion.div>
);
