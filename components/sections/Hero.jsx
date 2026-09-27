import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { BrowserFrame, Button, Container, TightText } from "@/components/ui";
import { cn } from "@/lib/utils";
import { publicAsset } from "@/lib/assets";

const stats = [
  { value: "8+", label: "Live client projects" },
  { value: "3", label: "Countries served" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "Post-launch support" },
];

export default function Hero() {
  const dashboard = publicAsset("/work/classflow-dashboard.png");

  return (
    <header id="home" className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="absolute -left-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -right-24 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-violet/[0.12] blur-3xl" />
      </div>

      <Container className="grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-20">
        <div>
          <span className="inline-flex rounded-full border border-brand-indigo/15 bg-tint px-3.5 py-1.5 text-[13px] font-semibold text-brand-indigo">
            Sri Lankan software team building for local and global clients
          </span>
          <h1 className="mt-6 text-balance text-[clamp(2.5rem,1.3rem+2.9vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Custom Software<TightText>,</TightText> Websites &{" "}
            <span className="text-gradient">Business Systems</span> for Growing Companies
          </h1>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.7] text-body sm:text-lg">
            AlphaGen Coding builds modern web applications, SaaS products, POS systems, IoT-integrated solutions and
            business websites for clients in Sri Lanka and worldwide.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#work" className="gap-2">
              View Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Get Free Consultation
            </Button>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-y-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col-reverse pr-4",
                  index % 2 === 1 && "border-l border-line pl-5",
                  index > 0 && "sm:border-l sm:border-line sm:pl-5",
                  index === 2 && "max-sm:border-l-0 max-sm:pl-0"
                )}
              >
                <dt className="mt-1 whitespace-nowrap text-[13px] leading-snug text-muted">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-[-0.02em] text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-xl text-[13px] leading-6 text-muted">
            Trusted by businesses in education, tourism, publishing, agriculture, cleaning services, advertising and retail.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl"
          />
          <div className="lg:[transform:perspective(1800px)_rotateY(-9deg)_rotateX(3deg)]">
            <BrowserFrame
              url="classflow.lk"
              src={dashboard}
              alt="ClassFlow dashboard"
              name="ClassFlow"
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              bodyClassName="aspect-[16/10]"
              className="shadow-[0_40px_90px_-30px_rgb(15_23_42/0.35)]"
            />
          </div>
          <div className="glass-chip float-slow absolute bottom-8 left-3 sm:-left-6 lg:-left-10">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            QR Attendance
          </div>
          <div className="glass-chip float-slower absolute right-3 top-14 sm:-right-5 lg:-right-6">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-indigo text-white">
              <RefreshCw className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
            </span>
            LKR payments synced
          </div>
        </div>
      </Container>
    </header>
  );
}
