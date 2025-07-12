"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Smartphone,
  Code,
  Search,
  Palette,
  Cloud,
  Users,
  Award,
  TrendingUp,
  Shield,
  Rocket,
  Brain,
  Target,
  Eye,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Play,
  Download,
  Heart,
  Server,
  Database,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"



const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks",
    features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
    color: "from-blue-500 to-cyan-500",
    price: "Starting at $20",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
    color: "from-purple-500 to-pink-500",
    price: "Starting at $20",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design solutions",
    features: ["Figma Design", "Prototyping", "User Research", "Design Systems"],
    color: "from-green-500 to-emerald-500",
    price: "Starting at $20",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Boost your online presence and rankings",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"],
    color: "from-orange-500 to-red-500",
    price: "Starting at $20",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software",
    description: "Tailored software solutions for your business",
    features: ["Enterprise Apps", "Automation", "Integration", "Maintenance"],
    color: "from-indigo-500 to-purple-500",
    price: "Starting at $20",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployment",
    features: ["AWS/Azure", "CI/CD", "Monitoring", "Security"],
    color: "from-teal-500 to-blue-500",
    price: "Starting at $20",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "AxoraWeb delivered an exceptional e-commerce platform that increased our sales by 300%. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    image: "/sarah.jpeg",
  },
  {
    name: "Ahmed Hassan",
    company: "Digital Solutions Ltd.",
    role: "CTO",
    content:
      "The mobile app they developed for us has over 100k downloads and 4.8-star rating. Professional team with excellent communication throughout the project.",
    rating: 5,
    image: "/ahmad.jpeg",
  },
  {
    name: "Maria Rodriguez",
    company: "Creative Agency",
    role: "Marketing Director",
    content:
      "Our website redesign by AxoraWeb resulted in 250% increase in leads. The SEO optimization they provided has us ranking #1 for our target keywords.",
    rating: 5,
    image: "/aora.jpeg",
  },
]

const stats = [
  { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { number: "99%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
]

const technologies = [
  { name: "React", icon: <Code /> }, // Symbolizes frontend coding
  { name: "Next.js", icon: <Zap /> }, // Symbolizes speed / serverless
  { name: "Node.js", icon: <Server /> }, // Server symbol
  { name: "TypeScript", icon: <Shield /> }, // Type safety/security
  { name: "Python", icon: <Brain /> }, // AI/ML and scripting
  { name: "AWS", icon: <Cloud /> }, // Cloud symbol
  { name: "MongoDB", icon: <Database /> }, // Database
  { name: "PostgreSQL", icon: <Rocket /> }, // Powerful open-source DB
]

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className=" relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
          >
            {/* Logo Animation */}
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

              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-md">
                  AxoraWeb
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                  Solutions
                </p>
              </div>
            </motion.div>


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Welcome{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                to Our
              </span>{" "}
              Digital World
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We craft{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">cutting-edge digital solutions</span> built on{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                global best practices
              </span>
              . Whether it’s web platforms, mobile apps, or custom software, we bring your ideas to life with precision and creativity.
            </motion.p>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/seo-tool">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-white/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 group"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Free SEO Tool
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-white/30"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium
              </span>{" "}
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {service.price}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use the latest and most powerful technologies to build your solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-100 dark:hover:bg-blue-700 transition-all duration-300 group"
              >
                {tech.icon}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black-600 dark:group-hover:text-black-400 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real feedback from real clients who achieved real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tool Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">Free SEO AutoPilot Tool</h2>
                  <p className="text-xl text-white/90">AI-Powered Website Optimization</p>
                </div>
              </motion.div>

              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your website into an SEO powerhouse with our advanced AI optimization engine. Get
                comprehensive analysis, backlink strategies, and ranking improvements - completely free!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: "AI Analysis", desc: "Deep website scanning" },
                  { icon: <Target className="w-6 h-6" />, title: "Keyword Optimization", desc: "Strategic placement" },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Ranking Boost", desc: "Real improvements" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                  >
                    <div className="text-yellow-300 mb-2 flex justify-center">{feature.icon}</div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/seo-tool">
                  <Button
                    size="lg"
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Try Free SEO Tool
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View Sample Report
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-3xl p-8 md:p-16 border border-white/30 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust AxoraWeb for their digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/+923245237429?text=Hi%20AxoraWeb,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>axoraweb@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+923245237429</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AxoraWeb Solutions
            </h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Our services include custom website development, e-commerce platforms, AI integrations, real-time apps,
              and cloud-native solutions — all built with industry best practices and a passion for performance,
              security, and scalability. With a team of skilled engineers and designers, AxoraWeb delivers
              100% real, production-ready software — crafted in Pakistan, loved worldwide.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}