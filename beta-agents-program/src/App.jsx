import {
  AlertCircle,
  Clock,
  FileX,
  GitBranch,
  Sparkles,
  Layers,
  Zap,
  Building2,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Target,
  Workflow,
  Calendar,
  MessageSquare,
  Play,
  Rocket,
  BarChart3,
  Phone,
  Mail,
  PhoneCall,
  HeartHandshake,
  Lock,
  Compass,
  ChevronDown,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const DotGrid = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute inset-0 opacity-[0.35] ${className}`}
    style={{
      backgroundImage:
        'radial-gradient(circle, rgba(17,17,17,0.08) 1px, transparent 1px)',
      backgroundSize: '22px 22px',
      maskImage:
        'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 80%)',
      WebkitMaskImage:
        'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 80%)',
    }}
  />
)

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="h-px w-8 bg-[#F4A300]" />
    <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#F4A300]">
      {children}
    </p>
  </div>
)

const Stat = ({ value, label, sub }) => (
  <div className="flex flex-col">
    <div className="text-5xl md:text-6xl font-semibold tracking-tight leading-none text-[#111111]">
      {value}
    </div>
    <div className="mt-3 text-sm font-medium text-[#111111]">{label}</div>
    {sub && <div className="mt-1 text-sm text-black/50">{sub}</div>}
  </div>
)

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-[#111111] pr-6">
          {q}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-black/50 group-hover:text-[#F4A300] transition ${
            open ? 'rotate-180 text-[#F4A300]' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base text-black/60 leading-relaxed max-w-3xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

const TallyForm = () => {
  useEffect(() => {
    const init = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds()
      }
    }
    if (document.readyState === 'complete') {
      init()
    } else {
      window.addEventListener('load', init)
      return () => window.removeEventListener('load', init)
    }
  }, [])

  return (
    <iframe
      data-tally-src="https://tally.so/embed/ja5bzJ?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="700"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Jetzt für das immob24 Beta Programm bewerben."
      className="block w-full"
    />
  )
}

export default function Immob24BetaLandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#111111] font-['Inter']">
      {/* Navbar */}
      <nav className="w-full border-b border-black/5 backdrop-blur-md sticky top-0 z-50 bg-[#F8F6F1]/85">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="immob24 — Startseite">
            <img
              src="/beta-agents-program/logo-light.jpg"
              alt="immob24"
              className="h-10 w-10 rounded-xl object-cover shadow-sm"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-black/60">
            <a href="#beta" className="hover:text-[#111111] transition">Beta</a>
            <a href="#benefits" className="hover:text-[#111111] transition">Vorteile</a>
            <a href="#pilot" className="hover:text-[#111111] transition">Pilot</a>
            <a href="#faq" className="hover:text-[#111111] transition">FAQ</a>
          </div>

          <a
            href="#apply"
            className="bg-[#F4A300] text-[#111111] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#e79a00] transition inline-flex items-center gap-2"
          >
            Beta-Zugang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* SECTION 1 - Industry Problem */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 overflow-hidden">
        <DotGrid />

        <div className="relative max-w-4xl">
          <SectionLabel>Branchenproblem</SectionLabel>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
            Immobilienteams verlieren Aufträge durch{' '}
            <span className="text-[#F4A300]">langsame Workflows.</span>
          </h1>

          <p className="mt-8 text-xl text-black/60 leading-relaxed max-w-3xl">
            Agenten und Maklerteams verlieren weiterhin Stunden mit
            CRM-Verwaltung, der Terminierung von Anrufen und manueller Arbeit.
            Das Ergebnis: verzögerte Lead-Antworten, unverbundene
            Arbeitsabläufe und verlorene Leads. Das Problem ist nicht mehr die
            Nachfrage. Das Problem ist die operative Geschwindigkeit. Finden
            Sie mit wenigen Klicks echte Interessenten, die eine Immobilie
            suchen.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-14">
            {[
              { icon: AlertCircle, title: 'Verpasste Leads', sub: 'Anfragen versanden im Nichts' },
              { icon: Clock, title: 'Langsame Antworten', sub: 'Stunden statt Sekunden' },
              { icon: FileX, title: 'Admin-Überlastung', sub: 'Alles manuell' },
              { icon: GitBranch, title: 'Fragmentierte Systeme', sub: 'Fünf Tools, kein Flow' },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/10 text-[#F4A300] flex items-center justify-center mb-5 group-hover:bg-[#F4A300] group-hover:text-[#111111] transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium leading-tight">{title}</div>
                <div className="text-sm text-black/50 mt-1.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - Why We Built (DARK) */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#161616] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,163,0,0.18),transparent_40%)]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#F4A300]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#F4A300]" />
              <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#F4A300]">
                Warum wir immob24 gebaut haben
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Wir haben dieselben Workflow-Ausfälle{' '}
              <span className="text-[#F4A300]">in ganz Europa</span> wiederholt
              erlebt.
            </h2>
          </div>

          <div className="space-y-6 text-white/65 text-lg leading-relaxed">
            <p>
              Das Team hinter immob24 hat zuvor an KI- und Plattformsystemen im
              AVIV-Ökosystem gearbeitet, einschließlich immowelt.
            </p>

            <p>
              In tausenden Immobilienteams haben wir wiederholt verpasste
              Anfragen, verzögerte Antworten, fragmentierte Arbeitsabläufe und
              vermeidbare Auftragsverluste gesehen.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Layers, label: 'AVIV-Ökosystem' },
                { icon: Building2, label: 'immowelt' },
                { icon: Sparkles, label: 'KI-Infrastruktur' },
                { icon: Compass, label: 'Europäisches PropTech' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 text-sm flex items-center gap-3"
                >
                  <span className="w-9 h-9 rounded-xl bg-[#F4A300]/15 text-[#F4A300] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO - Closed Beta (DARK with ambient glow) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#161616] to-[#1c1c1c] text-white border-t border-white/5">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#F4A300]/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#F4A300]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#F4A300]" />
              <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#F4A300]">
                Geschlossenes Beta-Programm
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Treten Sie dem immob24 Beta-Programm für{' '}
              <span className="text-[#F4A300]">Wohnimmobilien-Teams</span> bei.
            </h2>

            <p className="mt-8 text-xl text-white/65 leading-relaxed max-w-2xl">
              Wir arbeiten mit einer kleinen Gruppe vorausschauender Makler in
              Deutschland zusammen, um das nächste KI-Betriebssystem für
              Immobilien-Workflows zu gestalten.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#apply"
                className="bg-[#F4A300] text-[#111111] px-6 py-3.5 rounded-2xl font-medium hover:bg-[#e79a00] transition inline-flex items-center gap-2"
              >
                Für Beta-Zugang bewerben
                <ArrowRight className="w-4 h-4" />
              </a>

              <button className="border border-white/20 px-6 py-3.5 rounded-2xl font-medium hover:bg-white/10 transition inline-flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Intro-Gespräch buchen
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 text-sm text-white/50">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4A300]" /> Begrenzte Beta-Plätze
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4A300]" /> Onboarding durch Gründer
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4A300]" /> Von AVIV-/immowelt-Teams
              </span>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F4A300]/5 blur-2xl rounded-[32px]" />
            <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#F4A300]/15 text-[#F4A300] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-base font-medium">immob24 Dashboard</div>
                    <div className="text-xs text-white/40 mt-0.5">
                      KI-Workflow-Übersicht · Heute
                    </div>
                  </div>
                </div>
                <div className="bg-[#F4A300]/15 text-[#F4A300] px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4A300] animate-pulse" />
                  Live
                </div>
              </div>

              {/* Mini metrics */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { k: 'Leads', v: '142' },
                  { k: 'Beantw.', v: '139' },
                  { k: 'Ø', v: '3,2s' },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-2xl bg-black/30 border border-white/10 p-3"
                  >
                    <div className="text-xs text-white/40">{m.k}</div>
                    <div className="text-lg font-semibold mt-1">{m.v}</div>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="rounded-2xl bg-black/30 border border-white/10 p-4 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-white/50">Diese Woche</div>
                  <div className="text-xs text-[#F4A300]">+24 % vs. letzte</div>
                </div>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 50, 78, 60, 88, 95].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-md ${
                        i === 6 ? 'bg-[#F4A300]' : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-2.5">
                {[
                  { icon: Zap, text: 'Lead in 3 Sekunden beantwortet' },
                  { icon: Calendar, text: 'Besichtigung automatisch geplant' },
                  { icon: FileX, text: 'PDF in Listing umgewandelt' },
                  { icon: AlertCircle, text: 'Deal-Risiko erkannt' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="rounded-2xl bg-black/40 border border-white/10 p-3.5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#F4A300]/10 text-[#F4A300] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm text-white/80">{text}</span>
                    </div>
                    <span className="text-[10px] font-medium text-[#F4A300] bg-[#F4A300]/10 px-2 py-1 rounded-md">
                      KI
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative bg-[#F8F6F1] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <Stat value="50+" label="Beta-Partner" sub="in ganz Deutschland" />
            <Stat value="3s" label="Ø Antwortzeit" sub="KI-gestützte Triage" />
            <Stat value="<2 %" label="Abwanderungsrate" sub="Gründungskohorte" />
            <Stat value="12 Wo." label="Pilotprogramm" sub="Strukturierter Rollout" />
          </div>
        </div>
      </section>

      {/* SECTION 4 - Closed Beta */}
      <section
        id="beta"
        className="relative bg-[#F8F6F1] overflow-hidden border-t border-black/5"
      >
        <DotGrid />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-4xl">
            <SectionLabel>Geschlossene Beta</SectionLabel>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Wir suchen keine Nutzer. Wir suchen{' '}
              <span className="text-[#F4A300]">Beta-Partner.</span>
            </h2>

            <p className="mt-8 text-xl text-black/60 leading-relaxed">
              Das immob24 Beta-Programm richtet sich an eine begrenzte Anzahl
              von Maklerteams in Deutschland, die früh Zugriff auf KI-gestützte
              operative Workflows haben möchten.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-16">
            {[
              { icon: Workflow, title: 'Echte Workflow-Tests', sub: 'Live in Ihrem CRM' },
              { icon: HeartHandshake, title: 'Direkter Gründer-Zugang', sub: 'Slack + WhatsApp' },
              { icon: Compass, title: 'Produktrichtung mitgestalten', sub: 'Roadmap mitbestimmen' },
              { icon: Lock, title: 'Begrenzte Onboarding-Plätze', sub: 'Geschlossene Kohorte' },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/10 text-[#F4A300] flex items-center justify-center mb-5 group-hover:bg-[#F4A300] group-hover:text-[#111111] transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium leading-tight">{title}</div>
                <div className="text-sm text-black/50 mt-1.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <SectionLabel>Vorteile</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Was Beta-Partner <span className="text-[#F4A300]">erhalten.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Sparkles, title: 'Kostenloser Beta-Zugang', sub: 'Volle Plattform, keine Kosten' },
              { icon: HeartHandshake, title: 'Gründer-Support', sub: 'Direkter Kanal, schnelle Antwort' },
              { icon: Lock, title: 'Festgeschriebener Preis', sub: 'Gründungsmitglied-Preis, dauerhaft' },
              { icon: Compass, title: 'Roadmap-Einfluss', sub: 'Ihr Feedback wird umgesetzt' },
              { icon: Rocket, title: 'Priorisiertes Onboarding', sub: 'In 14 Tagen live' },
              { icon: Workflow, title: 'Workflow-Automatisierung', sub: 'Lead → Besichtigung → Abschluss' },
              { icon: Target, title: 'KI-Betriebstests', sub: 'Vorab-Modelle' },
              { icon: MessageSquare, title: 'Direkter Feedback-Loop', sub: 'Wöchentliche Produkt-Calls' },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] p-7 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/10 text-[#F4A300] flex items-center justify-center mb-5 group-hover:bg-[#F4A300] group-hover:text-[#111111] transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium leading-snug">{title}</div>
                <div className="text-sm text-black/50 mt-1.5 leading-relaxed">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA SECURITY (DARK) */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#161616] to-[#1c1c1c] text-white overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,163,0,0.18),transparent_45%)]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#F4A300]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs uppercase tracking-[0.22em] text-[#F4A300] mb-8">
              <ShieldCheck className="w-3.5 h-3.5" />
              Datensicherheit
            </div>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Sind Ihre Daten{' '}
              <span className="text-[#F4A300]">in Gefahr?</span>
            </h2>

            <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-2xl">
              Wir sind nicht ChatGPT. Wir speichern keine Daten. Wir halten uns
              an das Bundesdatenschutzgesetz. Ihre Daten verlassen niemals
              unsere deutschen Server, und Sie können jederzeit die Löschung
              Ihrer Daten anfordern, falls Sie mit dem Service unzufrieden sind.
              Sie sind der Eigentümer — Sie entscheiden, welche Daten gespeichert
              und welche gelöscht werden.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Building2, title: 'Server in Deutschland', sub: 'Daten verlassen nie das Land' },
              { icon: ShieldCheck, title: 'BDSG-konform', sub: 'Bundesdatenschutzgesetz' },
              { icon: Lock, title: 'Keine Datenspeicherung', sub: 'Anders als ChatGPT' },
              { icon: AlertCircle, title: 'Löschung jederzeit', sub: 'Auf Anfrage in 24 Std.' },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4A300]/15 text-[#F4A300] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-base font-medium text-white">{title}</div>
                <div className="text-sm text-white/50 mt-1.5 leading-relaxed">
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="apply"
        className="relative border-t border-black/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,163,0,0.12),transparent_50%)]" />
        <DotGrid />

        <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-40">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#F4A300]" />
              <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#F4A300]">
                Bewerben
              </p>
              <span className="h-px w-8 bg-[#F4A300]" />
            </div>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Jetzt für das immob24{' '}
              <span className="text-[#F4A300]">Beta-Programm</span> bewerben.
            </h2>

            <p className="mt-6 text-xl text-black/60">
              Begrenztes Onboarding für Wohnimmobilien-Teams in Deutschland.
            </p>
          </div>

          <div className="bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] p-2 md:p-4 overflow-hidden">
            <TallyForm />
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm text-black/45">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F4A300]" /> Keine langfristige Bindung
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F4A300]" /> DSGVO-konform
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F4A300]" /> Jederzeit kündbar
            </span>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <section id="pilot" className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <SectionLabel>Pilot-Struktur</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Ein strukturierter <span className="text-[#F4A300]">12-Wochen-Pilot.</span>
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 mt-16">
            <div className="hidden md:block absolute top-[3.25rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#F4A300]/40 to-transparent" />

            {[
              {
                icon: Play,
                title: 'Woche 1–2',
                subtitle: 'Einrichtung & Onboarding',
                points: ['CRM-Integration', 'Team-Workshop', 'Workflow-Audit'],
              },
              {
                icon: Workflow,
                title: 'Woche 3–8',
                subtitle: 'Live-Workflow-Tests',
                points: ['Automatisierung echter Aufträge', 'Wöchentliche Produkt-Calls', 'Feedback-Loop'],
              },
              {
                icon: TrendingUp,
                title: 'Woche 9–12',
                subtitle: 'Auswertung & Ausweitung',
                points: ['ROI-Review', 'Roadmap-Planung', 'Skalierung auf das gesamte Team'],
              },
            ].map(({ icon: Icon, title, subtitle, points }) => (
              <div
                key={title}
                className="relative bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] p-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F4A300] text-[#111111] flex items-center justify-center shadow-lg shadow-[#F4A300]/20 mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm text-[#F4A300] font-medium mb-2">{title}</div>
                <div className="text-2xl font-medium leading-snug mb-6">{subtitle}</div>
                <ul className="space-y-2.5 text-sm text-black/60">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F4A300] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/5 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Häufig gestellte Fragen.
            </h2>
          </div>

          <div className="bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[28px] px-8 md:px-10 py-2">
            <FAQItem
              q="Für wen ist das Beta-Programm?"
              a="Wohnimmobilien-Teams in Deutschland — typischerweise 3 bis 30 Makler — die bereits ein CRM nutzen und KI-gestützte Workflow-Automatisierung in echten Deals testen möchten."
              defaultOpen
            />
            <FAQItem
              q="Was kostet das Programm?"
              a="Die Beta ist für teilnehmende Teams kostenlos. Der Preis für Gründungsmitglieder ist auf Lebenszeit gesichert, sobald wir öffentlich starten."
            />
            <FAQItem
              q="Wie hoch ist der Zeitaufwand?"
              a="Die Einrichtung dauert etwa eine Woche. Danach bitten wir um einen kurzen wöchentlichen Produkt-Call (30 Minuten) für die Dauer des Pilots. Im Tagesgeschäft läuft die KI im Hintergrund Ihres bestehenden Workflows."
            />
            <FAQItem
              q="Welche CRM-Integrationen werden unterstützt?"
              a="Wir integrieren derzeit die gängigsten europäischen Immobilien-CRMs. Wenn Sie etwas Eigenes nutzen, prüfen wir die Integration im Bewerbungsgespräch."
            />
            <FAQItem
              q="Sind meine Daten sicher?"
              a="Ja. Wir sind DSGVO-konform, hosten in der EU und nutzen Ihre Daten niemals zum Training gemeinsamer Modelle. Auftragsverarbeitungsverträge auf Anfrage verfügbar."
            />
            <FAQItem
              q="Was passiert nach den 12 Wochen?"
              a="Sie können zum festgeschriebenen Gründungsmitglied-Preis weitermachen oder ohne Verpflichtung aufhören. So oder so behalten Sie die Workflows, die Sie während des Pilots aufgebaut haben."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA - DARK */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#161616] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,163,0,0.15),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A300]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs uppercase tracking-[0.22em] text-[#F4A300] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4A300] animate-pulse" />
            Aktuelles Onboarding · Frühjahr 2026
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
            Werden Sie einer der ersten immob24{' '}
            <span className="text-[#F4A300]">Beta-Partner</span> in Deutschland.
          </h2>

          <p className="mt-8 text-xl text-white/65 leading-relaxed max-w-3xl mx-auto">
            Wir nehmen eine begrenzte Anzahl von Maklerteams für unser
            geschlossenes Beta-Programm an Bord.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#apply"
              className="bg-[#F4A300] text-[#111111] px-7 py-3.5 rounded-2xl font-medium hover:bg-[#e79a00] transition inline-flex items-center gap-2"
            >
              Für Beta-Zugang bewerben
              <ArrowRight className="w-4 h-4" />
            </a>

            <button className="border border-white/20 px-7 py-3.5 rounded-2xl font-medium hover:bg-white/10 transition inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Intro-Gespräch vereinbaren
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0c0c0c] text-white/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img
              src="/beta-agents-program/logo-dark.jpg"
              alt="immob24"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Das KI-Betriebssystem für Wohnimmobilien-Teams. Entwickelt von
              ehemaligen AVIV-/immowelt-Teams in Europa.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:beta@immob24.com"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4" /> beta@immob24.com
              </a>
              <a
                href="tel:+4915214737089"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-4 h-4" /> +49 152 14737089
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-white mb-4">Programm</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#beta" className="hover:text-white transition">Geschlossene Beta</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Vorteile</a></li>
              <li><a href="#pilot" className="hover:text-white transition">Pilot</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-white mb-4">Unternehmen</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://immob24.com/" className="hover:text-white transition">Hauptseite</a></li>
              <li><a href="#apply" className="hover:text-white transition">Bewerben</a></li>
              <li><a href="https://immob24.com/" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="https://immob24.com/" className="hover:text-white transition">Impressum</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
            <div>© 2026 immob24. Alle Rechte vorbehalten.</div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4A300]" />
              DSGVO-konform · Gehostet in der EU
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}