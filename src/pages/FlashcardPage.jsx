import { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/FlashcardPage.css";
import flashcardsData from "../data/flashcards";
import topicosData from "../data/topicos";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CardViewer({ deck, onBack }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [embaralhado, setEmbaralhado] = useState(false);
  const [currentDeck, setCurrentDeck] = useState(deck);

  function handleEmbaralhar() {
    setCurrentDeck(shuffle([...deck]));
    setIndex(0);
    setFlipped(false);
    setEmbaralhado(true);
    setTimeout(() => setEmbaralhado(false), 2000);
  }

  function goTo(i) {
    if (i >= 0 && i < currentDeck.length) {
      setIndex(i);
      setFlipped(false);
    }
  }

  const handleFlip = useCallback(() => setFlipped(f => !f), []);

  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.code === "Space")      { e.preventDefault(); handleFlip(); }
      if (e.code === "ArrowLeft")  { e.preventDefault(); goTo(index - 1); }
      if (e.code === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleFlip, index, currentDeck.length]);

  const card = currentDeck[index];
  const pct = Math.round(((index + 1) / currentDeck.length) * 100);

  return (
    <>
      <div className="fc-intro">
        <p className="fc-intro__text">
          {embaralhado
            ? "✨ Deck embaralhado! Boa revisão!"
            : <>Clique ou pressione <kbd className="fc-kbd">Espaço</kbd> para virar · <kbd className="fc-kbd">←</kbd> <kbd className="fc-kbd">→</kbd> para navegar</>}
        </p>
        <button className="fc-intro__shuffle-btn" onClick={handleEmbaralhar}>
          {embaralhado ? "Embaralhado! 🎲" : "Embaralhar 🎲"}
        </button>
      </div>

      <div className="fc-scene" onClick={handleFlip}>
        <div className={`fc-card${flipped ? " fc-card--flipped" : ""}`}>
          <div className="fc-face fc-face--front">
            <p className="fc-face__label">Pergunta</p>
            <p className="fc-face__text" dangerouslySetInnerHTML={{ __html: card.frente }} />
            <p className="fc-face__hint">espaço ou clique para revelar</p>
          </div>
          <div className="fc-face fc-face--back">
            <p className="fc-face__label">Resposta</p>
            <p className="fc-face__text" dangerouslySetInnerHTML={{ __html: card.verso }} />
          </div>
        </div>
      </div>

      <div className="fc-controls">
        <button
          className="fc-controls__btn"
          onClick={(e) => { e.stopPropagation(); goTo(index - 1); }}
          disabled={index === 0}
          title="Anterior (←)"
        >←</button>

        <button
          className="fc-controls__flip-btn"
          onClick={(e) => { e.stopPropagation(); handleFlip(); }}
          title="Virar (Espaço)"
        >
          {flipped ? "Ver Pergunta" : "Ver Resposta"}
        </button>

        <button
          className="fc-controls__btn"
          onClick={(e) => { e.stopPropagation(); goTo(index + 1); }}
          disabled={index === currentDeck.length - 1}
          title="Próximo (→)"
        >→</button>
      </div>

      <div className="fc-progress-container">
        <div className="fc-progress-header">
          <span className="fc-progress-label">Progresso da sessão</span>
          <span className="fc-progress-counter">
            <strong>{index + 1}</strong> de {currentDeck.length}
            <span className="fc-progress-pct"> · {pct}%</span>
          </span>
        </div>
        <div className="fc-progress-bar-track">
          <div className="fc-progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <button className="fc-back-link" onClick={onBack}>
        ← Trocar modo
      </button>
    </>
  );
}

