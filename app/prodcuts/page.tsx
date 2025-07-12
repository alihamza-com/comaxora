"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Code,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Award,
  Eye,
  MessageCircle,
  Mail,
  Phone,
  Zap,
  CheckCircle,
  Calendar,
  Target,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioProjects = [
  {
    id: 1,
    title: "Occess Co working Platform",
    subtitle: "A Collaborative Workspace Solution",
    description:
      "A comprehensive co-working platform that enhances productivity and collaboration among remote teams.",
    image: "/occess.png",
    category: "Portfolios",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "Real-time inventory management",
      "Multi-payment gateway integration",
      "Advanced search and filtering",
      "Admin analytics dashboard",
    ],
    results: {
      price: "$199",
      discount: "$149",
      duration: "Lifetime Access",
      status: "Available",
    },
    client: "TechStart Inc.",
    timeline: "12 weeks",
    year: "2024",
    liveUrl: "https://occesscoworking.com/",
    githubUrl: "https://github.com/axoraweb/techmart",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    subtitle: "MediCare - Patient Management System",
    description:
      "A healthcare mobile app for managing patients, appointments, and video consultations.",
    image: "/health_care.png",
    category: "Softwares",
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    features: [
      "Appointment scheduling",
      "Video consultations",
      "Medical records management",
      "Prescription tracking",
    ],
    results: {
      price: "$299",
      discount: "$229",
      duration: "Annual",
      status: "Available",
    },
    client: "HealthTech Solutions",
    timeline: "16 weeks",
    year: "2024",
    liveUrl: "https://medicare-app.com",
    githubUrl: "https://github.com/axoraweb/medicare",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    subtitle: "FinanceTracker - Investment Platform",
    description:
      "A dashboard for investment tracking, portfolio management, and real-time market data.",
    image: "/financial_tracker.jpg",
    category: "Portfolios",
    technologies: ["React", "TypeScript", "Node.js"],
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Risk assessment tools",
      "Automated reporting",
    ],
    results: {
      price: "$249",
      discount: "$179",
      duration: "Lifetime Access",
      status: "Not Sold Yet",
    },
    client: "Investment Group Ltd.",
    timeline: "20 weeks",
    year: "2023",
    liveUrl: "https://financetracker-demo.com",
    githubUrl: "https://github.com/axoraweb/financetracker",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Restaurant Management System",
    subtitle: "RestaurantPro - Complete Solution",
    description:
      "A full restaurant management system with POS, inventory, and customer analytics.",
    image: "/restaurant_pro.png",
    category: "Custom Templetes",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Pusher", "Stripe"],
    features: [
      "Point of Sale system",
      "Inventory management",
      "Staff scheduling",
      "Customer analytics",
    ],
    results: {
      price: "$279",
      discount: "$199",
      duration: "Lifetime Access",
      status: "Available",
    },
    client: "Restaurant Chain Co.",
    timeline: "14 weeks",
    year: "2023",
    liveUrl: "https://restaurantpro-demo.com",
    githubUrl: "https://github.com/axoraweb/restaurantpro",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Learning Management System",
    subtitle: "EduPlatform - Online Education",
    description:
      "An LMS with course creation, student tracking, and interactive tools.",
    image: "/learn_hub.png",
    category: "Portfolios",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Socket.io", "AWS"],
    features: [
      "Course creation",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate generation",
    ],
    results: {
      price: "$349",
      discount: "$249",
      duration: "Annual",
      status: "Available",
    },
    client: "Education Institute",
    timeline: "18 weeks",
    year: "2023",
    liveUrl: "https://eduplatform-demo.com",
    githubUrl: "https://github.com/axoraweb/eduplatform",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Android Fitness Tracker",
    subtitle: "HealthTrack - Fitness App",
    description:
      "An Android fitness app with health monitoring and workout planning.",
    image: "/fit_track.png",
    category: "Softwares",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "AWS"],
    features: [
      "Real-time health monitoring",
      "Workout planning",
      "Progress tracking",
      "Nutrition tracking",
    ],
    results: {
      price: "$199",
      discount: "$129",
      duration: "Lifetime Access",
      status: "Available",
    },
    client: "Fitness Group",
    timeline: "16 weeks",
    year: "2024",
    liveUrl: "https://propertyhub-demo.com",
    githubUrl: "https://github.com/axoraweb/propertyhub",
    color: "from-teal-500 to-blue-500",
  },
]




const categories = [
  { name: "All Prodcuts", count: portfolioProjects.length, icon: <Globe className="w-5 h-5" /> },
  {
    name: "Portfolios",
    count: portfolioProjects.filter((p) => p.category === "Portfolios").length,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: "Softwares",
    count: portfolioProjects.filter((p) => p.category === "Softwares").length,
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    name: "Custom Templetes",
    count: portfolioProjects.filter((p) => p.category === "Custom Templetes").length,
    icon: <Code className="w-5 h-5" />,
  },
]

const stats = [
  { number: "100+", label: "Products salled", icon: <Award className="w-6 h-6" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { number: "99%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "4.8/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
]

export default function PortfolioPage() {
const [activeCategory, setActiveCategory] = useState("All Prodcuts")
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 md:p-16 border border-white/30 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              
              <div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Products
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">Success Stories</p>
              </div>
            </div>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our <span className="font-semibold text-blue-600 dark:text-blue-400">successful projects</span>{" "}
              and see how we've helped businesses{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">achieve their goals</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-white/30"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  onClick={() => setActiveCategory(category.name)}
                  variant={activeCategory === category.name ? "default" : "outline"}
                  className={`px-6 py-3 ${activeCategory === category.name ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "border-gray-300 dark:border-gray-600"}`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      {/* Portfolio Grid */}
<section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12">
      {portfolioProjects
        .filter(
          (project) =>
            activeCategory === "All Prodcuts" || project.category === activeCategory
        )
        .map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-2xl transition-all duration-500">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${project.color} text-white border-none`}>
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-900 border-white">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

               
                

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Pages</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Products Rate</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.results).map(([key, value], resultIndex) => (
                      <div
                        key={resultIndex}
                        className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${project.color} text-white hover:shadow-lg transition-all duration-300 group`}
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Live
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  {/* Optional GitHub button */}
                 
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
    </div>
  </div>
</section>


      {/* Process Showcase */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Our Products {" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures every Product delivers exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Planning",
                description:
                  "We start with thorough research and strategic planning to ensure every project aligns with business goals.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Quality Development",
                description:
                  "Our experienced team uses best practices and cutting-edge technologies to build robust solutions.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Measurable Results",
                description:
                  "We track key metrics and provide detailed analytics to demonstrate the impact of our solutions.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-3 mb-6 text-white shadow-lg mx-auto`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
              AxoraWeb transformed our business with their exceptional development skills. The results exceeded our
              expectations in every way            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="/ali.jpeg"
                alt="Client"
                className="w-15 h-15 rounded-full object-cover border-4 border-white/30"
              />
              <div className="text-left">
                <div className="text-xl font-semibold text-white">Ali Hamza</div>
                <div className="text-white/80">Owner of AxoraWeb</div>
              </div>
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
              Ready to Create Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss about your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Buy Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/+923245237429?text=Hi%20AxoraWeb,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you"
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}