import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Compass,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Facebook, label: "Facebook", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Youtube, label: "YouTube", url: "#" },
];

const footerLinks = {
  company: [
    { label: "About Us", url: "#" },
    { label: "Contact", url: "#" },
    { label: "Work With Us", url: "#" },
    { label: "Press", url: "#" },
  ],
  support: [
    { label: "Help Center", url: "#" },
    { label: "Safety", url: "#" },
    { label: "Cancellation", url: "#" },
    { label: "Travel Tips", url: "#" },
  ],
  legal: [
    { label: "Privacy Policy", url: "#" },
    { label: "Terms of Service", url: "#" },
    { label: "Cookie Policy", url: "#" },
    { label: "Accessibility", url: "#" },
  ],
};

const ugcImages = [
  "https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc2MzA3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYzMDI2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MzA1NTUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1551779382-e65b3ec856ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzMDQ3MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1644028734852-0725af9a6f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMG1hcmtldHxlbnwxfHx8fDE3NjMxMTc3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzYzMDUxOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      {/* UGC Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="mb-2">Share Your Journey</h3>
          <p className="text-gray-400">#WanderlustAdventures</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {ugcImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={`Travel memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-teal-600/10 border border-teal-600/20 rounded-2xl p-8 text-center"
        >
          <Mail className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h3 className="mb-2">Get Travel Inspiration in Your Inbox</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for exclusive deals and travel tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-8 h-8 text-teal-400" />
              <span>Wanderlust</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your gateway to extraordinary adventures and unforgettable
              experiences around the world.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Wanderlust. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
