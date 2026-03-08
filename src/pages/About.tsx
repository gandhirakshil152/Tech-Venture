import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Rocket, Heart, Code2, Award, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQs from "./FAQs";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We embrace new technologies and creative solutions to solve complex problems.", color: "from-[hsl(50,100%,50%)] to-[hsl(30,100%,55%)]", shadow: "hsl(50,100%,50%)" },
  { icon: Heart, title: "Passion Driven", desc: "Every project is built with genuine passion and dedication to excellence.", color: "from-[hsl(340,80%,55%)] to-[hsl(360,80%,60%)]", shadow: "hsl(340,80%,55%)" },
  { icon: Code2, title: "Quality Code", desc: "Clean, maintainable, and scalable code is our standard — never a shortcut.", color: "from-[hsl(183,100%,50%)] to-[hsl(200,100%,60%)]", shadow: "hsl(183,100%,50%)" },
  { icon: Users, title: "Client Focused", desc: "Your success is our success. We listen, adapt, and deliver beyond expectations.", color: "from-[hsl(260,80%,55%)] to-[hsl(290,80%,65%)]", shadow: "hsl(260,80%,60%)" },
];

const stats = [
  { label: "Projects Delivered", value: "10+", icon: Award },
  { label: "Happy Clients", value: "15+", icon: Heart },
  { label: "Technologies", value: "20+", icon: Code2 },
  { label: "Growing Fast", value: "100%", icon: TrendingUp },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={Users}
        subtitle="About Us"
        title="Who We Are"
        description="Techventure is driven by curiosity creativity and a passion for technology. We aim to help businesses move forward with confidence through reliable digital platforms and thoughtful development."
        gradient="radial-gradient(ellipse at 50% 30%, hsl(260 80% 15% / 0.5), transparent 60%), radial-gradient(ellipse at 80% 70%, hsl(183 100% 15% / 0.3), transparent 50%)"
        orbColors={["hsl(260, 80%, 60%)", "hsl(183, 100%, 50%)", "hsl(340, 80%, 55%)"]}
      />

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="max-w-4xl mx-auto px-6 lg:px-0"
>
  <p className="font-accent text-primary text-base tracking-[0.35em] uppercase mb-5">
    Our Story
  </p>

  <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-10">
    From Dream to Reality
  </h2>

  <div className="space-y-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
    <p>
      Techventure was founded with a vision to create reliable digital solutions that help businesses grow in a fast evolving digital world. Our focus is on understanding real business needs and building technology that supports long term success.
Through professional web development ecommerce website development and mobile app development Techventure aims to help businesses strengthen their online presence with scalable and performance driven solutions.


    </p>

  </div>
</motion.div>

            <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="glass rounded-3xl p-10 lg:p-20 neon-border border max-w-3xl mx-auto"
>
  <div className="flex items-center gap-4 mb-8">
    <Target className="w-8 h-8 text-primary" />
    <h3 className="font-display text-3xl lg:text-4xl neon-text">
      Our Mission
    </h3>
  </div>

  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
    To empower businesses of all sizes with innovative, affordable, and
    high-quality digital solutions that drive growth and create lasting impact.
  </p>

  <div className="flex items-center gap-4 mb-8">
    <Rocket className="w-8 h-8 text-accent" />
    <h3 className="font-display text-3xl lg:text-4xl text-accent">
      Our Vision
    </h3>
  </div>

  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
    To become a leading digital agency recognized for our creativity,
    technical excellence, and commitment to client success.
  </p>
</motion.div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-display text-3xl md:text-4xl gradient-text font-bold mb-1">{stat.value}</p>
                <p className="font-accent text-bash text-muted-foreground tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-accent text-primary text-base tracking-[0.3em] uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <motion.div
  key={val.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.1, type: "spring" }}
  whileHover={{ y: -8 }}
  className="glass rounded-3xl p-10 text-center group"
>
  <div
    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center mx-auto mb-6 shadow-xl`}
    style={{ boxShadow: `0 6px 30px ${val.shadow}50` }}
  >
    <val.icon className="w-8 h-8 text-primary-foreground" />
  </div>

  <h3 className="font-accent font-bold text-xl lg:text-2xl text-foreground mb-4">
    {val.title}
  </h3>

  <p className="text-muted-foreground text-xl lg:text-xl leading-relaxed">
    {val.desc}
  </p>
</motion.div>

            ))}
          </div>
        </div>
      </section>
      <FAQs/>
    </main>
  );
};

export default About;
