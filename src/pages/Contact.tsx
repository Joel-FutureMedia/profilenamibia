import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import windhoekSkyline from "@/assets/windhoek-skyline.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+264 61 234 5678",
    link: "tel:+264612345678",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@profileinvestments.com.na",
    link: "mailto:info@profileinvestments.com.na",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Independence Avenue, Windhoek, Namibia",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 8:00 AM - 5:00 PM",
    link: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={windhoekSkyline}
            alt="Windhoek Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-caption text-primary mb-4 block">Contact Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-secondary-foreground/70">
              Get in touch with our team to discuss your investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-cream border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-cream border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+264 81 234 5678"
                      className="bg-cream border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Investment Inquiry"
                      required
                      className="bg-cream border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment goals..."
                    rows={6}
                    required
                    className="bg-cream border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you with any questions about our investment opportunities and services.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-cream hover:bg-muted transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden h-64 bg-muted flex items-center justify-center mt-8">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Interactive map available soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
