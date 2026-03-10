import { Crown, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display font-semibold text-gold-gradient">
              Royal Scents
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Royal Scents. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Premium Perfumes & Attars | Lucknow, India
          </p>
        </div>
      </div>
    </footer>
  );
};
