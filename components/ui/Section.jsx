import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { TightText } from "./Heading";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerClassName = "",
  dark = false,
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 lg:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div data-reveal className={cn("mx-auto mb-12 max-w-3xl text-center lg:mb-14", headerClassName)}>
            {eyebrow && (
              <p
                className={cn(
                  "mb-4 text-xs font-bold uppercase tracking-[0.2em]",
                  dark ? "text-brand-blue" : "text-brand-indigo"
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-balance text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]",
                  dark ? "text-white" : "text-ink"
                )}
              >
                <TightText>{title}</TightText>
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mx-auto mt-5 max-w-[60ch] text-[17px] leading-[1.7] sm:text-lg",
                  dark ? "text-slate-300" : "text-muted"
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        <div data-reveal>{children}</div>
      </Container>
    </section>
  );
}
