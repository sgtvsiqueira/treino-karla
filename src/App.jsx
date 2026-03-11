import TreinoCard from './components/TreinoCard'
import { treinos } from './data/treinos'

export default function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="prog-title">
            Hipertrofia<br />
            <span>Avançada</span>
          </div>
          <div className="student-row">
            <div className="student-name">Karla Terra</div>
            <div className="sep">·</div>
            <div className="header-meta">Início 08/03/2026</div>
            <div className="sep">·</div>
            <div className="header-meta">Deload semana 9 — 11/05/2026</div>
          </div>
          <div className="chips">
            <span className="chip">5 dias / semana</span>
            <span className="chip hi">Progressão semanal de carga</span>
            <span className="chip">A · B · C · D · E</span>
          </div>
        </div>
      </header>

      <div className="legend-bar">
        <strong>S1 / S2 / S3 / S4</strong> — progressão de repetições por semana
      </div>

      <main className="content">
        {treinos.map((treino) => (
          <TreinoCard key={treino.id} treino={treino} />
        ))}
      </main>

      <footer>
        Ficha de Treino — <span>Karla Terra</span> · Início 08/03/2026 · Deload semana 9 — 11/05/2026
      </footer>
    </>
  )
}
