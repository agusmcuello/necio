// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesProps {
  items: FeatureItem[];
}

export function Features({ items }: FeaturesProps) {
  return (
    <section className="container mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Key{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Features
          </span>{" "}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how Necio can transform your workflow with these powerful
          capabilities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={index}
              delay={index * 0.2}
              className="group cursor-pointer"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
