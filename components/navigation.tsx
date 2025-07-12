"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code, Smartphone, Globe, Briefcase, Mail, Zap, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: <Globe className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Services", href: "/services", icon: <Code className="w-4 h-4" /> },
    { name: "Portfolio", href: "/portfolio", icon: <Smartphone className="w-4 h-4" /> },
    { name: "SEO Tool", href: "/seo-tool", icon: <Zap className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
    
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
<Link
  href="/"
  className="relative w-14 h-14 flex items-center justify-center group"
>
  <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              // transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="flex items-center justify-center gap-6 mb-1"
            >
              <div
                // animate={{ rotate: 0 }}
                // transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 bg-dark-500 rounded-full flex items-center justify-center shadow-2xl border border-blue-300 hover:shadow-2xl"
              >
                <img
                  src="/logo.png"
                  alt="AxoraWeb Logo"
                  className="w-36 h-36 object-contain drop-shadow-md"
                />
              </div>

              
            </motion.div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                  pathname === item.href
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                    pathname === item.href
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
