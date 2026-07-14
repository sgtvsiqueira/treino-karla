import TreinoCard from './components/TreinoCard'
import { treinos } from './data/treinos'

export default function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="prog-title">
            Periodização<br />
            <span>Glúteos</span>
          </div>
          <div className="student-row">
            <div className="student-name">Karla Terra</div>
            <div className="sep">·</div>
            <div className="header-meta">Início 14/07/2026</div>
            <div className="sep">·</div>
            <div className="header-meta">Deload semana 9 — 08/09/2026</div>
          </div>
          <div className="chips">
            <span className="chip">6 dias / semana</span>
            <span className="chip hi">Glúteo 4x · Superiores 2x · Core 3x</span>
            <span className="chip">A · B · C · D · E · F</span>
          </div>
        </div>
      </header>

      <div className="legend-bar">
        <strong>Pirâmide crescente</strong> — aumente o peso a cada série e diminua as repetições
      </div>

      <main className="content">
        {treinos.map((treino) => (
          <TreinoCard key={treino.id} treino={treino} />
        ))}
      </main>

      <footer>
        Ficha de Treino — <span>Karla Terra</span> · Início 14/07/2026 · Deload semana 9 — 08/09/2026
      </footer>
    </>
  )
}
