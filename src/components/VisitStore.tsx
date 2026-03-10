import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export const VisitStore = () => {
  return (
    <section className="py-24 bg-card">
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
            Visit Our Store
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our premium collection in person
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Store Address
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  123 MG Road, Hazratganj
                  <br />
                  Lucknow, Uttar Pradesh 226001
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
              <div className="p-3 rounded-full bg-primary/20">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Business Hours
                </h3>
                <p className="font-body text-muted-foreground">
                  Monday – Saturday
                  <br />
                  <span className="text-primary font-medium">
                    11:00 AM – 8:00 PM
                  </span>
                </p>
                <p className="font-body text-muted-foreground mt-2 text-sm">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden gold-border-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0e0c8b9f0b%3A0x0!2sHazratganj%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1706350000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Scents Store Location"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
