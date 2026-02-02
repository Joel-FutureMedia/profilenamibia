import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import namibiaLandscape from "@/assets/namibia-landscape.jpg";

const services = [
  {
    icon: Building2,
    title: "Property Development",
    description: "Creating sustainable, modern properties that shape Namibia's urban landscape.",
    href: "/services/property-development",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance for strategic wealth growth and portfolio optimization.",
    href: "/services/investment-advisory",
  },
  {
    icon: Users,
    title: "Property Management",
    description: "Comprehensive management solutions for residential and commercial properties.",
    href: "/services/property-management",
  },
  {
    icon: Shield,
    title: "Asset Management",
    description: "Protecting and growing your investments with proven strategies.",
    href: "/services/asset-management",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption text-primary mb-4 block">What We Do</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive investment and property solutions tailored to drive growth and create lasting value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-background rounded-xl p-8 h-full shadow-elegant hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={namibiaLandscape}
                alt="Namibian Landscape"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-lg border border-border hidden md:block"
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="block text-3xl font-serif text-primary">15+</span>
                  <span className="text-xs text-muted-foreground">Years Experience</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block text-3xl font-serif text-primary">50+</span>
                  <span className="text-xs text-muted-foreground">Projects Completed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption text-primary mb-4 block">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Building a Stronger Namibia Through Strategic Investment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Profile Investment Holdings (Pty) Ltd is a proudly Namibian company committed to 
              driving economic growth through strategic property development and investment. 
              With deep roots in our community, we combine local expertise with international 
              standards to deliver exceptional value.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to create sustainable, impactful investments that benefit both 
              our stakeholders and the broader Namibian community.
            </p>
            <Link to="/about">
              <Button variant="gold" size="lg">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-caption text-primary mb-4 block">Get Started</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-6">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto">
            Partner with Profile Investment Holdings and discover how we can help you achieve 
            your investment goals. Let's build something remarkable together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services/property-development">
              <Button variant="gold-outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ServicesSection, AboutPreview, CTASection };
