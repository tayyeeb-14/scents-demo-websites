import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-4xl md:text-5xl font-display font-semibold text-gold-gradient mb-4">
            Get In Touch
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us anytime!
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto"
        >
          {/* Call Button */}
          <Button
            asChild
            size="lg"
            className="flex-1 h-20 btn-luxury rounded-xl text-lg font-body font-semibold tracking-wide text-primary-foreground"
          >
            <a href="tel:+919876543210" className="flex items-center justify-center gap-3">
              <div className="p-2 bg-primary-foreground/20 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              Call Us
            </a>
          </Button>

          {/* WhatsApp Button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="flex-1 h-20 rounded-xl text-lg font-body font-semibold tracking-wide border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 whatsapp-btn"
          >
            <a
              href="https://wa.me/919876543210?text=Hello%20Royal%20Scents!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <div className="p-2 bg-accent/20 rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
