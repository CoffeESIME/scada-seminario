import {
  ChevronDown,
  Radio,
  Cloud,
  Zap,
  Database,
  ArrowRight,
  Activity,
  Box,
  Cpu,
  Workflow
} from 'lucide-react';

export const ArchitectureDiagram = () => (
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
);
