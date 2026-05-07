import { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuizEngine from "../components/QuizEngine";
import "../styles/QuizPage.css";
import topicos from "../data/topicos";
import questoes from "../data/questoes";

const QUIZ_SIZE = 15;

function sortearComPesos() {
  const pool = [...questoes];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, QUIZ_SIZE);
}

export default function QuizPage({ onNavigate }) {
  const [questoesSessao, setQuestoesSessao] = useState(() => sortearComPesos());
  const [playing, setPlaying] = useState(false);
  const [checkpoint, setCheckpoint] = useState(null);
  const [quizKey, setQuizKey] = useState(0);
  const [embaralhado, setEmbaralhado] = useState(false);

  function handleEmbaralhar() {
    setQuestoesSessao(sortearComPesos());
    setCheckpoint(null);
    setEmbaralhado(true);
    setTimeout(() => setEmbaralhado(false), 2000);
  }

  function handleStart() {
    setCheckpoint(null);
    setPlaying(true);
  }

  function handleBack(savedCheckpoint) {
    setCheckpoint(savedCheckpoint);
    setPlaying(false);
  }

  function handleMoreQuestions() {
    const novas = sortearComPesos();
    setQuestoesSessao(novas);
    setCheckpoint(null);
    setQuizKey(prev => prev + 1);
    setPlaying(true);
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
                  key={quizKey}
                  questions={questoesSessao}
                  checkpoint={checkpoint}
                  onBack={handleBack}
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

                <p className="quiz-topic__intro">
                  {embaralhado
                    ? "✨ Novas questões prontas para você!"
                    : "Cada rodada traz 15 questões sorteadas. Embaralhe quantas vezes quiser até encontrar uma prévia que te agrade!"}
                </p>

                <p className="quiz-topic__preview-label">Prévia do próximo sorteio</p>
                <div className="quiz-topic__preview-list">
                  {questoesSessao.slice(0, 6).map((q, i) => (
                    <div key={q.id} className="quiz-topic__preview-item">
                      <span className="quiz-topic__preview-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{q.question}</span>
                    </div>
                  ))}
                </div>

                <button className="quiz-topic__shuffle-btn" onClick={handleEmbaralhar}>
                  {embaralhado ? "Embaralhado! 🎲" : "Embaralhar questões 🎲"}
                </button>

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