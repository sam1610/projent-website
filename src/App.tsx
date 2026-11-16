import React from 'react';
import {
  Bot,
  MessageSquareShare,
  FileText,
  Camera,
  ShoppingCart,
  Users,
  X,
  Phone,
  Mail,
  Globe,
  MapPin,
  Building2,
  Hash,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Zap,
  CheckCircle2,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface Service {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  images: string[];
  icon: React.ReactNode;
  tag: string;
}

/* ─────────────────────────────────────────────
   Modal
───────────────────────────────────────────── */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, onClose]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog" aria-modal="true" aria-label={title}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   App
───────────────────────────────────────────── */
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [selectedSvc, setSelectedSvc] = React.useState<Service | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  const services: Service[] = [
    {
      title: 'Agentic Engage',
      subtitle: 'Autonomous Lifecycle Marketing',
      description: 'Transforms customer outreach into a self-driving ecosystem 24/7. NLP, sentiment analysis, and chat resumes for proactive messaging with zero manual overhead.',
      fullDescription: 'Autonomous Lifecycle Marketing & Omnichannel Communication. Transforms customer outreach into a self-driving ecosystem 24/7. Uses NLP, sentiment analysis, and chat resumes for proactive messaging, evaluating sentiment to identify churn risks, uncover up-sell opportunities, and resolve needs before they escalate with zero manual overhead.',
      images: ['/Agentic-Engage-1.png', '/Agentic-Engage-2.png'],
      icon: <Bot className="w-5 h-5" />,
      tag: 'Marketing',
    },
    {
      title: 'Agentic Contact Center',
      subtitle: 'Autonomous Customer Engagement',
      description: 'Replaces traditional queues with a multi-agent digital workforce across voice and WhatsApp. 24/7 — no wait times, no manual intervention.',
      fullDescription: 'The Autonomous Customer Engagement Platform. Replaces traditional queues with a multi-agent digital workforce across voice and WhatsApp. Operates 24/7 to lower costs and eliminate wait times, dynamically querying back-end systems to execute workflows like rescheduling classes or processing billing without human intervention.',
      images: ['/Agentic-Contact-Center.png'],
      icon: <MessageSquareShare className="w-5 h-5" />,
      tag: 'CX',
    },
    {
      title: 'AccountAI Portal',
      subtitle: 'Compliance & Audit Platform',
      description: 'Autonomous document processing for accountants. AI-driven COA mapping, vendor recognition, and automated compliance checks — always on, zero manual effort.',
      fullDescription: 'The Agentic Compliance & Audit Platform for Accountants. Autonomous document processing for multi-source financial documents. Features AI-driven Chart of Accounts (COA) mapping, vendor recognition, and automated compliance checks working independently in the background.',
      images: ['/AccountAI-Portal.png'],
      icon: <FileText className="w-5 h-5" />,
      tag: 'Finance',
    },
    {
      title: 'uFoto Agentic Gallery',
      subtitle: 'Autonomous Event Media Curation',
      description: 'Secure facial mapping scans event databases to instantly tag and deliver personalized, privacy-compliant galleries — no searching, no manual curation.',
      fullDescription: "Autonomous Event Media Curation. Eliminates manual photo searching after corporate events. Utilizes secure facial mapping and ID verification to instantly scan massive event media databases, identifying, tagging, and delivering personalized, privacy-compliant galleries directly to the attendee's device.",
      images: ['/uFoto-Agentic-Gallery.png'],
      icon: <Camera className="w-5 h-5" />,
      tag: 'Events',
    },
    {
      title: 'Agentic Ordering',
      subtitle: 'WhatsApp Ordering & Delivery',
      description: 'Turn WhatsApp into your most powerful sales channel with automated dispatch, real-time tracking, and smart logistics — all agent-driven.',
      fullDescription: 'The Autonomous Online Ordering & Intelligent Product & Service Platform. An all-in-one WhatsApp ordering and intelligent delivery system that turns basic messaging into a powerful sales channel with automated dispatch, real-time tracking, and smart logistics.',
      images: ['/AgenticOrdering-1.png', '/AgenticOrdering-2.png', '/AgenticOrdering-3.png'],
      icon: <ShoppingCart className="w-5 h-5" />,
      tag: 'Commerce',
    },
    {
      title: 'Agentic Club OS',
      subtitle: 'Autonomous Community Management',
      description: 'Full lifecycle community management — WhatsApp enrolments, recurring billing, and schedule updates, all handled autonomously without any admin overhead.',
      fullDescription: 'A fully autonomous community management platform. Uses multi-agent workflows to proactively manage the member lifecycle—facilitating WhatsApp-based enrolments, recurring billing, and schedule updates to drive operational profitability and effortless member engagement.',
      images: ['/Agentic-Club-OS-1.png', '/Agentic-Club-OS-2.png', '/Agentic-Club-OS-3.png'],
      icon: <Users className="w-5 h-5" />,
      tag: 'Community',
    },
  ];

  const footerLinks = [
    {
      heading: 'Solutions',
      items: services.map(s => s.title),
    },
    {
      heading: 'Services',
      items: ['AI Consulting', 'Agentic Integration', 'Workflow Automation', 'Custom AI Agents'],
    },
    {
      heading: 'Company',
      items: ['About Us', 'Contact', 'Privacy Policy'],
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white/20"
      style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
    >
      {/* ═══════════════════════════════════════
          NAV
      ═══════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <span className="text-lg font-semibold tracking-tight">
            Projent<span className="text-[#FFCC00]">.</span>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <button onClick={() => setAboutOpen(true)} className="hover:text-white transition-colors">About</button>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-gray-100 transition-colors px-5 py-2 text-sm font-semibold"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-[#0a0a0a] border-b border-white/5 px-5 py-6 space-y-5 md:hidden">
          <a href="#solutions" onClick={() => setMobileOpen(false)} className="block text-base text-gray-300 hover:text-white">Solutions</a>
          <button onClick={() => { setMobileOpen(false); setAboutOpen(true); }} className="block text-base text-gray-300 hover:text-white w-full text-left">About</button>
          <button onClick={() => { setMobileOpen(false); setContactOpen(true); }} className="w-full rounded-full bg-white text-black font-semibold py-3 text-sm">Contact Us</button>
        </div>
      )}

      {/* ═══════════════════════════════════════
          HERO  — full-screen, bold, editorial
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-5 md:px-12 max-w-7xl mx-auto">
        {/* Background word mark */}
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none"
        >
          AGENTIC
        </span>

        {/* Content */}
        <div className="relative z-10 max-w-4xl space-y-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
            <span className="w-6 h-px bg-[#FFCC00]" />
            Autonomous AI for Business
          </p>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-white">
            The Agentic<br />
            Digital<br />
            <span className="text-[#FFCC00]">Workforce.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Six autonomous platforms that run your marketing, support, finance, and operations — 24/7, without human intervention.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors px-7 py-3.5 text-base font-semibold"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 text-white transition-colors px-7 py-3.5 text-base font-semibold"
            >
              Explore Solutions
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 pt-6 border-t border-white/5">
            {[
              { value: '6', label: 'Agentic Platforms' },
              { value: '24/7', label: 'Fully Autonomous' },
              { value: '0', label: 'Manual Overhead' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HORIZONTAL SOLUTIONS SCROLL
      ═══════════════════════════════════════ */}
      <section id="solutions" className="py-24 border-t border-white/5">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-5 md:px-12 mb-10 flex items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
              <span className="inline-block w-5 h-px bg-[#FFCC00] align-middle mr-2" />
              What We Build
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Our Agentic<br />Solutions
            </h2>
          </div>
          {/* Arrow controls — desktop */}
          <div className="hidden md:flex items-center gap-2 mb-1 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="scroll-track flex gap-4 overflow-x-auto px-5 md:px-12"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {services.map((svc, i) => (
            <button
              key={i}
              onClick={() => setSelectedSvc(svc)}
              style={{ scrollSnapAlign: 'start', minWidth: '300px', maxWidth: '300px' }}
              className="group flex flex-col justify-between gap-6 p-7 rounded-2xl bg-[#111] border border-white/8 hover:border-white/20 hover:bg-[#161616] transition-all duration-200 text-left flex-shrink-0 cursor-pointer"
            >
              {/* Top: icon + tag */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  {svc.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 border border-white/8 rounded-full px-2.5 py-1">
                  {svc.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex-1 space-y-2">
                <h3 className="text-base font-bold text-white leading-snug">{svc.title}</h3>
                <p className="text-xs font-medium text-gray-500">{svc.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed pt-1">{svc.description}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 group-hover:text-[#FFCC00] transition-colors">
                View details <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}

          {/* Trailing spacer so last card isn't flush with edge */}
          <div className="flex-shrink-0 w-5 md:w-12" aria-hidden />
        </div>

        {/* Mobile scroll hint dots */}
        <div className="flex justify-center gap-1.5 mt-8 md:hidden">
          {services.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/15" />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURE — Agentic AI section (like La Vida "Innovation" block)
      ═══════════════════════════════════════ */}
      <section className="border-t border-white/5 py-24 max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
                <span className="inline-block w-5 h-px bg-[#FFCC00] align-middle mr-2" />
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Agentic AI.<br />
                <span className="text-[#FFCC00]">Your autonomous workforce.</span>
              </h2>
            </div>

            <p className="text-base text-gray-400 leading-relaxed">
              Our agents don't just answer questions — they perceive context, execute multi-step workflows, query live back-end systems, and communicate across channels without any human in the loop.
            </p>

            <ul className="space-y-3">
              {[
                'Semantic Intent Routing across WhatsApp, Voice & Web',
                'Real-time back-end execution — CRMs, ERPs, billing systems',
                'Continuous sentiment analysis & proactive escalation',
                'End-to-end encrypted data exchange',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FFCC00] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors px-7 py-3.5 text-sm font-semibold"
            >
              Deploy Agents for Your Business <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right — WhatsApp-style chat mockup (mirrors La Vida's chat demo) */}
          <div className="relative">
            <div className="rounded-2xl bg-[#0a0a0a] border border-white/8 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-[#111]">
                <div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Projent AI Agent</p>
                  <p className="text-[11px] text-green-400 font-medium">● Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[260px]">
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-[#003399] rounded-2xl rounded-tr-sm px-4 py-2.5">
                    <p className="text-sm text-white">I need to follow up with customers who haven't renewed this month.</p>
                  </div>
                </div>

                {/* Agent bubble */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-[#1a1a1a] border border-white/8 rounded-2xl rounded-tl-sm px-4 py-2.5 space-y-1.5">
                    <p className="text-sm text-gray-200">On it. I've identified 34 lapsed customers, segmented them by churn risk, and scheduled personalised WhatsApp outreach for the next 48 hours.</p>
                    <p className="text-[11px] text-gray-500">3 high-risk accounts flagged for priority callback.</p>
                  </div>
                </div>

                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-[#003399] rounded-2xl rounded-tr-sm px-4 py-2.5">
                    <p className="text-sm text-white">Great. Also process any incoming orders on WhatsApp automatically.</p>
                  </div>
                </div>

                {/* Agent bubble */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-[#1a1a1a] border border-white/8 rounded-2xl rounded-tl-sm px-4 py-2.5">
                    <p className="text-sm text-gray-200">Done. Agentic Ordering is now live on your WhatsApp channel — routing, payment, and dispatch are fully automated.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════ */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12 text-center space-y-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
            <span className="inline-block w-5 h-px bg-[#FFCC00] align-middle mr-2" />
            Start Today
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Ready to move?<br />
            <span className="text-[#FFCC00]">Let AI handle the rest.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            No disruption to existing systems. Deploy your first autonomous agent in days, not months.
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors px-9 py-4 text-base font-semibold"
          >
            Start your journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-5 md:px-12 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand col */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <p className="text-lg font-semibold">
                Projent<span className="text-[#FFCC00]">.</span>
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Agentic AI solutions for modern businesses. Kingdom of Bahrain.
              </p>
              <div className="flex flex-col gap-1 text-xs text-gray-600">
                <a href="mailto:info@projent-solutions.com" className="hover:text-white transition-colors">info@projent-solutions.com</a>
                <span>+973 3378 7388</span>
                <a href="https://www.projent-solutions.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.projent-solutions.com</a>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map(col => (
              <div key={col.heading} className="space-y-4">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.items.map(item => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          if (item === 'About Us') setAboutOpen(true);
                          else if (item === 'Contact') setContactOpen(true);
                          else if (item === 'Privacy Policy') setPrivacyOpen(true);
                          else if (services.find(s => s.title === item)) setSelectedSvc(services.find(s => s.title === item)!);
                        }}
                        className="text-sm text-gray-500 hover:text-white transition-colors text-left"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-700">
            <p>© {new Date().getFullYear()} Projent Solutions W.L.L. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>CR No. 200232-1 · Jannusan, Kingdom of Bahrain</p>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-gray-500 hover:text-white transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════
          MODALS
      ═══════════════════════════════════════ */}

      {/* Privacy Policy */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <div className="p-8 space-y-6">
          <div className="pr-8 space-y-1">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500">Legal</p>
            <h2 className="text-2xl font-black text-white">Privacy Policy</h2>
            <p className="text-xs text-gray-600">PROJENT SOLUTIONS W.L.L · Last updated: October 2026</p>
          </div>

          <div className="space-y-5 text-sm text-gray-300 leading-relaxed">

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">1. Data Controller</h3>
              <p>
                Projent Solutions W.L.L (CR No. 200232-1), Building 305M, Road 611, Block 0506,
                Jannusan, Kingdom of Bahrain is the data controller for personal information collected
                through our platforms and services.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">2. Information We Collect</h3>
              <ul className="space-y-1.5 pl-3">
                {[
                  'Identity and contact information (name, phone number, email address)',
                  'Usage data and interaction logs generated through our agentic platforms',
                  'Communication content submitted via WhatsApp, voice, or web interfaces',
                  'Device and technical data (IP address, browser type, operating system)',
                  'Facial mapping data processed by uFoto — used solely for event media delivery and deleted after gallery generation',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">3. How We Use Your Data</h3>
              <ul className="space-y-1.5 pl-3">
                {[
                  'To deliver and operate our autonomous agentic services on your behalf',
                  'To process orders, bookings, and billing through Agentic Ordering and Club OS',
                  'To perform sentiment analysis and proactive outreach via Agentic Engage and Contact Center',
                  'To fulfil compliance and audit automation through AccountAI Portal',
                  'To personalise and deliver event photo galleries via uFoto',
                  'To communicate service updates and respond to your enquiries',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">4. Meta Platform Services</h3>
              <p>
                Several of our products (Agentic Engage, Agentic Contact Center, Agentic Ordering,
                Agentic Club OS) integrate with Meta's WhatsApp Business API. When you interact with
                us through WhatsApp, your messages are processed in accordance with both this policy
                and Meta's own Privacy Policy (<a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer" className="text-[#FFCC00] hover:underline">facebook.com/privacy/policy</a>).
                We do not share your personal data with Meta beyond what is required for message
                routing and delivery.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">5. Data Sharing</h3>
              <p>
                We do not sell, rent, or trade your personal information. Data may be shared with
                trusted sub-processors (cloud infrastructure, payment gateways) under strict
                confidentiality agreements, solely to operate our services. All sub-processors are
                bound by data protection obligations no less protective than this policy.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">6. Data Retention</h3>
              <p>
                We retain personal data only as long as necessary to deliver the service and meet
                legal obligations. Facial mapping data from uFoto is deleted immediately after
                gallery delivery. Communication logs are retained for a maximum of 12 months unless
                a longer period is required by law.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">7. Your Rights</h3>
              <p>
                You have the right to access, correct, delete, or export your personal data at any
                time. To exercise these rights, contact us at{' '}
                <a href="mailto:info@projent-solutions.com" className="text-[#FFCC00] hover:underline">
                  info@projent-solutions.com
                </a>. We will respond within 30 days.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">8. Security</h3>
              <p>
                All data is transmitted over encrypted connections (TLS 1.2+). Access to personal
                data is restricted to authorised personnel only, under role-based access controls.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">9. Changes to This Policy</h3>
              <p>
                We may update this policy periodically. Material changes will be communicated via
                our website and, where applicable, through the platform that collected your data.
                Continued use of our services after the effective date constitutes acceptance.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-bold text-white">10. Contact</h3>
              <p>
                For any privacy-related enquiries:{' '}
                <a href="mailto:info@projent-solutions.com" className="text-[#FFCC00] hover:underline">
                  info@projent-solutions.com
                </a>
                {' '}· +973 3378 7388
              </p>
            </section>
          </div>
        </div>
      </Modal>

      {/* About */}
      <Modal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} title="About Us">
        <div className="p-8 space-y-7">
          <div className="pr-8 space-y-2">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500">Who We Are</p>
            <h2 className="text-2xl font-black text-white leading-snug">
              An Agentic-First <span className="text-[#FFCC00]">Technology Company</span>
            </h2>
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            Projent Solutions is built entirely around the agentic dimension of AI — the ability of software to perceive context, make decisions, and take autonomous action without human prompting. Every product we ship, every engagement we undertake, and every integration we deliver is designed so that intelligence operates continuously in the background, turning your operations into self-driving systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Agentic Products', body: 'Six purpose-built platforms — Engage, Contact Center, AccountAI, uFoto, Ordering, and Club OS.' },
              { title: 'AI Consulting', body: 'Roadmap design to replace manual bottlenecks with multi-agent workflows, delivering measurable ROI from day one.' },
              { title: 'Agentic Integration', body: 'Embed autonomous agents into your existing CRMs, ERPs, WhatsApp, and voice platforms. No rebuild required.' },
            ].map(p => (
              <div key={p.title} className="p-5 rounded-xl bg-[#0a0a0a] border border-white/8 space-y-2">
                <p className="text-sm font-bold text-white">{p.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setAboutOpen(false); setContactOpen(true); }}
            className="w-full py-3.5 rounded-full bg-white text-black hover:bg-gray-100 transition-colors font-semibold text-sm"
          >
            Talk to Us
          </button>
        </div>
      </Modal>

      {/* Contact */}
      <Modal isOpen={contactOpen} onClose={() => setContactOpen(false)} title="Contact Us">
        <div className="p-8 space-y-6">
          <div className="pr-8 space-y-1">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500">Get in Touch</p>
            <h2 className="text-2xl font-black text-white">PROJENT SOLUTIONS W.L.L</h2>
          </div>
          <div className="space-y-3">
            {[
              { icon: <Hash className="w-4 h-4 text-gray-400" />, label: 'Commercial Registration (CR) No.', value: '200232-1', href: undefined },
              { icon: <MapPin className="w-4 h-4 text-gray-400" />, label: 'Address', value: 'Building 305M, Road 611, Block 0506, Jannusan, Kingdom of Bahrain', href: undefined },
              { icon: <Phone className="w-4 h-4 text-gray-400" />, label: 'Phone', value: '+973 3378 7388 / +973 3966 6081', href: undefined },
              { icon: <Mail className="w-4 h-4 text-gray-400" />, label: 'Email', value: 'info@projent-solutions.com', href: 'mailto:info@projent-solutions.com' },
              { icon: <Globe className="w-4 h-4 text-gray-400" />, label: 'Website', value: 'www.projent-solutions.com', href: 'https://www.projent-solutions.com' },
            ].map(row => (
              <div key={row.label} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/8">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">{row.icon}</div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">{row.label}</p>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">{row.value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-white">{row.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Registered activities */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/8">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-2">Registered Activities</p>
                <ul className="space-y-1.5">
                  {[
                    'Computer Consultancy and computer facilities management activities',
                    'Operations of eMarketplaces / websites / web portals',
                    'Computer programming activities',
                  ].map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Service detail */}
      <Modal isOpen={!!selectedSvc} onClose={() => setSelectedSvc(null)} title={selectedSvc?.title}>
        {selectedSvc && (
          <div>
            {selectedSvc.images.length > 0 && (
              <div className={`grid gap-2 p-4 ${selectedSvc.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {selectedSvc.images.map((src, i) => (
                  <img
                    key={i} src={src}
                    alt={`${selectedSvc.title} screenshot ${i + 1}`}
                    className="w-full rounded-xl object-cover aspect-video bg-[#0a0a0a]"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            <div className="p-8 pt-3 space-y-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500">{selectedSvc.subtitle}</p>
                <h2 className="text-2xl font-black text-white mt-1">{selectedSvc.title}</h2>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">{selectedSvc.fullDescription}</p>
              <button
                onClick={() => { setSelectedSvc(null); setContactOpen(true); }}
                className="mt-2 w-full py-3.5 rounded-full bg-white text-black hover:bg-gray-100 transition-colors font-semibold text-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
