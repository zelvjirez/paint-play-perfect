import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Osnovni",
    price: "15",
    unit: "€ / oseba",
    description: "Za manjše skupine ali hitro igro",
    features: [
      "Oprema (maska, marker, obleka)",
      "100 nabojev",
      "1 ura igre",
      "Inštruktor na poligonu",
    ],
    highlighted: false,
  },
  {
    name: "Akcijski",
    price: "25",
    unit: "€ / oseba",
    description: "Najbolj priljubljen paket",
    features: [
      "Oprema (maska, marker, obleka)",
      "200 nabojev",
      "2 uri igre",
      "Inštruktor na poligonu",
      "Dimne bombe",
      "Različni scenariji igre",
    ],
    highlighted: true,
  },
  {
    name: "Elitni",
    price: "35",
    unit: "€ / oseba",
    description: "Za prave paintball navdušence",
    features: [
      "Premium oprema",
      "300 nabojev",
      "3 ure igre",
      "Osebni inštruktor",
      "Dimne bombe & granate",
      "Različni scenariji igre",
      "Fotografiranje",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="ponudba" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Ponudba
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Izberi paket, ki ti ustreza. Možnost dokupa nabojev na poligonu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-xl p-8 border flex flex-col ${
                pkg.highlighted
                  ? "bg-card border-primary glow-amber scale-[1.03]"
                  : "bg-card border-border"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Najbolj priljubljen
                </span>
              )}

              <h3 className="font-display text-2xl text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {pkg.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-display text-gradient">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground ml-1 text-sm">
                  {pkg.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? "hero" : "heroOutline"}
                className="w-full"
                asChild
              >
                <a href="#kontakt">Rezerviraj</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
