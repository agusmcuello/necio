// components/Testimonials.tsx
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export interface TestimonialItem {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="container mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            users say
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real feedback from teams who boosted their productivity with Necio.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((t, idx) => (
          <Card key={t.name} delay={idx * 0.2} className="group cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:scale-110 transition-transform duration-300"
              />
              <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                {t.name}
              </CardTitle>
              <span className="block text-sm text-gray-500">{t.role}</span>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <span className="italic">"{t.quote}"</span>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
