import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-4 md:py-8 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text">
            Who We Are
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 sm:p-8 neon-border border"
          >
            <Rocket className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl mb-4 text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Techventure was built with a clear vision to deliver reliable web development ecommerce website development and mobile app development services that support real business needs.
 We focus on creating digital solutions that are functional scalable and aligned with long term goals.
 Every project begins with understanding requirements user experience and technical expectations.
 Our approach combines thoughtful design clean development and performance focused execution.
 We believe strong digital products are created through clarity collaboration and attention to detail.
 Techventure continues to help businesses strengthen their online presence through custom development solutions.
            </p>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 sm:p-8 space-y-5"
          >
            <h3 className="font-display text-xl mb-4 text-foreground">Let’s Connect</h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Have an idea or a project in mind?
 Connect with Techventure for professional web development ecommerce solutions and app development services.
 Schedule a free consultation and take the first step toward building your digital platform.
            </p>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a
                href="mailto:techventure04@gmail.com"
                className="text-bash hover:text-primary transition-colors"
              >
                techventure04@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a
                href="tel:+919328621177"
                className="text-bash hover:text-primary transition-colors"
              >
                +91 9328621177
              </a>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-bash">Gujarat, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
