import React from 'react';
import {
  Bot,
  MessageSquareShare,
  FileText,
  Camera,
  ShoppingCart,
  Users,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  MapPin,
  Building2,
  Hash,
  ArrowRight,
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
   Reusable Modal
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
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-gray-800 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors z-20"
          aria-label="Close modal"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Agentic Engage',
      subtitle: 'Autonomous Lifecycle Marketing',
      description:
        'Transforms customer outreach into a self-driving ecosystem 24/7. Uses NLP, sentiment analysis, and chat resumes for proactive messaging with zero manual overhead.',
      fullDescription:
        'Autonomous Lifecycle Marketing & Omnichannel Communication. Transforms customer outreach into a self-driving ecosystem 24/7. Uses NLP, sentiment analysis, and chat resumes for proactive messaging, evaluating sentiment to identify churn risks, uncover up-sell opportunities, and resolve needs before they escalate with zero manual overhead.',
      images: ['/Agentic-Engage-1.png', '/Agentic-Engage-2.png'],
      icon: <Bot className="w-6 h-6 text-white" />,
      tag: 'Marketing',
    },
    {
      title: 'Agentic Contact Center',
      subtitle: 'Autonomous Customer Engagement',
      description:
        'Replaces traditional queues with a multi-agent digital workforce across voice and WhatsApp. Operates 24/7 to lower costs and eliminate wait times.',
      fullDescription:
        'The Autonomous Customer Engagement Platform. Replaces traditional queues with a multi-agent digital workforce across voice and WhatsApp. Operates 24/7 to lower costs and eliminate wait times, dynamically querying back-end systems to execute workflows like rescheduling classes or processing billing without human intervention.',
      images: ['/Agentic-Contact-Center.png'],
      icon: <MessageSquareShare className="w-6 h-6 text-white" />,
      tag: 'CX',
    },
    {
      title: 'AccountAI Portal',
      subtitle: 'Compliance & Audit Platform',
      description:
        'Autonomous document processing for accountants. AI-driven COA mapping, vendor recognition, and automated compliance checks working independently in the background.',
      fullDescription:
        'The Agentic Compliance & Audit Platform for Accountants. Autonomous document processing for multi-source financial documents. Features AI-driven Chart of Accounts (COA) mapping, vendor recognition, and automated compliance checks working independently in the background.',
      images: ['/AccountAI-Portal.png'],
      icon: <FileText className="w-6 h-6 text-white" />,
      tag: 'Finance',
    },
    {
      title: 'uFoto Agentic Gallery',
      subtitle: 'Autonomous Event Media Curation',
      description:
        'Uses secure facial mapping to scan event media databases and securely deliver personalized, privacy-compliant photo galleries instantly with zero manual effort.',
      fullDescription:
        "Autonomous Event Media Curation. Eliminates manual photo searching after corporate events. Utilizes secure facial mapping and ID verification to instantly scan massive event media databases, identifying, tagging, and delivering personalized, privacy-compliant galleries directly to the attendee's device.",
      images: ['/uFoto-Agentic-Gallery.png'],
      icon: <Camera className="w-6 h-6 text-white" />,
      tag: 'Events',
    },
    {
      title: 'Agentic Ordering',
      subtitle: 'WhatsApp Ordering & Delivery',
      description:
        'Turn a basic messaging app into your most powerful sales channel with automated dispatch, real-time tracking, and smart logistics.',
      fullDescription:
        'The Autonomous Online Ordering & Intelligent Product & Service Platform. An all-in-one WhatsApp ordering and intelligent delivery system that turns basic messaging into a powerful sales channel with automated dispatch, real-time tracking, and smart logistics.',
      images: ['/AgenticOrdering-1.png', '/AgenticOrdering-2.png', '/AgenticOrdering-3.png'],
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      tag: 'Commerce',
    },
    {
      title: 'Agentic Club OS',
      subtitle: 'Autonomous Community Management',
      description:
        'Autonomous management of the member lifecycle. Handles WhatsApp-based enrolments, recurring billing, and schedule updates seamlessly.',
      fullDescription:
        'A fully autonomous community management platform. Uses multi-agent workflows to proactively manage the member lifecycle—facilitating WhatsApp-based enrolments, recurring billing, and schedule updates to drive operational profitability and effortless member engagement.',
      images: ['/Agentic-Club-OS-1.png', '/Agentic-Club-OS-2.png', '/Agentic-Club-OS-3.png'],
      icon: <Users className="w-6 h-6 text-white" />,
      tag: 'Community',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope',system-ui,sans-serif] selection:bg-white/20">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-900">
        <div className="container mx-auto md:px-24 px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight text-white">
              Projent<span className="text-[#FFCC00]">Solutions</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Solutions</a>
            <button
              onClick={() => setIsAboutOpen(true)}
              className="hover:text-white transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#003399] hover:bg-[#0040cc] px-5 py-2 text-sm font-semibold text-white transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-gray-900 px-5 py-5 space-y-4">
            <a
              href="#services"
              className="block text-gray-300 hover:text-white py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <button
              className="block text-left text-gray-300 hover:text-white py-2 text-base w-full"
              onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(true); }}
            >
              About Us
            </button>
            <button
              className="w-full mt-2 px-5 py-3 rounded-full bg-[#003399] text-white font-semibold text-base"
              onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }}
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="pt-40 pb-28 container mx-auto md:px-24 px-5">
        <div className="max-w-3xl space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-400 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] inline-block" />
            Agentic AI for Business
          </div>

          <h1 className="text-4xl md:text-[48px] lg:text-[60px] font-semibold text-white leading-tight text-balance">
            Empowering Professionals for the{' '}
            <span className="text-[#FFCC00]">Future of Tech</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Your strategic partner in building autonomous workflows and agentic digital workforces. Move beyond static operations to intelligent, self-driving ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003399] hover:bg-[#0040cc] px-7 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Transform Your Business
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 px-7 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-900" />

      {/* ── Services Grid ── */}
      <section id="services" className="pt-20 pb-24 container mx-auto md:px-24 px-5">
        <div className="mb-14 space-y-4 max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Our Agentic Solutions
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Six self-driving platforms that eliminate manual bottlenecks, drive operational profitability, and engage customers at scale — 24/7, without human intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col gap-5 p-7 rounded-[10px] bg-[#111111] border border-gray-800 hover:border-gray-600 hover:bg-[#161616] transition-all duration-200 text-left shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
                  {service.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 border border-gray-800 rounded-full px-2.5 py-1">
                  {service.tag}
                </span>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed pt-1">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-900" />

      {/* ── Stats band ── */}
      <section className="py-16 container mx-auto md:px-24 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '6', label: 'Agentic Platforms' },
            { value: '24/7', label: 'Autonomous Operation' },
            { value: '0', label: 'Manual Overhead' },
            { value: '∞', label: 'Scale on Demand' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-900" />

      {/* ── CTA Band ── */}
      <section className="py-24 container mx-auto md:px-24 px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Ready to deploy your{' '}
              <span className="text-[#FFCC00]">agentic workforce?</span>
            </h2>
            <p className="text-lg text-gray-400">
              Let's map your manual bottlenecks to autonomous workflows. No disruption to existing systems.
            </p>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#003399] hover:bg-[#0040cc] px-8 py-4 text-base font-semibold text-white transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-900" />

      {/* ── Footer ── */}
      <footer className="py-12 container mx-auto md:px-24 px-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">Projent<span className="text-[#FFCC00]">Solutions</span></p>
            <p className="text-sm text-gray-500">PROJENT SOLUTIONS W.L.L. · Kingdom of Bahrain</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500">
            <a href="mailto:info@projent-solutions.com" className="hover:text-white transition-colors">
              info@projent-solutions.com
            </a>
            <span>+973 3378 7388 / +973 3966 6081</span>
            <a href="https://www.projent-solutions.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              www.projent-solutions.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Projent Solutions W.L.L. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">CR No. 200232-1</p>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          MODALS
      ══════════════════════════════════════ */}

      {/* ── About Modal ── */}
      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About Us">
        <div className="p-8 space-y-7">
          <div className="pr-8 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">Who We Are</p>
            <h2 className="text-2xl font-semibold text-white leading-snug">
              An Agentic-First{' '}
              <span className="text-[#FFCC00]">Technology Company</span>
            </h2>
          </div>

          <p className="text-base text-gray-300 leading-relaxed">
            Projent Solutions is built entirely around the agentic dimension of AI — the ability of software to perceive context, make decisions, and take autonomous action without human prompting. Every product we ship, every engagement we undertake, and every integration we deliver is designed so that intelligence operates continuously in the background, turning your operations into self-driving systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Agentic Products',
                body: 'Six purpose-built platforms — Engage, Contact Center, AccountAI, uFoto, Ordering, and Club OS — each a fully autonomous solution for a distinct business domain.',
              },
              {
                title: 'AI Consulting',
                body: 'We assess your operations and design a roadmap to replace manual bottlenecks with multi-agent workflows, delivering measurable ROI from day one.',
              },
              {
                title: 'Agentic Integration',
                body: 'We embed autonomous agents directly into your existing stack — CRMs, ERPs, WhatsApp, voice platforms, and custom APIs — no rebuild required.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="p-5 rounded-[10px] bg-[#0a0a0a] border border-gray-800 space-y-2">
                <p className="text-sm font-semibold text-white">{pillar.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setIsAboutOpen(false); setIsContactOpen(true); }}
            className="w-full py-3.5 rounded-full bg-[#003399] hover:bg-[#0040cc] text-white font-semibold text-sm transition-colors"
          >
            Talk to Us
          </button>
        </div>
      </Modal>

      {/* ── Contact Modal ── */}
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contact Us">
        <div className="p-8 space-y-6">
          <div className="pr-8 space-y-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">Get in Touch</p>
            <h2 className="text-2xl font-semibold text-white">PROJENT SOLUTIONS W.L.L</h2>
          </div>

          <div className="space-y-3">
            {/* CR No */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Hash className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Commercial Registration (CR) No.</p>
                <p className="text-sm font-semibold text-white">200232-1</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Address</p>
                <p className="text-sm font-semibold text-white">Building 305M, Road 611, Block 0506, Jannusan, Kingdom of Bahrain</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Phone</p>
                <p className="text-sm font-semibold text-white">+973 3378 7388 / +973 3966 6081</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Email</p>
                <a href="mailto:info@projent-solutions.com" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                  info@projent-solutions.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Website</p>
                <a href="https://www.projent-solutions.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                  www.projent-solutions.com
                </a>
              </div>
            </div>

            {/* Registered Activities */}
            <div className="flex items-start gap-4 p-4 rounded-[10px] bg-[#0a0a0a] border border-gray-800">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-2">Registered Activities</p>
                <ul className="space-y-1.5">
                  {[
                    'Computer Consultancy and computer facilities management activities',
                    'Operations of eMarketplaces / websites / web portals',
                    'Computer programming activities',
                  ].map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* ── Service Detail Modal ── */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        {selectedService && (
          <div>
            {/* Images */}
            {selectedService.images.length > 0 && (
              <div className={`grid gap-2 p-4 ${selectedService.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {selectedService.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selectedService.title} screenshot ${i + 1}`}
                    className="w-full rounded-[10px] object-cover aspect-video bg-gray-900"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            {/* Content */}
            <div className="p-8 pt-3 space-y-4">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
                  {selectedService.subtitle}
                </span>
                <h2 className="text-2xl font-semibold text-white mt-1">{selectedService.title}</h2>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                {selectedService.fullDescription}
              </p>
              <button
                onClick={() => { setSelectedService(null); setIsContactOpen(true); }}
                className="mt-2 w-full py-3.5 rounded-full bg-[#003399] hover:bg-[#0040cc] text-white font-semibold text-sm transition-colors"
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
