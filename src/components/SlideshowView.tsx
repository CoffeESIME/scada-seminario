import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
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
import edgeIMG from '../assets/edge.png';
import HMI from '../assets/lienzo.png';
import badHmi from '../assets/badhmi.png';
import goodHmi from '../assets/goodhmi.png';
interface SlideshowViewProps {
  onClose: () => void;
}

const IsaComparisonModal = () => (
  <div className="flex flex-col h-full w-full p-8 bg-gray-50 overflow-y-auto text-black font-semibold">
    <div className="text-center mb-8">
      <h3 className="text-5xl font-extrabold text-[#4A0D26] mb-3">Comparativa de Diseño HMI (Norma ISA-101)</h3>
      <p className="text-2xl text-gray-800">Diseño de Alto Rendimiento (Derecha) frente al Diseño Tradicional (Izquierda)</p>
    </div>
    
    <div className="grid grid-cols-2 gap-8 flex-1">
      {/* HMI TRADICIONAL (MALO) */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 border-b pb-4">
            <span className="text-3xl font-extrabold text-red-600">HMI Tradicional (No Recomendado)</span>
            <span className="bg-red-100 text-red-900 text-base font-bold px-4 py-1.5 rounded-full">Alta Carga Cognitiva</span>
          </div>
          
          <div className="bg-black p-4 rounded-xl border border-gray-700 flex items-center justify-center max-h-[450px] overflow-hidden">
            <img src={badHmi} alt="HMI Tradicional" className="max-w-full max-h-[400px] object-contain rounded-lg" />
          </div>
        </div>

        {/* Explicación de los errores */}
        <ul className="mt-8 space-y-4 text-xl text-gray-950 border-t pt-4">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold text-2xl">❌</span>
            <span><strong>Fondo negro y colores chillones:</strong> Genera alta fatiga ocular tras turnos largos en sala de control.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold text-2xl">❌</span>
            <span><strong>Uso excesivo de 3D, gradientes y brillos:</strong> Añade ruido visual innecesario que distrae del valor de los datos.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold text-2xl">❌</span>
            <span><strong>Falta de jerarquía en alarmas:</strong> Todo parpadea y brilla por igual, haciendo difícil priorizar incidentes reales.</span>
          </li>
        </ul>
      </div>

      {/* HMI ALTO RENDIMIENTO (BUENO) */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 border-b pb-4">
            <span className="text-3xl font-extrabold text-green-600">HMI Alto Rendimiento (ISA-101)</span>
            <span className="bg-green-100 text-green-900 text-base font-bold px-4 py-1.5 rounded-full">Baja Carga Cognitiva</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl border border-gray-300 flex items-center justify-center max-h-[450px] overflow-hidden">
            <img src={goodHmi} alt="HMI Alto Rendimiento" className="max-w-full max-h-[400px] object-contain rounded-lg" />
          </div>
        </div>

        {/* Explicación de los beneficios */}
        <ul className="mt-8 space-y-4 text-xl text-gray-950 border-t pt-4">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-2xl">✓</span>
            <span><strong>Esquema de colores de fondo apagados (Gris/Slate):</strong> Minimiza el cansancio y la fatiga ocular a largo plazo.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-2xl">✓</span>
            <span><strong>Representación simplificada en 2D:</strong> Remueve detalles irrelevantes y facilita la lectura rápida del estado del proceso.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold text-2xl">✓</span>
            <span><strong>Color por excepción:</strong> Los colores llamativos (Rojo/Amarillo/Naranja) quedan prohibidos para uso decorativo y se reservan estrictamente para alarmas y fallas del sistema.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const SlideshowView = ({ onClose }: SlideshowViewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12;
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
          <span className="text-xl md:text-3xl tracking-widest mb-1">INSTITUTO POLITÉCNICO NACIONAL</span>
          <span className="text-base md:text-lg tracking-wide">ESCUELA SUPERIOR DE INGENIERÍA MECÁNICA Y ELÉCTRICA</span>
          <span className="text-sm md:text-base font-semibold mt-1">UNIDAD PROFESIONAL "ADOLFO LÓPEZ MATEOS"</span>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
          <img src={esimeLogo} alt="ESIME" className="w-full h-full object-contain" />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl text-black font-bold tracking-widest uppercase mb-4 mt-4">
        Seminario de Titulación
      </h2>
      <h1 className="text-4xl md:text-6xl font-bold text-[#621132] mb-6 max-w-[95vw] leading-tight">
        DISEÑO Y DESARROLLO DE UNA ARQUITECTURA SCADA MULTIPROTOCOLO (MODBUS, MQTT) BASADA EN SERVICIOS CONTENERIZADOS
      </h1>

      <div className="flex flex-col gap-4 mt-4 text-center justify-center w-full max-w-3xl">
        <div>
          <p className="text-lg md:text-xl text-gray-900 mb-1 uppercase tracking-widest">Presenta</p>
          <p className="text-3xl md:text-4xl font-bold text-black">Fabian Romero Hernández</p>
          <p className="text-base md:text-lg text-gray-900 mt-1">IPN - ESIME ZACATENCO - ICA</p>
        </div>
      </div>
    </div>
  );

  const Slide2_Objetivo = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[90vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Objetivo del Proyecto
      </h2>
      <div className="bg-white p-12 rounded-2xl shadow-xl border-l-8 border-[#621132] max-w-5xl mx-auto">
        <p className="text-3xl text-black leading-relaxed text-justify font-bold">
          Implementar un sistema SCADA/HMI basado en una arquitectura de servicios contenerizados, capaz de adquirir datos de controladores lógicos (PLC) y telemetría mediante protocolos estándar (Modbus TCP, MQTT), garantizando la persistencia en bases de datos de series temporales y su operación mediante una interfaz web reactiva libre de licenciamiento comercial.
        </p>
      </div>
    </div>
  );

  const Slide2_Justificacion = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Justificación
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-[#621132] flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#4A0D26] mb-4">
              Cuello de botella tecnológico (Convergencia IT/OT)
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              Los SCADAs tradicionales poseen arquitecturas monolíticas que dificultan la integración con herramientas modernas de Data Science e Inteligencia Artificial (Nivel 2 del Modelo Purdue).
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-[#B38E5D] flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#4A0D26] mb-4">
              Barrera económica por licenciamiento
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              Los modelos de cobro restrictivos (basados en el conteo de tags o variables) encarecen la modernización, afectando a las PyMEs manufactureras en México.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-red-700 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#4A0D26] mb-4">
              Vulnerabilidad en equipos legados
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              La necesidad gerencial de acceder a telemetría web expone sistemas antiguos, haciendo imperativo un diseño de seguridad nativa (Security by Design) mediante mTLS y arquitecturas desacopladas.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-green-600 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#4A0D26] mb-4">
              Democratización mediante Código Abierto
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              Demostrar la viabilidad técnica de utilizar protocolos de bajo peso (MQTT) y ecosistemas web de alto rendimiento para modernizar la automatización industrial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Slide3_Diagrama = () => (
    <div className="flex flex-col h-full justify-start pt-16 slide-fade-enter max-w-[95vw] mx-auto w-full px-8 relative">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diagrama del Proyecto
      </h2>
      <div className="flex-1 w-full bg-white rounded-2xl flex flex-col items-center justify-center mb-16 shadow-xl relative overflow-hidden border border-gray-200">
        <ScadaFlowDiagram />
      </div>
    </div>
  );

  const Slide4_Herramientas = () => (
    <div className="flex flex-col items-center justify-center h-full slide-fade-enter w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4">
        Stack Tecnológico y Normativa
      </h2>
      <div className="grid grid-cols-4 gap-8 max-w-[90vw] w-full">
        {/* GRUPO 1: Adquisición y Backend */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-[#621132] flex flex-col">
          <h3 className="text-2xl font-bold text-[#4A0D26] mb-6 text-center border-b pb-2">
            Adquisición y Backend
          </h3>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Terminal size={36} /></div>
              <span className="text-black font-bold text-xl">Python / FastAPI</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Workflow size={36} /></div>
              <span className="text-black font-bold text-xl">pyModbusTCP</span>
            </div>
          </div>
        </div>

        {/* GRUPO 2: Comunicaciones y Seguridad */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-[#B38E5D] flex flex-col">
          <h3 className="text-2xl font-bold text-[#4A0D26] mb-6 text-center border-b pb-2">
            Comunicaciones y Seguridad
          </h3>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Activity size={36} /></div>
              <span className="text-black font-bold text-xl">Mosquitto (MQTT)</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Lock size={36} /></div>
              <span className="text-black font-bold text-xl">OpenSSL (mTLS)</span>
            </div>
          </div>
        </div>

        {/* GRUPO 3: Persistencia e Interfaz */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-red-700 flex flex-col">
          <h3 className="text-2xl font-bold text-[#4A0D26] mb-6 text-center border-b pb-2">
            Persistencia e HMI
          </h3>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Laptop size={36} /></div>
              <span className="text-black font-bold text-xl">React / Next.js</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Database size={36} /></div>
              <span className="text-black font-bold text-xl">TimescaleDB</span>
            </div>
          </div>
        </div>

        {/* GRUPO 4: Infraestructura y Normativa */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-green-600 flex flex-col">
          <h3 className="text-2xl font-bold text-[#4A0D26] mb-6 text-center border-b pb-2">
            Infraestructura y Normas
          </h3>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-[#621132]"><Container size={36} /></div>
              <span className="text-black font-bold text-xl">Docker</span>
            </div>
            <div
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all shadow-sm border border-transparent hover:border-[#621132]/30"
              onClick={() => setFullscreenContent(<IsaComparisonModal />)}
            >
              <div className="text-[#621132]"><BookOpen size={36} /></div>
              <div className="flex flex-col">
                <span className="text-black font-bold text-xl">Norma ISA-101</span>
                <span className="text-xs text-[#621132] font-semibold">Click para comparativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const Slide5_AntecedentesConceptos = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-12 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Antecedentes y Conceptos
      </h2>
      <div className="grid grid-cols-3 gap-8">

        {/* ANTECEDENTE 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-red-800">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <h3 className="text-4xl font-bold text-red-900">Antecedente Comercial</h3>
          </div>
          <ul className="space-y-4 text-2xl text-gray-900">
            <li>⬢ <strong>Arquitectura:</strong> Monolítica (Software pesado y centralizado).</li>
            <li>⬢ <strong>Tecnología:</strong> Entornos cerrados (Ej. Jython o VBA).</li>
            <li>⬢ <strong>Limitación:</strong> Costos elevados por variable y difícil integración con IA moderna.</li>
          </ul>
        </div>

        {/* ANTECEDENTE 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-yellow-500">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <h3 className="text-4xl font-bold text-yellow-900">Antecedente Open-Source</h3>
          </div>
          <ul className="space-y-4 text-2xl text-gray-900">
            <li>⬢ <strong>Arquitectura:</strong> Basada en web tradicional.</li>
            <li>⬢ <strong>Tecnología:</strong> Entornos monohilo (Ej. Node.js).</li>
            <li>⬢ <strong>Limitación:</strong> Cuellos de botella al procesar alta telemetría industrial.</li>
          </ul>
        </div>

        {/* CONCEPTOS PROPUESTOS */}
        <div className="bg-[#621132]/5 p-8 rounded-xl shadow-2xl border-2 border-[#621132] relative transform scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#621132] text-white px-4 py-1 text-base rounded-full font-bold">
            CONCEPTOS DEL PROYECTO
          </div>
          <div className="flex items-center gap-3 mb-6 justify-center mt-2">
            <h3 className="text-4xl font-bold text-[#621132]">SCADA Distribuido</h3>
          </div>
          <ul className="space-y-4 text-2xl text-black font-bold">
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
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-4xl font-bold text-blue-900 mb-8 text-center">1. Adquisición (Edge Gateway)</h3>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<img src={edgeIMG} alt="Terminal Python / Edge" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl flex items-center justify-center shadow-lg border border-gray-300 overflow-hidden">
            <img src={edgeIMG} alt="Terminal Python / Edge" className="w-full h-full object-contain" />
          </div>
        </ExpandableCard>
        <ExpandableCard fullscreenNode={<div className="w-full h-full"><ProtocolFactoryDiagram /></div>}>
          <div className="bg-white h-[45vh] rounded-xl flex flex-col items-center justify-center relative shadow-lg overflow-hidden border border-gray-300">
            <ProtocolFactoryDiagram />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-600 mx-auto w-full">
        <ul className="space-y-4 text-2xl text-black">
          <li>⬢ <strong>Hardware:</strong> Nodo local (Laptop) fungiendo como PC Industrial.</li>
          <li>⬢ <strong>Lógica:</strong> Lazo asíncrono con <code className="bg-gray-100 px-2 py-1 rounded">asyncio</code>.</li>
          <li>⬢ <strong>Estandarización:</strong> Conversión de tramas Modbus a formato JSON.</li>
        </ul>
      </div>
    </div>
  );

  const Slide7_Diseno_Seguridad = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-4xl font-bold text-yellow-900 mb-8 text-center">2. Ciberseguridad y Enrutamiento</h3>

      <div className="grid grid-cols-1 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<div className="w-full h-full"><MosquittoSecurityDiagram /></div>}>
          <div className="bg-white h-[45vh] rounded-xl flex flex-col items-center justify-center relative shadow-lg overflow-hidden border border-gray-300">
            <MosquittoSecurityDiagram />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-yellow-500 mx-auto w-full">
        <ul className="space-y-4 text-2xl text-black">
          <li>⬢ <strong>Despliegue:</strong> Servidor Virtual (VPS) en la nube.</li>
          <li>⬢ <strong>Seguridad (mTLS):</strong> Creación de CA Privada (Autoridad Certificadora) con OpenSSL.</li>
          <li>⬢ <strong>Broker:</strong> Mosquitto configurado con <code>require_certificate true</code>.</li>
        </ul>
      </div>
    </div>
  );

  const Slide8_Diseno_Visualizacion = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-4 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Diseño e Implementación Técnica
      </h2>
      <h3 className="text-4xl font-bold text-green-900 mb-8 text-center">3. Persistencia e Interfaz (HMI)</h3>

      <div className="grid grid-cols-1 gap-8 mb-8">
        <ExpandableCard fullscreenNode={<img src={HMI} alt="TimescaleDB" className="w-full h-full object-contain" />}>
          <div className="bg-white h-[45vh] rounded-xl flex items-center justify-center shadow-lg border border-gray-300 overflow-hidden">
            <img src={HMI} alt="TimescaleDB" className="w-full h-full object-contain" />
          </div>
        </ExpandableCard>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-green-600 mx-auto w-full">
        <ul className="space-y-4 text-2xl text-black">
          <li>⬢ <strong>Almacenamiento:</strong> Contenedor Docker con TimescaleDB.</li>
          <li>⬢ <strong>Reactividad:</strong> Conexión WebSockets mediante Zustand.</li>
          <li>⬢ <strong>UX/UI:</strong> Diseño HMI Alto Rendimiento (escala de grises).</li>
        </ul>
      </div>
    </div>
  );

  const Slide9_Funcionamiento = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Funcionamiento
      </h2>

      <div className="grid grid-cols-1 gap-8 h-[60vh]">
        <ExpandableCard
          fullscreenNode={
            <div className="w-full h-full bg-black flex items-center justify-center">
              <video controls autoPlay className="w-full h-full object-contain" src='no'>
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          }
        >
          <div className="bg-black/90 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-800 relative h-full">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
              <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
            </div>
            <p className="text-white/95 font-bold">Video Demostrativo del Proceso</p>
            <p className="text-white/80 text-lg mt-2">Click para reproducir a pantalla completa</p>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );

  const Slide10_CostoBeneficio = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter w-full px-8 md:px-12 max-w-[95vw] mx-auto">
      <h2 className="text-5xl font-bold text-[#4A0D26] mb-8 text-center border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Análisis Costo - Beneficio
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full">
        {/* Columna Izquierda: Tabla de Costos */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-[#621132] p-4">
            <h3 className="font-bold text-2xl text-center text-white">Inversión Inicial (Hardware y Cloud)</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-[#4A0D26]">
                <th className="p-3 md:p-4 font-bold text-xl">Concepto de Infraestructura</th>
                <th className="p-3 md:p-4 font-bold text-xl text-center w-32">Costo (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-black text-xl">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 md:p-4">Edge Gateway Industrial (Hardware base + disipación)</td>
                <td className="p-3 md:p-4 text-center font-mono font-bold text-[#621132]">$ 120.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                <td className="p-3 md:p-4">Almacenamiento Edge de Alta Resistencia (eMMC/Industrial)</td>
                <td className="p-3 md:p-4 text-center font-mono font-bold text-[#621132]">$ 40.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 md:p-4">Servidor Virtual Privado Cloud (Mensual)</td>
                <td className="p-3 md:p-4 text-center font-mono font-bold text-[#621132]">$ 30.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                <td className="p-3 md:p-4">Motor Docker, Base de Datos (TimescaleDB) y SCADA</td>
                <td className="p-3 md:p-4 text-center font-mono font-bold text-green-600">$ 0.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 md:p-4">Infraestructura Criptográfica (CA Privada / Let's Encrypt)</td>
                <td className="p-3 md:p-4 text-center font-mono font-bold text-green-600">$ 0.00</td>
              </tr>
              <tr className="bg-[#f8f9fa] border-t-4 border-[#621132]">
                <td className="p-4 md:p-5 font-bold text-2xl text-[#4A0D26] text-right">Costo Total de Arranque (Mes 1)</td>
                <td className="p-4 md:p-5 text-center font-mono font-bold text-3xl text-[#621132]">$ 190.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Columna Derecha: Beneficios Principales */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl shadow-md border-l-8 border-[#621132] p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#4A0D26] mb-2 flex items-center gap-3">
              <span className="text-3xl">🔓</span> Cero Costos de Licenciamiento
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              Eliminación total del modelo de cobro restrictivo por variable (Tag). Implementación basada íntegramente en software de código abierto.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border-l-8 border-[#621132] p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#4A0D26] mb-2 flex items-center gap-3">
              <span className="text-3xl">🏭</span> Convergencia IT/OT Efectiva
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              Democratización de la telemetría industrial mediante MQTT. Permite integraciones directas con algoritmos de Inteligencia Artificial y bases de datos modernas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border-l-8 border-[#621132] p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#4A0D26] mb-2 flex items-center gap-3">
              <span className="text-3xl">🛡️</span> Ciberseguridad por Diseño (Security by Design)
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              Protección de la red física mediante aislamiento Edge-to-Cloud. Autenticación Mutua (mTLS) que otorga pasaportes criptográficos revocables al hardware.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border-l-8 border-[#621132] p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#4A0D26] mb-2 flex items-center gap-3">
              <span className="text-3xl">⚡</span> Alta Disponibilidad y Resiliencia
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              El entorno contenerizado aísla fallos de ejecución. La arquitectura asíncrona asegura que la latencia en comunicaciones no congele la adquisición física local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Slide11_Conclusiones = () => (
    <div className="flex flex-col h-full justify-center slide-fade-enter max-w-[95vw] mx-auto w-full px-8 text-center">
      <h2 className="text-6xl font-bold text-[#4A0D26] mb-16 border-b-4 border-[#621132] pb-4 inline-block mx-auto">
        Conclusiones
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-[#621132]/10 rounded-full flex items-center justify-center mb-6 text-[#621132]">
            <Server size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-4xl mb-4">Future-Proof</h3>
          <p className="text-gray-900 text-2xl">Arquitectura escalable diseñada para integrar nuevas tecnologías sin refactorización pesada.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-[#B38E5D]/10 rounded-full flex items-center justify-center mb-6 text-[#B38E5D]">
            <Cloud size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-4xl mb-4">Cloud-Native</h3>
          <p className="text-gray-900 text-2xl">Despliegue contenerizado con Docker y orquestación eficiente de microservicios.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h3 className="font-bold text-[#4A0D26] text-4xl mb-4">Validado</h3>
          <p className="text-gray-900 text-2xl">Probado con éxito usando protocolos industriales reales (Modbus TCP, MQTT) y equipos de campo.</p>
        </div>
      </div>
      <p className="text-4xl font-bold text-[#621132]">¡Gracias por su atención!</p>
    </div>
  );

  const slides = [
    Slide1_Portada,
    Slide2_Objetivo,
    Slide2_Justificacion,
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
    <div className="fixed inset-0 z-50 bg-[#F8F9FA] flex flex-col items-center overflow-hidden font-sans font-semibold text-gray-950">

      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[100] flex items-center justify-center bg-[#621132] hover:bg-[#4A0D26] text-white p-3.5 rounded-full shadow-xl transition-all hover:scale-110"
        title="Cerrar Presentación"
      >
        <X size={24} />
      </button>

      {/* Main Slide Content Area */}
      <div className="flex-1 w-full flex items-center justify-center relative overflow-y-auto pb-12">
        <CurrentSlideComponent />
      </div>

      {/* Floating Pill Nav Controls */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/80 backdrop-blur shadow-md rounded-full px-2.5 py-1 border border-gray-200 z-50 transition-all hover:opacity-100 opacity-30 hover:shadow-lg">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-1 rounded-full transition-all ${
            currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#621132] hover:bg-[#621132]/10'
          }`}
        >
          <ChevronLeft size={16} />
        </button>
        <div className="text-xs font-bold text-gray-800 select-none px-1 font-mono">
          {currentSlide + 1} / {totalSlides}
        </div>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-1 rounded-full transition-all ${
            currentSlide === totalSlides - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#621132] hover:bg-[#621132]/10'
          }`}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Fullscreen Viewer Modal */}
      <FullscreenModal />

    </div>
  );
};

