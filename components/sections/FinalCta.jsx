import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button, Container } from "@/components/ui";

export default function FinalCta() {
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <Container>
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl bg-night px-6 py-14 text-center sm:px-12 lg:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-72 w-[42rem] max-w-[140%] -translate-x-1/2 rounded-full bg-brand-indigo/40 blur-3xl" />
            <div className="absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-brand-violet/30 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />
          </div>
          <h2 className="text-balance text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.7] text-slate-300 sm:text-lg">
            Tell us what you want to build. We&apos;ll suggest a practical technical path and a realistic first
            version, usually within 24 hours.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#contact" className="gap-2">
              Book a free call <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="ghost" external className="gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
