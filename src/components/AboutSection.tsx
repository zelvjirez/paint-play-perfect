import { motion } from "framer-motion";
import equipmentImg from "@/assets/paintball-equipment.jpg";
import { Target, Users, Shield, TreePine } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Adrenalin",
    description: "Čisti adrenalin od prvega do zadnjega strela.",
  },
  {
    icon: Users,
    title: "Timsko delo",
    description: "Strategija in komunikacija vodita do zmage.",
  },
  {
    icon: Shield,
    title: "Varnost",
    description: "Profesionalna oprema in nadzor na poligonu.",
  },
  {
    icon: TreePine,
    title: "Narava",
    description: "Poligon sredi gozdnega okolja na Hajdini.",
  },
];

const AboutSection = () => {
  return (
    <section className="section-gradient py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden glow-amber">
              <img
                src={equipmentImg}
                alt="Paintball oprema"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg opacity-30" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display text-gradient mb-6"
            >
              Kaj je paintball?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              Paintball je adrenalinska igra, kjer igralci tekmujejo med seboj in
              se streljajo z markerji — puškami z barvnimi naboji. Cilj igre je
              izločiti vse nasprotnike ali doseči dogovorjen cilj. Igra poteka na
              poligonu z ovirami sredi narave.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <feature.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
