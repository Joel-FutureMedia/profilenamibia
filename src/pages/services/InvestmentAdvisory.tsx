import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import slider3 from "@/assets/slider3.jpg";
import windhoekSkyline from "@/assets/windhoek-skyline.jpg";

const features = [
  "Market analysis and research",
  "Investment strategy development",
  "Risk assessment and mitigation",
  "Portfolio diversification guidance",
  "Due diligence services",
  "Ongoing investment monitoring",
];

const InvestmentAdvisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slider3}
            alt="Investment Advisory"
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
              Investment Advisory
            </h1>
            <p className="text-lg text-secondary-foreground/70">
              Expert guidance for strategic wealth growth and portfolio optimization in Southern Africa.
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
                Strategic Investment Guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our investment advisory services are designed to help you navigate the complex world of investments in Namibia and beyond. We provide personalized guidance based on your financial goals, risk tolerance, and investment timeline.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With deep knowledge of local and regional markets, our advisors help you identify opportunities and make informed decisions that align with your wealth-building objectives.
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
                  Schedule Consultation
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
                  src={windhoekSkyline}
                  alt="Windhoek Business District"
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

export default InvestmentAdvisory;
