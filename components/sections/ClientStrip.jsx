import { clients } from "@/data/clients";
import { Container } from "@/components/ui";

export default function ClientStrip() {
  return (
    <section className="border-y border-line bg-white py-10 lg:py-12">
      <Container>
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by growing businesses in Sri Lanka and abroad
        </p>
      </Container>
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
              className="flex shrink-0 items-center gap-x-14 gap-y-4 pr-14 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4"
            >
              {clients.map((client) => (
                <li
                  key={client}
                  className="whitespace-nowrap text-lg font-semibold tracking-[-0.01em] text-muted transition-colors duration-200 hover:text-ink sm:text-xl"
                >
                  {client}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
