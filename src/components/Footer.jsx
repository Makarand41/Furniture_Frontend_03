import React from "react";
import {
  Mail,
  Globe,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e1207] text-gray-300 pt-12 pb-8 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_25%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Brand Tagline Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">
            New Vishwakarma Furniture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mb-6">
            Crafting comfort and elegance since day one.  
            Explore timeless wooden furniture designed for strength, beauty, and lasting memories.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-700 pt-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              About New Vishwakarma Furniture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              New Vishwakarma Furniture offers premium, handcrafted wooden
              furniture built with care and precision. From traditional designs
              to modern elegance, we help you make every space feel like home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/furniture/list" className="hover:text-amber-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-amber-500">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Furniture Types
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Wooden Bed</li>
              <li>Office Chair</li>
              <li>Dining Table</li>
              <li>Cupboard</li>
              <li>Teak Wood Sofa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-1" />
                <span>
                  123 Wooden Avenue, Pune, Maharashtra, India - 411001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+918394047901" className="hover:text-amber-500">
                  +91 83940 47901
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <a
                  href="mailto:info@newvishwakarmafurniture.com"
                  className="hover:text-amber-500"
                >
                  info@newvishwakarmafurniture.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-500" />
                <a
                  href="https://newvishwakarmafurniture.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-500"
                >
                  www.newvishwakarmafurniture.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              New Vishwakarma Furniture
            </span>{" "}
            | All Rights Reserved.
          </p>
          <p>
            Developed & Managed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-amber-500 hover:text-amber-400 font-medium"
            >
              Nano Tech Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
