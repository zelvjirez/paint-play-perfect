import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-gradient py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Rezerviraj svoj termin in pridi na poligon!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Phone, label: "Telefon", value: "Pokliči nas" },
              { icon: Mail, label: "Email", value: "Piši nam" },
              { icon: MapPin, label: "Lokacija", value: "Hajdina, Ptuj" },
              { icon: Clock, label: "Odpiralno", value: "Po dogovoru" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border"
              >
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://maps.app.goo.gl/LgqQZUFozXAW2LLi6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Odpri v Google Maps
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
