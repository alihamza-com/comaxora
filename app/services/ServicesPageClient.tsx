"use client"

import { motion } from "framer-motion"

// This would be the same content as the services page
// but as a client component for any interactive features
export default function ServicesPageClient() {
  return (
    <div>
      {/* Services content would go here */}
      <div className="min-h-screen pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 md:p-16 border border-white/30 shadow-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Premium digital solutions for your business</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
