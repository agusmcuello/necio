// components/ui/Card.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 },
            }
          : {}
      }
      className={`
        bg-white rounded-xl shadow-lg border border-gray-100 
        p-6 transition-all duration-300 hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>{children}</p>
  );
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`${className}`}>{children}</div>;
}
