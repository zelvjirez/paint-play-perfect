import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Heart, Users } from "lucide-react";

const occasions = [
  {
    icon: PartyPopper,
    title: "Rojstni dnevi",
    description: "Nepozaben rojstni dan poln adrenalina in smeha.",
  },
  {
    icon: Heart,
    title: "Fantovščine",
    description: "Najboljša poslovilna zabava pred poroko.",
  },
  {
    icon: Briefcase,
    title: "Team building",
    description: "Krepitev ekipnega duha na zabaven način.",
  },
  {
    icon: Users,
    title: "Druženje",
    description: "S prijatelji, družino ali sodelavci.",
  },
];

const OccasionsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Za vsako priložnost
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Paintball popestri vsako druženje — od praznovanj do poslovnih
            dogodkov.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionsSection;
