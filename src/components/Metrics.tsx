// components/Metrics.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

interface MetricItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}

function MetricItem({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  color,
  delay,
}: MetricItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center group"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${color} shadow-lg mb-6 group-hover:scale-110 transition-all duration-300`}
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        className="space-y-2"
      >
        <div className="text-5xl md:text-6xl font-bold text-gray-900">
          {count.toLocaleString()}
          <span className="text-2xl md:text-3xl ml-1 text-gray-600">
            {suffix}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {label}
        </h3>
        <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
      </motion.div>

      {/* Decorative pulse effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.6 }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-full h-full bg-green-400 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

export function Metrics() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of teams that have transformed their
            productivity with Necio.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <MetricItem
              icon={Users}
              value={10000}
              suffix="+"
              label="Active Users"
              description="Teams worldwide using Necio daily"
              color="from-blue-500 to-blue-600"
              delay={0.2}
            />
          </div>

          <div className="relative">
            <MetricItem
              icon={TrendingUp}
              value={250}
              suffix="%"
              label="Productivity Boost"
              description="Average increase in team efficiency"
              color="from-green-500 to-green-600"
              delay={0.4}
            />
          </div>

          <div className="relative">
            <MetricItem
              icon={Zap}
              value={50000}
              suffix="+"
              label="Tasks Automated"
              description="Hours saved through automation"
              color="from-purple-500 to-purple-600"
              delay={0.6}
            />
          </div>

          <div className="relative">
            <MetricItem
              icon={CheckCircle}
              value={99}
              suffix="%"
              label="Satisfaction Rate"
              description="Of users would recommend Necio"
              color="from-orange-500 to-orange-600"
              delay={0.8}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">
              Join the success stories
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
