import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import QuizEngine from "../components/QuizEngine";
import "../styles/QuizPage.css";
import topicos from "../data/topicos";
import questoes from "../data/questoes";

const QUIZ_SIZE = 15;
const STORAGE_KEY = "quiz_historico_v1";

function sortearComPesos(respondidas = []) {
  const poolComPesos = questoes.map(q => ({
    item: q,
    peso: respondidas.includes(q.id) ? 1 : 5 // Peso 5 para inéditas, 1 para repetidas
  }));

  let resultado = [];
  let copiaPool = [...poolComPesos];

  for (let i = 0; i < QUIZ_SIZE; i++) {
    if (copiaPool.length === 0) break;
    const pesoTotal = copiaPool.reduce((acc, curr) => acc + curr.peso, 0);
    let random = Math.random() * pesoTotal;

    for (let j = 0; j < copiaPool.length; j++) {
      random -= copiaPool[j].peso;
      if (random <= 0) {
        resultado.push(copiaPool[j].item);
        copiaPool.splice(j, 1);
        break;
      }
    }
  }
  return resultado;
}

export default function QuizPage({ onNavigate }) {
  // Estado do histórico vindo do localStorage
  const [usadas, setUsadas] = useState(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : [];
  });

  const [questoesSessao, setQuestoesSessao] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [checkpoint, setCheckpoint] = useState(null);
  const [quizKey, setQuizKey] = useState(0); // Para forçar reset do QuizEngine

  // Salva no localStorage sempre que 'usadas' mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usadas));
  }, [usadas]);

  // Gera sorteio inicial
  useEffect(() => {
    setQuestoesSessao(sortearComPesos(usadas));
  }, []);

  function handleStart() {
    setCheckpoint(null);
    setPlaying(true);
  }

  function handleBack(savedCheckpoint) {
    setCheckpoint(savedCheckpoint);
    setPlaying(false);
  }

  function handleMoreQuestions() {
    const novas = sortearComPesos(usadas);
    setQuestoesSessao(novas);
    setCheckpoint(null);
    setQuizKey(prev => prev + 1); // Reset do componente
    setPlaying(true);
  }

  function handleFinished(ids) {
    setUsadas(prev => Array.from(new Set([...prev, ...ids])));
  }

  const topicosComQuestoes = topicos.filter((t) =>
    questoes.some((q) => q.topicoId === t.id)
  );

  return (
    <div className="app-shell">
      <Sidebar
        items={topicosComQuestoes}
        activeId={null}
        onSelect={(id) => onNavigate?.(id)}
      />

      <div className="main">
        <div className="content-card">
          {playing ? (
            <>
              <div className="content-card__header">
                <p className="content-card__eyebrow">Quiz</p>
                <h2 className="content-card__title">Simulado Geral</h2>
              </div>
              <div className="content-card__body--quiz">
                <QuizEngine
                  key={quizKey} // Garante o reset do estado interno
                  questions={questoesSessao}
                  checkpoint={checkpoint}
                  onBack={handleBack}
                  onFinished={handleFinished}
                  onMoreQuestions={handleMoreQuestions}
                />
              </div>
            </>
          ) : (
            <>
              <div className="content-card__header">
                <p className="content-card__eyebrow">Quiz</p>
                <h2 className="content-card__title">
                  {checkpoint ? "Continuar Quiz" : "Simulado Geral"}
                </h2>
              </div>
              <div className="content-card__body">
                <div className="quiz-topic__stats">
                  <div className="quiz-topic__stat quiz-topic__stat--rosa">
                    <p className="quiz-topic__stat-number">{usadas.length}</p>
                    <p className="quiz-topic__stat-label">resolvidas</p>
                  </div>
                  <div className="quiz-topic__stat quiz-topic__stat--beige">
                    <p className="quiz-topic__stat-number">{questoes.length - usadas.length}</p>
                    <p className="quiz-topic__stat-label">inéditas</p>
                  </div>
                </div>

                <p className="quiz-topic__preview-label">Prévia do próximo sorteio</p>
                <div className="quiz-topic__preview-list">
                  {questoesSessao.slice(0, 3).map((q, i) => (
                    <div key={q.id} className="quiz-topic__preview-item">
                      <span className="quiz-topic__preview-num">{String(i+1).padStart(2, "0")}</span>
                      <span>{q.question}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="content-card__footer">
                <button className="quiz-topic__start-btn" onClick={handleStart}>
                  {checkpoint ? "Continuar de onde parei →" : "Iniciar rodada de 15 →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}