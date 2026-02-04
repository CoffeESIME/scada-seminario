import './index.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">🏭 SCADA Pro</div>
          <ul className="nav-links">
            <li><a href="#features">Características</a></li>
            <li><a href="#architecture">Arquitectura</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#team">Equipo</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Sistema <span>SCADA</span> Moderno
              </h1>
              <p>
                Plataforma de supervisión, control y adquisición de datos
                basada en tecnologías web modernas. Monitoreo en tiempo real
                con protocolos industriales estándar.
              </p>
              <div className="hero-buttons">
                <a href="#demo" className="btn btn-primary">
                  🚀 Ver Demo
                </a>
                <a href="#architecture" className="btn btn-secondary">
                  📖 Documentación
                </a>
              </div>
            </div>
            <div className="hero-image floating">
              <div style={{
                background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>📊</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Temperatura</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>24.5°C</div>
                  </div>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Humedad</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>65%</div>
                  </div>
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Presión</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6' }}>2.4 bar</div>
                  </div>
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Nivel</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444' }}>78%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Características Principales</h2>
            <p>
              Una solución completa para la supervisión y control de procesos industriales
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3>Comunicación Multi-Protocolo</h3>
              <p>
                Soporte para Modbus TCP/RTU, OPC-UA, MQTT y protocolos personalizados.
                Integración con PLCs Siemens, Allen-Bradley y más.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Tiempo Real</h3>
              <p>
                Actualización de datos en milisegundos mediante WebSocket.
                Visualización dinámica con mínima latencia.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Gestión de Alarmas</h3>
              <p>
                Sistema de alarmas con niveles de severidad, acuse de recibo,
                historial y notificaciones en tiempo real.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Tendencias e Históricos</h3>
              <p>
                Almacenamiento en TimescaleDB para análisis histórico.
                Gráficas interactivas con zoom y exportación.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Editor Visual</h3>
              <p>
                Diseño drag-and-drop de pantallas SCADA.
                Biblioteca de componentes industriales.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Seguridad</h3>
              <p>
                Autenticación JWT, roles de usuario,
                auditoría de acciones y cifrado de comunicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="architecture">
        <div className="container">
          <div className="architecture-content">
            <div>
              <h2>Arquitectura del Sistema</h2>
              <p style={{ color: '#94a3b8', marginTop: '16px', marginBottom: '24px' }}>
                Stack moderno diseñado para escalabilidad, rendimiento y mantenibilidad.
                Separación clara entre frontend, backend y servicios.
              </p>

              <div className="tech-stack">
                <span className="tech-badge">React 18</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Next.js 14</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Python 3.11</span>
                <span className="tech-badge">TimescaleDB</span>
                <span className="tech-badge">MQTT</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">pyModbusTCP</span>
                <span className="tech-badge">React Flow</span>
              </div>
            </div>

            <div className="architecture-diagram">
              <pre>{`
┌─────────────────────────────────────────────┐
│              FRONTEND (React)               │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ │
│  │  Editor   │ │  Runtime  │ │ Analysis  │ │
│  │   SCADA   │ │   View    │ │   Page    │ │
│  └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ │
│        │             │             │        │
│        └─────────────┴─────────────┘        │
│                      │                      │
│              WebSocket + REST               │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────┴──────────────────────┐
│              BACKEND (FastAPI)              │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ │
│  │  Engine   │ │  Alarms   │ │  History  │ │
│  │  (Poll)   │ │  Engine   │ │ Subscriber│ │
│  └─────┬─────┘ └───────────┘ └─────┬─────┘ │
│        │                           │        │
│        ├───────── MQTT ────────────┤        │
│        │                           │        │
└────────┼───────────────────────────┼────────┘
         │                           │
    ┌────┴────┐                ┌─────┴─────┐
    │  PLCs   │                │TimescaleDB│
    │ Modbus  │                │  History  │
    └─────────┘                └───────────┘
              `}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <div className="section-header">
            <h2>Demo en Vivo</h2>
            <p>
              Visualización en tiempo real de datos industriales
            </p>
          </div>
          <div className="demo-container">
            <div className="demo-header">
              <span className="demo-dot red"></span>
              <span className="demo-dot yellow"></span>
              <span className="demo-dot green"></span>
              <span style={{ marginLeft: '12px', color: '#94a3b8', fontSize: '0.875rem' }}>
                SCADA Runtime - Proceso de Control
              </span>
            </div>
            <div className="demo-content" style={{
              background: '#C0C0C0',
              color: '#000',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                width: '100%',
                maxWidth: '800px'
              }}>
                {/* Simulated Gauge */}
                <div style={{
                  background: '#1e293b',
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '8px' }}>Voltaje PLC</div>
                  <div style={{
                    width: '60px',
                    height: '100px',
                    background: 'linear-gradient(to top, #3b82f6 45%, #1e293b 45%)',
                    margin: '0 auto',
                    borderRadius: '4px',
                    border: '2px solid #3b82f6'
                  }}></div>
                  <div style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: 700, marginTop: '8px' }}>
                    4.5 V
                  </div>
                </div>

                {/* Simulated Trend */}
                <div style={{
                  background: '#1e293b',
                  padding: '16px',
                  borderRadius: '8px',
                  gridColumn: 'span 2'
                }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '8px' }}>Tendencia Temperatura</div>
                  <svg width="100%" height="80" viewBox="0 0 200 80">
                    <path
                      d="M0,60 L20,55 L40,58 L60,45 L80,50 L100,35 L120,40 L140,30 L160,35 L180,25 L200,30"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="#ef4444" strokeDasharray="4" opacity="0.5" />
                  </svg>
                </div>
              </div>

              <p style={{ color: '#64748b', textAlign: 'center', fontSize: '0.875rem' }}>
                📊 Datos en tiempo real desde PLC Siemens S7-1200 via Modbus TCP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Equipo de Desarrollo</h2>
            <p>
              Proyecto desarrollado para la materia de Sistemas SCADA
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>Desarrollador 1</h3>
              <p className="role">Backend & Protocolos</p>
              <p>Implementación de drivers Modbus, OPC-UA y motor de adquisición de datos.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💻</div>
              <h3>Desarrollador 2</h3>
              <p className="role">Frontend & UI/UX</p>
              <p>Desarrollo del HMI en React, componentes visuales y editor SCADA.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🔧</div>
              <h3>Desarrollador 3</h3>
              <p className="role">Integración & DevOps</p>
              <p>Docker, configuración de servicios, MQTT broker y base de datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            🏭 SCADA Pro — Sistema de Supervisión y Control de Procesos Industriales
          </p>
          <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>
            Desarrollado con React, FastAPI, TimescaleDB & MQTT | 2026
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
