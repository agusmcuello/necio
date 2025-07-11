// components/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Zap,
  Users,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";

const backgroundIcons = [
  { icon: Zap, x: 10, y: 20, delay: 0 },
  { icon: Users, x: 85, y: 15, delay: 0.5 },
  { icon: Calendar, x: 15, y: 70, delay: 1 },
  { icon: CheckCircle, x: 80, y: 75, delay: 1.5 },
  { icon: Star, x: 50, y: 30, delay: 2 },
  { icon: Heart, x: 25, y: 45, delay: 2.5 },
  { icon: Zap, x: 70, y: 50, delay: 3 },
  { icon: Users, x: 40, y: 80, delay: 3.5 },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.1, 0.05, 0.1, 0],
                scale: [0, 1, 1.2, 1, 0],
                rotate: [0, 180, 360],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 8,
                delay: item.delay,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="absolute"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <Icon className="w-12 h-12 text-blue-400" />
            </motion.div>
          );
        })}
      </div>

      {/* Curtain Effect - Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Necio</span>
          </motion.div>

          <h3 className="text-3xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              supercharge
            </span>{" "}
            your productivity?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of teams who have transformed their workflow with
            Necio. Start your journey today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </motion.button>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-gray-400">© 2024 Necio. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span className="text-gray-400">for productive teams</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: 800,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
