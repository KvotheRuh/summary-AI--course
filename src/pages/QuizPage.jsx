import { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuizEngine from "../components/QuizEngine";
import "../styles/QuizPage.css";
import topicos from "../data/topicos";
import questoes from "../data/questoes";

const topicosComQuestoes = topicos.filter((t) =>
  questoes.some((q) => q.topicoId === t.id)
);
function countQ(id) { return questoes.filter((q) => q.topicoId === id).length; }

export default function QuizPage() {
  const [activeId, setActiveId] = useState(null);
  const [playing, setPlaying]   = useState(false);

  const topico         = topicosComQuestoes.find((t) => t.id === activeId);
  const questoesTopico = questoes.filter((q) => q.topicoId === activeId);

  function handleSelect(id) { setActiveId(id); setPlaying(false); }

  return (
    <div className="app-shell">
      <Sidebar items={topicosComQuestoes} activeId={activeId} onSelect={handleSelect} />

      <div className="main">
        <div className="content-card">
          {playing ? (
            <>
              <div className="content-card__header">
                <p className="content-card__eyebrow">Quiz</p>
                <h2 className="content-card__title">{topico?.titulo}</h2>
              </div>
              <div className="content-card__body">
                <QuizEngine questions={questoesTopico} onBack={() => setPlaying(false)} />
              </div>
            </>
          ) : !activeId ? (
            <div className="content-card__body quiz-empty">
              <span className="quiz-empty__icon">✏️</span>
              <h2 className="quiz-empty__title">Escolha um tópico</h2>
              <p className="quiz-empty__text">Selecione um tópico na barra lateral para ver as perguntas e iniciar o quiz.</p>
            </div>
          ) : (
            <>
              <div className="content-card__header">
                <p className="content-card__eyebrow">Quiz</p>
                <h2 className="content-card__title">{topico.titulo}</h2>
              </div>
              <div className="content-card__body">
                <div className="quiz-topic__stats">
                  <div className="quiz-topic__stat quiz-topic__stat--rosa">
                    <p className="quiz-topic__stat-number">{countQ(activeId)}</p>
                    <p className="quiz-topic__stat-label">{countQ(activeId) === 1 ? "pergunta" : "perguntas"}</p>
                  </div>
                  <div className="quiz-topic__stat quiz-topic__stat--beige">
                    <p className="quiz-topic__stat-number">~{countQ(activeId)}</p>
                    <p className="quiz-topic__stat-label">min estimados</p>
                  </div>
                </div>
                <p className="quiz-topic__preview-label">Prévia das perguntas</p>
                <div className="quiz-topic__preview-list">
                  {questoesTopico.slice(0, 3).map((q, i) => (
                    <div key={q.id} className="quiz-topic__preview-item">
                      <span className="quiz-topic__preview-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{q.question}</span>
                    </div>
                  ))}
                  {questoesTopico.length > 3 && (
                    <p className="quiz-topic__preview-more">+ {questoesTopico.length - 3} mais...</p>
                  )}
                </div>
              </div>
              <div className="content-card__footer">
                <button className="quiz-topic__start-btn" onClick={() => setPlaying(true)}>
                  Iniciar quiz →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
