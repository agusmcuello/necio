// page.tsx
"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Metrics } from "@/components/Metrics";
import { Calendar, Users, Zap } from "lucide-react";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function Home() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Necio has revolutionized the way our team collaborates remotely. Highly recommended!",
    },
    {
      name: "Mark Thompson",
      role: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The AI-powered features have boosted our productivity beyond expectations.",
    },
    {
      name: "Sara Lee",
      role: "UX Designer",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "A seamless and intuitive workspace that keeps our team focused and efficient.",
    },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <Hero />
      <Features
        items={[
          {
            title: "Smart Scheduling",
            description:
              "AI-powered scheduling that analyzes your work patterns and automatically optimizes your calendar to maximize daily productivity.",
            icon: Calendar,
          },
          {
            title: "Real-time Collaboration",
            description:
              "Collaborate with your team in real-time, share ideas instantly, and keep everyone synchronized on every project.",
            icon: Users,
          },
          {
            title: "Automated Tasks",
            description:
              "Automate repetitive tasks and free up valuable time to focus on what truly matters for your business growth.",
            icon: Zap,
          },
        ]}
      />
      <HowItWorks />
      <Metrics />
      <Testimonials items={testimonials} />
      <Footer />
    </main>
  );
}
