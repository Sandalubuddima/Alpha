import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Dumbbell,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Paintbrush,
  Rocket,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Store,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { Button, Container, PortfolioCard, Section, ServiceCard } from "./ui";

const clients = [
  "ClassFlow",
  "Malpiyali",
  "Mishel Lanka Tours",
  "Everlasting Cleaning",
  "Lanka Invite",
  "Siyasro Advertising",
];

const services = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Secure dashboards, portals and workflow systems built around how your business actually operates.",
  },
  {
    icon: Globe2,
    title: "Business Websites",
    description: "Fast, conversion-focused websites for SMEs, service businesses, institutes and growing brands.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description: "From MVP to launch-ready SaaS platforms with user accounts, payments, admin panels and subscriptions.",
  },
  {
    icon: Store,
    title: "POS Systems",
    description: "Point-of-sale systems for products, sales, billing, stock control and business reporting.",
  },
  {
    icon: Dumbbell,
    title: "Gym Management Systems",
    description: "Member profiles, attendance, packages, payments and day-to-day gym operation tools.",
  },
  {
    icon: Cpu,
    title: "IoT & Device-Integrated Systems",
    description: "Software connected with devices, sensors, access-control workflows and hardware data.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Clean interfaces for websites, dashboards and software products that users can understand quickly.",
  },
  {
    icon: Server,
    title: "Cloud Deployment & Maintenance",
    description: "VPS setup, Nginx, Cloudflare, backups, monitoring and long-term launch support.",
  },
];

const portfolio = [
  {
    name: "ClassFlow",
    type: "SaaS Product",
    status: "Public",
    href: "https://classflow.lk",
    description:
      "Smart tuition class management platform with QR attendance, student management, payments, teacher-institute workflows and student portal.",
    tech: ["SaaS", "QR Attendance", "Payments"],
  },
  {
    name: "Malpiyali",
    type: "Business Website",
    status: "Public",
    href: "https://malpiyali.com",
    description: "Business website for a publishing / book-related brand with a clean online presence.",
    tech: ["Website", "Publishing", "SEO"],
  },
  {
    name: "Mishel Lanka Tours",
    type: "Tourism Website",
    status: "Public",
    href: "https://mishellankatours.com",
    description:
      "Tourism website built to promote travel packages and attract local and international customers.",
    tech: ["Travel", "Lead Generation", "Responsive"],
  },
  {
    name: "Everlasting Cleaning",
    type: "Service Website",
    status: "Public",
    href: "https://everlastingcleaning.au",
    description:
      "Australian cleaning service website focused on trust, service presentation and lead generation.",
    tech: ["Australia", "Services", "Conversion"],
  },
  {
    name: "Lanka Invite",
    type: "Digital Platform",
    status: "Public",
    href: "https://lankainvite.lk",
    description: "Digital invitation platform / website for event invitations and online sharing.",
    tech: ["Events", "Digital Invites", "Sharing"],
  },
  {
    name: "Siyasro Advertising",
    type: "Business Website",
    status: "Public",
    href: "https://siyasroadvertising.com",
    description: "Advertising business website showcasing services and client trust.",
    tech: ["Advertising", "Portfolio", "Brand"],
  },
  {
    name: "Gym Management System",
    type: "Business System",
    status: "Private",
    description: "Custom system for managing gym members, attendance, payments and operations.",
    tech: ["Members", "Payments", "Operations"],
  },
  {
    name: "POS System",
    type: "Retail System",
    status: "Private",
    description: "Point-of-sale system for managing sales, products, billing and business reports.",
    tech: ["Billing", "Inventory", "Reports"],
  },
  {
    name: "IoT Projects",
    type: "Device Integration",
    status: "Private",
    description: "Device-integrated systems using hardware, sensors or access-control style workflows.",
    tech: ["IoT", "Sensors", "Automation"],
  },
];

const productFeatures = [
  "QR Attendance",
  "Student Management",
  "Payments",
  "Online Classes",
  "Teacher & Institute Management",
  "Student Portal",
];

const whyChooseUs = [
  "Direct founder communication",
  "Fast development cycles",
  "Affordable compared to large agencies",
  "Modern technologies",
  "Local + foreign client experience",
  "Long-term support after launch",
  "Ability to build both software and IoT-integrated solutions",
];

const process = [
  { icon: Search, title: "Understand your business", text: "We clarify your goals, users, workflows and success criteria." },
  { icon: ClipboardCheck, title: "Plan the solution", text: "We map the scope, features, timeline and practical launch path." },
  { icon: LayoutDashboard, title: "Design UI/UX", text: "We create a clean experience for customers, staff and admins." },
  { icon: Settings, title: "Build and test", text: "We develop, review and test across devices before launch." },
  { icon: Rocket, title: "Launch and support", text: "We deploy, monitor and keep improving the system after release." },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "Tailwind CSS",
  "VPS",
  "Nginx",
  "Cloudflare",
  "GitHub Actions",
  "IoT",
  "REST APIs",
];

const testimonials = [
  {
    brand: "Mishel Lanka Tours",
    quote: "AlphaGen Coding delivered a professional, mobile-friendly tourism website and made the process simple.",
    person: "Pubudu Warnasooriya",
    role: "Owner",
  },
  {
    brand: "Malpiyali",
    quote: "The team created a clean website that represents our brand well and supported us throughout the project.",
    person: "Mo Mohammadkhani",
    role: "Owner",
  },
  {
    brand: "Siyasro Advertising",
    quote: "They understood our requirements, delivered on time and gave us a modern online presence for the business.",
    person: "Anuradha Jayasekara",
    role: "Owner",
  },
];

