import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/FlashcardPage.css";
import flashcards from "../data/flashcards";
import topicos from "../data/topicos";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardPage({ onNavigate }) {
  const [deck, setDeck] = useState(() => shuffle([...flashcards]));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [embaralhado, setEmbaralhado] = useState(false);

  function handleSidebarClick(id) {
    onNavigate(id);
  }

  function handleEmbaralhar() {
    setDeck(shuffle([...flashcards]));
    setIndex(0);
    setFlipped(false);
    setEmbaralhado(true);
    setTimeout(() => setEmbaralhado(false), 2000);
  }

  function goTo(i) {
    if (i >= 0 && i < deck.length) {
      setIndex(i);
      setFlipped(false);
    }
  }

  const card = deck[index];
  const pct = Math.round(((index + 1) / deck.length) * 100);

  return (
    <div className="app-shell">
      <Sidebar items={topicos} activeId={null} onSelect={handleSidebarClick} />

      <div className="main">
        <div className="content-card">
          <div className="content-card__header">
            <p className="content-card__eyebrow">Flashcards</p>
            <h2 className="content-card__title">Modo de Revisão</h2>
          </div>

          <div className="content-card__body fc-main-container">
            {card ? (
              <>
                {/* Texto agradável + botão embaralhar */}
                <div className="fc-intro">
                  <p className="fc-intro__text">
                    {embaralhado
                      ? "✨ Deck embaralhado! Boa revisão!"
                      : "Clique no card para virar. Vá no seu ritmo — repetição é o caminho para fixar o conteúdo!"}
                  </p>
                  <button className="fc-intro__shuffle-btn" onClick={handleEmbaralhar}>
                    {embaralhado ? "Embaralhado! 🎲" : "Embaralhar 🎲"}
                  </button>
                </div>

                {/* Card */}
                <div className="fc-scene" onClick={() => setFlipped(!flipped)}>
                  <div className={`fc-card${flipped ? " fc-card--flipped" : ""}`}>
                    <div className="fc-face fc-face--front">
                      <p className="fc-face__label">Pergunta</p>
                      <p className="fc-face__text" dangerouslySetInnerHTML={{ __html: card.frente }} />
                      <p className="fc-face__hint">clique para revelar</p>
                    </div>
                    <div className="fc-face fc-face--back">
                      <p className="fc-face__label">Resposta</p>
                      <p className="fc-face__text" dangerouslySetInnerHTML={{ __html: card.verso }} />
                    </div>
                  </div>
                </div>

                {/* Controles */}
                <div className="fc-controls">
                  <button
                    className="fc-controls__btn"
                    onClick={(e) => { e.stopPropagation(); goTo(index - 1); }}
                    disabled={index === 0}
                  >←</button>

                  <button
                    className="fc-controls__flip-btn"
                    onClick={(e) => { e.stopPropagation(); setFlipped(!flipped); }}
                  >
                    {flipped ? "Ver Pergunta" : "Ver Resposta"}
                  </button>

                  <button
                    className="fc-controls__btn"
                    onClick={(e) => { e.stopPropagation(); goTo(index + 1); }}
                    disabled={index === deck.length - 1}
                  >→</button>
                </div>

                {/* Contagem bonita */}
                <div className="fc-progress-container">
                  <div className="fc-progress-header">
                    <span className="fc-progress-label">Progresso da sessão</span>
                    <span className="fc-progress-counter">
                      <strong>{index + 1}</strong> de {deck.length}
                      <span className="fc-progress-pct"> · {pct}%</span>
                    </span>
                  </div>

                  <div className="fc-progress-bar-track">
                    <div className="fc-progress-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center">Nenhum flashcard encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}