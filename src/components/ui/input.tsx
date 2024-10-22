import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Optional className prop
  type?: string; // Optional type prop, defaults to "text"
}

// ForwardRef for Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-[10px] border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

// Set display name for better debugging
Input.displayName = "Input";

export { Input };
