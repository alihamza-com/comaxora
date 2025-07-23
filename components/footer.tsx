"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  Palette,
  Search,
  Code,
  Cloud,
  Zap,
  ArrowRight,
  Heart,
  Star,
  Award,
  Users,
  MessageCircle,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Web Development", href: "/services#web-development", icon: <Globe className="w-4 h-4" /> },
  { name: "Mobile Development", href: "/services#mobile-development", icon: <Smartphone className="w-4 h-4" /> },
  { name: "UI/UX Design", href: "/services#web-design", icon: <Palette className="w-4 h-4" /> },
  { name: "SEO & Marketing", href: "/services#seo-optimization", icon: <Search className="w-4 h-4" /> },
  { name: "Custom Software", href: "/services#custom-software", icon: <Code className="w-4 h-4" /> },
  { name: "Cloud & DevOps", href: "/services#cloud-devops", icon: <Cloud className="w-4 h-4" /> },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Free SEO Tool", href: "/seo-tool" },
  { name: "Contact", href: "/contact" },
  
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/axorawebcompany", icon: "linkedin" },

  { name: "Facebook", href: "https://facebook.com/axorawebsoftwarehouse", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com/axoraweb", icon: "instagram" },
  { name: "GitHub", href: "https://github.com/alihamza-com", icon: "github" },
]

const stats = [
  { number: "100+", label: "Projects", icon: <Award className="w-5 h-5" /> },
  { number: "50+", label: "Clients", icon: <Users className="w-5 h-5" /> },
  { number: "99%", label: "Success", icon: <Star className="w-5 h-5" /> },
  { number: "24/7", label: "Support", icon: <Heart className="w-5 h-5" /> },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="flex items-center justify-center gap-6 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-24 h-24 bg-dark-500 rounded-full flex items-center justify-center shadow-2xl border border-blue-300 hover:shadow-2xl"
              >
                <img
                  src="/logo.png"
                  alt="AxoraWeb Logo"
                  className="w-36 h-36 object-contain drop-shadow-md"
                />
              </motion.div>

              
            </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AxoraWeb
                  </h3>
                  <p className="text-sm text-gray-300">Solutions</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Pakistan's premier full-stack software house delivering world-class digital solutions with international
                quality standards.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:axoraweb@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>axoraweb@gmail.com</span>
                </a>
                <a
                  href="tel:++923245237429"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+923245237429</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                    >
                      <span className="text-blue-400 group-hover:scale-110 transition-transform">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter & CTA */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Get Started Today</h4>
              <p className="text-gray-300 mb-6">Ready to transform your business with our premium digital solutions?</p>

              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <a
                  href="https://wa.me/+923245237429?text=Hi%20AxoraWeb,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <div className="text-blue-400 mb-1 flex justify-center">{stat.icon}</div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links & Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-300 text-sm">© {new Date().getFullYear()} AxoraWeb. All rights reserved.</p>
              <p className="text-gray-400 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-red-400" /> in Pakistan
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white text-sm">
            <Heart className="w-4 h-4 text-red-300" />
            <span className="font-medium">100% Real. 100% Authentic Services.</span>
            <Heart className="w-4 h-4 text-red-300" />
          </div>
        </div>
      </motion.div>
    </footer>
  )
}