import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage, languageOptions } from './i18n';
import type { Language } from './i18n';
import { useHashPageviews, trackEvent } from './lib/analytics';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MessageSquare,
  Zap,
  Bell,
  LayoutDashboard,
  Upload,
  Sparkles,
  Globe,
  Check,
  Quote,
  Linkedin,
  Twitter,
  Play,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Bot,
  Cpu,
  Building2,
  Mail,
  ChevronRight,
  ChevronDown,
  Star,
  CreditCard,
  Lock,
  FileCheck,
  Briefcase,
  Heart,
  Target,
  Brain,
  Radio,
  RefreshCw,
  Crosshair,
  Thermometer,
  Stethoscope,
  AlertTriangle,
  Timer,
  DollarSign,
  UserX,
  XCircle,
  Rocket,
  Search,
  BarChart3,
  Send,
  User,
  MapPin,
  Home,
  BadgeCheck,
  FileText,
  CalendarCheck,
  Activity,
  Layers,
  Workflow,
  MousePointerClick,
  Eye,
  Compass,
  UserCheck,
  Building,
  X,
  HelpCircle,
  Menu
} from 'lucide-react';

// ============================================
// PREMIUM SVG GRAPHICS
// ============================================

const BeeIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="beeBody" x1="8" y1="10" x2="40" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD700"/>
        <stop offset="0.5" stopColor="#F5A623"/>
        <stop offset="1" stopColor="#E09100"/>
      </linearGradient>
      <linearGradient id="wing" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD700" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#F5A623" stopOpacity="0.1"/>
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="10" cy="20" rx="8" ry="12" fill="url(#wing)" className="animate-pulse"/>
    <ellipse cx="38" cy="20" rx="8" ry="12" fill="url(#wing)" className="animate-pulse"/>
    <ellipse cx="24" cy="26" rx="14" ry="16" fill="url(#beeBody)" filter="url(#glow)"/>
    <path d="M12 20C12 20 16 17 24 17C32 17 36 20 36 20" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 26C12 26 16 23 24 23C32 23 36 26 36 26" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 32C12 32 16 29 24 29C32 29 36 32 36 32" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="18" cy="12" r="3" fill="#1A1A1A"/>
    <circle cx="30" cy="12" r="3" fill="#1A1A1A"/>
    <circle cx="19" cy="11" r="1" fill="white"/>
    <circle cx="31" cy="11" r="1" fill="white"/>
    <path d="M16 8L12 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 8L36 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="2" r="2" fill="#F5A623"/>
    <circle cx="36" cy="2" r="2" fill="#F5A623"/>
  </svg>
);

// Official immobee24 Logo Component
const Logo = ({ className = "h-8", variant = "default" }: { className?: string; variant?: "default" | "white" }) => (
  <img
    src="/logo.png"
    alt="immobee24"
    className={`${className} object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
  />
);

const DashboardGraphic = () => (
  <div className="relative w-full max-w-2xl mx-auto">
    <div className="relative bg-gradient-to-br from-charcoal to-slate rounded-3xl p-1 shadow-2xl glow-golden">
      <div className="bg-charcoal rounded-[22px] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-black/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"/>
            <div className="w-3 h-3 rounded-full bg-yellow-400"/>
            <div className="w-3 h-3 rounded-full bg-green-400"/>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white/10 rounded-lg px-4 py-1.5 text-xs text-white/50 text-center">
              app.immobee24.com
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Active Leads', value: '247', trend: '+12%' },
              { label: 'Conversations', value: '89', trend: '+24%' },
              { label: 'Viewings', value: '34', trend: '+8%' },
              { label: 'Deals', value: '12', trend: '+3' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="text-white/40 text-[10px] mb-1">{stat.label}</div>
                <div className="flex items-end gap-2">
                  <span className="text-white text-xl font-bold">{stat.value}</span>
                  <span className="text-green-400 text-[10px] font-medium">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/60 text-sm font-medium">Lead Conversion</span>
              <span className="text-golden text-xs bg-golden/10 px-2 py-1 rounded-full">This Month</span>
            </div>
            <svg className="w-full h-24" viewBox="0 0 400 80">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 10 L400 80 L0 80 Z" fill="url(#chartGrad)"/>
              <path d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 10" fill="none" stroke="#F5A623" strokeWidth="2"/>
              <circle cx="400" cy="10" r="4" fill="#F5A623" className="animate-pulse"/>
            </svg>
          </div>
          <div className="space-y-2">
            {[
              { icon: Bell, text: 'High-intent buyer for Charlottenburg listing', time: '2m ago', type: 'alert' },
              { icon: MessageSquare, text: 'AI responded to 3 new inquiries', time: '5m ago', type: 'info' },
              { icon: Calendar, text: 'Viewing scheduled for tomorrow 2PM', time: '12m ago', type: 'success' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  item.type === 'alert' ? 'bg-golden/20' : item.type === 'success' ? 'bg-green-500/20' : 'bg-blue-500/20'
                }`}>
                  <item.icon className={`w-4 h-4 ${
                    item.type === 'alert' ? 'text-golden' : item.type === 'success' ? 'text-green-400' : 'text-blue-400'
                  }`}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white/80 text-sm truncate">{item.text}</div>
                </div>
                <span className="text-white/30 text-xs shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-golden to-golden-dark rounded-2xl shadow-xl flex items-center justify-center float">
      <Bot className="w-10 h-10 text-white"/>
    </div>
    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center float-delayed">
      <TrendingUp className="w-8 h-8 text-golden"/>
    </div>
  </div>
);

const HexagonPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
        <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="#F5A623" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)"/>
  </svg>
);

const GradientOrbs = () => (
  <>
    <div className="absolute top-20 left-10 w-96 h-96 bg-golden/20 rounded-full blur-[120px] pointer-events-none"/>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-golden-light/15 rounded-full blur-[100px] pointer-events-none"/>
  </>
);

// ============================================
// TYPING ANIMATION HOOK
// ============================================

const useTypingEffect = (text: string, speed: number = 30, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);
      return () => clearInterval(timer);
    };

    timeoutId = setTimeout(startTyping, delay);
    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// ============================================
