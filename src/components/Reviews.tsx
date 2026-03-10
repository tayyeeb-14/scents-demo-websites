import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Best perfume shop in town! The collection is absolutely stunning and the staff is incredibly knowledgeable.",
    location: "Lucknow",
  },
  {
    name: "Priya Verma",
    rating: 5,
    text: "Amazing fragrances & great service! I found my signature scent here. Highly impressed with the quality.",
    location: "Kanpur",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Highly recommended! Quality products at reasonable prices. The attar collection is exceptional.",
    location: "Delhi",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
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
            Customer Reviews
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            What our valued customers say about us
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 glass-card rounded-xl group hover:shadow-gold-lg transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 opacity-20">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-foreground/90 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
