import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mensPerfume from "@/assets/mens-perfume.jpg";
import womensPerfume from "@/assets/womens-perfume.jpg";
import luxuryAttars from "@/assets/luxury-attars.jpg";
import giftSets from "@/assets/gift-sets.jpg";

const collections = [
  {
    title: "Men's Perfumes",
    description: "Bold & Sophisticated",
    image: mensPerfume,
  },
  {
    title: "Women's Perfumes",
    description: "Elegant & Enchanting",
    image: womensPerfume,
  },
  {
    title: "Luxury Attars",
    description: "Traditional & Authentic",
    image: luxuryAttars,
  },
  {
    title: "Gift Sets",
    description: "Perfect Presents",
    image: giftSets,
  },
];

export const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-display font-semibold text-gold-gradient mb-4">
            Our Collections
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of premium fragrances crafted for the
            discerning connoisseur
          </p>
        </motion.div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group luxury-card rounded-xl overflow-hidden bg-card gold-border-glow cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {collection.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {collection.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