export default function FlashcardPage({ onNavigate, provaId, topicos: topicosProva }) {
  const topicos = topicosProva ?? topicosData;
  const flashcards = provaId
    ? flashcardsData.filter(f => f.provaId === provaId)
    : flashcardsData;
  const [mode, setMode] = useState(null);       // null | "random" | "topico"
  const [activeTopicId, setActiveTopicId] = useState(topicos[0].id);
  const [deck, setDeck] = useState(null);

  function startRandom() {
    setDeck(shuffle([...flashcards]));
  }

  function startByTopic(id) {
    const pool = flashcards.filter(f => f.topicoId === id);
    setDeck(shuffle([...pool]));
  }

  function handleBack() {
    setDeck(null);
    setMode(null);
  }

  // ── Tela de seleção de modo ─────────────────────────────
  if (!mode) {
    return (
      <div className="app-shell">
        <div className="main">
          <div className="content-card">
            <div className="content-card__header">
              <p className="content-card__eyebrow">Flashcards · {flashcards.length} cards no total</p>
              <h2 className="content-card__title">Como quer revisar?</h2>
            </div>
            <div className="content-card__body fc-mode-body">
              <div className="fc-mode-intro">
                <p className="fc-mode-intro__title">Hora de fixar o conteúdo 🌸</p>
                <p className="fc-mode-intro__text">
                  Os flashcards são ótimos para revisar de forma ativa. Escolha embaralhar tudo
                  para uma revisão geral, ou foque em um tópico que ainda precisa de atenção.
                </p>
              </div>

              <div className="fc-mode-grid">
                <button
                  className="fc-mode-card"
                  onClick={() => { setMode("random"); startRandom(); }}
                >
                  <div className="fc-mode-card__icon">🔀</div>
                  <p className="fc-mode-card__title">Aleatório</p>
                  <p className="fc-mode-card__desc">
                    Todos os {flashcards.length} cards embaralhados. Perfeito para uma revisão completa.
                  </p>
                  <span className="fc-mode-card__btn">Começar →</span>
                </button>

                <button
                  className="fc-mode-card"
                  onClick={() => setMode("topico")}
                >
                  <div className="fc-mode-card__icon">📂</div>
                  <p className="fc-mode-card__title">Por tópico</p>
                  <p className="fc-mode-card__desc">
                    Escolha um tópico específico e revise só os cards dele.
                  </p>
                  <span className="fc-mode-card__btn">Escolher tópico →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Modo aleatório ativo ────────────────────────────────
  if (mode === "random" && deck) {
    return (
      <div className="app-shell">
        <div className="main">
          <div className="content-card">
            <div className="content-card__header">
              <p className="content-card__eyebrow">Modo aleatório · {deck.length} cards</p>
              <h2 className="content-card__title">Revisão Geral</h2>
            </div>
            <div className="content-card__body fc-main-container">
              <CardViewer deck={deck} onBack={handleBack} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Seleção de tópico ───────────────────────────────────
  if (mode === "topico" && !deck) {
    const topicoAtivo = topicos.find(t => t.id === activeTopicId);
    const cardsDotopico = flashcards.filter(f => f.topicoId === activeTopicId);
    const idx = topicos.findIndex(t => t.id === activeTopicId);

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
              {cardsDotopico.length === 0 ? (
                <div className="quiz-empty">
                  <div className="quiz-empty__icon">📭</div>
                  <p className="quiz-empty__title">Sem flashcards ainda</p>
                  <p className="quiz-empty__text">Este tópico ainda não tem flashcards cadastrados.</p>
                </div>
              ) : (
                <>
                  <div className="quiz-topic__stats">
                    <div className="quiz-topic__stat quiz-topic__stat--rosa">
                      <p className="quiz-topic__stat-number">{cardsDotopico.length}</p>
                      <p className="quiz-topic__stat-label">cards disponíveis</p>
                    </div>
                    <div className="quiz-topic__stat quiz-topic__stat--beige">
                      <p className="quiz-topic__stat-number">{cardsDotopico.length}</p>
                      <p className="quiz-topic__stat-label">nesta sessão</p>
                    </div>
                  </div>

                  <p className="quiz-topic__preview-label">Prévia dos cards</p>
                  <div className="quiz-topic__preview-list">
                    {cardsDotopico.slice(0, 4).map((f, i) => (
                      <div key={f.id} className="quiz-topic__preview-item">
                        <span className="quiz-topic__preview-num">{String(i + 1).padStart(2, "0")}</span>
                        <span dangerouslySetInnerHTML={{ __html: f.frente }} />
                      </div>
                    ))}
                    {cardsDotopico.length > 4 && (
                      <p className="quiz-topic__preview-more">+ {cardsDotopico.length - 4} outros cards</p>
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
                  disabled={cardsDotopico.length === 0}
                >
                  Iniciar flashcards →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Modo por tópico ativo ───────────────────────────────
  if (mode === "topico" && deck) {
    const topicoAtivo = topicos.find(t => t.id === activeTopicId);
    return (
      <div className="app-shell">
        <Sidebar
          items={topicos}
          activeId={activeTopicId}
          onSelect={(id) => {
            setActiveTopicId(id);
            setDeck(null);
          }}
        />
        <div className="main">
          <div className="content-card">
            <div className="content-card__header">
              <p className="content-card__eyebrow">Por tópico · {deck.length} cards</p>
              <h2 className="content-card__title">{topicoAtivo?.titulo}</h2>
            </div>
            <div className="content-card__body fc-main-container">
              <CardViewer deck={deck} onBack={handleBack} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}