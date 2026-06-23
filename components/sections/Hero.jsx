import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button, Container } from "@/components/ui";

export default function Hero() {
  return (
    <header id="home" className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)]" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <Container className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div>
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            Sri Lankan software team building for local and global clients
          </span>
          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Custom Software, Websites & Business Systems for Growing Companies
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AlphaGen Coding builds modern web applications, SaaS products, POS systems, IoT-integrated solutions and
            business websites for clients in Sri Lanka and worldwide.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#work" className="gap-2">
              View Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Get Free Consultation
            </Button>
          </div>
          <p className="mt-8 flex max-w-3xl items-start gap-3 text-sm font-medium leading-7 text-slate-300">
            <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
            Trusted by businesses in education, tourism, publishing, cleaning services, advertising and retail.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 ring-1 ring-white/10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">AlphaGen Delivery Board</p>
                <p className="text-xs text-slate-400">Websites, SaaS, POS, IoT and automation</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                Live
              </span>
            </div>
            <div className="grid gap-3">
              {[
                ["ClassFlow SaaS", "QR attendance + payments", "92%"],
                ["Tourism website", "Lead-focused public site", "Ready"],
                ["POS System", "Billing + reports", "Build"],
              ].map(([title, text, status]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">{text}</p>
                    </div>
                    <span className="text-sm font-bold text-cyan-300">{status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Web Apps", "Systems", "Cloud"].map((item) => (
                <div key={item} className="rounded-2xl bg-cyan-300/10 p-4 text-center">
                  <p className="text-xs font-semibold text-cyan-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
