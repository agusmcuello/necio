import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg";
}

export function Button({ size = "sm", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl cursor-pointer",
        size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-base"
      )}
      {...props}
    />
  );
}
