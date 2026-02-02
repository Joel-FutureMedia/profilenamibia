import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import aboutUsImage from "@/assets/about-us.jpg";
import officeImage from "@/assets/office-interior.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "Transparent and ethical practices guide all our decisions.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Committed to creating positive impact for Namibia.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Embracing modern solutions for sustainable growth.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-caption text-primary mb-4 block">About Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
              Building Namibia's Future Together
            </h1>
            <p className="text-lg text-secondary-foreground/70">
              A proudly Namibian investment company creating lasting value through strategic property development and management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutUsImage}
                  alt="Profile Investment Holdings Team"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-caption text-primary mb-4 block">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Dedicated Team, Exceptional Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Profile Investment Holdings (Pty) Ltd was established with a vision to transform Namibia's investment landscape. Our team brings together decades of experience in property development, asset management, and strategic investment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pride ourselves on our hands-on approach and deep understanding of the Namibian market. Every project we undertake reflects our commitment to quality, sustainability, and community development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our diverse workforce represents the best of Namibia – skilled professionals dedicated to building a brighter future for our nation.
              </p>
              <div className="flex items-center gap-8 text-center">
                <div>
                  <span className="block text-4xl font-serif text-primary">15+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="block text-4xl font-serif text-primary">50+</span>
                  <span className="text-sm text-muted-foreground">Projects</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="block text-4xl font-serif text-primary">200+</span>
                  <span className="text-sm text-muted-foreground">Employees</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-caption text-primary mb-4 block">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Principles That Guide Us
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-background rounded-xl p-8 text-center shadow-elegant"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="text-caption text-primary mb-4 block">Our Headquarters</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Space for Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Located in the heart of Windhoek, our modern headquarters serves as a hub for collaboration and innovation. Designed with sustainability in mind, our office reflects our commitment to building a better Namibia.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Visit Our Office
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={officeImage}
                  alt="Profile Investment Holdings Office"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
