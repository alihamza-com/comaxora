"use client"

import { motion } from "framer-motion"
import {
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Code,
  Zap,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  MessageCircle,
  ArrowRight,
  Rocket,
  Brain,
  Lightbulb,
  Coffee,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const teamMembers = [
  {
    name: "Saad Hussain",
    role: "Founder & Lead Developer",
    image: "/saad.jpg",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about clean code and innovative solutions.",
    skills: ["React", "Node.js", "Python", "AWS", "DevOps"],
    social: {
      linkedin: "https://linkedin.com/in/alihassan",
      github: "https://github.com/alihassan",
    },
  },
  {
    name: "Muhammad Tayyab",
    role: "UI/UX Designer",
    image: "/tayab.png",
    bio: "Creative designer with expertise in user-centered design and modern UI/UX principles. Focused on creating beautiful and functional interfaces.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    social: {
      linkedin: "https://linkedin.com/in/sarahahmed",
      dribbble: "https://dribbble.com/sarahahmed",
    },
  },
  
  {
    name: "Rubab Latif",
    role: "Mobile App Developer",
    image: "/rubab.jpeg",
    bio: "Mobile development specialist with expertise in React Native and Flutter. Delivered 50+ mobile apps with excellent user ratings.",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    social: {
      linkedin: "https://linkedin.com/in/muhammadkhan",
      github: "https://github.com/muhammadkhan",
    },
  },
  {
    name: "Alina Malik",
    role: "Digital Marketing Specialist",
    image: "/alina.jpeg",
    bio: "SEO and digital marketing expert with proven track record of improving search rankings and driving organic traffic growth.",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/fatimamalik",
      twitter: "https://twitter.com/fatimamalik",
    },
  },
]

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Client-First Approach",
    description: "Your success is our success. We prioritize your needs and goals in every project decision.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Quality Excellence",
    description: "We deliver nothing but the best. Every line of code, every design element is crafted with precision.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation Drive",
    description:
      "We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reliability & Trust",
    description: "Transparent communication, on-time delivery, and long-term partnerships built on trust.",
    color: "from-green-500 to-emerald-500",
  },
]

const achievements = [
  { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { number: "99%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "5", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
  { number: "15+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
]

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started as a small team with big dreams to deliver world-class software solutions.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Delivered our first enterprise-level e-commerce platform, setting the foundation for growth.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to include specialists in mobile development, UI/UX design, and digital marketing.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "International Clients",
    description: "Expanded our reach to serve clients across multiple countries with diverse project requirements.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Integrated AI and machine learning capabilities into our development process and client solutions.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Recognized as one of Pakistan's leading software houses with 100+ successful projects.",
    icon: <Award className="w-6 h-6" />,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
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
                  About AxoraWeb
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">Solutions</p>
              </div>
            </div>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are Pakistan's premier full-stack software house, delivering{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">world-class digital solutions</span> with{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                international quality standards
              </span>
              .
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">{achievement.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-blue-800 dark:text-blue-200">
                    <Target className="w-8 h-8" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    To empower businesses worldwide with innovative digital solutions that drive growth, efficiency, and
                    success. We bridge the gap between cutting-edge technology and practical business needs, delivering
                    solutions that make a real difference.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      "Deliver exceptional software solutions",
                      "Exceed client expectations consistently",
                      "Foster long-term partnerships",
                      "Drive digital transformation",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-purple-800 dark:text-purple-200">
                    <Lightbulb className="w-8 h-8" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    To become the leading software house in Pakistan and a recognized name globally, known for our
                    innovation, quality, and commitment to client success. We envision a future where technology
                    seamlessly integrates with business goals to create extraordinary outcomes.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      "Global recognition for quality",
                      "Industry-leading innovation",
                      "Sustainable business growth",
                      "Technology leadership",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-3 mb-6 text-white shadow-lg`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry recognition
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3 text-blue-600 border-blue-600">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
                Work Culture
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What makes AxoraWeb a great place to work and partner with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Collaborative Environment",
                description:
                  "We believe in the power of teamwork and open communication. Every voice matters, and every idea is valued.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Continuous Learning",
                description:
                  "We invest in our team's growth through training, workshops, and staying updated with the latest technologies.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Work-Life Balance",
                description:
                  "We understand the importance of balance and create an environment where our team can thrive both professionally and personally.",
                color: "from-pink-500 to-red-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our expertise and passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/+923245237429?text=Hi%20AxoraWeb,%20I'd%20like%20to%20learn%20more%20about%20your%20team%20and%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}