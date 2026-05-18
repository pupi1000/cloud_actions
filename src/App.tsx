import { useState } from 'react'
import './App.css'

function App() {
  const [powerOn, setPowerOn] = useState(false)

  return (
    <div className="game-wrapper">
      <div className="grid-background"></div>

      <main className="hud-container">
        <div className={`title-container ${powerOn ? 'glow-active' : ''}`}>
          <h1 className="glitch" data-text="EINAR ANDRES">EINAR ANDRES</h1>
          <h1 className="glitch" data-text="GUILLEN BOERO">GUILLEN BOERO</h1>
          <h2 className="subtitle">Systems Engineer | Web Developer</h2>
        </div>

        <div className="action-section">
          <button
            className={`cyber-button ${powerOn ? 'pressed' : ''}`}
            onClick={() => setPowerOn(!powerOn)}
          >
            <span className="button-text">
              {powerOn ? 'SISTEMA EN LÍNEA' : 'INICIAR SESIÓN'}
            </span>
          </button>
        </div>

        {powerOn && (
          <div className="stats-panel fade-in">
            <div className="stat-row">
              <span className="stat-label">NIVEL:</span>
              <span className="stat-value">20</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">CLASE:</span>
              <span className="stat-value">Full-Stack</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">ESTADO:</span>
              <span className="stat-value text-green">Listo para la acción</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App