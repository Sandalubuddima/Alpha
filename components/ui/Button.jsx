import { cn } from "@/lib/utils";

export function Button({ children, href, variant = "primary", external = false, className = "", ...props }) {
  const styles = {
    primary:
      "bg-brand-button text-white shadow-brand hover:-translate-y-0.5 hover:shadow-brand-lg focus-visible:outline-brand-indigo",
    secondary:
      "border border-line bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:border-brand-indigo/40 hover:text-brand-indigo focus-visible:outline-brand-indigo",
    outline:
      "border border-brand-indigo/60 bg-white text-brand-indigo hover:border-brand-indigo hover:bg-tint focus-visible:outline-brand-indigo",
    ghost:
      "border border-white/20 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
    dark: "bg-night text-white hover:bg-ink focus-visible:outline-night",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:hover:translate-y-0",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
