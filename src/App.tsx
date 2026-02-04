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
  Cpu,
  Code,
  Terminal,
  Container
} from 'lucide-react';
import './index.css';

// Import Logos
import ipnLogo from './assets/instituto-politecnico-nacional-seeklogo.svg';
import esimeLogo from './assets/esime.png';

// Componente Diagrama Arquitectura (Adaptado a tema Claro IPN)
const ArchitectureDiagram = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-5xl mx-auto text-slate-800">
    {/* Campo OT */}
    <div className="flex flex-col gap-3 min-w-[200px]">
      <div className="text-xs font-bold text-[#621132] uppercase tracking-wider text-center mb-2">Campo (OT)</div>
      <div className="bg-white p-4 rounded-xl border-2 border-[#E0E0E0] flex flex-col gap-3 shadow-sm">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 relative">
          <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[9px] px-1.5 rounded font-bold shadow-sm">REAL</div>
          <Box className="text-[#666666]" />
          <div>
            <div className="font-bold text-sm text-[#333333]">PLC S7-1212</div>
            <div className="text-xs text-[#666666]">Profinet</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-[#B38E5D]/10 rounded border border-[#B38E5D]/50 relative">
          <div className="absolute -top-2 -right-2 bg-[#B38E5D] text-white text-[9px] px-1.5 rounded font-bold shadow-sm">OEM</div>
          <Radio className="text-[#B38E5D]" />
          <div>
            <div className="font-bold text-sm text-[#333333]">Eq. Telemetic</div>
            <div className="text-xs text-[#666666]">Modbus/OPC</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200">
          <Cpu className="text-[#666666]" />
          <div>
            <div className="font-bold text-sm text-[#333333]">Pico W</div>
            <div className="text-xs text-[#666666]">IoT Node</div>
          </div>
        </div>
      </div>
    </div>

    {/* Flecha */}
    <ArrowRight className="hidden lg:block w-8 h-8 text-[#621132] animate-pulse" />
    <ChevronDown className="lg:hidden w-8 h-8 text-[#621132] animate-pulse" />

    {/* Cloud RPi */}
    <div className="flex flex-col gap-3 min-w-[220px]">
      <div className="text-xs font-bold text-[#621132] uppercase tracking-wider text-center mb-2 flex justify-center gap-2">
        <Cloud size={14} /> Simulación Cloud
      </div>
      <div className="bg-white p-6 rounded-xl border-2 border-[#621132] flex flex-col gap-4 relative shadow-xl">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#621132] text-white px-3 py-0.5 text-[10px] rounded-full font-bold shadow-sm">
          Raspberry Pi Server
        </span>
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-200 text-center">
          <Activity className="text-[#B38E5D] mb-1" />
          <span className="font-bold text-[#333333] text-sm">MQTT Broker</span>
          <span className="text-xs text-[#666666]">Mosquitto</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-200 text-center">
          <Database className="text-[#621132] mb-1" />
          <span className="font-bold text-[#333333] text-sm">TimescaleDB</span>
          <span className="text-xs text-[#666666]">Historian</span>
        </div>
      </div>
    </div>

    {/* Flecha */}
    <ArrowRight className="hidden lg:block w-8 h-8 text-[#621132] animate-pulse" />
    <ChevronDown className="lg:hidden w-8 h-8 text-[#621132] animate-pulse" />

    {/* App Layer */}
    <div className="flex flex-col gap-3 min-w-[240px]">
      <div className="text-xs font-bold text-[#621132] uppercase tracking-wider text-center mb-2">Lógica & HMI</div>
      <div className="bg-[#621132]/5 p-4 rounded-xl border border-[#621132]/20 flex flex-col gap-4 h-full justify-center">
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 shadow-sm">
          <Zap className="text-[#B38E5D]" />
          <div>
            <div className="font-bold text-sm text-[#333333]">Backend</div>
            <div className="text-xs text-[#666666]">FastAPI (Python)</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 shadow-sm">
          <Workflow className="text-[#621132]" />
          <div>
            <div className="font-bold text-sm text-[#333333]">Frontend HMI</div>
            <div className="text-xs text-[#666666]">Next.js (React)</div>
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
          <div className="logo flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src={ipnLogo} alt="IPN" className="h-8 w-auto object-contain drop-shadow-sm" />
              <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>
              <img src={esimeLogo} alt="ESIME" className="h-8 w-auto object-contain drop-shadow-sm" />
            </div>
            <span className="text-[#333333] font-bold text-sm md:text-base ml-2">SCADA <span className="text-[#621132]">NEXT-GEN</span></span>
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
              {/* Badges IPN/ESIME en blanco sobre fondo guinda */}
              <div className="badge-circle bg-white p-2">
                <img src={ipnLogo} alt="Logo IPN" className="w-full h-full object-contain" />
              </div>
              <div className="badge-circle bg-white p-1">
                <img src={esimeLogo} alt="Logo ESIME" className="w-full h-full object-contain" />
              </div>
            </div>

            <h2 className="text-base md:text-lg text-white/80 font-medium tracking-widest uppercase mb-2">Seminario de Titulación</h2>
            <div className="mb-6 leading-tight text-white gap-4 flex flex-col" style={{ paddingBottom: '2rem' }}>
              <span className="block text-xl md:text-2xl text-white/90 font-normal mb-2">Propuesta de Proyecto Final</span>
              <span className="block text-3xl md:text-5xl font-bold">Arquitectura de Supervisión Industrial (SCADA)</span>
              <span className="text-xl md:text-2xl text-white/80 font-light mt-2 block">contenerizada con Docker, TimescaleDB, FastAPI y Next.js</span>
            </div>
            <div className="mb-6 leading-tight text-white gap-4 flex flex-col" style={{ paddingBottom: '2rem' }}>
              <span className="block text-xl md:text-2xl text-white/90 font-normal mb-2">Presenta</span>
              <span className="block text-3xl md:text-5xl font-bold">Fabian Romero Hernández</span>
              <span className="text-xs text-white/80">IPN - ESIME ZACATENCO - ICA</span>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#demo" className="btn btn-primary shadow-lg border-none text-white font-bold">Ver Demo en Vivo</a>
              <a href="#index" className="btn bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20">Ver Índice</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section id="problem" className="bg-[#F8F9FA]">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Problema & Solución</h2>
            <p className="text-[#666666]">Validación industrial y escalabilidad en sistemas modernos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="modern-card hover:border-red-800/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#4A0D26]">
                <ShieldAlert className="text-[#B38E5D]" /> El Desafío
              </h3>
              <p className="mb-4 text-[#333333]">
                Los sistemas SCADA tradicionales suelen ser propietarios, costosos y difíciles de integrar con tecnologías modernas.
              </p>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li className="flex gap-2"><XCircle size={16} className="text-[#621132]" /> Licencias costosas por tag/cliente</li>
                <li className="flex gap-2"><XCircle size={16} className="text-[#621132]" /> Tecnologías legacy (VBA, Java Applets)</li>
                <li className="flex gap-2"><XCircle size={16} className="text-[#621132]" /> Dificultad para exponer datos a la nube</li>
              </ul>
            </div>

            <div className="modern-card border-[#621132]/30 bg-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#621132]">
                <CheckCircle className="text-green-600" /> Solución Propuesta
              </h3>
              <p className="mb-4 text-[#333333]">
                Una arquitectura <strong>Open Source</strong> basada en el stack moderno de desarrollo web, validada con hardware real.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Cloud className="text-[#B38E5D] shrink-0 mt-1" />
                  <p className="text-sm text-[#666666]"><strong>Simulación Cloud:</strong> Raspberry Pi centraliza datos emulando un servidor IoT real.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Radio className="text-[#621132] shrink-0 mt-1" />
                  <p className="text-sm text-[#666666]"><strong>Validación Industrial:</strong> Integración con equipos de telemetría profesional (Telemetic).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDEX SECTION */}
      <section id="index" className="bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Índice Sintético</h2>
            <p className="text-[#666666]">Estructura del Proyecto de Titulación</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Introducción */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-[#666666] shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Introducción y Objetivos</h3>
              <ul className="text-sm text-[#666666] space-y-2 list-disc pl-4">
                <li>Planteamiento del problema (Monitoreo industrial en [Empresa/Escenario]).</li>
                <li>Objetivo general: Implementar un sistema HMI/SCADA basado en microservicios.</li>
              </ul>
            </div>

            {/* Cap 1 */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-[#621132] shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Capítulo 1: Marco Teórico</h3>
              <ul className="text-sm text-[#666666] space-y-2 list-disc pl-4">
                <li>Evolución de sistemas monolíticos a arquitecturas DevOps.</li>
                <li>Limitaciones de Jython vs. la eficiencia de Python 3 moderno.</li>
              </ul>
            </div>

            {/* Cap 2 */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-[#B38E5D] shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Capítulo 2: Análisis y Diseño</h3>
              <ul className="text-sm text-[#666666] space-y-2 list-disc pl-4">
                <li>Arquitectura Headless.</li>
                <li>Desacoplamiento de datos (Edge computing en RPi) y lógica de negocio.</li>
              </ul>
            </div>

            {/* Cap 3 */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-[#4A0D26] shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Capítulo 3: Implementación / Desarrollo</h3>
              <ul className="text-sm text-[#666666] space-y-2 list-disc pl-4">
                <li>Backend asíncrono con FastAPI y comunicación mediante S7Comm.</li>
                <li>Integración de hardware industrial (Equipos Telemetic).</li>
              </ul>
            </div>

            {/* Cap 4 */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Capítulo 4: Pruebas y Resultados</h3>
              <ul className="text-sm text-[#666666] space-y-2 list-disc pl-4">
                <li>Comparativa de rendimiento: WebSockets vs. Polling.</li>
                <li>Pruebas de estrés y manejo de concurrencia.</li>
              </ul>
            </div>

            {/* Conclusiones */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-[#333333] shadow-sm hover:shadow-md transition-shadow" style={{ padding: '1rem' }}>
              <h3 className="font-bold text-lg text-[#333333] mb-3">Conclusiones y Bibliografía</h3>
              <p className="text-sm text-[#666666]">
                Referencias y trabajos futuros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKING */}
      <section id="benchmark" className="bg-[#F8F9FA]">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Benchmarking de Mercado</h2>
            <p className="text-[#666666]">Comparativa técnica vs soluciones existentes</p>
          </div>

          <div className="card-grid">
            {/* Ignition */}
            <div className="modern-card bg-white border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="text-red-600" />
                <h3 className="text-lg font-bold text-red-900">Ignition</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#666666]">
                <li>• <strong>Backend:</strong> Jython 2.7 (Legacy)</li>
                <li>• <strong>AI:</strong> Sin soporte nativo Pandas</li>
                <li>• <strong>Costo:</strong> &gt; $10k USD</li>
              </ul>
            </div>

            {/* FUXA */}
            <div className="modern-card bg-white border-yellow-100">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="text-yellow-600" />
                <h3 className="text-lg font-bold text-yellow-900">FUXA</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#666666]">
                <li>• <strong>Backend:</strong> Node.js (Monohilo)</li>
                <li>• <strong>AI:</strong> Ecosistema matemático débil</li>
                <li>• <strong>UX:</strong> No-Code limitado</li>
              </ul>
            </div>

            {/* Propuesta */}
            <div className="modern-card ring-2 ring-[#621132] bg-white transform scale-105 shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#621132] text-white px-3 py-0.5 text-[10px] rounded-full font-bold">RECOMENDADO</div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-600" />
                <h3 className="text-lg font-bold text-[#621132]">Esta Propuesta</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#333333] font-medium">
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
      <section id="architecture" className="bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Arquitectura del Sistema</h2>
            <p className="text-[#666666]">Separación de responsabilidades: Campo, Datos y Visualización</p>
          </div>

          <div className="arch-container shadow-lg border border-gray-200">
            <ArchitectureDiagram />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4" style={{ paddingTop: '2rem' }}>
            {['React 18', 'TypeScript', 'Next.js 14', 'FastAPI', 'Python 3.11', 'TimescaleDB', 'MQTT', 'Docker', 'pyModbusTCP'].map(tech => (
              <span key={tech} className="tech-pill bg-[#621132]/5 text-[#621132] border border-[#621132]/20">
                {tech === 'React 18' && <Laptop size={14} className="mr-1 inline" />}
                {tech === 'TypeScript' && <Code size={14} className="mr-1 inline" />}
                {tech === 'Next.js 14' && <Box size={14} className="mr-1 inline" />}
                {tech === 'FastAPI' && <Zap size={14} className="mr-1 inline" />}
                {tech === 'Python 3.11' && <Terminal size={14} className="mr-1 inline" />}
                {tech === 'TimescaleDB' && <Database size={14} className="mr-1 inline" />}
                {tech === 'MQTT' && <Activity size={14} className="mr-1 inline" />}
                {tech === 'Docker' && <Container size={14} className="mr-1 inline" />}
                {tech === 'pyModbusTCP' && <Workflow size={14} className="mr-1 inline" />}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO LIVE */}
      <section id="demo" className="bg-[#F8F9FA]">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Demo en Vivo</h2>
            <p className="text-[#666666]">Visualización del Runtime en Tiempo Real</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden border border-[#E0E0E0] shadow-2xl">
            {/* Header del navegador simulado - Gris Claro IPN */}
            <div className="bg-[#E0E0E0] p-3 flex items-center gap-2 border-b border-[#cccccc]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#621132]" /> {/* Botones estilo IPN */}
                <div className="w-3 h-3 rounded-full bg-[#B38E5D]" />
                <div className="w-3 h-3 rounded-full bg-[#666666]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-[#333333] font-mono bg-white px-3 py-1 rounded border border-gray-300 shadow-sm">
                  runtime-view.tsx — SCADA HMI
                </span>
              </div>
            </div>

            {/* Runtime Simulator Container with Grayish Background (requested) */}
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
                    <div className="w-6 md:w-8 h-full border-2 border-black bg-white relative flex flex-col shadow-md">
                      {/* Alarm Zones */}
                      <div className="w-full h-[20%] bg-red-400/80 border-b border-black/20"></div> {/* High Alarm */}
                      <div className="w-full h-[15%] bg-yellow-400/80 border-b border-black/20"></div> {/* Warning */}
                      <div className="w-full h-[50%] bg-green-400/50"></div> {/* Normal */}
                      <div className="w-full h-[15%] bg-red-400/80 border-t border-black/20"></div> {/* Low Alarm */}

                      {/* Needle / Indicator - Floating triangle */}
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
                  <div className="bg-white/50 border border-slate-400 w-full h-[200px] relative p-2 shadow-inner">
                    {/* Chart Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    {/* Chart Limits */}
                    <div className="absolute top-[20%] left-0 right-0 border-t border-slate-500 border-dashed opacity-50"></div> {/* High Limit */}
                    <div className="absolute bottom-[20%] left-0 right-0 border-t border-slate-500 border-dashed opacity-50"></div> {/* Low Limit */}

                    {/* Chart Line (SVG) - Guinda Color for branding */}
                    <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 Q10,48 20,45 T40,40 T60,35 T80,42 T100,50"
                        fill="none"
                        stroke="#621132"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-sm"
                      />
                      {/* Animated Point */}
                      <circle cx="100" cy="50" r="2.5" fill="#B38E5D" className="animate-pulse" />
                    </svg>

                    {/* Axes Labels */}
                    <div className="absolute left-0 bottom-0 top-0 w-full flex flex-col justify-between text-[8px] text-slate-500 pointer-events-none p-1">
                      <span>100.0</span>
                      <span className="self-end">12:30:45</span>
                      <span>0.0</span>
                    </div>
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

      {/* REPOSITORIOS / TEAM */}
      <section id="team" className="bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Repositorios</h2>
            <p className="text-[#666666]">Código fuente abierto y documentación</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://github.com/CoffeESIME/react-scada-hmi" target="_blank" className="modern-card flex items-center gap-4 group cursor-pointer no-underline bg-[#F8F9FA] hover:bg-white border hover:border-[#621132]">
              <div className="p-4 bg-white rounded-full transition-colors border border-gray-200 shadow-sm group-hover:border-[#621132]">
                <Github className="w-8 h-8 text-[#333333] group-hover:text-[#621132]" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#621132] transition-colors text-[#333333]">Frontend HMI</h3>
                <p className="text-sm text-[#666666]">Next.js + React Flow + Tailwind</p>
                <span className="text-xs text-[#999999] mt-1 block font-mono group-hover:text-[#B38E5D]">CoffeESIME/react-scada-hmi</span>
              </div>
            </a>

            <a href="https://github.com/CoffeESIME/scada-backend" target="_blank" className="modern-card flex items-center gap-4 group cursor-pointer no-underline bg-[#F8F9FA] hover:bg-white border hover:border-[#621132]">
              <div className="p-4 bg-white rounded-full transition-colors border border-gray-200 shadow-sm group-hover:border-[#621132]">
                <Server className="w-8 h-8 text-[#333333] group-hover:text-[#621132]" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#621132] transition-colors text-[#333333]">Backend & Protocolos</h3>
                <p className="text-sm text-[#666666]">FastAPI + ModbusTCP + Timescale</p>
                <span className="text-xs text-[#999999] mt-1 block font-mono group-hover:text-[#B38E5D]">CoffeESIME/scada-backend</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container relative z-10 text-center">
          <div className="section-header">
            <h2 className="text-[#4A0D26]">Conclusión y Valor Estratégico</h2>
            <p className="text-[#666666]">Síntesis del impacto tecnológico e industrial del proyecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#621132]/5 rounded-full flex items-center justify-center mb-6 text-[#621132]">
                <Server size={32} />
              </div>
              <h3 className="font-bold text-[#4A0D26] text-xl mb-2">Future-Proof</h3>
              <p className="text-[#666666]">Arquitectura escalable diseñada para integrar nuevas tecnologías sin refactorización.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#B38E5D]/10 rounded-full flex items-center justify-center mb-6 text-[#B38E5D]">
                <Cloud size={32} />
              </div>
              <h3 className="font-bold text-[#4A0D26] text-xl mb-2">Cloud-Native</h3>
              <p className="text-[#666666]">Despliegue contenerizado con Docker y orquestación de microservicios eficiente.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-bold text-[#4A0D26] text-xl mb-2">Cost-Effective</h3>
              <p className="text-[#666666]">Reducción significativa de costos por licenciamiento mediante Open Source Stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-[#333333] text-white py-8 text-center text-sm">
        <div className="container footer-content">
          <div className="flex justify-center items-center gap-4 mb-4 opacity-50">
            {/* Iconos o logos pequeños si se desea */}
          </div>
          <p className="mb-2 font-semibold">
            🏭 SCADA NEXT-GEN — Sistema de Supervisión y Control de Procesos Industriales
          </p>
          <p className="opacity-70">
            Desarrollado con React, FastAPI, TimescaleDB & MQTT | 2026
          </p>
        </div>
      </footer>
    </>
  )
}
