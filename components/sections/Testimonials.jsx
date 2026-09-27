import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="What clients appreciate"
      description="Short, practical feedback from businesses that worked with AlphaGen Coding."
      className="bg-surface-alt"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.brand} className="card relative flex flex-col overflow-hidden p-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 right-5 select-none font-serif text-[7rem] leading-none text-brand-indigo/10"
            >
              &ldquo;
            </span>
            <blockquote className="relative flex-1 text-[17px] leading-[1.7] text-body">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-button text-sm font-bold text-white"
              >
                {initials(testimonial.person)}
              </span>
              <div>
                <p className="font-semibold text-ink">{testimonial.person}</p>
                <p className="text-sm text-muted">
                  {testimonial.role}, {testimonial.brand}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
