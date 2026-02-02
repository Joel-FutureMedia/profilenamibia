import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import namibiaLandscape from "@/assets/namibia-landscape.jpg";
import officeImage from "@/assets/office-interior.jpg";

const features = [
  "Portfolio performance monitoring",
  "Asset allocation optimization",
  "Regular portfolio rebalancing",
  "Risk management strategies",
  "Tax-efficient investment planning",
  "Comprehensive reporting and analytics",
];

const AssetManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={namibiaLandscape}
            alt="Asset Management"
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
              Asset Management
            </h1>
            <p className="text-lg text-secondary-foreground/70">
              Protecting and growing your investments with proven strategies and expert oversight.
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
                Protecting Your Wealth
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our asset management services are designed to protect and grow your wealth over time. We employ sophisticated strategies to optimize returns while managing risk, ensuring your investments work harder for you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a focus on long-term value creation, our team continuously monitors market conditions and adjusts portfolios to capture opportunities and mitigate risks.
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
                  Learn More
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
                  alt="Asset Management Office"
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

export default AssetManagement;
