import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({ id, eyebrow, title, description, children, className = "", headerClassName = "" }) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className={cn("mx-auto mb-12 max-w-3xl text-center", headerClassName)}>
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
