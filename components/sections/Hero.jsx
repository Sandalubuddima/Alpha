import { ArrowRight, ArrowUpRight, BarChart3, Check, CircleHelp, Cpu, CreditCard, Globe2, LayoutDashboard, Layers3, Package, Settings2, ShoppingBag, Users, Wallet } from "lucide-react";
import { Button, Container } from "@/components/ui";
import styles from "./Hero.module.css";

const stats = [
  { value: "20+", label: "Live client projects" },
  { value: "3", label: "Countries served" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "Post-launch support" },
];
const capabilities = [
  { icon: Globe2, label: "Web Applications", detail: "Fast. Scalable. Connected." },
  { icon: CreditCard, label: "POS & Business Systems", detail: "Every operation, in sync." },
  { icon: Layers3, label: "SaaS Products", detail: "Built to grow with you." },
  { icon: Cpu, label: "IoT Solutions", detail: "Connected to the real world." },
];

function ProductShowcase() {
  return (
    <div className={styles.showcase} role="img" aria-label="Illustrative business dashboard showing revenue, customers, sales analytics and synced transactions, surrounded by web application, POS, SaaS and IoT capabilities.">
      <div aria-hidden="true" className={styles.composition}>
        <div className={styles.dashboard}>
          <div className={styles.appBar}>
            <span className={styles.appMark}><Layers3 size={17} /></span>
            <span className={styles.appName}>Business OS <span>Workspace</span></span>
            <span className={styles.online}><i />System online</span>
            <span className={styles.avatar}>AC</span>
          </div>
          <div className={styles.appBody}>
            <div className={styles.sidebar}>
              {[LayoutDashboard, BarChart3, ShoppingBag, Users, Package].map((Icon, index) => (
                <span key={index} className={index === 0 ? styles.selected : undefined}><Icon size={17} /></span>
              ))}
              <span className={styles.sidebarBottom}><Settings2 size={17} /><CircleHelp size={17} /></span>
            </div>
            <div className={styles.workspace}>
              <div className={styles.dashboardHeading}><div><span className={styles.overline}>YOUR BUSINESS, AT A GLANCE</span><h2>Overview</h2></div><span className={styles.period}>This month <span>⌄</span></span></div>
              <div className={styles.metrics}>
                <div className={styles.metric}><span><Wallet size={14} />Total revenue</span><strong>Rs. 842,500</strong><small><ArrowUpRight size={12} />18.6% <span>vs last month</span></small></div>
                <div className={styles.metric}><span><Users size={14} />Customers</span><strong>1,284</strong><small><ArrowUpRight size={12} />12.8% <span>vs last month</span></small></div>
              </div>
              <div className={styles.chartCard}>
                <div className={styles.chartHeading}><strong>Revenue overview</strong><span><i />Revenue</span></div>
                <div className={styles.chart}>
                  <div className={styles.axis}><span>900k</span><span>600k</span><span>300k</span></div>
                  <svg viewBox="0 0 360 115" preserveAspectRatio="none">
                    <defs><linearGradient id="hero-revenue-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#3b5bff" stopOpacity=".18" /><stop offset="1" stopColor="#3b5bff" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 20H360M0 57H360M0 94H360" stroke="#e9edf5" strokeDasharray="3 4" fill="none" />
                    <path d="M0 96C20 96 25 76 45 78S65 86 85 64S110 75 135 53S155 66 180 45S205 52 230 33S255 44 280 22S315 33 335 13L360 7V115H0Z" fill="url(#hero-revenue-fill)" />
                    <path d="M0 96C20 96 25 76 45 78S65 86 85 64S110 75 135 53S155 66 180 45S205 52 230 33S255 44 280 22S315 33 335 13L360 7" stroke="#3b5bff" strokeWidth="2.5" fill="none" />
                    <circle cx="335" cy="13" r="4" fill="#3b5bff" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div className={styles.chartLabels}><span>01 Jun</span><span>07 Jun</span><span>14 Jun</span><span>21 Jun</span><span>30 Jun</span></div>
              </div>
              <div className={styles.transactions}><div className={styles.transactionHeading}><strong>Recent transactions</strong><span>View all <ArrowRight size={11} /></span></div>
                {[{ name: "Online store", code: "Order #1048", amount: "Rs. 24,500", icon: ShoppingBag }, { name: "Retail terminal", code: "Order #1047", amount: "Rs. 8,250", icon: CreditCard }].map(({ name, code, amount, icon: Icon }) => (
                  <div key={code} className={styles.transaction}><span className={styles.transactionIcon}><Icon size={14} /></span><div><strong>{name}</strong><span>{code}</span></div><b>{amount}</b><span className={styles.paid}><Check size={10} />Paid</span></div>
                ))}
              </div>
              <div className={styles.sync}><span><Check size={11} />All payments synced</span><span>Updated just now</span></div>
            </div>
          </div>
        </div>
        {capabilities.map(({ icon: Icon, label, detail }, index) => (
          <div key={label} className={`${styles.capability} ${styles[`capability${index}`]}`}><span className={styles.capabilityIcon}><Icon size={19} /></span><div><strong>{label}</strong><span>{detail}</span></div></div>
        ))}
        <div className={styles.visualCaption}><span />ENGINEERED FOR THE WAY YOU WORK</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header id="home" className={styles.hero}>
      <div aria-hidden="true" className={styles.background}><div className="bg-dot-grid absolute inset-0" /></div>
      <Container className={styles.layout}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ${styles.enter}`}><span />BUILT IN SRI LANKA. MADE FOR THE WORLD.</p>
          <h1 className={`${styles.headline} ${styles.enter}`}>We Build<br /><span className="text-gradient">Digital Products</span><br />That Move Businesses<br />Forward.</h1>
          <p className={`${styles.description} ${styles.enter}`}>Custom software, high-performance websites, SaaS platforms and business systems — designed and built in Sri Lanka for ambitious businesses worldwide.</p>
          <div className={`${styles.actions} ${styles.enter}`}>
            <Button href="#contact" className={`group gap-3 ${styles.primary}`}>Start a Project <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" /></Button>
            <Button href="#work" variant="secondary">Explore Our Work</Button>
          </div>
        </div>
        <ProductShowcase />
        <div className={`${styles.trust} ${styles.enter}`}>
          <dl className={styles.stats}>{stats.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <p>Serving businesses across education, tourism, publishing, agriculture, cleaning services, advertising and retail.</p>
        </div>
      </Container>
    </header>
  );
}
