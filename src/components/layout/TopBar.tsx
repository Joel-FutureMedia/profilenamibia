import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary text-secondary-foreground py-2 hidden md:block"
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-xs">
        <div className="flex items-center gap-6">
          <a 
            href="tel:+264612345678" 
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-3 h-3" />
            <span>+264 61 234 5678</span>
          </a>
          <a 
            href="mailto:info@profileinvestments.com.na" 
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-3 h-3" />
            <span>info@profileinvestments.com.na</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-xs text-secondary-foreground/70">
          <span>Windhoek, Namibia</span>
          <span className="w-px h-3 bg-secondary-foreground/30" />
          <span>Mon - Fri: 8:00 - 17:00</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