// SCROLL ANIMATION HOOK
// Triggers fade-in/slide-up animations when elements enter viewport
// ============================================
const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// ============================================
// GOLDEN SECTION DIVIDER
// Animated gradient divider between sections
// ============================================
const SectionDivider = () => (
  <div className="relative py-4 overflow-hidden">
    <div className="section-divider" />
    {/* Decorative honeycomb elements */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-golden-light to-golden rounded-sm shadow-golden opacity-80" />
    </div>
  </div>
);

// ============================================
// LANGUAGE SELECTOR
// ============================================

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languageOptions.find(l => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-xl bg-white/50 hover:bg-white/80 border border-black/5 transition-all min-h-[44px]"
      >
        <span className="text-base sm:text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-charcoal">{currentLang?.name}</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-slate transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[100]" onClick={() => setIsOpen(false)}/>
          <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-black/10 py-2 min-w-[160px] z-[110]">
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-cream transition-colors ${
                  language === lang.code ? 'bg-golden/10 text-golden' : 'text-charcoal'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && <Check className="w-4 h-4 ml-auto"/>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ============================================
// URGENCY BANNER
// ============================================

const UrgencyBanner = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2 sm:py-2.5 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className={`flex items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm md:text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="animate-pulse hidden sm:inline">🚀</span>
          <span className="font-semibold truncate max-w-[180px] sm:max-w-none">
            {t('urgency.message')}
          </span>
          <button
            data-tally-open="eqRpWJ"
            className="bg-white text-red-600 px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold hover:bg-yellow-100 transition-colors flex-shrink-0"
          >
            {t('urgency.cta')}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-4 text-white/70 hover:text-white p-1"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// HERO ANIMATION CANVAS (Text-Only Motion System)
// ============================================

const HeroAnimationCanvas = () => {
  const { t, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    { key: 'input', icon: MessageSquare, color: 'blue' },
    { key: 'aiAction', icon: Bot, color: 'golden' },
    { key: 'qualification', icon: Target, color: 'green' },
    { key: 'scheduling', icon: Calendar, color: 'purple' },
    { key: 'signal', icon: Bell, color: 'orange' },
    { key: 'outcome', icon: CheckCircle2, color: 'golden' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 1200);
    }, 1800);

    return () => clearInterval(interval);
  }, [steps.length]);

  const getStepContent = (stepKey: string) => {
    switch (stepKey) {
      case 'input':
        return {
          main: t('heroAnimation.steps.input.label'),
          sub: t('heroAnimation.steps.input.source'),
        };
      case 'aiAction':
        return {
          main: t('heroAnimation.steps.aiAction.label'),
          sub: null,
        };
      case 'qualification':
        return {
          main: t('heroAnimation.steps.qualification.label'),
          sub: t('heroAnimation.steps.qualification.value'),
        };
      case 'scheduling':
        return {
          main: t('heroAnimation.steps.scheduling.label'),
          sub: null,
        };
      case 'signal':
        return {
          main: t('heroAnimation.steps.signal.label'),
          sub: t('heroAnimation.steps.signal.action'),
        };
      case 'outcome':
        return {
          main: t('heroAnimation.steps.outcome.label'),
          sub: null,
        };
      default:
        return { main: '', sub: null };
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[520px] lg:min-h-[600px] ${isRTL ? 'rtl' : ''}`}>
      {/* Animated Canvas Container */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(74,74,74,0.9) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Header */}
        <div className={`px-6 py-4 border-b border-white/10 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-white/40 text-sm font-mono">immobee24.ai</span>
        </div>

        {/* Main Content Area */}
        <div className="p-6 flex flex-col h-[calc(100%-60px)]">
          {/* Title */}
          <div className={`mb-6 ${isRTL ? 'text-right' : ''}`}>
            <span className="text-white/50 text-sm font-medium">{t('heroAnimation.title')}</span>
          </div>

          {/* Animation Steps Timeline */}
          <div className="flex-1 flex flex-col justify-center space-y-3">
            {steps.map((step, index) => {
              const content = getStepContent(step.key);
              const isActive = index === currentStep;
              const isPast = index < currentStep;
              const Icon = step.icon;

              return (
                <div
                  key={step.key}
                  className={`
                    flex items-center gap-4 px-4 py-3 rounded-xl
                    transition-all duration-500 ease-out
                    ${isRTL ? 'flex-row-reverse' : ''}
                    ${isActive ? 'bg-white/10 scale-[1.02]' : isPast ? 'opacity-40' : 'opacity-20'}
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center
                      transition-all duration-500
                      ${isActive ? 'shadow-lg' : ''}
                    `}
                    style={{
                      background: isActive
                        ? step.color === 'golden'
                          ? 'linear-gradient(135deg, #FFD700 0%, #F5A623 100%)'
                          : step.color === 'blue'
                          ? 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
                          : step.color === 'green'
                          ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                          : step.color === 'purple'
                          ? 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
                          : step.color === 'orange'
                          ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
                          : 'rgba(255,255,255,0.1)'
                        : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/40'}`} />
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <span
                        className={`
                          font-medium transition-all duration-300
                          ${isActive ? 'text-white text-base' : 'text-white/60 text-sm'}
                        `}
                      >
                        {content.main}
                        {isActive && isTyping && (
                          <span className="inline-block w-0.5 h-4 bg-golden ml-1 animate-pulse" />
                        )}
                      </span>
                    </div>
                    {content.sub && (
                      <span
                        className={`
                          text-sm transition-all duration-300
                          ${isActive
                            ? step.color === 'golden'
                              ? 'text-golden font-semibold'
                              : step.color === 'green'
                              ? 'text-green-400 font-semibold'
                              : step.color === 'orange'
                              ? 'text-orange-400 font-semibold'
                              : 'text-white/70'
                            : 'text-white/30'
                          }
                        `}
                      >
                        {content.sub}
                      </span>
                    )}
                  </div>

                  {/* Status Indicator */}
                  {isPast && (
                    <Check className="w-4 h-4 text-green-400" />
                  )}
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-golden animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Status Bar */}
          <div className={`mt-4 pt-4 border-t border-white/10 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/40 text-xs">AI Active</span>
            </div>
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentStep ? 'bg-golden w-4' : i < currentStep ? 'bg-white/30' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// TEXT STORYBOARD SECTION
// ============================================

const TextStoryboardSection = () => {
  const { t, isRTL } = useLanguage();
  const [visibleScenes, setVisibleScenes] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sceneIndex = parseInt(entry.target.getAttribute('data-scene') || '0');
            setVisibleScenes((prev) => new Set([...prev, sceneIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const scenes = sectionRef.current?.querySelectorAll('[data-scene]');
    scenes?.forEach((scene) => observer.observe(scene));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="storyboard" className={`py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 honeycomb-pattern-light opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <div className={`section-label mx-auto w-fit ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Layers className="w-4 h-4" />
            <span>{t('storyboard.sectionLabel')}</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            {t('storyboard.sectionTitle')}{' '}
            <span className="gradient-text">{t('storyboard.sectionTitleHighlight')}</span>
          </h2>
        </div>

        {/* Scenes Grid */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {/* Scene 1: Listing Creation */}
          <SceneCard
            sceneNumber={1}
            title={t('storyboard.scene1.title')}
            isVisible={visibleScenes.has(1)}
            isRTL={isRTL}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* File Animation */}
              <div className={`flex flex-wrap gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {['expose', 'floorplan', 'energy'].map((file, i) => (
                  <div
                    key={file}
                    className={`
                      px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-lg sm:rounded-xl border border-black/5 shadow-sm
                      transform transition-all duration-500
                      ${visibleScenes.has(1) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className={`flex items-center gap-1.5 sm:gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-golden flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-charcoal">
                        {t(`storyboard.scene1.files.${file}`)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Messages */}
              <div className="space-y-2 mt-4 sm:mt-6">
                <StatusMessage
                  text={t('storyboard.scene1.status1')}
                  isVisible={visibleScenes.has(1)}
                  delay={600}
                  isTyping
                  isRTL={isRTL}
                />
                <StatusMessage
                  text={t('storyboard.scene1.status2')}
                  isVisible={visibleScenes.has(1)}
                  delay={1200}
                  isSuccess
                  isRTL={isRTL}
                />
              </div>
            </div>
          </SceneCard>

          {/* Scene 2: AI Recommendations */}
          <SceneCard
            sceneNumber={2}
            title={t('storyboard.scene2.title')}
            isVisible={visibleScenes.has(2)}
            isRTL={isRTL}
          >
            <RecommendationsPanel isVisible={visibleScenes.has(2)} isRTL={isRTL} t={t} />
          </SceneCard>

          {/* Scene 3: Strategy Setup */}
          <SceneCard
            sceneNumber={3}
            title={t('storyboard.scene3.title')}
            isVisible={visibleScenes.has(3)}
            isRTL={isRTL}
          >
            <StrategyPanel isVisible={visibleScenes.has(3)} isRTL={isRTL} t={t} />
          </SceneCard>

          {/* Scene 4: Publish */}
          <SceneCard
            sceneNumber={4}
            title={t('storyboard.scene4.title')}
            isVisible={visibleScenes.has(4)}
            isRTL={isRTL}
          >
            <PublishPanel isVisible={visibleScenes.has(4)} isRTL={isRTL} t={t} />
          </SceneCard>

          {/* Scene 5: Inquiries Handling */}
          <SceneCard
            sceneNumber={5}
            title={t('storyboard.scene5.title')}
            isVisible={visibleScenes.has(5)}
            isRTL={isRTL}
          >
            <InquiriesPanel isVisible={visibleScenes.has(5)} isRTL={isRTL} t={t} />
          </SceneCard>

          {/* Scene 6: Signal-Only Alerts */}
          <SceneCard
            sceneNumber={6}
            title={t('storyboard.scene6.title')}
            isVisible={visibleScenes.has(6)}
            isRTL={isRTL}
          >
            <AlertsPanel isVisible={visibleScenes.has(6)} isRTL={isRTL} t={t} />
          </SceneCard>

          {/* Scene 7: Command Dashboard */}
          <SceneCard
            sceneNumber={7}
            title={t('storyboard.scene7.title')}
            isVisible={visibleScenes.has(7)}
            isRTL={isRTL}
          >
            <DashboardPanel isVisible={visibleScenes.has(7)} isRTL={isRTL} t={t} />
          </SceneCard>
        </div>
      </div>
    </section>
  );
};

// Scene Card Wrapper
const SceneCard = ({
  sceneNumber,
  title,
  isVisible,
  isRTL,
  children,
}: {
  sceneNumber: number;
  title: string | string[];
  isVisible: boolean;
  isRTL: boolean;
  children: React.ReactNode;
}) => (
  <div
    data-scene={sceneNumber}
    className={`
      relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8
      border border-black/5 shadow-lg hover:shadow-xl
      transform transition-all duration-700
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
    `}
    style={{
      background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
    }}
  >
    {/* Scene Number Badge */}
    <div className={`absolute -top-3 sm:-top-4 ${isRTL ? 'right-4 sm:right-8' : 'left-4 sm:left-8'}`}>
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-golden to-golden-dark flex items-center justify-center shadow-lg ring-4 ring-white">
        <span className="text-white text-xs sm:text-sm font-bold">{sceneNumber}</span>
      </div>
    </div>

    {/* Scene Title */}
    <h3 className={`font-heading font-semibold text-base sm:text-lg md:text-xl text-charcoal mb-4 sm:mb-6 mt-2 sm:mt-0 ${isRTL ? 'text-right' : ''}`}>
      {title}
    </h3>

    {/* Scene Content */}
    {children}
  </div>
);

// Status Message Component
const StatusMessage = ({
  text,
  isVisible,
  delay = 0,
  isTyping = false,
  isSuccess = false,
  isRTL = false,
}: {
  text: string | string[];
  isVisible: boolean;
  delay?: number;
  isTyping?: boolean;
  isSuccess?: boolean;
  isRTL?: boolean;
}) => (
  <div
    className={`
      flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl
      transition-all duration-500
      ${isRTL ? 'flex-row-reverse' : ''}
      ${isSuccess ? 'bg-green-50 border border-green-200' : 'bg-slate/5 border border-transparent'}
      ${isVisible ? 'translate-x-0 opacity-100' : isRTL ? 'translate-x-4 opacity-0' : '-translate-x-4 opacity-0'}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {isTyping && !isSuccess && (
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-golden border-t-transparent animate-spin flex-shrink-0" />
    )}
    {isSuccess && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />}
    <span className={`text-xs sm:text-sm ${isSuccess ? 'text-green-700 font-medium' : 'text-slate'}`}>
      {text}
    </span>
    {isTyping && !isSuccess && (
      <span className="inline-block w-0.5 h-3 sm:h-4 bg-golden animate-pulse" />
    )}
  </div>
);

// Recommendations Panel (Scene 2)
const RecommendationsPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => {
  const [acceptedItems, setAcceptedItems] = useState<Set<string>>(new Set());

  const recommendations = [
    { key: 'energy', icon: Zap },
    { key: 'photos', icon: Eye },
    { key: 'messaging', icon: Users },
  ];

  return (
    <div className="space-y-2 sm:space-y-3">
      {recommendations.map((rec, i) => {
        const isAccepted = acceptedItems.has(rec.key);
        return (
          <div
            key={rec.key}
            className={`
              flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border
              transition-all duration-500
              ${isRTL ? 'sm:flex-row-reverse' : ''}
              ${isAccepted ? 'bg-green-50 border-green-200' : 'bg-white border-black/5'}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${isAccepted ? 'bg-green-500' : 'bg-golden/10'}`}>
                {isAccepted ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <rec.icon className="w-4 h-4 sm:w-5 sm:h-5 text-golden" />
                )}
              </div>
              <span className={`flex-1 text-sm sm:text-base font-medium ${isRTL ? 'text-right' : ''} ${isAccepted ? 'text-green-700' : 'text-charcoal'}`}>
                {isAccepted ? t('storyboard.scene2.applied') : t(`storyboard.scene2.recommendations.${rec.key}`)}
              </span>
            </div>
            {!isAccepted && (
              <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''} ml-11 sm:ml-0`}>
                <button
                  onClick={() => setAcceptedItems(prev => new Set([...prev, rec.key]))}
                  className="px-2.5 py-1.5 sm:px-3 bg-golden text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-golden-dark transition-colors"
                >
                  {t('storyboard.scene2.accept')}
                </button>
                <button className="px-2.5 py-1.5 sm:px-3 bg-slate/10 text-slate text-xs sm:text-sm font-medium rounded-lg hover:bg-slate/20 transition-colors">
                  {t('storyboard.scene2.reject')}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Strategy Panel (Scene 3)
const StrategyPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => (
  <div className="space-y-4 sm:space-y-6">
    {/* Target Audience */}
    <div className={`space-y-2 sm:space-y-3 ${isRTL ? 'text-right' : ''}`}>
      <div
        className={`flex flex-wrap items-center gap-1.5 sm:gap-2 transition-all duration-500 ${isRTL ? 'flex-row-reverse justify-end' : ''} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
      >
        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
        <span className="text-xs sm:text-sm text-slate">{t('storyboard.scene3.suited.label')}</span>
        <span className="text-sm sm:text-base font-medium text-charcoal">{t('storyboard.scene3.suited.values')}</span>
      </div>
      <div
        className={`flex flex-wrap items-center gap-1.5 sm:gap-2 transition-all duration-500 delay-100 ${isRTL ? 'flex-row-reverse justify-end' : ''} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
      >
        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
        <span className="text-xs sm:text-sm text-slate">{t('storyboard.scene3.notSuited.label')}</span>
        <span className="text-sm sm:text-base font-medium text-charcoal">{t('storyboard.scene3.notSuited.values')}</span>
      </div>
    </div>

    {/* Rules */}
    <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
      {['budget', 'interest'].map((rule, i) => (
        <div
          key={rule}
          className={`
            px-3 py-1.5 sm:px-4 sm:py-2 bg-golden/10 rounded-full
            transition-all duration-500
            ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
          `}
          style={{ transitionDelay: `${300 + i * 150}ms` }}
        >
          <span className="text-xs sm:text-sm font-medium text-golden">{t(`storyboard.scene3.rules.${rule}`)}</span>
        </div>
      ))}
    </div>
  </div>
);

// Publish Panel (Scene 4)
const PublishPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => {
  const [isPublished, setIsPublished] = useState(false);

  return (
    <div className={`space-y-3 sm:space-y-4 ${isRTL ? 'text-right' : ''}`}>
      {!isPublished ? (
        <button
          onClick={() => setIsPublished(true)}
          className={`
            w-full py-3 sm:py-4 bg-gradient-to-r from-golden to-golden-dark text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl
            shadow-lg shadow-golden/30 hover:shadow-xl hover:shadow-golden/40
            transition-all duration-500
            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
        >
          {t('storyboard.scene4.button')}
        </button>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          <div className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl border border-green-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-green-700">{t('storyboard.scene4.status')}</span>
          </div>
          <div className={`flex items-center gap-2 text-slate text-xs sm:text-sm ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{t('storyboard.scene4.platforms')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Inquiries Panel (Scene 5)
const InquiriesPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => {
  const inquiries = [
    { key: 'whatsapp', icon: MessageSquare, statusColor: 'blue' },
    { key: 'email', icon: Mail, statusColor: 'green' },
    { key: 'web', icon: Globe, statusColor: 'purple' },
  ];

  return (
    <div className="space-y-2 sm:space-y-3">
      {inquiries.map((inquiry, i) => (
        <div
          key={inquiry.key}
          className={`
            flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-black/5
            transition-all duration-500
            ${isRTL ? 'sm:flex-row-reverse' : ''}
            ${isVisible ? 'translate-x-0 opacity-100' : isRTL ? 'translate-x-4 opacity-0' : '-translate-x-4 opacity-0'}
          `}
          style={{ transitionDelay: `${i * 200}ms` }}
        >
          <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <inquiry.icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate flex-shrink-0" />
            <span className={`flex-1 text-xs sm:text-sm text-slate ${isRTL ? 'text-right' : ''}`}>
              {t(`storyboard.scene5.inquiries.${inquiry.key}.source`)}
            </span>
          </div>
          <span
            className={`
              px-2.5 py-1 sm:px-3 rounded-full text-xs font-semibold w-fit
              ${inquiry.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                inquiry.statusColor === 'green' ? 'bg-green-100 text-green-700' :
                'bg-purple-100 text-purple-700'}
            `}
          >
            {t(`storyboard.scene5.inquiries.${inquiry.key}.status`)}
          </span>
        </div>
      ))}
    </div>
  );
};

// Alerts Panel (Scene 6)
const AlertsPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => {
  const alerts = [
    { key: 'highIntent', icon: Target, color: 'golden' },
    { key: 'competing', icon: AlertTriangle, color: 'orange' },
    { key: 'financing', icon: CheckCircle2, color: 'green' },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="space-y-2 sm:space-y-3">
        {alerts.map((alert, i) => (
          <div
            key={alert.key}
            className={`
              flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl
              transition-all duration-500
              ${isRTL ? 'flex-row-reverse' : ''}
              ${alert.color === 'golden' ? 'bg-golden/10 border border-golden/20' :
                alert.color === 'orange' ? 'bg-orange-50 border border-orange-200' :
                'bg-green-50 border border-green-200'}
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <alert.icon
              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                alert.color === 'golden' ? 'text-golden' :
                alert.color === 'orange' ? 'text-orange-600' :
                'text-green-600'
              }`}
            />
            <span className={`text-sm sm:text-base font-medium ${isRTL ? 'text-right flex-1' : ''} ${
              alert.color === 'golden' ? 'text-charcoal' :
              alert.color === 'orange' ? 'text-orange-700' :
              'text-green-700'
            }`}>
              {t(`storyboard.scene6.alerts.${alert.key}`)}
            </span>
          </div>
        ))}
      </div>
      <p className={`text-xs sm:text-sm text-slate/60 italic ${isRTL ? 'text-right' : ''}`}>
        {t('storyboard.scene6.tagline')}
      </p>
    </div>
  );
};

// Dashboard Panel (Scene 7)
const DashboardPanel = ({ isVisible, isRTL, t }: { isVisible: boolean; isRTL: boolean; t: (key: string) => string | string[] }) => {
  const [animatedValues, setAnimatedValues] = useState({ listings: 0, conversion: 0, revenue: 0 });

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const start = Date.now();
      const targets = { listings: 24, conversion: 34, revenue: 127 };

      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues({
          listings: Math.floor(eased * targets.listings),
          conversion: Math.floor(eased * targets.conversion),
          revenue: Math.floor(eased * targets.revenue),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Metrics Grid */}
      <div className={`grid grid-cols-3 gap-2 sm:gap-4 ${isRTL ? 'direction-rtl' : ''}`}>
        {[
          { key: 'listings', value: animatedValues.listings, suffix: '' },
          { key: 'conversion', value: animatedValues.conversion, suffix: '%' },
          { key: 'revenue', value: animatedValues.revenue, suffix: 'K', prefix: '€' },
        ].map((metric, i) => (
          <div
            key={metric.key}
            className={`
              p-3 sm:p-4 bg-gradient-to-br from-charcoal to-slate rounded-lg sm:rounded-xl text-center
              transition-all duration-500
              ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="font-metric text-xl sm:text-2xl md:text-3xl font-bold text-golden mb-0.5 sm:mb-1">
              {metric.prefix || ''}{metric.value}{metric.suffix}
            </div>
            <div className="text-white/60 text-[10px] sm:text-xs">{t(`storyboard.scene7.metrics.${metric.key}.label`)}</div>
          </div>
        ))}
      </div>

      {/* Final Status */}
      <div
        className={`
          flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg sm:rounded-xl
          transition-all duration-700 delay-500
          ${isRTL ? 'flex-row-reverse' : ''}
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}
      >
        <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
        <span className="font-heading font-bold text-base sm:text-lg md:text-xl text-white">{t('storyboard.scene7.finalStatus')}</span>
      </div>
    </div>
  );
};

// ============================================
// HEADER
// ============================================

const Header = () => {
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for subtle header enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#for-agents', labelKey: 'nav.forAgents' },
    { href: '#for-seekers', labelKey: 'nav.forSeekers' },
    { href: '#intelligence', labelKey: 'nav.aiPipeline' },
    { href: '#team', labelKey: 'nav.team' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent('nav_click', { section: href.replace('#', ''), href });
  };

  const handleCTAClick = () => {
    // Tally form will handle this via data attributes
    // This ensures the click is properly registered
  };

  return (
    <header className="fixed top-10 left-0 right-0 z-[100]">
      <div className="mx-3 sm:mx-4 lg:mx-6">
        {/* Main Header Bar - Liquid Glass Design */}
        <div
          className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${isRTL ? 'rtl' : ''}`}
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.75) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
              : '0 2px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          <div className="px-4 sm:px-6 py-3">
            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Logo - Standard SaaS Size */}
              <a
                href="/"
                className={`flex items-center group flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Logo className="h-8 sm:h-9 md:h-10 group-hover:scale-[1.02] transition-transform duration-200" />
              </a>

              {/* Desktop Navigation */}
              <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 text-sm font-medium text-slate/80 hover:text-charcoal hover:bg-black/[0.03] rounded-lg transition-all duration-200"
                  >
                    {t(link.labelKey)}
                  </a>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Language Selector - Desktop */}
                <div className="hidden sm:block">
                  <LanguageSelector />
                </div>

                {/* CTA Button */}
                <button
                  data-tally-open="eqRpWJ"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                  data-tally-width="400"
                  onClick={handleCTAClick}
                  className={`
                    inline-flex items-center gap-2
                    px-4 sm:px-5 py-2 sm:py-2.5
                    bg-gradient-to-r from-golden to-golden-dark
                    text-white text-sm font-semibold
                    rounded-xl
                    shadow-md shadow-golden/25
                    hover:shadow-lg hover:shadow-golden/30
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-200
                    ${isRTL ? 'flex-row-reverse' : ''}
                  `}
                >
                  <Rocket className="w-4 h-4" />
                  <span className="hidden xs:inline sm:inline">{t('nav.joinBeta')}</span>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl hover:bg-black/[0.05] transition-colors"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-charcoal" />
                  ) : (
                    <Menu className="w-5 h-5 text-charcoal" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown - Slide Down Animation */}
          <div
            className={`
              lg:hidden overflow-hidden transition-all duration-300 ease-out
              ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="px-4 pb-4 pt-2 border-t border-black/[0.05]">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      block px-4 py-3
                      text-base font-medium text-slate/80
                      hover:text-charcoal hover:bg-black/[0.03]
                      rounded-xl transition-all duration-200
                      ${isRTL ? 'text-right' : ''}
                    `}
                  >
                    {t(link.labelKey)}
                  </a>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <div className="px-4 py-2 border-t border-black/[0.05] pt-4">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-sm text-slate/60 font-medium">Language</span>
                  <LanguageSelector />
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 px-2">
                <button
                  data-tally-open="eqRpWJ"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                  data-tally-width="400"
                  onClick={() => {
                    handleCTAClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    px-6 py-3.5
                    bg-gradient-to-r from-golden to-golden-dark
                    text-white text-base font-semibold
                    rounded-xl
                    shadow-lg shadow-golden/25
                    hover:shadow-xl hover:shadow-golden/30
                    active:scale-[0.98]
                    transition-all duration-200
                    ${isRTL ? 'flex-row-reverse' : ''}
                  `}
                >
                  <Rocket className="w-5 h-5" />
                  <span>{t('nav.joinBeta')}</span>
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

// ============================================
// HERO SECTION
// ============================================

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const metrics = [
    { value: '+35–70%', labelKey: 'heroMetrics.moreConversations.label', icon: MessageSquare },
    { value: '+4 to +9', labelKey: 'heroMetrics.dealsPerYear.label', icon: TrendingUp },
    { value: '€40K–€180K+', labelKey: 'heroMetrics.extraCommission.label', icon: Zap },
    { value: '6–18h', labelKey: 'heroMetrics.savedWeekly.label', icon: Clock },
  ];

  return (
    <section className={`relative min-h-screen pt-40 pb-20 overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-white"/>
      <GradientOrbs />
      <HexagonPattern />

      <div className="relative z-10 container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)] ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          <div className={`max-w-xl ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
            <div className={`section-label ${isRTL ? 'flex-row-reverse mr-auto ml-0' : ''}`}>
              <Sparkles className="w-4 h-4" />
              <span>{t('hero.label')}</span>
            </div>

            <h1 className="section-title mb-6 text-balance">
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-2xl md:text-3xl font-heading font-medium text-charcoal mb-4">
              {t('hero.tagline')}
            </p>

            <p className="text-xl text-slate/80 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="glass-card p-6 mb-10">
              <p className="text-lg text-charcoal leading-relaxed">
                <strong>immobee24</strong> {t('hero.description')}{' '}
                <span className="gradient-text font-semibold">{t('hero.coAgent')}</span> {t('hero.coAgentDesc')}
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                data-tally-open="eqRpWJ"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                data-tally-width="400"
                className={`btn-primary text-lg py-5 px-10 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Rocket className="w-5 h-5" />
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <a href="#for-agents" className={`btn-secondary text-lg py-5 px-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Play className="w-5 h-5" />
                <span>{t('hero.ctaSecondary')}</span>
              </a>
            </div>

            <div className={`flex items-center gap-4 text-slate ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex ${isRTL ? 'space-x-reverse -space-x-2' : '-space-x-2'}`}>
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-golden-light to-golden border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{String.fromCharCode(64+i)}</span>
                  </div>
                ))}
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  {[1,2,3,4,5].map((i) => (<Star key={i} className="w-4 h-4 fill-golden text-golden"/>))}
                </div>
                <span className="text-sm">{t('hero.trustedBy')}</span>
              </div>
            </div>
          </div>

          <div className={`hidden lg:block ${isRTL ? 'lg:col-start-1' : ''}`}>
            <HeroAnimationCanvas />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden/10 to-golden/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="w-6 h-6 text-golden"/>
              </div>
              <span className="block font-metric text-4xl md:text-5xl font-bold gradient-text mb-2">
                {metric.value}
              </span>
              <span className="text-slate text-sm md:text-base font-medium">{t(metric.labelKey)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className={`inline-flex items-center gap-3 px-6 py-4 bg-green-500/10 rounded-2xl border border-green-500/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600"/>
            </div>
            <span className="font-heading font-semibold text-lg text-charcoal">
              {t('hero.zeroLostLeads')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION DIVIDER - FOR AGENTS
// ============================================

const ForAgentsDivider = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="for-agents" className={`py-16 bg-gradient-to-r from-golden via-golden to-golden-dark relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 opacity-10">
        <HexagonPattern />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className={`flex items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <UserCheck className="w-8 h-8 text-white"/>
          </div>
          <div className={`text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              {t('forAgentsDivider.title')}
            </h2>
            <p className="text-white/80 text-lg">
              {t('forAgentsDivider.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRODUCT SPECIFICATION SECTION
// ============================================

const ProductSpecSection = () => {
  const { t, isRTL, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const specs = [
    {
      titleKey: 'productSpec.easySubscription.title',
      featuresKey: 'productSpec.easySubscription.features',
      icon: CreditCard,
      color: 'golden',
    },
    {
      titleKey: 'productSpec.secureFair.title',
      featuresKey: 'productSpec.secureFair.features',
      icon: Lock,
      color: 'green',
    },
    {
      titleKey: 'productSpec.everythingAgents.title',
      featuresKey: 'productSpec.everythingAgents.features',
      icon: Briefcase,
      color: 'blue',
    },
  ];

  return (
    <section ref={ref} className={`section bg-white relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 grid-pattern"/>
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className={`section-label mx-auto w-fit ${isRTL ? 'flex-row-reverse' : ''}`}>
            <FileCheck className="w-4 h-4"/>
            <span>{t('productSpec.label')}</span>
          </div>
          <h2 className="section-title mb-6">
            {t('productSpec.title')}{' '}
            <span className="gradient-text">{t('productSpec.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specs.map((spec, index) => {
            const features = t(spec.featuresKey) as string[];
            return (
              <div key={index} className={`premium-card text-center group ${isRTL ? 'text-right' : ''}`}>
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 ${
                  spec.color === 'golden' ? 'bg-gradient-to-br from-golden-light to-golden shadow-golden/20' :
                  spec.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/20' :
                  'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/20'
                }`}>
                  <spec.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-4">{t(spec.titleKey)}</h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-slate ${isRTL ? 'flex-row-reverse justify-start' : 'justify-center'}`}>
                      <Check className={`w-4 h-4 shrink-0 ${
                        spec.color === 'golden' ? 'text-golden' :
                        spec.color === 'green' ? 'text-green-500' : 'text-blue-500'
                      }`}/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// WHAT MAKES DIFFERENT SECTION
// ============================================

const DifferentSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const comparisons = [
    { oldKey: 'different.comparisons.responseTime.old', newKey: 'different.comparisons.responseTime.new', icon: Clock },
    { oldKey: 'different.comparisons.adminTime.old', newKey: 'different.comparisons.adminTime.new', icon: Timer },
    { oldKey: 'different.comparisons.adSpend.old', newKey: 'different.comparisons.adSpend.new', icon: DollarSign },
    { oldKey: 'different.comparisons.leadsLost.old', newKey: 'different.comparisons.leadsLost.new', icon: UserX },
    { oldKey: 'different.comparisons.commission.old', newKey: 'different.comparisons.commission.new', icon: Shield },
  ];

  const features = [
    { icon: Upload, textKey: 'different.features.automatedListing.text', highlightKey: 'different.features.automatedListing.highlight' },
    { icon: Sparkles, textKey: 'different.features.aiEnrichment.text', highlightKey: 'different.features.aiEnrichment.highlight' },
    { icon: Bot, textKey: 'different.features.smartSales.text', highlightKey: '' },
    { icon: BarChart3, textKey: 'different.features.marketIntelligence.text', highlightKey: '' },
    { icon: Search, textKey: 'different.features.naturalLanguage.text', highlightKey: '' },
  ];

  return (
    <section ref={ref} className={`section bg-cream relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <GradientOrbs />
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className={`section-label mx-auto w-fit ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Rocket className="w-4 h-4"/>
            <span>{t('different.label')}</span>
          </div>
          <h2 className="section-title mb-6">
            {t('different.title')}{' '}
            <span className="gradient-text">{t('different.titleHighlight')}</span>
          </h2>
        </div>

        {/* Old Way vs New Way Comparison */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="bg-white/50 rounded-3xl p-8 border border-red-200">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500"/>
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal">{t('different.oldWay')}</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-slate ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <item.icon className="w-5 h-5 text-red-400 shrink-0"/>
                    <span>{t(item.oldKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Check className="w-6 h-6 text-white"/>
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal">{t('different.newWay')}</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-charcoal ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/>
                    <span className="font-medium">{t(item.newKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div key={index} className={`premium-card flex items-center gap-6 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shadow-lg shadow-golden/20 shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white"/>
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <span className="text-lg text-charcoal font-medium">{t(feature.textKey)}</span>
                  {feature.highlightKey && (
                    <span className={`text-lg font-semibold gradient-text ${isRTL ? 'mr-2' : 'ml-2'}`}>— {t(feature.highlightKey)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// THE PROBLEM SECTION
// ============================================

const ProblemSection = () => {
  const { t, isRTL } = useLanguage();

  const problems = [
    { icon: Timer, problemKey: 'problem.problems.responseTime.problem', realityKey: 'problem.problems.responseTime.reality', color: 'red' },
    { icon: FileCheck, problemKey: 'problem.problems.dataEntry.problem', realityKey: 'problem.problems.dataEntry.reality', color: 'orange' },
    { icon: DollarSign, problemKey: 'problem.problems.adSpend.problem', realityKey: 'problem.problems.adSpend.reality', color: 'red' },
    { icon: UserX, problemKey: 'problem.problems.burnout.problem', realityKey: 'problem.problems.burnout.reality', color: 'orange' },
    { icon: XCircle, problemKey: 'problem.problems.noProtection.problem', realityKey: 'problem.problems.noProtection.reality', color: 'red' },
  ];

  return (
    <section className={`section bg-charcoal relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <HexagonPattern />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px]"/>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <AlertTriangle className="w-4 h-4"/>
            <span>{t('problem.label')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            {t('problem.title')}{' '}
            <span className="text-red-400">{t('problem.titleHighlight')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {problems.map((item, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  item.color === 'red' ? 'bg-red-500/20' : 'bg-orange-500/20'
                }`}>
                  <item.icon className={`w-7 h-7 ${item.color === 'red' ? 'text-red-400' : 'text-orange-400'}`}/>
                </div>
                <div className={`flex-1 grid md:grid-cols-2 gap-2 ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-white/80 font-medium">{t(item.problemKey)}</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <ArrowRight className={`w-4 h-4 text-white/30 hidden md:block ${isRTL ? 'rotate-180' : ''}`}/>
                    <span className="text-white/50">{t(item.realityKey)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <p className="text-2xl font-heading font-semibold text-white mb-2">
                {t('problem.conclusion1')}
              </p>
              <p className="text-3xl font-heading font-bold text-red-400">
                {t('problem.conclusion2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// AUTONOMOUS FUTURE SECTION
// ============================================

const AutonomousFutureSection = () => {
  const { t, isRTL } = useLanguage();

  const solutions = [
    { icon: Zap, textKey: 'autonomousFuture.solutions.response', color: 'golden' },
    { icon: RefreshCw, textKey: 'autonomousFuture.solutions.nurture', color: 'blue' },
    { icon: Target, textKey: 'autonomousFuture.solutions.adOptimization', color: 'purple' },
    { icon: Shield, textKey: 'autonomousFuture.solutions.dealDoctor', color: 'green' },
    { icon: Lock, textKey: 'autonomousFuture.solutions.zeroLeakage', color: 'golden' },
  ];

  return (
    <section className={`section bg-gradient-to-b from-cream to-white relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <GradientOrbs />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`section-label mx-auto w-fit ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Rocket className="w-4 h-4"/>
            <span>{t('autonomousFuture.label')}</span>
          </div>
          <h2 className="section-title mb-6">
            {t('autonomousFuture.title')}{' '}
            <span className="gradient-text">immobee24</span>
          </h2>
          <p className="text-xl text-slate/80 max-w-2xl mx-auto">
            {t('autonomousFuture.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {solutions.map((item, index) => (
              <div key={index} className={`premium-card text-center group py-8 ${isRTL ? 'text-right' : ''}`}>
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110 ${
                  item.color === 'golden' ? 'bg-gradient-to-br from-golden-light to-golden shadow-golden/20' :
                  item.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/20' :
                  item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/20' :
                  'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/20'
                }`}>
                  <item.icon className="w-8 h-8 text-white"/>
                </div>
                <span className="text-sm font-medium text-charcoal">{t(item.textKey)}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className={`glass-card inline-flex items-center gap-4 px-8 py-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Shield className="w-8 h-8 text-green-500"/>
              <span className="text-xl font-heading font-semibold text-charcoal">
                {t('autonomousFuture.cta')} <span className="gradient-text">{t('autonomousFuture.ctaHighlight')}</span> {t('autonomousFuture.ctaEnd')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// INTELLIGENCE PIPELINE SECTION
// ============================================

const IntelligencePipelineSection = () => {
  const { t, isRTL } = useLanguage();

  const layers = [
    {
      icon: Radio,
      nameKey: 'intelligence.layers.captureAI.name',
      subtitleKey: 'intelligence.layers.captureAI.subtitle',
      taglineKey: 'intelligence.layers.captureAI.tagline',
      featuresKey: 'intelligence.layers.captureAI.features',
      statusKey: 'intelligence.layers.captureAI.status',
      statusType: 'success',
      color: 'golden',
    },
    {
      icon: RefreshCw,
      nameKey: 'intelligence.layers.autopilot.name',
      subtitleKey: 'intelligence.layers.autopilot.subtitle',
      taglineKey: 'intelligence.layers.autopilot.tagline',
      featuresKey: 'intelligence.layers.autopilot.features',
      statusKey: 'intelligence.layers.autopilot.status',
      statusType: 'info',
      color: 'blue',
    },
    {
      icon: Crosshair,
      nameKey: 'intelligence.layers.leadForge.name',
      subtitleKey: 'intelligence.layers.leadForge.subtitle',
      taglineKey: 'intelligence.layers.leadForge.tagline',
      featuresKey: 'intelligence.layers.leadForge.features',
      statusKey: 'intelligence.layers.leadForge.status',
      statusType: 'success',
      color: 'purple',
    },
    {
      icon: Thermometer,
      nameKey: 'intelligence.layers.climateIQ.name',
      subtitleKey: 'intelligence.layers.climateIQ.subtitle',
      taglineKey: 'intelligence.layers.climateIQ.tagline',
      featuresKey: 'intelligence.layers.climateIQ.features',
      statusKey: 'intelligence.layers.climateIQ.status',
      statusType: 'success',
      color: 'cyan',
    },
    {
      icon: Stethoscope,
      nameKey: 'intelligence.layers.dealDoctor.name',
      subtitleKey: 'intelligence.layers.dealDoctor.subtitle',
      taglineKey: 'intelligence.layers.dealDoctor.tagline',
      featuresKey: 'intelligence.layers.dealDoctor.features',
      statusKey: 'intelligence.layers.dealDoctor.status',
      statusType: 'health',
      color: 'green',
    },
  ];

  return (
    <section id="intelligence" className={`section bg-charcoal relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <HexagonPattern />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-golden/10 rounded-full blur-[150px]"/>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"/>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-golden/20 text-golden rounded-full text-sm font-semibold tracking-wide uppercase mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Brain className="w-4 h-4"/>
            <span>{t('intelligence.label')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            {t('intelligence.title')}{' '}
            <span className="gradient-text">{t('intelligence.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white/60">
            {t('intelligence.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {layers.map((layer, index) => {
            const features = t(layer.featuresKey) as string[];
            return (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group`}>
                <div className={`flex flex-col lg:flex-row lg:items-start gap-6 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex items-start gap-4 lg:w-1/3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform ${
                      layer.color === 'golden' ? 'bg-gradient-to-br from-golden-light to-golden shadow-golden/30' :
                      layer.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/30' :
                      layer.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/30' :
                      layer.color === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-cyan-500/30' :
                      'bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/30'
                    }`}>
                      <layer.icon className="w-8 h-8 text-white"/>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white">{t(layer.nameKey)}</h3>
                      <p className={`text-sm font-medium ${
                        layer.color === 'golden' ? 'text-golden' :
                        layer.color === 'blue' ? 'text-blue-400' :
                        layer.color === 'purple' ? 'text-purple-400' :
                        layer.color === 'cyan' ? 'text-cyan-400' : 'text-green-400'
                      }`}>{t(layer.subtitleKey)}</p>
                      <p className="text-white/50 text-sm mt-1 italic">{t(layer.taglineKey)}</p>
                    </div>
                  </div>

                  <div className={`lg:w-1/2 space-y-2 ${isRTL ? 'text-right' : ''}`}>
                    {features.map((feature, i) => (
                      <div key={i} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Check className={`w-4 h-4 mt-1 shrink-0 ${
                          layer.color === 'golden' ? 'text-golden' :
                          layer.color === 'blue' ? 'text-blue-400' :
                          layer.color === 'purple' ? 'text-purple-400' :
                          layer.color === 'cyan' ? 'text-cyan-400' : 'text-green-400'
                        }`}/>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="lg:w-1/4">
                    <div className={`rounded-xl p-4 ${
                      layer.statusType === 'success' ? 'bg-green-500/10 border border-green-500/20' :
                      layer.statusType === 'health' ? 'bg-green-500/10 border border-green-500/20' :
                      'bg-blue-500/10 border border-blue-500/20'
                    }`}>
                      <div className={`flex items-center gap-2 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          layer.statusType === 'success' || layer.statusType === 'health' ? 'bg-green-400' : 'bg-blue-400'
                        }`}/>
                        <span className="text-xs text-white/40 uppercase tracking-wider">{t('intelligence.statusLabel')}</span>
                      </div>
                      <p className={`text-sm font-medium ${
                        layer.statusType === 'success' || layer.statusType === 'health' ? 'text-green-400' : 'text-blue-400'
                      }`}>
                        {layer.statusType === 'health' && <Heart className="w-4 h-4 inline mr-1"/>}
                        {t(layer.statusKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMMAND CENTER SECTION
// ============================================

const CommandCenterSection = () => {
  const { t, isRTL } = useLanguage();

  const dashboardFeatures = [
    { icon: Layers, labelKey: 'commandCenter.features.portfolioControl.label', descKey: 'commandCenter.features.portfolioControl.desc' },
    { icon: Activity, labelKey: 'commandCenter.features.liveMetrics.label', descKey: 'commandCenter.features.liveMetrics.desc' },
    { icon: BarChart3, labelKey: 'commandCenter.features.priceOptimization.label', descKey: 'commandCenter.features.priceOptimization.desc' },
    { icon: Heart, labelKey: 'commandCenter.features.dealHealth.label', descKey: 'commandCenter.features.dealHealth.desc' },
    { icon: TrendingUp, labelKey: 'commandCenter.features.revenueTracking.label', descKey: 'commandCenter.features.revenueTracking.desc' },
    { icon: Bell, labelKey: 'commandCenter.features.smartAlerts.label', descKey: 'commandCenter.features.smartAlerts.desc' },
  ];

  const alerts = [
    { type: 'critical', icon: AlertTriangle, text: 'High-intent buyer for Charlottenburg', time: 'Now', action: 'Review' },
    { type: 'takeover', icon: Eye, text: 'AI needs decision: Price reduction?', time: '2m', action: 'Decide' },
    { type: 'success', icon: CheckCircle2, text: 'Deal #247 financing approved', time: '5m', action: 'View' },
  ];

  return (
    <section id="command-center" className={`section bg-gradient-to-b from-white to-cream relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <HexagonPattern />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">
            <LayoutDashboard className="w-4 h-4"/>
            <span>{t('commandCenter.label')}</span>
          </div>
          <h2 className="section-title mb-4">
            {t('commandCenter.title')} <span className="gradient-text">{t('commandCenter.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate/80 max-w-2xl mx-auto">
            {t('commandCenter.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Dashboard Preview */}
          <div className="lg:col-span-2">
            <div className="bg-charcoal rounded-3xl p-1 shadow-2xl">
              <div className="bg-charcoal rounded-[22px] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                    <div className="w-3 h-3 rounded-full bg-green-400"/>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/10 rounded-lg px-4 py-1.5 text-xs text-white/50 text-center">
                      app.immobee24.com/dashboard
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Active Leads', value: '247', trend: '+12%', color: 'golden' },
                      { label: 'This Month', value: '€89K', trend: '+24%', color: 'green' },
                      { label: 'Deal Health', value: '94%', trend: 'Stable', color: 'blue' },
                      { label: 'AI Actions', value: '1.2K', trend: 'Today', color: 'purple' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-white/40 text-xs mb-1">{stat.label}</div>
                        <div className="flex items-end gap-2">
                          <span className="text-white text-2xl font-bold">{stat.value}</span>
                          <span className={`text-xs font-medium ${
                            stat.color === 'golden' ? 'text-golden' :
                            stat.color === 'green' ? 'text-green-400' :
                            stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                          }`}>{stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-xl p-5 border border-white/5 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 font-medium">Revenue Pipeline</span>
                      <span className="text-golden text-sm bg-golden/10 px-3 py-1 rounded-full">Live</span>
                    </div>
                    <svg className="w-full h-32" viewBox="0 0 500 100">
                      <defs>
                        <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#F5A623" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0 80 Q60 70 120 55 T240 40 T360 25 T500 15 L500 100 L0 100 Z" fill="url(#chartGrad2)"/>
                      <path d="M0 80 Q60 70 120 55 T240 40 T360 25 T500 15" fill="none" stroke="#F5A623" strokeWidth="3"/>
                      <circle cx="500" cy="15" r="6" fill="#F5A623" className="animate-pulse"/>
                    </svg>
                  </div>

                  <div className="space-y-2">
                    {alerts.map((alert, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${
                        alert.type === 'critical' ? 'bg-red-500/10 border-red-500/20' :
                        alert.type === 'takeover' ? 'bg-golden/10 border-golden/20' :
                        'bg-green-500/10 border-green-500/20'
                      }`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          alert.type === 'critical' ? 'bg-red-500/20' :
                          alert.type === 'takeover' ? 'bg-golden/20' : 'bg-green-500/20'
                        }`}>
                          <alert.icon className={`w-4 h-4 ${
                            alert.type === 'critical' ? 'text-red-400' :
                            alert.type === 'takeover' ? 'text-golden' : 'text-green-400'
                          }`}/>
                        </div>
                        <span className="text-white/80 text-sm flex-1">{alert.text}</span>
                        <span className="text-white/30 text-xs">{alert.time}</span>
                        <button className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          alert.type === 'critical' ? 'bg-red-500/20 text-red-400' :
                          alert.type === 'takeover' ? 'bg-golden/20 text-golden' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {alert.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {dashboardFeatures.map((feature, i) => (
              <div key={i} className="group premium-card p-5 hover:shadow-xl hover:shadow-golden/10 transition-all">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden/10 to-golden/5 flex items-center justify-center group-hover:from-golden/20 group-hover:to-golden/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-golden"/>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal mb-1">{t(feature.labelKey)}</h4>
                    <p className="text-slate text-sm">{t(feature.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-golden/10 to-golden/5 rounded-2xl p-6 border border-golden/20">
              <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Workflow className="w-6 h-6 text-golden"/>
                <span className="font-heading font-semibold text-charcoal">{t('commandCenter.aiRecommendations')}</span>
              </div>
              <p className={`text-slate text-sm mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t('commandCenter.aiRecommendationsDesc')}
              </p>
              <div className={`flex items-center gap-2 text-golden text-sm font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t('commandCenter.seeHow')}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}/>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-Page CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-golden/10 to-golden/5 rounded-3xl p-8 border border-golden/20">
            <p className="text-xl font-heading font-semibold text-charcoal mb-4">
              {t('midCta.commandCenter')}
            </p>
            <button
              data-tally-open="eqRpWJ"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-width="400"
              className={`btn-primary py-4 px-8 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Rocket className="w-5 h-5" />
              <span>{t('cta.button')}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <p className="mt-3 text-sm text-slate">{t('cta.riskReversal1')} • {t('cta.riskReversal2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// HOW IT WORKS SECTION
// ============================================

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01', title: 'Upload & Create', icon: Upload,
      description: 'Drop your exposé, floor plan, and documents. AI extracts everything and creates a complete listing in under 30 seconds.',
      visual: (
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {['PDF', 'IMG', 'DOC'].map((type, i) => (
              <div key={i} className="w-12 h-14 rounded-lg bg-gradient-to-br from-slate/10 to-slate/5 border border-slate/10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate">{type}</span>
              </div>
            ))}
          </div>
          <ChevronRight className="w-5 h-5 text-golden"/>
          <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-golden/20 to-golden/10 border border-golden/20 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-golden"/>
          </div>
        </div>
      ),
    },
    {
      number: '02', title: 'AI Enhancement', icon: Sparkles,
      description: 'Get AI-generated descriptions, smart photo ordering, target buyer insights, and optimization recommendations.',
      visual: (
        <div className="space-y-2">
          {['Energy efficiency highlight', 'Family-friendly messaging', 'Photo reordering'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-cream rounded-lg">
              <Check className="w-4 h-4 text-green-500"/><span className="text-sm text-charcoal">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '03', title: 'Go Live', icon: Globe,
      description: 'One click to publish across all platforms. Your listing is live and AI starts working immediately.',
      visual: (
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
          <span className="text-green-600 font-medium">Live on all platforms</span>
        </div>
      ),
    },
    {
      number: '04', title: 'Close & Commission', icon: LayoutDashboard,
      description: 'Monitor everything from your command dashboard. See metrics, AI recommendations, and close deals with confidence.',
      visual: (
        <div className="flex items-center gap-3 px-4 py-3 bg-green-500/10 rounded-xl border border-green-500/20">
          <CheckCircle2 className="w-6 h-6 text-green-600"/>
          <span className="font-semibold text-green-700">Deal closed — Commission received</span>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"/>
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit"><Cpu className="w-4 h-4"/><span>The Workflow</span></div>
          <h2 className="section-title mb-6">From Listing to Closing,{' '}<span className="gradient-text">Fully Automated</span></h2>
          <p className="section-subtitle mx-auto">See how AI transforms every step of your real estate workflow.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-golden via-golden/30 to-transparent hidden md:block"/>
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 md:gap-12 mb-12 last:mb-0 group">
              <div className="relative z-10 shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-golden-light via-golden to-golden-dark flex items-center justify-center shadow-xl shadow-golden/20 group-hover:shadow-2xl group-hover:shadow-golden/30 transition-all duration-500">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white"/>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal text-white text-sm font-bold flex items-center justify-center">{step.number}</div>
              </div>
              <div className="flex-1 pt-2">
                <div className="premium-card">
                  <h3 className="font-heading font-semibold text-2xl md:text-3xl text-charcoal mb-3">{step.title}</h3>
                  <p className="text-lg text-slate/80 leading-relaxed mb-6">{step.description}</p>
                  {step.visual}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-golden/10 to-golden/5 rounded-3xl p-8 border border-golden/20">
            <p className="text-xl font-heading font-semibold text-charcoal mb-4">
              Ready to see this in action?
            </p>
            <button
              data-tally-open="eqRpWJ"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-width="400"
              className="btn-primary py-4 px-8"
            >
              <Rocket className="w-5 h-5" />
              <span>Get Free Beta Access (50 Spots Left)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-3 text-sm text-slate">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION DIVIDER - FOR SEEKERS
// ============================================

const ForSeekersDivider = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="for-seekers" className={`py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 opacity-10">
        <HexagonPattern />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className={`flex items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Search className="w-8 h-8 text-white"/>
          </div>
          <div className={`text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              {t('forSeekersDivider.title')}
            </h2>
            <p className="text-white/80 text-lg">
              {t('forSeekersDivider.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SMARTMATCH SEEKER EXPERIENCE SECTION
// ============================================

const SmartMatchSection = () => {
  const [activeScene, setActiveScene] = useState(0);
  const seekerMessage = "I'm looking for a studio in Berlin Mitte, €180k–260k, with mortgage option.";
  const { displayText, isComplete } = useTypingEffect(seekerMessage, 25, 500);

  const scenes = [
    { icon: MousePointerClick, title: 'Natural Input', desc: 'Speak naturally' },
    { icon: Brain, title: 'AI Analysis', desc: 'Instant match' },
    { icon: BadgeCheck, title: 'Verification', desc: 'Auto-qualified' },
    { icon: CheckCircle2, title: 'Ready Buyer', desc: 'Delivered' },
  ];

  const aiResponses = [
    { icon: MapPin, label: 'Location', value: 'Berlin Mitte', status: 'matched' },
    { icon: Home, label: 'Size', value: 'Studio', status: 'matched' },
    { icon: DollarSign, label: 'Budget', value: '€180k–260k', status: 'matched' },
  ];

  return (
    <section id="smartmatch" className="section bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
      <GradientOrbs />
      <HexagonPattern />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <Compass className="w-4 h-4"/>
            <span>Seeker Experience</span>
          </div>
          <h2 className="section-title mb-6">
            SmartMatch<span className="gradient-text">™</span>
          </h2>
          <p className="text-2xl font-heading font-medium text-charcoal mb-4">
            Human Search. Real Matches.
          </p>
          <p className="text-xl text-slate/80 max-w-3xl mx-auto">
            Let buyers speak like humans. Let agents receive only real, verified, finance-ready buyers.
            No dropdowns. No filters. Just natural language.
          </p>
        </div>

        {/* Scene Progress */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {scenes.map((scene, i) => (
            <button
              key={i}
              onClick={() => setActiveScene(i)}
              className={`group flex flex-col items-center gap-2 px-3 py-3 rounded-xl transition-all ${
                activeScene === i ? 'bg-golden/10 scale-105' : 'hover:bg-black/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeScene === i
                  ? 'bg-gradient-to-br from-golden-light to-golden shadow-lg shadow-golden/30'
                  : 'bg-black/5 group-hover:bg-golden/20'
              }`}>
                <scene.icon className={`w-5 h-5 ${activeScene === i ? 'text-white' : 'text-slate'}`}/>
              </div>
              <span className={`text-xs font-medium hidden md:block ${activeScene === i ? 'text-golden' : 'text-slate'}`}>
                {scene.title}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Chat Interface */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-black/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-black/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"/>
                <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                <div className="w-3 h-3 rounded-full bg-green-400"/>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-slate text-center border border-black/5">
                  immobee24.com/find
                </div>
              </div>
            </div>

            <div className="p-6 min-h-[350px] flex flex-col">
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shrink-0">
                  <BeeIcon className="w-6 h-6"/>
                </div>
                <div className="bg-cream rounded-2xl rounded-tl-md px-5 py-4 max-w-sm">
                  <p className="text-charcoal">Tell us about yourself and what you are looking for.</p>
                  <div className="mt-2 text-slate/50 text-xs">SmartMatch™</div>
                </div>
              </div>

              <div className="flex gap-3 justify-end mb-6">
                <div className="bg-gradient-to-br from-golden-light/20 to-golden/20 rounded-2xl rounded-tr-md px-5 py-4 max-w-md border border-golden/20">
                  <p className="text-charcoal">
                    {displayText}
                    {!isComplete && <span className="inline-block w-0.5 h-5 bg-golden animate-pulse ml-0.5"/>}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate/10 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-slate"/>
                </div>
              </div>

              {isComplete && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shrink-0">
                    <BeeIcon className="w-6 h-6"/>
                  </div>
                  <div className="bg-cream rounded-2xl rounded-tl-md px-5 py-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                      <span className="text-sm text-green-600 font-medium">Analyzing your requirements...</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {aiResponses.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-black/5">
                          <item.icon className="w-4 h-4 text-golden"/>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-slate block">{item.label}</span>
                            <span className="text-sm font-medium text-charcoal">{item.value}</span>
                          </div>
                          {item.status === 'matched' ? (
                            <Check className="w-4 h-4 text-green-500"/>
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-golden border-t-transparent animate-spin"/>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-black/5">
                  <input
                    type="text"
                    placeholder="Ask anything about properties..."
                    className="flex-1 bg-transparent text-charcoal placeholder:text-slate/50 focus:outline-none"
                  />
                  <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shadow-lg shadow-golden/30">
                    <Send className="w-5 h-5 text-white"/>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xl shadow-black/5">
              <h3 className="font-heading font-semibold text-xl text-charcoal mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-golden/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-golden"/>
                </div>
                What SmartMatch™ Understands
              </h3>
              <div className="space-y-3">
                {[
                  { icon: User, text: 'Lifestyle & demographics' },
                  { icon: DollarSign, text: 'Budget & financing' },
                  { icon: MapPin, text: 'Location priorities' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-cream/50 rounded-xl">
                    <item.icon className="w-5 h-5 text-golden"/>
                    <span className="flex-1 text-charcoal">{item.text}</span>
                    <CheckCircle2 className="w-5 h-5 text-green-500"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-charcoal to-slate rounded-3xl p-8">
              <h3 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-golden"/>
                </div>
                Auto-Verification
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: User, label: 'Identity', status: 'verified' },
                  { icon: Briefcase, label: 'Income', status: 'verified' },
                  { icon: FileCheck, label: 'SCHUFA', status: 'verified' },
                  { icon: CalendarCheck, label: 'Viewing', status: 'ready' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
                    <item.icon className="w-4 h-4 text-white/60"/>
                    <span className="text-white/80 text-sm flex-1">{item.label}</span>
                    {item.status === 'verified' && <Check className="w-4 h-4 text-green-400"/>}
                    {item.status === 'pending' && <div className="w-4 h-4 rounded-full border-2 border-golden border-t-transparent animate-spin"/>}
                    {item.status === 'ready' && <Sparkles className="w-4 h-4 text-golden"/>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-7 h-7 text-white"/>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-charcoal mb-1">Verified Buyer Ready</h4>
                  <p className="text-slate mb-3">Finance-ready, identity verified, viewing scheduled.</p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <Bell className="w-4 h-4"/>
                    Agent notified automatically
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-2xl shadow-xl shadow-black/5 border border-black/5">
            <Search className="w-6 h-6 text-slate"/>
            <ArrowRight className="w-5 h-5 text-golden"/>
            <Target className="w-6 h-6 text-golden"/>
            <span className="text-xl font-heading font-semibold text-charcoal">
              Searching becomes <span className="gradient-text">Matching</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// TEAM SECTION
// ============================================

const TeamSection = () => {
  const leadership = [
    {
      name: 'Raju',
      role: 'CTO & AI Senior Architect',
      background: 'Former Senior Architect at DBS Bank (Asia\'s leading digital bank) and Walmart Labs (global e-commerce scale). AI Senior Architect of immobee24\'s 5-Layer Autonomous AI Stack, bringing banking-grade security, enterprise reliability, and systems that handle millions of transactions with 99.99% uptime.',
      highlights: ['Enterprise Architecture at Scale', 'Banking-Grade Security Expert', 'High-Availability Systems Specialist'],
      image: null, // Placeholder
      color: 'blue',
    },
    {
      name: 'Anand',
      role: 'CFO',
      background: 'Over 25 years of experience in Finance & Governance. Deep roots in the German real estate sector, instrumental in building investor trust and regulatory compliance.',
      highlights: null,
      image: null, // Will add later
      color: 'green',
    },
  ];

  const advisors = [
    {
      name: 'Daniel',
      role: 'Strategic Advisor',
      expertise: 'German market entry and institutional partnerships',
    },
  ];

  return (
    <section id="team" className="section bg-gradient-to-b from-cream via-white to-cream relative overflow-hidden">
      <GradientOrbs />
      <HexagonPattern />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">
            <Users className="w-4 h-4"/>
            <span>Leadership</span>
          </div>
          <h2 className="section-title mb-4">
            The Team — <span className="gradient-text">The AI Elite of Real Estate</span>
          </h2>
          <p className="text-2xl font-heading font-semibold text-charcoal">
            Built to Win
          </p>
        </div>

        {/* CEO Feature Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="premium-card p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* CEO Image */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/hari-prasad-ceo.jpg"
                  alt="Hari Prasad - Founder & CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent lg:bg-gradient-to-r"/>
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <h3 className="font-heading font-bold text-2xl text-white">Hari Prasad</h3>
                  <p className="text-golden font-semibold">Founder & CEO</p>
                </div>
              </div>

              {/* CEO Info */}
              <div className="p-8 lg:p-10">
                <div className="hidden lg:block mb-6">
                  <h3 className="font-heading font-bold text-3xl text-charcoal mb-2">Hari Prasad</h3>
                  <p className="text-golden font-semibold text-lg">Founder & CEO</p>
                </div>

                <p className="text-slate leading-relaxed mb-6">
                  Hari Prasad is the visionary behind immobee24, positioning it as the "AI Operating System" for the real estate industry. His unique background combines deep expertise in AI and real estate marketplaces at Europe's largest scale.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-golden/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-golden"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Europe's Largest Real Estate Marketplace</h4>
                      <p className="text-slate text-sm">Founding member of the <span className="font-semibold">Generative AI Task Force</span> at AVIV Group — Europe's largest digital real estate marketplace platform, powering Meilleurs Agents, Immoweb, Immonet, SeLoger, and more across 8+ countries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-5 h-5 text-green-600"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Real Estate Marketplace Scale</h4>
                      <p className="text-slate text-sm">Built AI systems supporting transaction volume exceeding <span className="font-bold text-charcoal">€2 Billion</span> — deep understanding of agent workflows, buyer journeys, and marketplace dynamics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-5 h-5 text-blue-600"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Engineering Excellence</h4>
                      <p className="text-slate text-sm">Professional foundation at <span className="font-semibold">Porsche</span> and <span className="font-semibold">VW</span> — world-class precision engineering and large-scale system reliability</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-golden/10 to-golden/5 rounded-xl p-4 border border-golden/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-golden"/>
                    <span className="font-semibold text-charcoal">Vision</span>
                  </div>
                  <p className="text-slate text-sm">
                    Transition the real estate industry from manual, fragmented workflows to an <span className="font-semibold text-golden">Autonomous Agent OS</span> — enabling agents to focus entirely on high-value human interactions while AI handles the operational work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Leadership Team */}
        <div className="mb-16">
          <h3 className="text-center font-heading font-bold text-2xl text-charcoal mb-10">
            The Founding Leadership Team
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <div key={index} className="premium-card group">
                <div className="flex items-start gap-5">
                  {/* Photo/Placeholder */}
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 ${
                    member.image
                      ? ''
                      : member.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/20'
                        : 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/20'
                  }`}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl"/>
                    ) : (
                      <User className="w-10 h-10 text-white"/>
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-xl text-charcoal">{member.name}</h4>
                    <p className={`font-semibold mb-3 ${
                      member.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}>{member.role}</p>
                    <p className="text-slate text-sm leading-relaxed">{member.background}</p>
                    {member.highlights && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.highlights.map((highlight, i) => (
                          <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                            member.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                          }`}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Advisors */}
        <div className="mb-16">
          <h3 className="text-center font-heading font-bold text-xl text-charcoal mb-8">
            Strategic Advisors
          </h3>

          <div className="flex justify-center">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-black/5 shadow-lg max-w-md">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Briefcase className="w-7 h-7 text-white"/>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-charcoal">{advisor.name}</h4>
                    <p className="text-purple-600 font-medium text-sm">{advisor.role}</p>
                  </div>
                </div>
                <p className="text-slate text-sm mt-4">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traction Stats */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal to-slate rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Strategic Advantage</h3>
              <p className="text-white/60">
                This "AI Elite" team has already demonstrated significant traction
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '50+', label: 'Agents in Beta', icon: Users },
                { value: '<2%', label: 'Churn Rate', icon: TrendingUp },
                { value: '€2B+', label: 'AI Systems Scale', icon: BarChart3 },
                { value: '35+', label: 'Years Combined Experience', icon: Briefcase },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-golden"/>
                  </div>
                  <div className="font-metric text-3xl font-bold text-golden mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-white/70 mb-4">
                Proving the <span className="text-golden font-semibold">real-world value</span> of their execution
              </p>
              <p className="text-xl font-heading font-semibold text-white">
                We believe the real estate industry deserves better. <span className="gradient-text">immobee24 is the proof.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      quote: "In Germany, the market has shifted. Buyers are hesitant. Before immobee24, I spent my weekends chasing documents and qualifying financing manually. Now, the AI handles the 'German Bureaucracy' while I focus on the handshake. It brings Porsche-level precision to my agency.",
      name: 'Marcus Weber', title: 'Senior Broker', location: 'Berlin-Charlottenburg', initials: 'MW', metric: '+6 deals/year',
    },
    {
      quote: "Paris real estate moves at the speed of light. If you miss a SeLoger lead by 10 minutes, they're gone. immobee24 gives me an unfair advantage. It answers instantly, nurtures perfectly, and hands me a ready-to-sign client. It feels less like software and more like a superpower.",
      name: 'Sophie Dubois', title: 'Luxury Agent', location: 'Paris - 16th Arrondissement', initials: 'SD', metric: '€140K+ extra',
    },
  ];

  return (
    <section ref={ref} id="testimonials" className="section bg-cream relative overflow-hidden">
      <GradientOrbs />
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-label mx-auto w-fit"><Users className="w-4 h-4"/><span>Trusted by Europe's Elite</span></div>
          <h2 className="section-title mb-6">Real Agents.{' '}<span className="gradient-text">Real Results.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="premium-card relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white"/>
              </div>
              <div className="absolute -top-3 right-6 px-4 py-2 bg-charcoal text-white rounded-full text-sm font-semibold shadow-lg">{testimonial.metric}</div>
              <blockquote className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 pt-4">"{testimonial.quote}"</blockquote>
              <footer className="flex items-center gap-4 pt-6 border-t border-black/5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <cite className="not-italic font-heading font-semibold text-lg text-charcoal block">{testimonial.name}</cite>
                  <span className="text-slate">{testimonial.title} · {testimonial.location}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 flex flex-wrap justify-center gap-12 md:gap-20">
            {[{ value: '50+', label: 'Active Beta Users' }, { value: '<2%', label: 'Churn Rate' }, { value: '4.9/5', label: 'Satisfaction' }, { value: '24/7', label: 'AI Coverage' }].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-metric text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-slate text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA SECTION
// ============================================

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="book-demo" className={`section bg-charcoal relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate/80 to-charcoal"/>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-golden/10 rounded-full blur-[150px]"/>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-golden/5 rounded-full blur-[120px]"/>
        <HexagonPattern />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-golden-light to-golden flex items-center justify-center shadow-2xl shadow-golden/30 animate-pulse-glow">
            <BeeIcon className="w-12 h-12"/>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {t('cta.headline')} <span className="gradient-text">{t('cta.headlineHighlight')}</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className={`flex flex-wrap justify-center gap-6 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[t('cta.benefit1'), t('cta.benefit2'), t('cta.benefit3')].map((benefit, i) => (
              <div key={i} className={`flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <CheckCircle2 className="w-5 h-5 text-golden"/>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <button
            data-tally-open="eqRpWJ"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-width="400"
            className={`btn-primary text-xl py-6 px-14 inline-flex shadow-2xl shadow-golden/40 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <Rocket className="w-6 h-6"/><span>{t('cta.button')}</span><ArrowRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`}/>
          </button>

          {/* Risk Reversal */}
          <div className={`mt-6 flex items-center justify-center gap-4 text-white/50 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}><Lock className="w-4 h-4" />{t('cta.riskReversal1')}</span>
            <span>•</span>
            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}><Shield className="w-4 h-4" />{t('cta.riskReversal2')}</span>
            <span>•</span>
            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}><Clock className="w-4 h-4" />{t('cta.riskReversal3')}</span>
          </div>

          <p className="mt-6 text-white/40 text-sm">{t('cta.trustLine')}</p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FAQ SECTION
// ============================================

const FAQSection = () => {
  const { t, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2', answerKey: 'faq.a2' },
    { questionKey: 'faq.q3', answerKey: 'faq.a3' },
    { questionKey: 'faq.q4', answerKey: 'faq.a4' },
    { questionKey: 'faq.q5', answerKey: 'faq.a5' },
    { questionKey: 'faq.q6', answerKey: 'faq.a6' },
    { questionKey: 'faq.q7', answerKey: 'faq.a7' },
    { questionKey: 'faq.q8', answerKey: 'faq.a8' },
  ];

  return (
    <section id="faq" className={`section bg-gradient-to-b from-white to-cream relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 honeycomb-pattern-light opacity-40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`section-label justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <HelpCircle className="w-4 h-4" />
            <span>{t('faq.label')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between gap-4 p-6 text-left ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="font-heading font-semibold text-lg text-charcoal">
                  {t(faq.questionKey)}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-golden text-white rotate-180' : 'bg-cream text-slate'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className={`px-6 pb-6 text-slate leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {t(faq.answerKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate mb-4">{t('faq.moreQuestions')}</p>
          <a
            href="https://wa.me/4915214737089?text=Hi%20immobee24%20Team!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <MessageSquare className="w-5 h-5" />
            {t('faq.contactButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FLOATING BETA SIGNUP BUTTON
// ============================================

const FloatingBetaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      data-tally-open="eqRpWJ"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-width="400"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-golden to-golden-dark text-white font-semibold rounded-full shadow-2xl shadow-golden/40 hover:shadow-golden/60 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-bounce-in' : ''}`}
    >
      <Rocket className="w-5 h-5" />
      <span className="hidden sm:inline">Join Beta Free</span>
      <span className="sm:hidden">Beta</span>
    </button>
  );
};

// ============================================
// LEGAL MODAL COMPONENT
// ============================================

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, children }: LegalModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-black/5 px-8 py-5 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-charcoal">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-slate" />
          </button>
        </div>
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

// Datenschutzerklärung Content
const DatenschutzContent = () => (
  <div className="prose prose-slate max-w-none">
    <p className="text-sm text-slate mb-6">Zuletzt aktualisiert: September 2025</p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">1. Verantwortliche Stelle</h3>
    <p className="text-slate mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
    <p className="text-slate mb-4">
      <strong>DeepInsightsX UG (haftungsbeschränkt)</strong><br />
      Auf der Planweide 33A<br />
      12353 Berlin, Germany<br />
      E-Mail: founders@deepinsightsx.com<br />
      Telefon: +49 1520 9404090
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">2. Erhebung und Speicherung personenbezogener Daten</h3>
    <p className="text-slate mb-4">
      Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ähnliches.
    </p>
    <p className="text-slate mb-4">
      Diese Daten sind nicht personenbezogen und dienen ausschließlich der Verbesserung der Qualität unserer Website und ihrer Inhalte.
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">3. Cookies</h3>
    <p className="text-slate mb-4">
      Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren.
    </p>
    <p className="text-slate mb-4">
      Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">4. Nutzung von Analysediensten</h3>
    <p className="text-slate mb-4">
      Wir nutzen Analysedienste, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes auszuwerten. Diese Dienste können Cookies verwenden.
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">5. Ihre Rechte</h3>
    <p className="text-slate mb-2">Sie haben jederzeit das Recht auf:</p>
    <ul className="list-disc list-inside text-slate mb-4 space-y-1">
      <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
      <li>Berichtigung unrichtiger personenbezogener Daten</li>
      <li>Löschung Ihrer bei uns gespeicherten Daten</li>
      <li>Einschränkung der Datenverarbeitung</li>
      <li>Datenübertragbarkeit</li>
      <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
      <li>Beschwerde bei einer Aufsichtsbehörde</li>
    </ul>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">6. Datensicherheit</h3>
    <p className="text-slate mb-4">
      Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">7. Änderung dieser Datenschutzerklärung</h3>
    <p className="text-slate mb-4">
      Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Kontakt bei Datenschutzfragen</h3>
    <p className="text-slate">
      Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an: <a href="mailto:founders@deepinsightsx.com" className="text-golden hover:underline">founders@deepinsightsx.com</a>
    </p>
  </div>
);

// Impressum Content
const ImpressumContent = () => (
  <div className="prose prose-slate max-w-none">
    <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">Angaben gemäß § 5 TMG</h3>
    <p className="text-slate mb-4">
      <strong>DeepInsightsX UG (haftungsbeschränkt)</strong><br />
      Auf der Planweide 33A<br />
      12353 Berlin<br />
      Germany
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Vertreten durch den Geschäftsführer</h3>
    <p className="text-slate mb-4">Hariprasad Ranganathaiah Karpenahalli</p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Kontakt</h3>
    <p className="text-slate mb-4">
      Telefon: +49 1520 9404090<br />
      E-Mail: <a href="mailto:founder@deepinsightsx.com" className="text-golden hover:underline">founder@deepinsightsx.com</a>
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Registereintrag</h3>
    <p className="text-slate mb-4">
      Eintragung im Handelsregister.<br />
      Registergericht: Amtsgericht Charlottenburg<br />
      Registernummer: HRB 278621 B
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Umsatzsteuer</h3>
    <p className="text-slate mb-4">
      Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
      <strong>DE456800596</strong>
    </p>

    <h3 className="text-lg font-heading font-semibold text-charcoal mt-6 mb-3">Steuernummer</h3>
    <p className="text-slate">29/257/31992</p>
  </div>
);

// ============================================
// FOOTER
// ============================================

const Footer = () => {
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <>
      <footer className="bg-charcoal py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-4">
                <Logo className="h-10 md:h-12" variant="white" />
              </a>
              <p className="text-white/50 text-lg max-w-md mb-4">The AI Operating System for Real Estate. Automate listings, qualify leads, and close more deals.</p>
              <p className="text-white/40 text-sm mb-6">
                A product by <strong className="text-white/60">DeepInsightsX UG</strong> · Berlin, Germany
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/immobee24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-golden/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-white/60"/>
                </a>
                <a href="https://twitter.com/immobee24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-golden/20 transition-colors">
                  <Twitter className="w-5 h-5 text-white/60"/>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Product</h4>
              <nav className="space-y-3">
                <a href="#for-agents" className="block text-white/50 hover:text-golden transition-colors">For Agents</a>
                <a href="#for-seekers" className="block text-white/50 hover:text-golden transition-colors">For Seekers</a>
                <a href="#intelligence" className="block text-white/50 hover:text-golden transition-colors">AI Pipeline</a>
                <a href="#testimonials" className="block text-white/50 hover:text-golden transition-colors">Testimonials</a>
                <button data-tally-open="eqRpWJ" className="block text-white/50 hover:text-golden transition-colors text-left">Join Beta</button>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:founders@deepinsightsx.com" className="flex items-center gap-2 text-white/50 hover:text-golden transition-colors">
                  <Mail className="w-4 h-4"/>founders@deepinsightsx.com
                </a>
                <div className="flex items-center gap-2 text-white/50">
                  <Building2 className="w-4 h-4"/>Berlin, Germany
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">© {new Date().getFullYear()} DeepInsightsX UG. All rights reserved.</p>
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-sm text-white/30 hover:text-golden transition-colors"
              >
                Datenschutzerklärung
              </button>
              <button
                onClick={() => setShowImpressum(true)}
                className="text-sm text-white/30 hover:text-golden transition-colors"
              >
                Impressum
              </button>
            </nav>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={showDatenschutz}
        onClose={() => setShowDatenschutz(false)}
        title="Datenschutzerklärung"
      >
        <DatenschutzContent />
      </LegalModal>

      <LegalModal
        isOpen={showImpressum}
        onClose={() => setShowImpressum(false)}
        title="Impressum"
      >
        <ImpressumContent />
      </LegalModal>
    </>
  );
};

// ============================================
// WHATSAPP CHAT WIDGET
// ============================================

const WhatsAppWidget = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-2xl border border-black/10 p-4 w-72 animate-bounce-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-charcoal text-sm">{t('whatsapp.title')}</p>
              <p className="text-xs text-slate">{t('whatsapp.subtitle')}</p>
            </div>
          </div>
          <p className="text-sm text-slate mb-3">{t('whatsapp.message')}</p>
          <a
            href="https://wa.me/4915214737089?text=Hi%20immobee24%20Team!%20I%20am%20interested%20in%20the%20beta%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl font-semibold transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            {t('whatsapp.button')}
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl shadow-green-500/30 transition-all hover:scale-110 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================

function App() {
  useHashPageviews();
  return (
    <div className="min-h-screen antialiased">
      {/* Honeycomb pattern overlay for visual texture */}
      <div className="fixed inset-0 honeycomb-pattern pointer-events-none z-0 opacity-60" />

      <UrgencyBanner />
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Text Storyboard - Product Flow Animation */}
        <TextStoryboardSection />

        {/* FOR AGENTS SECTION */}
        <ForAgentsDivider />
        <ProblemSection />
        <SectionDivider />
        <ProductSpecSection />
        <SectionDivider />
        <DifferentSection />
        <SectionDivider />
        <AutonomousFutureSection />
        <SectionDivider />
        <IntelligencePipelineSection />
        <SectionDivider />
        <CommandCenterSection />
        <SectionDivider />
        <HowItWorksSection />

        {/* FOR SEEKERS SECTION - Condensed */}
        <ForSeekersDivider />
        <SmartMatchSection />

        {/* TEAM */}
        <SectionDivider />
        <TeamSection />

        {/* SOCIAL PROOF & CTA */}
        <SectionDivider />
        <TestimonialsSection />
        <CTASection />

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
      <FloatingBetaButton />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
