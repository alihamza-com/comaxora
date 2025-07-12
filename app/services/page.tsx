"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Code,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
  Award,
  Shield,
  MessageCircle,
  Mail,
  Phone,
  Eye,
  Rocket,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "web-development",
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    subtitle: "Full-Stack Web Applications",
    description:
      "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
    features: [
      "React/Next.js Development",
      "Node.js Backend Systems",
      "Database Design & Optimization",
      "RESTful API Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Real-time Applications",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "AWS"],
    color: "from-blue-500 to-cyan-500",
    price: "Starting at $20",
    timeline: "4-12 weeks",
    projects: "50+ completed",
    rating: 4.9,
  },
  {
    id: "mobile-development",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    subtitle: "Native & Cross-Platform Apps",
    description:
      "High-performance mobile applications for iOS and Android with seamless user experiences and robust functionality.",
    features: [
      "React Native Development",
      "Flutter Applications",
      "Native iOS Development",
      "Native Android Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "App Analytics Integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "SQLite", "Expo"],
    color: "from-purple-500 to-pink-500",
    price: "Starting at $20",
    timeline: "6-16 weeks",
    projects: "30+ completed",
    rating: 4.8,
  },
  {
    id: "web-design",
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    subtitle: "User-Centered Design Solutions",
    description:
      "Beautiful, intuitive designs that enhance user experience and drive engagement through thoughtful interface design.",
    features: [
      "User Experience Research",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Responsive Design",
      "Accessibility Compliance",
      "Brand Identity Design",
      "Design System Creation",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin", "Framer", "Miro"],
    color: "from-green-500 to-emerald-500",
    price: "Starting at $1,999",
    timeline: "3-8 weeks",
    projects: "40+ completed",
    rating: 4.9,
  },
  {
    id: "seo-optimization",
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Digital Marketing",
    subtitle: "Boost Your Online Presence",
    description:
      "Comprehensive SEO strategies and digital marketing solutions to improve search rankings and drive organic traffic.",
    features: [
      "Technical SEO Optimization",
      "Keyword Research & Strategy",
      "Content Marketing",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "Google Ads Management",
      "Social Media Marketing",
      "Analytics & Reporting",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Google Ads",
      "Facebook Ads",
      "Mailchimp",
      "HubSpot",
      "Screaming Frog",
    ],
    color: "from-orange-500 to-red-500",
    price: "Starting at $2099",
    timeline: "2-6 weeks setup",
    projects: "60+ completed",
    rating: 4.7,
  },
  {
    id: "custom-software",
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    subtitle: "Tailored Business Solutions",
    description:
      "Enterprise-grade custom software solutions designed to streamline operations and solve specific business challenges.",
    features: [
      "Enterprise Applications",
      "Business Process Automation",
      "System Integration",
      "Legacy System Modernization",
      "API Development & Integration",
      "Microservices Architecture",
      "Data Migration Services",
      "Maintenance & Support",
    ],
    technologies: ["Python", "Java", "C#", ".NET", "Spring Boot", "Django", "Docker", "Kubernetes"],
    color: "from-indigo-500 to-purple-500",
    price: "Starting at $20",
    timeline: "8-24 weeks",
    projects: "25+ completed",
    rating: 4.8,
  },
  {
    id: "cloud-devops",
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    subtitle: "Scalable Infrastructure Solutions",
    description:
      "Cloud infrastructure setup, deployment automation, and DevOps practices for scalable and reliable applications.",
    features: [
      "AWS/Azure Cloud Setup",
      "CI/CD Pipeline Implementation",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Implementation",
      "Performance Optimization",
      "Disaster Recovery Planning",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "Prometheus"],
    color: "from-teal-500 to-blue-500",
    price: "Starting at $20",
    timeline: "2-8 weeks",
    projects: "35+ completed",
    rating: 4.6,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates wireframes, mockups, and prototypes to visualize the solution before development begins.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our developers build your solution using best practices, with continuous testing to ensure quality and performance.",
    icon: <Code className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description:
      "We deploy your solution to production environments and ensure everything runs smoothly for a successful launch.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your solution running optimally and up-to-date.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
  },
]

const testimonials = [
  {
    name: "John Doe",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "AxoraWeb delivered an exceptional e-commerce platform that increased our sales by 300%. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    service: "Web Development",
    image: "/aora.jpeg",
  },
  {
    name: "Ahmed Hassan",
    company: "Digital Solutions Ltd.",
    role: "CTO",
    content:
      "The mobile app they developed for us has over 100k downloads and 4.8-star rating. Professional team with excellent communication.",
    rating: 5,
    service: "Mobile Development",
    image: "/khan.jpeg",
  },
  {
    name: "Maria Rodriguez",
    company: "Creative Agency",
    role: "Marketing Director",
    content:
      "Our website redesign resulted in 250% increase in leads. The SEO optimization has us ranking #1 for our target keywords.",
    rating: 5,
    service: "UI/UX Design",
    image: "/ahmad.jpeg",
  },
]

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while complex applications can take 12-24 weeks. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "We can integrate with your existing team as an extension or work independently. We're flexible and adapt to your preferred collaboration style.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We stay updated with the latest industry trends.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow rigorous quality assurance processes including code reviews, automated testing, performance optimization, and security audits throughout the development cycle.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients worldwide. We have experience working across different time zones and have successfully delivered projects for clients in North America, Europe, and Asia.",
  },
]

export default function ServicesPage() {
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Services
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">Solutions</p>
              </div>
            </div>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions designed to{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">transform your business</span> and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">drive growth</span>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: <Award className="w-5 h-5" />, text: "100+ Projects", color: "text-blue-500" },
                { icon: <Users className="w-5 h-5" />, text: "50+ Clients", color: "text-green-500" },
                { icon: <Star className="w-5 h-5" />, text: "4.8/5 Rating", color: "text-yellow-500" },
                { icon: <Shield className="w-5 h-5" />, text: "24/7 Support", color: "text-purple-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm font-medium p-3 bg-white/20 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm border border-white/30"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              End-to-end digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                id={service.id}
                className="scroll-mt-24"
              >
                <Card className="overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Service Info */}
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 text-white shadow-lg`}
                            >
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                              <p className="text-lg text-gray-600 dark:text-gray-300">{service.subtitle}</p>
                            </div>
                          </div>

                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.price}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Starting Price</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.timeline}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Timeline</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.projects}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="flex items-center justify-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {service.rating}
                                </span>
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                              <Button
                                className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 group`}
                              >
                                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                            <Link href="/portfolio">
                              <Button
                                variant="outline"
                                className="px-6 py-3 border-gray-300 dark:border-gray-600 bg-transparent"
                              >
                                <Eye className="w-5 h-5 mr-2" />
                                View Portfolio
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Features & Technologies */}
                        <div className="space-y-8">
                          {/* Features */}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="px-3 py-1">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
                  >
                    {step.step}
                  </div>

                  <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2 text-white mx-auto mb-4`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across different industries
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
                    <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
                      {testimonial.service}
                    </Badge>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-white/80">
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