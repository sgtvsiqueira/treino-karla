export default function TreinoCard({ treino }) {
  return (
    <div className="treino-card">
      <div className="card-header">
        <div className="treino-badge">{treino.id}</div>
        <div>
          <div className="card-title-main">{treino.titulo}</div>
          <div className="card-title-sub">{treino.subtitulo}</div>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="th-img">Demo</th>
              <th>Músculos</th>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Intervalo</th>
              <th>Técnica</th>
            </tr>
          </thead>
          <tbody>
            {treino.exercicios.map((ex, i) => (
              <tr key={i}>
                <td className="td-img">
                  <img
                    className="ex-img"
                    src={ex.imgSrc}
                    alt={ex.imgAlt}
                    loading="lazy"
                  />
                </td>
                <td>{ex.musculos}</td>
                <td>{ex.exercicio}</td>
                <td>{ex.series}</td>
                <td>
                  {ex.repeticoes}
                  <span className="prog">{ex.prog}</span>
                </td>
                <td>{ex.intervalo}</td>
                <td>{ex.tecnica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