export function Hero() {
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
            AlphaGen Coding builds modern web applications, SaaS products, POS systems,
            IoT-integrated solutions and business websites for clients in Sri Lanka and worldwide.
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

export function ClientStrip() {
  return (
    <section className="border-y border-white/10 bg-slate-900/70 py-8">
      <Container>
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Work and clients connected with AlphaGen Coding
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-bold text-white"
            >
              {client}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Software services for businesses that need more than a basic website"
      description="We help companies digitize operations, launch products and replace manual workflows with reliable cloud-based systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} href="#contact" />
        ))}
      </div>
    </Section>
  );
}

export function FeaturedWork() {
  return (
    <Section
      id="work"
      eyebrow="Featured Work"
      title="Websites, products and private systems built for real business needs"
      description="A mix of public client websites, AlphaGen product work and private business systems."
      className="bg-slate-900/60"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}

export function Products() {
  return (
    <Section id="products" eyebrow="Product" title="ClassFlow: Smart Tuition Class Management System">
      <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
            <GraduationCap className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="text-3xl font-black text-white">Built for tuition classes and institutes</h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            ClassFlow helps institutes manage attendance, students, payments, online classes and teacher workflows from
            one modern platform.
          </p>
          <Button href="https://classflow.lk" external className="mt-7">
            Visit ClassFlow
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {productFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <span className="font-semibold text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why Choose Us"
      title="A practical, founder-led software team"
      description="We keep communication direct, timelines realistic and solutions focused on business value."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div key={item} className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
            <p className="font-semibold leading-7 text-white">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="Process" title="From idea to launch in five clear steps" className="bg-slate-900/60">
      <div className="grid gap-5 md:grid-cols-5">
        {process.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <span className="text-sm font-black text-cyan-300">0{index + 1}</span>
            <step.icon className="mt-5 h-7 w-7 text-white" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function TechStack() {
  return (
    <Section
      eyebrow="Tech Stack"
      title="Modern tools for web, cloud and connected systems"
      description="We choose technology based on maintainability, performance and the client’s long-term needs."
    >
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { icon: MonitorSmartphone, title: "Frontend", text: "Responsive interfaces for websites, dashboards and apps." },
          { icon: Database, title: "Backend", text: "APIs, databases, authentication and business logic." },
          { icon: Wifi, title: "Connected Systems", text: "IoT-ready workflows and device-integrated software." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <item.icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About AlphaGen" title="Young, skilled and focused on real business software">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="text-lg leading-9 text-slate-300">
            AlphaGen Coding started from building real-world software projects during university and has grown into a
            software company focused on helping businesses digitize operations. Today, we build websites, SaaS
            platforms, business systems, POS solutions and IoT-integrated systems for Sri Lankan and international
            clients.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            We do not try to look like a huge enterprise agency. We focus on being accessible, technically sharp and
            practical: understanding your business, building what matters and supporting it after launch.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Users, label: "Founder-led communication" },
            { icon: BriefcaseBusiness, label: "Business-first planning" },
            { icon: Zap, label: "Fast iteration and support" },
            { icon: CreditCard, label: "Systems that improve operations" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-4">
              <item.icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <span className="font-semibold text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="What clients appreciate"
      description="Short, practical feedback from businesses that worked with AlphaGen Coding."
      className="bg-slate-900/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.brand} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{testimonial.brand}</p>
            <blockquote className="mt-5 text-base leading-8 text-slate-200">"{testimonial.quote}"</blockquote>
            <div className="mt-6">
              <p className="font-bold text-white">{testimonial.person}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us what you want to build"
      description="Send your idea, business problem or project scope. We usually reply within 24 hours."
    >
      <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
          {[
            { label: "Name", type: "text", placeholder: "Your name" },
            { label: "Email", type: "email", placeholder: "you@example.com" },
            { label: "Company", type: "text", placeholder: "Company or project name" },
          ].map((field) => (
            <label key={field.label} className="grid gap-2 text-sm font-semibold text-white">
              {field.label}
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-white">
            Project details
            <textarea
              rows="5"
              placeholder="Tell us about the website, system, SaaS product, POS, IoT workflow or automation you need."
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
          >
            Send Message
          </button>
          {/* <p className="text-xs leading-6 text-slate-400">Frontend-only form for now. Connect email/API later.</p> */}
        </form>
        <div className="rounded-3xl bg-slate-950/70 p-6">
          <h3 className="text-2xl font-bold text-white">Start with a free consultation</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            We can discuss your requirements, suggest a practical technical path and estimate a realistic first version.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="https://wa.me/94700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              WhatsApp AlphaGen Coding
            </a>
            <a
              href="mailto:hello@alphagencoding.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              hello@alphagencoding.com
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white">
              <MapPin className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  const serviceLinks = ["Websites", "Custom Systems", "SaaS", "POS", "IoT", "Cloud Support"];
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <h2 className="text-2xl font-black text-white">AlphaGen Coding</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Sri Lankan software development company building websites, SaaS platforms, business systems, POS
              solutions and IoT-integrated applications.
            </p>
          </div>
          <FooterList title="Quick Links" items={quickLinks} />
          <FooterList
            title="Services"
            items={serviceLinks.map((item) => ({ label: item, href: "#services" }))}
          />
          <div>
            <h3 className="font-bold text-white">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <span>Sri Lanka</span>
              <a href="mailto:hello@alphagencoding.com" className="hover:text-cyan-300">
                hello@alphagencoding.com
              </a>
              <a href="https://wa.me/94700000000" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AlphaGen Coding. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-cyan-300">
              Facebook
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-400">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-cyan-300">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
