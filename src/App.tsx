/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, Cpu, Layers, Monitor, Play, Settings, Check, ArrowRight, 
  Terminal, Globe, Activity, Database, Shield, Layout, 
  MessageSquare, BarChart3, Clock, Users, ChevronRight,
  Maximize2, MousePointer2, Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'accent' | 'outline' }) => {
  const styles = {
    default: "bg-white/10 text-white/60",
    accent: "bg-accent/20 text-accent border border-accent/30",
    outline: "border border-white/20 text-white/40"
  };
  return (
    <span className={`px-2 py-0.5 text-[10px] font-mono tracking-tighter rounded-sm ${styles[variant]}`}>
      {children}
    </span>
  );
};

const SectionHeader = ({ number, category, title }: { number: string, category: string, title: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-accent font-mono text-xs tracking-widest">{number} // {category}</span>
      <div className="h-[1px] flex-grow bg-white/10"></div>
    </div>
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none">
      {title}
    </h2>
  </div>
);

const AuraBadge = () => (
  <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default">
    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
    <span className="font-mono text-[9px] tracking-widest uppercase">Made in Aura</span>
  </div>
);

const StatCard = ({ label, value, unit = '' }: { label: string, value: string, unit?: string }) => (
  <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    <div className="mono-label mb-4">{label}</div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-bold tracking-tighter">{value}</span>
      <span className="text-accent font-mono text-xs">{unit}</span>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-bottom border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent" />
            <span className="font-bold tracking-tighter text-lg uppercase">LAB 01 // SYSTEM</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['EXPERIMENTS', 'SYSTEM', 'LICENSING'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="mono-label hover:text-accent transition-colors">
                {item}
              </a>
            ))}
            <button className="px-4 py-1.5 bg-accent text-black font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-colors">
              INIT_SEQUENCE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/cyberpunk-girl/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-accent" />
                <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">SYS ONLINE</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                Real-time <br />
                Interfaces <br />
                <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '1px white' }}>For the AI era.</span>
              </h1>
              <p className="text-white/60 max-w-md text-lg leading-relaxed mb-10">
                Interactive experiments in WebGL, motion systems, and immersive UI. 
                Bridging the gap between raw compute and human perception.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-4 px-8 py-4 border border-accent text-accent font-mono text-xs tracking-widest uppercase hover:bg-accent hover:text-black transition-all">
                  Enter the Lab <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-4 px-8 py-4 border border-white/10 text-white/60 font-mono text-xs tracking-widest uppercase hover:bg-white/5 transition-colors">
                  View Experiments <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-64 glass-panel p-4 border-l-2 border-accent">
              <div className="flex justify-between items-center mb-4">
                <span className="mono-label">Terminal</span>
                <Terminal className="w-3 h-3 text-accent" />
              </div>
              <div className="font-mono text-[10px] space-y-1 text-white/40">
                <div className="flex justify-between">
                  <span>CORE TEMP</span>
                  <span className="text-accent">32°C</span>
                </div>
                <div className="flex justify-between">
                  <span>SYSTEM_IDLE</span>
                  <span className="text-green-500">TRUE</span>
                </div>
                <div className="flex justify-between">
                  <span>WEBGL_RENDER</span>
                  <span>ACTIVE</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
                  <AuraBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 // Experiments */}
      <section id="experiments" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" category="EXPERIMENTS" title="Research & Development" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                title: "Neural Particle Field", 
                desc: "100,000 instanced geometries reacting to cursor velocity and audio input via custom fragment shaders.",
                icon: <Activity className="w-5 h-5 text-accent" />,
                tag: "LIVE DEMO"
              },
              { 
                title: "Image Reveal Shader", 
                desc: "Liquid distortion effects applied to DOM images mapped onto WebGL planes with noise displacement.",
                icon: <Globe className="w-5 h-5 text-accent" />,
                tag: "INTERACTIVE"
              },
              { 
                title: "Scroll Scan Engine", 
                desc: "Tying camera z-depth and post-processing bloom intensity directly to native browser scroll velocity.",
                icon: <MousePointer2 className="w-5 h-5 text-accent" />,
                tag: "MOTION"
              }
            ].map((exp, i) => (
              <div key={i} className="group p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-accent/10 rounded-sm">
                    {exp.icon}
                  </div>
                  <Badge variant="outline">{exp.tag}</Badge>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{exp.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-12">{exp.desc}</p>
                <button className="flex items-center gap-2 mono-label group-hover:text-white transition-colors">
                  Initialize <ArrowRight className="w-3 h-3" />
                </button>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <AuraBadge />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 // Architecture */}
      <section id="system" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" category="ARCHITECTURE" title="Built with performance in mind." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                The era of static web pages is dead. Interfaces must now be fluid, responsive, and render complex data visualizations at 60fps across all devices.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-12">
                By heavily relying on custom GLSL shaders, GPU instancing, and scroll-driven requestAnimationFrame loops, the system bypasses standard DOM bottlenecks to deliver uncompromising immersive experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="border-l border-white/10 pl-4">
                  <div className="mono-label mb-2">AVG TTI</div>
                  <div className="text-2xl font-bold text-accent">1.7s</div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <div className="mono-label mb-2">FRAME STABILITY</div>
                  <div className="text-2xl font-bold text-accent">98.6%</div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <div className="mono-label mb-2">INPUT LATENCY</div>
                  <div className="text-2xl font-bold text-accent">11ms</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 border-t-4 border-accent">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-xs tracking-widest uppercase">System Telemetry</span>
                <Badge variant="accent">LIVE</Badge>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Shader Compilation", value: "12ms", progress: 15 },
                  { label: "GPU Acceleration", value: "Active / 122%", progress: 85, color: 'accent' },
                  { label: "Frame Rate Target", value: "60 FPS", progress: 100 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mono-label mb-2">
                      <span>{item.label}</span>
                      <span className={item.color === 'accent' ? 'text-accent' : ''}>{item.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        className={`h-full ${item.color === 'accent' ? 'bg-accent' : 'bg-white/40'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="mono-label mb-2">Pipeline</div>
                  <div className="text-[10px] font-mono text-white/40 leading-tight">
                    Input Sampling → GPU Queue → Shader Passes → Output Composite
                  </div>
                </div>
                <div>
                  <div className="mono-label mb-2">Failover</div>
                  <div className="text-[10px] font-mono text-white/40 leading-tight">
                    Automatic reduction to medium-density meshes under thermal throttling.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // Commercial Deployment */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="03" category="APPLIED ENVIRONMENTS" title="Commercial Deployment" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[
              { title: "AI SaaS Landing Pages", icon: <Zap />, desc: "Visualize abstract machine learning processes with dynamic particle networks that react to scroll and communicate high-tech competency instantly." },
              { title: "Fintech Interfaces", icon: <BarChart3 />, desc: "High-density, real-time data visualization utilizing WebGL to render thousands of transactional nodes without freezing the DOM." },
              { title: "Interactive Storytelling", icon: <Layout />, desc: "Scroll-reactive scenes and smooth transition states for launch campaigns, product reveals, and immersive editorial experiences." },
              { title: "Product Dashboards", icon: <Settings />, desc: "Unified desktop/mobile canvas rendering with adaptive quality layers and deterministic interactions under heavy data loads." }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                <div className="mt-8 flex justify-end">
                  <AuraBadge />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // Demo Reel */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="04" category="DEMO REEL" title="Cinematic Interaction Preview" />
          
          <div className="relative aspect-video bg-black border border-white/10 group cursor-pointer overflow-hidden">
            <img 
              src="https://picsum.photos/seed/demo-reel/1280/720" 
              alt="Demo Reel" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-accent flex items-center justify-center bg-accent/10 group-hover:bg-accent group-hover:text-black transition-all">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="mono-label text-white/60">Sequence: Lab_Reel_V03</div>
              <div className="mono-label text-white/60">00:42</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 mt-1">
            <StatCard label="Scenes" value="12" />
            <StatCard label="Avg FPS" value="60" />
            <StatCard label="Devices" value="Desktop + Mobile" />
          </div>
        </div>
      </section>

      {/* 05 // Live Sandbox */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="05" category="LIVE SANDBOX" title="Tweak Parameters in Real Time" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Expose shader uniforms and motion constants to quickly test aesthetic directions, performance thresholds, and interaction sensitivity.
              </p>
              <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02]">
                <Settings className="w-5 h-5 text-accent" />
                <span className="mono-label">Real-time control interface active</span>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { label: "Particle Count", value: "100,000", progress: 80 },
                { label: "Bloom Intensity", value: "0.72", progress: 72 },
                { label: "Noise Scale", value: "0.38", progress: 38 },
                { label: "Motion Damping", value: "0.18", progress: 18 }
              ].map((param, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between mono-label mb-3 group-hover:text-white transition-colors">
                    <span>{param.label}</span>
                    <span className="font-mono">{param.value}</span>
                  </div>
                  <div className="h-1 bg-white/5 relative">
                    <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${param.progress}%` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-black cursor-pointer" style={{ left: `${param.progress}%` }} />
                  </div>
                </div>
              ))}
              <div className="pt-8 flex justify-end">
                <AuraBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 // Case Studies */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="06" category="CASE STUDIES" title="Outcome-Driven Deployments" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                title: "AI Platform Launch", 
                desc: "Designed cinematic scroll-driven interface for ML explainability.",
                results: "+37% Time-on-page, +21% Demo Requests"
              },
              { 
                title: "Fintech Analytics Suite", 
                desc: "Migrated heavy SVG charts to GPU-accelerated rendering pipeline.",
                results: "2.1x Render Speed, Stable 60fps on modern mobile"
              },
              { 
                title: "Product Story Experience", 
                desc: "Built chapter-based motion narrative with progressive interactions.",
                results: "+44% Session Depth, -29% Bounce Rate"
              }
            ].map((study, i) => (
              <div key={i} className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <h3 className="mono-label mb-6 text-accent">{study.title}</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">{study.desc}</p>
                <div className="pt-6 border-t border-white/10">
                  <div className="mono-label mb-2">Results</div>
                  <div className="text-sm font-bold tracking-tight">{study.results}</div>
                </div>
                <div className="mt-8 flex justify-end">
                  <AuraBadge />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 // Performance Proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="07" category="PERFORMANCE PROOF" title="Measured, Not Assumed" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            <StatCard label="Frame Time" value="16.2" unit="ms" />
            <StatCard label="LCP" value="1.9" unit="s" />
            <StatCard label="CLS" value="0.01" />
            <StatCard label="INP" value="98" unit="ms" />
          </div>
          <div className="mt-12 flex justify-end">
            <AuraBadge />
          </div>
        </div>
      </section>

      {/* 08 // Process Timeline */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="08" category="PROCESS TIMELINE" title="From Concept to Production" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {[
              { id: '01', title: 'Discovery' },
              { id: '02', title: 'Visual R&D' },
              { id: '03', title: 'Shader Prototyping' },
              { id: '04', title: 'Optimization' },
              { id: '05', title: 'Production Handoff' }
            ].map((step, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <div className="text-accent font-mono text-xs mb-4">{step.id}</div>
                <div className="font-bold uppercase tracking-tight text-sm">{step.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <AuraBadge />
          </div>
        </div>
      </section>

      {/* 09 & 10 // Stack & Pipeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="p-10 border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-accent font-mono text-xs">09 // TECHNOLOGY STACK</span>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            <div className="grid grid-cols-2 gap-y-4 font-mono text-[11px] uppercase tracking-widest text-white/60">
              <div>WebGL</div>
              <div>GLSL</div>
              <div>Three.js</div>
              <div>Custom RAF Loops</div>
              <div>Tailwind UI Layer</div>
              <div>Telemetry Hooks</div>
            </div>
          </div>
          
          <div className="p-10 border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-accent font-mono text-xs">10 // DELIVERY PIPELINE</span>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/60 leading-loose">
              Design Spec → Motion Board → Interactive Prototype → GPU Budgeting → QA Benchmarks → Staging → Production Release.
            </p>
            <div className="mt-12 flex justify-end">
              <AuraBadge />
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12 // Trust & FAQ */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-accent font-mono text-xs">11 // TRUST SIGNALS</span>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-12">Teams we work with</h2>
            <div className="grid grid-cols-2 gap-4">
              {['[ AETHER AI ]', '[ NOVA FINTECH ]', '[ GRID ANALYTICS ]', '[ ORBIT SYSTEMS ]'].map((team) => (
                <div key={team} className="p-4 border border-white/5 font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-colors cursor-default">
                  {team}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-accent font-mono text-xs">12 // FAQ</span>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="mono-label mb-2 text-white">Timeline?</div>
                <p className="text-white/40 text-sm">Typical production timeline is 3-8 weeks depending on scope and scene complexity.</p>
              </div>
              <div>
                <div className="mono-label mb-2 text-white">Mobile support?</div>
                <p className="text-white/40 text-sm">Yes, with adaptive quality presets, thermal fallback, and reduced post-processing layers.</p>
              </div>
              <div>
                <div className="mono-label mb-2 text-white">Maintenance model?</div>
                <p className="text-white/40 text-sm">Optional monthly optimization and telemetry review for long-term performance stability.</p>
              </div>
            </div>
            <div className="mt-12 flex justify-end">
              <AuraBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Field Reports */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="04" category="FIELD REPORTS" title="Subject Evaluations" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                quote: "The integration of custom shader logic directly reduced our main-thread workload by 42%. The UI feels physically connected to the user's input devices in ways standard DOM manipulation simply cannot achieve.",
                subject: "SUBJECT.092",
                role: "LEAD ARCHITECT"
              },
              { 
                quote: "Deploying the particle field system for our ML dashboard completely shifted our brand perception. Clients now immediately associate our platform with deep-tech capabilities before even seeing the core product.",
                subject: "SUBJECT.144",
                role: "VP ENGINEERING"
              },
              { 
                quote: "We required a high-density data visualizer that didn't compromise framerate. The LAB.01 WebGL pipeline handled 50,000 concurrent nodes without breaking 60fps on mobile environments. Unprecedented.",
                subject: "SUBJECT.845",
                role: "DATA SCIENTIST"
              }
            ].map((report, i) => (
              <div key={i} className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <p className="text-white/60 italic text-sm leading-relaxed mb-12">"{report.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="mono-label text-white">{report.subject}</div>
                    <div className="mono-label text-accent">{report.role}</div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <AuraBadge />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
            <StatCard label="Deployment Success" value="93" unit="%" />
            <StatCard label="Perceived Speed Gain" value="1.8" unit="X" />
            <StatCard label="Avg Session Depth" value="4.2" unit="m" />
          </div>
        </div>
      </section>

      {/* Resource Allocation / Licensing */}
      <section id="licensing" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="05" category="RESOURCE ALLOCATION" title="System Licensing" />
          <p className="text-white/40 text-sm mb-16 max-w-xl">
            Acquire dedicated computing instances and source code access to integrate our WebGL interfaces directly into your ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Development */}
            <div className="p-12 border border-white/5 bg-white/[0.01] flex flex-col">
              <div className="mono-label mb-8">Development</div>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-5xl font-bold tracking-tighter">$49</span>
                <span className="mono-label">/ MONTH</span>
              </div>
              <ul className="space-y-4 mb-16 flex-grow">
                {['Pre-compiled WebGL components', 'Standard DOM interactions', 'Community telemetry support'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-white/60">
                    <Check className="w-3 h-3 text-accent" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 mono-label hover:bg-white/5 transition-colors">
                Init Process
              </button>
            </div>

            {/* Production */}
            <div className="p-12 border-2 border-accent bg-accent/5 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black font-mono text-[10px] font-bold tracking-widest">RECOMMENDED</div>
              <div className="mono-label mb-8 text-accent">Production</div>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-5xl font-bold tracking-tighter text-accent">$149</span>
                <span className="mono-label text-accent">/ MONTH</span>
              </div>
              <ul className="space-y-4 mb-16 flex-grow">
                {[
                  'Full raw shader source code access',
                  'Everything in Development',
                  'Raw GLSL Shader Code Access',
                  'Custom particle instancing limits',
                  'Priority infrastructure support'
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-white/80">
                    <Check className="w-3 h-3 text-accent" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-accent text-black font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-colors">
                Allocate Resources
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-12 border border-white/5 bg-white/[0.01] flex flex-col">
              <div className="mono-label mb-8">Enterprise</div>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-5xl font-bold tracking-tighter">Custom</span>
              </div>
              <ul className="space-y-4 mb-16 flex-grow">
                {['Dedicated hardware mapping', 'Custom post-processing chains', 'On-site engineering deployment'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-white/60">
                    <Check className="w-3 h-3 text-accent" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 mono-label hover:bg-white/5 transition-colors">
                Request Uplink
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
            <div className="p-6 border border-white/5">
              <div className="mono-label mb-2">Onboarding</div>
              <p className="text-[10px] text-white/40">Kickoff workshop, architecture audit, and staging deployment blueprint included in every paid tier.</p>
            </div>
            <div className="p-6 border border-white/5">
              <div className="mono-label mb-2">Security</div>
              <p className="text-[10px] text-white/40">Source distribution with scoped access, signed artifacts, and environment-specific configuration controls.</p>
            </div>
            <div className="p-6 border border-white/5">
              <div className="mono-label mb-2">Support SLA</div>
              <p className="text-[10px] text-white/40">Response windows from 48h (Development) to 4h (Enterprise Mission-Critical contracts).</p>
            </div>
          </div>
          <div className="mt-12 flex justify-end">
            <AuraBadge />
          </div>
        </div>
      </section>

      {/* Terminate Session */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mono-label mb-8 text-accent">06 // TERMINATE SESSION</div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-12 leading-none">
            Initialize <br /> Sequence.
          </h2>
          <p className="text-white/40 mono-label mb-16">
            Enter the laboratory and explore the next generation of digital interfaces.
          </p>
          <button className="px-12 py-6 bg-white text-black font-mono text-sm font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all hover:scale-105">
            SYSTEM.INIT()
          </button>
          <div className="mt-24 flex justify-center">
            <AuraBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 bg-accent" />
                <span className="font-bold tracking-tighter text-lg uppercase">LAB 01 // SYSTEM</span>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Experimental WebGL architecture and high-performance interactive interfaces designed for the modern web frontier.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="mono-label text-white/60">Mainframe Optimal</span>
              </div>
            </div>

            <div>
              <div className="mono-label mb-6 text-white">Infrastructure</div>
              <ul className="space-y-3 mono-label">
                <li><a href="#" className="hover:text-accent transition-colors">WebGL Core</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Shader Engine</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Motion Systems</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Architecture Map</a></li>
              </ul>
            </div>

            <div>
              <div className="mono-label mb-6 text-white">Resources</div>
              <ul className="space-y-3 mono-label">
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Experiments Logs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Live Telemetry</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">GitHub Repo</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="mono-label text-white/20">
              © 2024 LAB 01 RESEARCH FACILITY. ALL SEQUENCES VERIFIED.
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 glass-panel px-4 py-2">
                <span className="mono-label">Terminal</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="mono-label text-accent">SYSTEM_IDLE</span>
                </div>
              </div>
              <AuraBadge />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
