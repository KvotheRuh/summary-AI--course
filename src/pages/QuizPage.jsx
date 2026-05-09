import { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuizEngine from "../components/QuizEngine";
import questoes from "../data/questoes";
import topicos from "../data/topicos";
import "../styles/QuizPage.css";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const BATCH = 15;

export default function QuizPage() {
  const [mode, setMode] = useState(null);
  const [activeTopicId, setActiveTopicId] = useState(topicos[0].id);
  const [questions, setQuestions] = useState(null);
  const [checkpoint, setCheckpoint] = useState(null);
  const [quizKey, setQuizKey] = useState(0);

  function startRandom() {
    setQuestions(shuffle(questoes).slice(0, BATCH));
    setCheckpoint(null);
    setQuizKey(k => k + 1);
  }

  function startByTopic(id) {
    const pool = questoes.filter((q) => q.topicoId === id);
    if (!pool.length) return;
    setQuestions(shuffle(pool).slice(0, BATCH));
    setCheckpoint(null);
    setQuizKey(k => k + 1);
  }

  function handleBack() {
    setQuestions(null);
    setCheckpoint(null);
    if (mode === "random") {
      setMode(null); // volta para seleção de modo
    }
    // no modo tópico, questions=null já mostra o preview do tópico
  }

  function handleMore() {
    if (mode === "random") {
      startRandom();
    } else {
      const idx = topicos.findIndex(t => t.id === activeTopicId);
      const proximo = topicos[idx + 1];
      if (proximo) {
        setActiveTopicId(proximo.id);
        setQuestions(null); // volta para preview do próximo tópico
      } else {
        setQuestions(null);
        setMode(null); // era o último tópico, volta para seleção de modo
      }
    }
  }

  // ── Tela de seleção de modo ─────────────────────────────
  if (!mode) {
    return (
      <div className="app-shell">
        <div className="main">
          <div className="content-card">
            <div className="content-card__header">
              <p className="content-card__eyebrow">Questões · {questoes.length} no total</p>
              <h2 className="content-card__title">Como quer praticar?</h2>
            </div>
            <div className="content-card__body quiz-mode-body">
              <div className="quiz-mode-intro">
                <p className="quiz-mode-intro__title">Hora de testar seus conhecimentos 🌸</p>
                <p className="quiz-mode-intro__text">
                  Escolha como quer praticar. Você pode embaralhar tudo para uma revisão geral,
                  ou focar em um tópico específico que ainda precisa de atenção.
                </p>
              </div>

              <div className="quiz-mode-grid">
                <button
                  className="quiz-mode-card"
                  onClick={() => { setMode("random"); startRandom(); }}
                >
                  <div className="quiz-mode-card__icon">🔀</div>
                  <p className="quiz-mode-card__title">Aleatório</p>
                  <p className="quiz-mode-card__desc">
                    {BATCH} questões sorteadas de todos os tópicos. Ótimo para revisar de forma geral.
                  </p>
                  <span className="quiz-mode-card__btn">Começar →</span>
                </button>

                <button
                  className="quiz-mode-card"
                  onClick={() => setMode("topico")}
                >
                  <div className="quiz-mode-card__icon">📂</div>
                  <p className="quiz-mode-card__title">Por tópico</p>
                  <p className="quiz-mode-card__desc">
                    Escolha um tópico específico e pratique só as questões dele.
                  </p>
                  <span className="quiz-mode-card__btn">Escolher tópico →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz ativo ──────────────────────────────────────────
  if (questions) {
    const topicoLabel = topicos.find(t => t.id === activeTopicId)?.titulo;
    return (
      <div className="app-shell">
        {mode === "topico" && (
          <Sidebar
            items={topicos}
            activeId={activeTopicId}
            onSelect={(id) => {
              setActiveTopicId(id);
              setQuestions(null);
            }}
          />
        )}
        <div className="main">
          <div className="content-card">
            <div className="content-card__header">
              <p className="content-card__eyebrow">
                {mode === "random" ? "Modo aleatório" : `Tópico · ${topicoLabel}`}
              </p>
              <h2 className="content-card__title">Questões</h2>
            </div>
            <div className="content-card__body content-card__body--quiz">
              <QuizEngine
                key={quizKey}
                questions={questions}
                checkpoint={checkpoint}
                onBack={handleBack}
                onFinished={() => {}}
                onMoreQuestions={handleMore}
                mode={mode}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Seleção de tópico ───────────────────────────────────
  const topicoAtivo = topicos.find((t) => t.id === activeTopicId);
  const questoesDotopico = questoes.filter((q) => q.topicoId === activeTopicId);
  const idx = topicos.findIndex((t) => t.id === activeTopicId);

  return (
    <div className="app-shell">
      <Sidebar
        items={topicos}
        activeId={activeTopicId}
        onSelect={setActiveTopicId}
      />
      <div className="main">
        <div className="content-card">
          <div className="content-card__header">
            <p className="content-card__eyebrow">
              Tópico {String(idx + 1).padStart(2, "0")} · {topicos.length} tópicos
            </p>
            <h2 className="content-card__title">{topicoAtivo?.titulo}</h2>
          </div>

          <div className="content-card__body">
            {questoesDotopico.length === 0 ? (
              <div className="quiz-empty">
                <div className="quiz-empty__icon">📭</div>
                <p className="quiz-empty__title">Sem questões ainda</p>
                <p className="quiz-empty__text">Este tópico ainda não tem questões cadastradas.</p>
              </div>
            ) : (
              <>
                <div className="quiz-topic__stats">
                  <div className="quiz-topic__stat quiz-topic__stat--rosa">
                    <p className="quiz-topic__stat-number">{questoesDotopico.length}</p>
                    <p className="quiz-topic__stat-label">questões disponíveis</p>
                  </div>
                  <div className="quiz-topic__stat quiz-topic__stat--beige">
                    <p className="quiz-topic__stat-number">{Math.min(BATCH, questoesDotopico.length)}</p>
                    <p className="quiz-topic__stat-label">por rodada</p>
                  </div>
                </div>

                <p className="quiz-topic__preview-label">Prévia das questões</p>
                <div className="quiz-topic__preview-list">
                  {questoesDotopico.slice(0, 4).map((q, i) => (
                    <div key={q.id} className="quiz-topic__preview-item">
                      <span className="quiz-topic__preview-num">{String(i + 1).padStart(2, "0")}</span>
                      <span dangerouslySetInnerHTML={{ __html: q.question }} />
                    </div>
                  ))}
                  {questoesDotopico.length > 4 && (
                    <p className="quiz-topic__preview-more">+ {questoesDotopico.length - 4} outras questões</p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="content-card__footer">
            <div className="pagination">
              <button className="pagination__btn" onClick={() => setMode(null)}>
                ← Trocar modo
              </button>
              <button
                className="pagination__btn pagination__btn--primary"
                onClick={() => startByTopic(activeTopicId)}
                disabled={questoesDotopico.length === 0}
              >
                Iniciar questões →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}