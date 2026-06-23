import { cn } from "@/lib/utils";

export function Button({ children, href, variant = "primary", external = false, className = "", ...props }) {
  const styles = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-200 focus-visible:outline-cyan-200",
    secondary:
      "border border-white/15 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white",
    ghost:
      "border border-white/15 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
    dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
