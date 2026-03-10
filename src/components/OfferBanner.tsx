import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const OfferBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gold-gradient" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse" />
          <h3 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground italic tracking-wide">
            Flat 20% Off on First Purchase!
          </h3>
          <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse hidden sm:block" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/10 to-transparent" />
    </motion.section>
  );
};
