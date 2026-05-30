import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ShieldAlert,
  CheckCircle,
  Cloud,
  Server,
  Laptop,
  Workflow,
  Activity,
  Terminal,
  Container,
  BookOpen,
  Database,
  Lock,
  Maximize2
} from 'lucide-react';

// Import Logos (adjust paths relative to components folder)
import ipnLogo from '../assets/instituto-politecnico-nacional-seeklogo.svg';
import esimeLogo from '../assets/esime.png';
import { ScadaFlowDiagram } from './ScadaFlowDiagram';
import { ProtocolFactoryDiagram } from './ProtocolFactoryDiagram';
import { MosquittoSecurityDiagram } from './MosquittoSecurityDiagram';
import reactHmiImg from '../assets/react-hmi.png';

interface SlideshowViewProps {
  onClose: () => void;
}

export const SlideshowView = ({ onClose }: SlideshowViewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;
  const [fullscreenContent, setFullscreenContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenContent) {
        if (e.key === 'Escape') setFullscreenContent(null);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, totalSlides, fullscreenContent]);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Helper: clickable wrapper that opens fullscreen modal
  const ExpandableCard = ({ children, fullscreenNode }: { children: ReactNode; fullscreenNode: ReactNode }) => (
    <div className="relative group cursor-zoom-in" onClick={() => setFullscreenContent(fullscreenNode)}>
      {children}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-1.5 z-10">
        <Maximize2 size={16} />
      </div>
    </div>
  );

  // Fullscreen Modal
  const FullscreenModal = () => {
    if (!fullscreenContent) return null;
    return (
      <div
        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setFullscreenContent(null)}
      >
        <div
          className="relative w-[95vw] h-[92vh] rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setFullscreenContent(null)}
            className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition-colors"
          >
            <X size={22} />
          </button>
          <div className="w-full h-full">
            {fullscreenContent}
          </div>
        </div>
      </div>
    );
  };

  // --- Slide Components ---

  const Slide1_Portada = () => (
    <div className="flex flex-col items-center justify-center h-full text-center slide-fade-enter px-4">
      <div className="flex items-center gap-4 md:gap-8 mb-6">
        <div className="bg-white p-3 rounded-full shadow-lg w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
          <img src={ipnLogo} alt="IPN" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-center justify-center text-[#621132] font-bold text-center leading-tight">
          <span className="text-base md:text-xl tracking-widest mb-1">INSTITUTO POLITÉCNICO NACIONAL</span>
          <span className="text-xs md:text-sm tracking-wide">ESCUELA SUPERIOR DE INGENIERÍA MECÁNICA Y ELÉCTRICA</span>
          <span className="text-[10px] md:text-xs font-normal mt-1">UNIDAD PROFESIONAL "ADOLFO LÓPEZ MATEOS"</span>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
          <img src={esimeLogo} alt="ESIME" className="w-full h-full object-contain" />
        </div>
      </div>

      <h2 className="text-lg md:text-xl text-[#333333] font-medium tracking-widest uppercase mb-4 mt-4">
        Seminario de Titulación
      </h2>
      <h1 className="text-2xl md:text-4xl font-bold text-[#621132] mb-6 max-w-[95vw] leading-tight">
        DISEÑO Y DESARROLLO DE UNA ARQUITECTURA SCADA MULTIPROTOCOLO (MODBUS, MQTT) BASADA EN SERVICIOS CONTENERIZADOS
      </h1>

      <div className="flex flex-col gap-4 mt-4 text-center justify-center w-full max-w-3xl">
        <div>
          <p className="text-sm md:text-base text-[#666666] mb-1 uppercase tracking-widest">Presenta</p>
          <p className="text-xl md:text-2xl font-bold text-[#333333]">Fabian Romero Hernández</p>
          <p className="text-xs md:text-sm text-[#666666] mt-1">IPN - ESIME ZACATENCO - ICA</p>
        </div>
      </div>
    </div>
  );

  const Slide2_Objetivo = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Objetivo y Justificación
      </h2>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-[#B38E5D]">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#4A0D26]">
            <ShieldAlert className="text-[#B38E5D] w-8 h-8" /> El Desafío
          </h3>
          <ul className="space-y-6 text-[#666666] text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#621132] font-bold text-2xl leading-none mt-1">⬢</span>
              <span>Altos costos de licenciamiento (esquemas de cobro por variable/tag).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#621132] font-bold text-2xl leading-none mt-1">⬢</span>
              <span>Dependencia de tecnologías legadas y sistemas cerrados.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#621132] font-bold text-2xl leading-none mt-1">⬢</span>
              <span>Riesgos críticos de ciberseguridad y dificultad para adaptarse a las distintas políticas de red empresariales.</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#621132]/5 p-8 rounded-xl shadow-lg border-l-8 border-[#621132]">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#621132]">
            <CheckCircle className="text-green-600 w-8 h-8" /> La Solución Propuesta
          </h3>
          <p className="text-lg text-[#333333] mb-6">
            Desarrollo de una arquitectura SCADA multiprotocolo y contenerizada que separa responsabilidades y ofrece flexibilidad topológica:
          </p>
          <div className="space-y-6 mt-4">
            <div className="flex items-start gap-4">
              <Laptop className="text-[#B38E5D] w-8 h-8 shrink-0 mt-1" />
              <p className="text-base text-[#666666]"><strong>Adquisición Local:</strong> Nodo en planta (PC Industrial / Laptop) enfocado exclusivamente en leer equipos físicos.</p>
            </div>
            <div className="flex items-start gap-4">
              <Cloud className="text-[#621132] w-8 h-8 shrink-0 mt-1" />
              <p className="text-base text-[#666666]"><strong>Despliegue Flexible (On-Premise o Distribuido):</strong> Operación 100% interna para aislamiento estricto, o uso de un servidor externo (VPS) para enrutar telemetría a pantallas web mediante conexiones encriptadas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Slide3_Diagrama = () => (
    <div className="flex flex-col h-full justify-start pt-16 slide-fade-enter max-w-[95vw] mx-auto w-full px-8 relative">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diagrama del Proyecto
      </h2>
      <div className="flex-1 w-full bg-white rounded-2xl flex flex-col items-center justify-center mb-16 shadow-xl relative overflow-hidden border border-gray-200">
        <ScadaFlowDiagram />
      </div>
    </div>
  );

  const Slide4_Herramientas = () => (
    <div className="flex flex-col items-center justify-center h-full slide-fade-enter w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-16 text-center border-b-4 border-[#621132] pb-4">
        Stack Tecnológico y Normativa
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-[85vw]">
        {[
          { name: 'React / Next.js', icon: <Laptop size={32} /> },
          { name: 'Python / FastAPI', icon: <Terminal size={32} /> },
          { name: 'pyModbusTCP', icon: <Workflow size={32} /> },
          { name: 'Mosquitto (MQTT)', icon: <Activity size={32} /> },
          { name: 'TimescaleDB', icon: <Database size={32} /> },
          { name: 'Docker', icon: <Container size={32} /> },
          { name: 'OpenSSL (mTLS)', icon: <Lock size={32} /> }, // Clave para tu defensa de ciberseguridad
          { name: 'Norma ISA-101', icon: <BookOpen size={32} /> }
        ].map(tech => (
          <div key={tech.name} className="flex flex-col items-center justify-center bg-white border border-[#621132]/20 shadow-lg rounded-xl p-8 w-52 transition-transform hover:scale-105">
            <div className="text-[#621132] mb-4">
              {tech.icon}
            </div>
            <span className="text-[#333333] font-bold text-lg text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
  const Slide5_AntecedentesConceptos = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Antecedentes y Conceptos
      </h2>
      <div className="grid grid-cols-3 gap-8">

        {/* ANTECEDENTE 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-red-800">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <h3 className="text-2xl font-bold text-red-900">Antecedente Comercial</h3>
          </div>
          <ul className="space-y-4 text-lg text-[#666666]">
            <li>⬢ <strong>Arquitectura:</strong> Monolítica (Software pesado y centralizado).</li>
            <li>⬢ <strong>Tecnología:</strong> Entornos cerrados (Ej. Jython o VBA).</li>
            <li>⬢ <strong>Limitación:</strong> Costos elevados por variable y difícil integración con IA moderna.</li>
          </ul>
        </div>

        {/* ANTECEDENTE 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-yellow-500">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <h3 className="text-2xl font-bold text-yellow-900">Antecedente Open-Source</h3>
          </div>
          <ul className="space-y-4 text-lg text-[#666666]">
            <li>⬢ <strong>Arquitectura:</strong> Basada en web tradicional.</li>
            <li>⬢ <strong>Tecnología:</strong> Entornos monohilo (Ej. Node.js).</li>
            <li>⬢ <strong>Limitación:</strong> Cuellos de botella al procesar alta telemetría industrial.</li>
          </ul>
        </div>

        {/* CONCEPTOS PROPUESTOS */}
        <div className="bg-[#621132]/5 p-8 rounded-xl shadow-2xl border-2 border-[#621132] relative transform scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#621132] text-white px-4 py-1 text-xs rounded-full font-bold">
            CONCEPTOS DEL PROYECTO
          </div>
          <div className="flex items-center gap-3 mb-6 justify-center mt-2">
            <h3 className="text-2xl font-bold text-[#621132]">SCADA Distribuido</h3>
          </div>
          <ul className="space-y-4 text-lg text-[#333333] font-medium">
            <li>⬢ <strong>Concurrencia:</strong> Python asíncrono para alta velocidad.</li>
            <li>⬢ <strong>Desacoplamiento:</strong> Edge Gateway local + Broker en VPS.</li>
            <li>⬢ <strong>Seguridad y UI:</strong> Zero Trust (mTLS) y HMI bajo norma ISA-101.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const Slide6_Diseno_Adquisicion = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">1. Adquisición (Edge Gateway)</h3>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<img src={reactHmiImg} alt="Terminal Python / Edge" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img src={reactHmiImg} alt="Terminal Python / Edge" className="w-full h-full object-cover" />
          </div>
        </ExpandableCard>
        <ExpandableCard fullscreenNode={<div className="w-full h-full"><ProtocolFactoryDiagram /></div>}>
          <div className="bg-white h-[45vh] rounded-xl flex flex-col items-center justify-center relative shadow-lg overflow-hidden border border-gray-300">
            <ProtocolFactoryDiagram />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-600 mx-auto w-full">
        <ul className="space-y-4 text-lg text-[#444444]">
          <li>⬢ <strong>Hardware:</strong> Nodo local (Laptop) fungiendo como PC Industrial.</li>
          <li>⬢ <strong>Lógica:</strong> Lazo asíncrono con <code className="bg-gray-100 px-2 py-1 rounded">asyncio</code>.</li>
          <li>⬢ <strong>Estandarización:</strong> Conversión de tramas Modbus a formato JSON.</li>
        </ul>
      </div>
    </div>
  );

  const Slide7_Diseno_Seguridad = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-2xl font-bold text-yellow-900 mb-8 text-center">2. Ciberseguridad y Enrutamiento</h3>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<img src={reactHmiImg} alt="Consola VPS" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img src={reactHmiImg} alt="Consola VPS" className="w-full h-full object-cover" />
          </div>
        </ExpandableCard>
        <ExpandableCard fullscreenNode={<div className="w-full h-full"><MosquittoSecurityDiagram /></div>}>
          <div className="bg-white h-[45vh] rounded-xl flex flex-col items-center justify-center relative shadow-lg overflow-hidden border border-gray-300">
            <MosquittoSecurityDiagram />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-yellow-500 mx-auto w-full">
        <ul className="space-y-4 text-lg text-[#444444]">
          <li>⬢ <strong>Despliegue:</strong> Servidor Virtual (VPS) en la nube.</li>
          <li>⬢ <strong>Seguridad (mTLS):</strong> Creación de CA Privada (Autoridad Certificadora) con OpenSSL.</li>
          <li>⬢ <strong>Broker:</strong> Mosquitto configurado con <code>require_certificate true</code>.</li>
        </ul>
      </div>
    </div>
  );

  const Slide8_Diseno_Visualizacion = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">3. Persistencia e Interfaz (HMI)</h3>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<img src={reactHmiImg} alt="HMI" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img src={reactHmiImg} alt="HMI" className="w-full h-full object-cover" />
          </div>
        </ExpandableCard>
        <ExpandableCard fullscreenNode={<img src={reactHmiImg} alt="TimescaleDB" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img src={reactHmiImg} alt="TimescaleDB" className="w-full h-full object-cover" />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-green-600 mx-auto w-full">
        <ul className="space-y-4 text-lg text-[#444444]">
          <li>⬢ <strong>Almacenamiento:</strong> Contenedor Docker con TimescaleDB.</li>
          <li>⬢ <strong>Reactividad:</strong> Conexión WebSockets mediante Zustand.</li>
          <li>⬢ <strong>UX/UI:</strong> Diseño HMI Alto Rendimiento (escala de grises).</li>
        </ul>
      </div>
    </div>
  );

  const Slide9_Funcionamiento = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Funcionamiento
      </h2>

      <div className="grid grid-cols-2 gap-8 h-[60vh]">
        {/* Capturas (Simulación de UI existente) */}
        <div className="bg-[#d4d4d4] rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg border border-gray-300">
          <div className="absolute top-4 left-4 right-4 flex justify-between text-xs font-bold text-slate-600 border-b-2 border-slate-400 pb-2">
            <span>PROCESO_MEZCLA_01</span>
            <span>RUNNING</span>
          </div>

          <div className="mt-8 bg-white border-2 border-black p-4 shadow-md text-center">
            <h4 className="text-sm font-bold mb-2 uppercase tracking-wider text-slate-700">Nivel de Tanque</h4>
            <div className="text-3xl font-bold font-mono tracking-widest text-[#621132]">70.5 %</div>
          </div>

          <div className="absolute bottom-4 text-sm text-slate-600 font-bold bg-white/50 px-4 py-1 rounded">Captura HMI Runtime</div>
        </div>

        {/* Video Placeholder */}
        <ExpandableCard
          fullscreenNode={
            <div className="w-full h-full bg-black flex items-center justify-center">
              <video controls autoPlay className="w-full h-full object-contain" src="/assets/demo.mp4">
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          }
        >
          <div className="bg-black/90 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-800 relative h-full">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
              <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
            </div>
            <p className="text-white/70 font-medium">Video Demostrativo del Proceso</p>
            <p className="text-white/40 text-sm mt-2">Click para reproducir a pantalla completa</p>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );

  const Slide10_CostoBeneficio = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[85vw] mx-auto w-full px-8">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Análisis Costo - Beneficio
      </h2>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#621132] text-white">
              <th className="p-4 md:p-6 font-bold text-lg">Concepto de Infraestructura</th>
              <th className="p-4 md:p-6 font-bold text-lg text-center">Costo Estimado (USD)</th>
              <th className="p-4 md:p-6 font-bold text-lg text-center">Frecuencia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#333333] text-lg">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 md:p-6">Edge Gateway Industrial (Hardware local)</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-[#621132]">$ 150.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]">Pago único</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
              <td className="p-4 md:p-6">Servidor Virtual Privado (VPS en AWS / DigitalOcean)</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-[#621132]">$ 30.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]">Mensual</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 md:p-6">Certificados SSL Web (Let's Encrypt) / CA Privada</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-green-600">$ 0.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]">Open-Source</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
              <td className="p-4 md:p-6">Licenciamiento de Base de Datos (TimescaleDB)</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-green-600">$ 0.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]">Open-Source</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 md:p-6">Licenciamiento de Software SCADA (HMI / Backend)</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-green-600">$ 0.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]">Desarrollo Propio</td>
            </tr>
            <tr className="bg-[#f8f9fa] border-t-4 border-[#621132]">
              <td className="p-4 md:p-6 font-bold text-xl text-[#4A0D26]">Costo Total de Arranque (Mes 1)</td>
              <td className="p-4 md:p-6 text-center font-mono font-bold text-2xl text-[#621132]">$ 180.00</td>
              <td className="p-4 md:p-6 text-center text-[#666666]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Slide11_Conclusiones = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8 text-center">
      <h2 className="text-4xl font-bold text-[#4A0D26] mb-16 border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Conclusiones
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-[#621132]/10 rounded-full flex items-center justify-center mb-6 text-[#621132]">
            <Server size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-2xl mb-4">Future-Proof</h3>
          <p className="text-[#666666] text-lg">Arquitectura escalable diseñada para integrar nuevas tecnologías sin refactorización pesada.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-[#B38E5D]/10 rounded-full flex items-center justify-center mb-6 text-[#B38E5D]">
            <Cloud size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-2xl mb-4">Cloud-Native</h3>
          <p className="text-[#666666] text-lg">Despliegue contenerizado con Docker y orquestación eficiente de microservicios.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-2xl mb-4">Validado</h3>
          <p className="text-[#666666] text-lg">Probado con éxito usando protocolos industriales reales (Modbus TCP, MQTT) y equipos de campo.</p>
        </div>
      </div>
      <p className="text-2xl font-bold text-[#621132]">¡Gracias por su atención!</p>
    </div>
  );

  const slides = [
    Slide1_Portada,
    Slide2_Objetivo,
    Slide3_Diagrama,
    Slide4_Herramientas,
    Slide5_AntecedentesConceptos,
    Slide6_Diseno_Adquisicion,
    Slide7_Diseno_Seguridad,
    Slide8_Diseno_Visualizacion,
    Slide9_Funcionamiento,
    Slide10_CostoBeneficio,
    Slide11_Conclusiones
  ];

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-[#F8F9FA] flex flex-col items-center overflow-hidden font-sans">

      {/* Top Controls */}
      <div className="w-full p-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-[#666666] bg-gray-100 px-3 py-1 rounded-full">
            {currentSlide + 1} / {totalSlides}
          </div>
          <span className="text-xs text-gray-400 font-mono hidden md:inline">Use Arrow Keys to navigate</span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg font-bold transition-colors"
        >
          <X size={20} /> Cerrar Presentación
        </button>
      </div>

      {/* Main Slide Content Area */}
      <div className="flex-1 w-full flex items-center justify-center relative overflow-y-auto pb-24">
        <CurrentSlideComponent />
      </div>

      {/* Bottom Nav Controls */}
      <div className="absolute bottom-8 flex gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-all ${currentSlide === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#621132] text-white hover:bg-[#4A0D26] hover:scale-105'
            }`}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-all ${currentSlide === totalSlides - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#621132] text-white hover:bg-[#4A0D26] hover:scale-105'
            }`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Fullscreen Viewer Modal */}
      <FullscreenModal />

    </div>
  );
};

