import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg";
}
export function Button({ size = "sm", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-semibold rounded-xl cursor-pointer transition-all duration-300",
        size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-base",
        className
      )}
      {...props}
    />
  );
}
