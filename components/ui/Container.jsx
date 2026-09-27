import { cn } from "@/lib/utils";

export function Container({ children, className = "" }) {
  return <div className={cn("mx-auto w-full max-w-[1248px] px-4 sm:px-6", className)}>{children}</div>;
}
