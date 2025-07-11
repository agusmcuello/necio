// components/HowItWorks.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MousePointer,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Sign Up",
    description: "Create your account in 30 seconds",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Invite Team",
    description: "Add your teammates with one click",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Work Smart",
    description: "Let AI optimize your workflow",
    color: "from-green-500 to-green-600",
  },
  {
    icon: CheckCircle,
    title: "Get Results",
    description: "See productivity boost instantly",
    color: "from-orange-500 to-orange-600",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-[url('/images/bg-metrics.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Title and Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">
            How it{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Get started in minutes and see immediate results. Our streamlined
            process makes it easy to transform your workflow.
          </p>
        </motion.div>

        {/* Right Column - Steps Flow */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Steps Container */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-6 group"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold group-hover:bg-gray-200 transition-colors duration-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white">{step.description}</p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.2 + 0.5 }}
                      className="absolute left-6 mt-20 z-10"
                    >
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: index * 0.5,
                        }}
                        className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Success Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">
                  Ready to boost productivity!
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
