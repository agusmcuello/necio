"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-24 px-4 gap-16">
      {/* Left Side - Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            AI-Powered Productivity
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Boost your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            remote team&apos;s
          </span>{" "}
          productivity
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-flex text-indigo-600 font-bold text-2xl tracking-tight font-serif">
            Necio
          </span>{" "}
          is the AI-powered workspace that helps your team stay focused and get
          more done — from anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Button
            size="lg"
            className="group text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 text-white"
          >
            Get started for free
            <ArrowRight className="ml-2 w-5 h-5 transform transition-all duration-300 group-hover:rotate-45" />
          </Button>

          <Button
            size="lg"
            className="group text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 text-white hover:bg-white hover:text-white"
          >
            <Play className="mr-2 w-5 h-5 fill-transparent stroke-white group-hover:fill-white transition-all duration-300" />
            Watch demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Free 14-day trial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            No credit card required
          </div>
        </motion.div>
      </div>

      {/* Right Side - Demo Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="lg:w-1/2 relative"
      >
        {/* Main Dashboard Mockup */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Team Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="bg-blue-50 p-4 rounded-lg text-center"
              >
                <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-xs text-gray-600">Tasks Done</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="bg-green-50 p-4 rounded-lg text-center"
              >
                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-xs text-gray-600">Team Members</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="bg-purple-50 p-4 rounded-lg text-center"
              >
                <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-xs text-gray-600">Efficiency</div>
              </motion.div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {[
                { label: "Project Alpha", progress: 85, color: "bg-blue-500" },
                {
                  label: "Marketing Campaign",
                  progress: 60,
                  color: "bg-green-500",
                },
                {
                  label: "Product Launch",
                  progress: 40,
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.2, duration: 0.5 }}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ delay: 2 + index * 0.2, duration: 1 }}
                      className={`h-2 rounded-full ${item.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          <CheckCircle className="w-6 h-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.5 }}
          className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          <Zap className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
