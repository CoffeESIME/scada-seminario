import {
  Building2,
  ChevronDown,
  Radio,
  Cloud,
  Zap,
  Database,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Server,
  Github,
  Laptop,
  Workflow,
  Activity,
  Box,
  Cpu
} from 'lucide-react';
import './index.css';

// Componente Diagrama Arquitectura (Reutilizado)
const ArchitectureDiagram = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-5xl mx-auto">
    {/* Campo OT */}
    <div className="flex flex-col gap-3 min-w-[200px]">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center mb-2">Campo (OT)</div>
      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col gap-3">
        <div className="flex items-center gap-3 p-3 bg-slate-700 rounded border border-slate-600 relative">
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[9px] px-1.5 rounded font-bold shadow-sm">REAL</div>
          <Box className="text-slate-300" />
          <div>
            <div className="font-bold text-sm text-white">PLC S7-1212</div>
            <div className="text-xs text-gray-400">Profinet</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-orange-900/10 rounded border border-orange-500/30 relative">
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[9px] px-1.5 rounded font-bold shadow-sm">OEM</div>
          <Radio className="text-orange-400" />
          <div>
            <div className="font-bold text-sm text-white">Eq. Telemetic</div>
            <div className="text-xs text-gray-400">Modbus/OPC</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-slate-700 rounded border border-slate-600">
          <Cpu className="text-slate-300" />
          <div>
            <div className="font-bold text-sm text-white">Pico W</div>
            <div className="text-xs text-gray-400">IoT Node</div>
          </div>
        </div>
      </div>
    </div>

    {/* Flecha */}
    <ArrowRight className="hidden lg:block w-8 h-8 text-blue-500 animate-pulse" />
    <ChevronDown className="lg:hidden w-8 h-8 text-blue-500 animate-pulse" />

    {/* Cloud RPi */}
    <div className="flex flex-col gap-3 min-w-[220px]">
      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider text-center mb-2 flex justify-center gap-2">
        <Cloud size={14} /> Simulación Cloud
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border-2 border-blue-500/30 flex flex-col gap-4 relative shadow-2xl shadow-blue-500/10">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-0.5 text-[10px] rounded-full font-bold shadow-sm">
          Raspberry Pi Server
        </span>
        <div className="flex flex-col items-center p-3 bg-slate-700/50 rounded border border-slate-600 text-center">
          <Activity className="text-purple-400 mb-1" />
          <span className="font-bold text-white text-sm">MQTT Broker</span>
          <span className="text-xs text-slate-400">Mosquitto</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-slate-700/50 rounded border border-slate-600 text-center">
          <Database className="text-blue-400 mb-1" />
          <span className="font-bold text-white text-sm">TimescaleDB</span>
          <span className="text-xs text-slate-400">Historian</span>
        </div>
      </div>
    </div>

    {/* Flecha */}
    <ArrowRight className="hidden lg:block w-8 h-8 text-blue-500 animate-pulse" />
    <ChevronDown className="lg:hidden w-8 h-8 text-blue-500 animate-pulse" />

    {/* App Layer */}
    <div className="flex flex-col gap-3 min-w-[240px]">
      <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider text-center mb-2">Lógica & HMI</div>
      <div className="bg-indigo-900/10 p-4 rounded-xl border border-indigo-500/30 flex flex-col gap-4 h-full justify-center">
        <div className="flex items-center gap-3 p-3 bg-slate-800 rounded border border-slate-700">
          <Zap className="text-yellow-400" />
          <div>
            <div className="font-bold text-sm text-white">Backend</div>
            <div className="text-xs text-gray-400">FastAPI (Python)</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-slate-800 rounded border border-slate-700">
          <Workflow className="text-indigo-400" />
          <div>
            <div className="font-bold text-sm text-white">Frontend HMI</div>
            <div className="text-xs text-gray-400">Next.js (React)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Activity className="w-5 h-5 text-green-400" />
            <span>SCADA NEXT-GEN</span>
          </div>
          <ul className="nav-links">
            <li><a href="#problem">Problema</a></li>
            <li><a href="#benchmark">Benchmarking</a></li>
            <li><a href="#architecture">Arquitectura</a></li>
            <li><a href="#demo">Demo</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION - Academic Cover */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="institution-badges">
              <div className="badge-circle" style={{ borderColor: '#7f1d1d', color: '#fca5a5' }}>LOGO<br />IPN</div>
              <div className="badge-circle" style={{ borderColor: '#1e3a5f', color: '#60a5fa' }}>LOGO<br />ESIME</div>
            </div>

            <h2 className="text-base md:text-lg text-gray-400 font-medium tracking-widest uppercase mb-2">Seminario de Titulación</h2>
            <h1 className="mb-6 leading-tight">
              <span className="block text-xl md:text-2xl text-gray-300 font-normal mb-2">Propuesta de Proyecto Final</span>
              <span className="text-gradient leading-tight block text-3xl md:text-5xl">Arquitectura de Supervisión Industrial (SCADA)</span>
              <span className="text-xl md:text-2xl text-gray-300 font-light mt-2 block">contenerizada con Docker, TimescaleDB, FastAPI y Next.js</span>
            </h1>

            <div className="flex gap-4 mt-8">
              <a href="#demo" className="btn btn-primary">Ver Demo en Vivo</a>
              <a href="#index" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Ver Índice</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section id="problem">
        <div className="container">
          <div className="section-header">
            <h2>Problema & Solución</h2>
            <p>Validación industrial y escalabilidad en sistemas modernos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="modern-card">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <ShieldAlert className="text-orange-400" /> El Desafío
              </h3>
              <p className="text-gray-400 mb-4">
                Los sistemas SCADA tradicionales suelen ser propietarios, costosos y difíciles de integrar con tecnologías modernas como IA o Cloud.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><XCircle size={16} className="text-red-400" /> Licencias costosas por tag/cliente</li>
                <li className="flex gap-2"><XCircle size={16} className="text-red-400" /> Tecnologías legacy (VBA, Java Applets)</li>
                <li className="flex gap-2"><XCircle size={16} className="text-red-400" /> Dificultad para exponer datos a la nube</li>
              </ul>
            </div>

            <div className="modern-card" style={{ borderColor: 'var(--secondary)' }}>
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-400" /> Solución Propuesta
              </h3>
              <p className="text-gray-400 mb-4">
                Una arquitectura <strong>Open Source</strong> basada en el stack moderno de desarrollo web, validada con hardware industrial real.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Cloud className="text-blue-400 shrink-0 mt-1" />
                  <p className="text-sm text-gray-300"><strong>Simulación Cloud:</strong> Raspberry Pi centraliza datos emulando un servidor IoT real.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Radio className="text-orange-400 shrink-0 mt-1" />
                  <p className="text-sm text-gray-300"><strong>Validación Industrial:</strong> Integración con equipos de telemetría profesional (Telemetic).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDEX SECTION */}
      <section id="index" className="bg-slate-900/30">
        <div className="container">
          <div className="section-header">
            <h2>Índice Sintético</h2>
            <p>Estructura general del proyecto de titulación</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-white mb-3">1. Marco Teórico</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Comparativa Jython vs Python 3.</li>
                <li>Evolución: De Monolito a DevOps.</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg text-white mb-3">2. Análisis y Diseño</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Arquitectura Headless.</li>
                <li>Separando datos (RPi) de lógica de negocio.</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="font-bold text-lg text-white mb-3">3. Implementación</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>FastAPI asíncrono y S7Comm.</li>
                <li>Integración y pruebas con equipos Telemetic.</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-white mb-3">4. Pruebas</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Latencia WebSockets vs Polling tradicional.</li>
                <li>Pruebas de estrés y concurrencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKING */}
      <section id="benchmark" className="bg-slate-900/50">
        <div className="container">
          <div className="section-header">
            <h2>Benchmarking de Mercado</h2>
            <p>Comparativa técnica vs soluciones existentes</p>
          </div>

          <div className="card-grid">
            {/* Ignition */}
            <div className="modern-card" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="text-red-500" />
                <h3 className="text-lg font-bold text-red-100">Ignition</h3>
              </div>
              <ul className="space-y-3 text-sm text-red-200/80">
                <li>• <strong>Backend:</strong> Jython 2.7 (Legacy)</li>
                <li>• <strong>AI:</strong> Sin soporte nativo Pandas</li>
                <li>• <strong>Costo:</strong> &gt; $10k USD</li>
              </ul>
            </div>

            {/* FUXA */}
            <div className="modern-card" style={{ background: 'rgba(245, 158, 11, 0.05)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="text-yellow-500" />
                <h3 className="text-lg font-bold text-yellow-100">FUXA</h3>
              </div>
              <ul className="space-y-3 text-sm text-yellow-200/80">
                <li>• <strong>Backend:</strong> Node.js (Monohilo)</li>
                <li>• <strong>AI:</strong> Ecosistema matemático débil</li>
                <li>• <strong>UX:</strong> No-Code limitado</li>
              </ul>
            </div>

            {/* Propuesta */}
            <div className="modern-card ring-2 ring-green-500/50 transform scale-105">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-500" />
                <h3 className="text-lg font-bold text-green-100">Esta Propuesta</h3>
              </div>
              <ul className="space-y-3 text-sm text-green-200/80 font-medium">
                <li>• <strong>Backend:</strong> Python 3 (Full C-Ext)</li>
                <li>• <strong>AI:</strong> Nativo (NumPy/TensorFlow)</li>
                <li>• <strong>Costo:</strong> $0 (Open Source)</li>
                <li>• <strong>Validación:</strong> Hardware Industrial Real</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="container">
          <div className="section-header">
            <h2>Arquitectura del Sistema</h2>
            <p>Separación de responsabilidades: Campo, Datos y Visualización</p>
          </div>

          <div className="arch-container">
            <ArchitectureDiagram />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['React 18', 'TypeScript', 'Next.js 14', 'FastAPI', 'Python 3.11', 'TimescaleDB', 'MQTT', 'Docker', 'pyModbusTCP'].map(tech => (
              <span key={tech} className="tech-pill">
                {tech === 'React 18' && <Laptop size={14} />}
                {tech === 'Python 3.11' && <Zap size={14} />}
                {tech === 'MQTT' && <Activity size={14} />}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO LIVE */}
      <section id="demo" className="bg-slate-900/50">
        <div className="container">
          <div className="section-header">
            <h2>Demo en Vivo</h2>
            <p>Visualización del Runtime en Tiempo Real</p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="bg-black/40 p-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-xs text-slate-400 font-mono">runtime-view.tsx — SCADA HMI</span>
            </div>

            {/* Runtime Simulator Container with Gray Background */}
            <div className="p-4 md:p-8 bg-[#d4d4d4] min-h-[400px] flex flex-col items-center justify-center gap-8 relative font-mono text-slate-800">

              {/* Header Info mockup */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] md:text-xs font-bold text-slate-600 border-b-2 border-slate-400 pb-2">
                <span>PANTALLA: PROCESO_MEZCLA_01</span>
                <span className="hidden md:inline">ESTADO: RUNNING</span>
                <span>USER: ADMIN</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-3xl mt-8">

                {/* COMPONENT 1: LINEAR GAUGE REPLICA */}
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-700">Nivel de Tanque</h4>
                  <div className="flex gap-4 items-end h-[200px]">
                    {/* Scale Labels */}
                    <div className="flex flex-col justify-between h-full text-[10px] text-slate-600 font-bold py-1">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    {/* The Gauge Bar */}
                    <div className="w-6 md:w-8 h-full border-2 border-black bg-white relative flex flex-col">
                      {/* Alarm Zones Background Simulation */}
                      <div className="w-full h-[20%] bg-red-400/80 border-b border-black/20"></div> {/* High Alarm */}
                      <div className="w-full h-[15%] bg-yellow-400/80 border-b border-black/20"></div> {/* Warning */}
                      <div className="w-full h-[50%] bg-green-400/50"></div> {/* Normal */}
                      <div className="w-full h-[15%] bg-red-400/80 border-t border-black/20"></div> {/* Low Alarm */}

                      {/* Needle / Indicator */}
                      <div className="absolute left-full ml-1 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-black top-[30%] -translate-y-1/2 rotate-180 transform origin-left transition-all duration-1000 ease-in-out floating"></div>
                    </div>
                  </div>

                  {/* Digital Value */}
                  <div className="mt-3 bg-white border-2 border-black px-3 py-1 text-xl font-bold font-mono tracking-widest shadow-sm">
                    70.5 %
                  </div>
                </div>

                {/* COMPONENT 2: DATA TREND REPLICA */}
                <div className="flex flex-col w-full">
                  <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-700">Tendencia Temperatura</h4>
                  <div className="bg-transparent border border-slate-400 w-full h-[200px] relative p-2">
                    {/* Chart Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    {/* Chart Limits */}
                    <div className="absolute top-[20%] left-0 right-0 border-t border-slate-500 border-dashed opacity-50"></div> {/* High Limit */}
                    <div className="absolute bottom-[20%] left-0 right-0 border-t border-slate-500 border-dashed opacity-50"></div> {/* Low Limit */}

                    {/* Chart Line (SVG) */}
                    <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 Q10,48 20,45 T40,40 T60,35 T80,42 T100,50"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-sm"
                      />
                      {/* Animated Point */}
                      <circle cx="100" cy="50" r="2" fill="#3b82f6" className="animate-pulse" />
                    </svg>

                    {/* Axes Labels */}
                    <div className="absolute left-0 bottom-0 top-0 w-full flex flex-col justify-between text-[8px] text-slate-500 pointer-events-none p-1">
                      <span>100.0</span>
                      <span className="self-end">12:30:45</span>
                      <span>0.0</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-4 mt-2 text-[10px] uppercase font-bold text-slate-600">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> PV (Temp)</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-0.5 bg-slate-500 border-dashed border-t"></div> Límites</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 right-4 text-[10px] text-slate-500 italic">
                Simulación visual de componentes React HMI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-header">
            <h2>Repositorios & Equipo</h2>
            <p>Código fuente abierto y documentación</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://github.com/CoffeESIME/react-scada-hmi" target="_blank" className="modern-card flex items-center gap-4 group cursor-pointer no-underline">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors border border-slate-600">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-white font-bold group-hover:text-blue-400 transition-colors">Frontend HMI</h3>
                <p className="text-sm text-gray-400">Next.js + React Flow + Tailwind</p>
                <span className="text-xs text-slate-500 mt-1 block font-mono">CoffeESIME/react-scada-hmi</span>
              </div>
            </a>

            <a href="https://github.com/CoffeESIME/scada-backend" target="_blank" className="modern-card flex items-center gap-4 group cursor-pointer no-underline">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors border border-slate-600">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-white font-bold group-hover:text-green-400 transition-colors">Backend & Protocolos</h3>
                <p className="text-sm text-gray-400">FastAPI + ModbusTCP + Timescale</p>
                <span className="text-xs text-slate-500 mt-1 block font-mono">CoffeESIME/scada-backend</span>
              </div>
            </a>
          </div>

          <div className="mt-16 text-center border-t border-slate-800 pt-8">
            <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
              <Building2 size={16} /> Escuela Superior de Ingeniería Mecánica y Eléctrica
            </div>
            <p className="text-sm text-gray-600">
              Proyecto para Seminario de Titulación 2026.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Conclusión y Valor Estratégico</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-slate-800/80 backdrop-blur border border-slate-600 p-8 rounded-2xl shadow-xl relative">
              <span className="text-4xl absolute -top-4 -left-4 bg-slate-900 rounded-full p-2 border border-slate-600">💡</span>
              <p className="text-lg md:text-xl text-slate-200 italic leading-relaxed">
                "Esta tesis no reinventa la rueda, sino que cambia el vehículo. Pasamos de un modelo propietario y restrictivo a uno <span className="text-blue-400 font-bold">abierto</span>, nativo para <span className="text-purple-400 font-bold">IA</span> y validado <span className="text-green-400 font-bold">industrialmente</span>."
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[150px]">
              <div className="p-3 bg-blue-500/20 rounded-full text-blue-400"><Server size={24} /></div>
              <span className="font-bold text-slate-200">Future-Proof</span>
              <span className="text-xs text-slate-500">Escalable y actualizable</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[150px]">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400"><Cloud size={24} /></div>
              <span className="font-bold text-slate-200">Cloud-Native</span>
              <span className="text-xs text-slate-500">Docker & Microservicios</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[150px]">
              <div className="p-3 bg-green-500/20 rounded-full text-green-400"><CheckCircle size={24} /></div>
              <span className="font-bold text-slate-200">Cost-Effective</span>
              <span className="text-xs text-slate-500">Open Source Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-400 text-sm">
        <div className="container">
          <p className="mb-2">
            🏭 SCADA NEXT-GEN — Sistema de Supervisión y Control de Procesos Industriales
          </p>
          <p>
            Desarrollado con React, FastAPI, TimescaleDB & MQTT | 2026
          </p>
        </div>
      </footer>
    </>
  )
}
