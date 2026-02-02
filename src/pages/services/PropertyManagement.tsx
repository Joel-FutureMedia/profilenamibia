import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import slider2 from "@/assets/slider2.jpg";
import officeImage from "@/assets/office-interior.jpg";

const features = [
  "Tenant screening and management",
  "Rent collection and accounting",
  "Property maintenance coordination",
  "Regular property inspections",
  "24/7 emergency response",
  "Detailed financial reporting",
];

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slider2}
            alt="Property Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-caption text-primary mb-4 block">Our Services</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
              Property Management
            </h1>
            <p className="text-lg text-secondary-foreground/70">
              Comprehensive property management solutions that maximize your investment returns while minimizing your workload.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Expert Property Care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our property management team brings years of experience in managing residential and commercial properties across Namibia. We handle everything from tenant relations to maintenance, allowing you to enjoy passive income without the hassle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With our comprehensive management approach, your properties are maintained to the highest standards, ensuring long-term value appreciation and tenant satisfaction.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={officeImage}
                  alt="Property Management Office"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;
