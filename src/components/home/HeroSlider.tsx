import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import slider1 from "@/assets/slider.jpg";
import slider2 from "@/assets/slider2.jpg";
import slider3 from "@/assets/slider3.jpg";

const slides = [
  {
    image: slider1,
    heading: "Building Tomorrow's Legacy",
    subheading: "Strategic investments in Namibia's future through innovative property development",
  },
  {
    image: slider2,
    heading: "Excellence in Every Detail",
    subheading: "Professional property management with a commitment to quality and growth",
  },
  {
    image: slider3,
    heading: "Your Investment Partner",
    subheading: "Expert advisory services for sustainable wealth creation in Southern Africa",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "linear" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].heading}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Caption */}
                  <motion.span
                    custom={0}
                    variants={textVariants}
                    className="inline-block text-caption text-primary"
                  >
                    Profile Investment Holdings
                  </motion.span>

                  {/* Heading */}
                  <motion.h1
                    custom={1}
                    variants={textVariants}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight"
                  >
                    {slides[currentSlide].heading}
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p
                    custom={2}
                    variants={textVariants}
                    className="text-sm md:text-base text-primary-foreground/80 max-w-lg leading-relaxed"
                  >
                    {slides[currentSlide].subheading}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    custom={3}
                    variants={textVariants}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <Link to="/about">
                      <Button variant="hero">
                        Discover More
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="hero-outline">
                        Get In Touch
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-background/10 backdrop-blur-sm text-primary-foreground hover:bg-primary transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-background/10 backdrop-blur-sm text-primary-foreground hover:bg-primary transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="group relative"
          >
            <div
              className={`w-12 h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-primary-foreground/50 uppercase tracking-wider rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
