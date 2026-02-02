import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services/property-development" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Property Development", href: "/services/property-development" },
    { name: "Property Management", href: "/services/property-management" },
    { name: "Investment Advisory", href: "/services/investment-advisory" },
    { name: "Asset Management", href: "/services/asset-management" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Profile Investment Holdings" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Profile Investment Holdings (Pty) Ltd is a leading Namibian investment company focused on property development, management, and strategic investments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-primary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/70">
                  123 Independence Avenue,<br />Windhoek, Namibia
                </span>
              </li>
              <li>
                <a
                  href="tel:+264612345678"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  +264 61 234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@profileinvestments.com.na"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  info@profileinvestments.com.na
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-secondary-foreground/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {currentYear} Profile Investment Holdings (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
