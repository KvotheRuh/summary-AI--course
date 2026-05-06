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
  const [deck] = useState(() => shuffle([...flashcards]));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function handleSidebarClick(id) {
    onNavigate(id);
  }

  function goTo(i) {
    if (i >= 0 && i < deck.length) {
      setIndex(i);
      setFlipped(false);
    }
  }

  const card = deck[index];

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
                {/* Cartão com design original mantido */}
                <div className="fc-scene" onClick={() => setFlipped(!flipped)}>
                  <div className={`fc-card${flipped ? " fc-card--flipped" : ""}`}>
                    <div className="fc-face fc-face--front">
                      <p className="fc-face__label">Pergunta</p>
                      <p className="fc-face__text">{card.frente}</p>
                      <p className="fc-face__hint">clique para revelar</p>
                    </div>
                    <div className="fc-face fc-face--back">
                      <p className="fc-face__label">Resposta</p>
                      <p className="fc-face__text">{card.verso}</p>
                    </div>
                  </div>
                </div>

                {/* Controles originais */}
                <div className="fc-controls">
                  <button className="fc-controls__btn" onClick={(e) => { e.stopPropagation(); goTo(index - 1); }} disabled={index === 0}>←</button>
                  <button className="fc-controls__flip-btn" onClick={(e) => { e.stopPropagation(); setFlipped(!flipped); }}>
                    {flipped ? "Ver Pergunta" : "Ver Resposta"}
                  </button>
                  <button className="fc-controls__btn" onClick={(e) => { e.stopPropagation(); goTo(index + 1); }} disabled={index === deck.length - 1}>→</button>
                </div>

                {/* Barra de progresso estilo Quiz inserida abaixo */}
                <div className="fc-progress-container">
                    <div className="quiz-engine__progress">
                        <div className="quiz-engine__dots">
                            {deck.map((_, i) => (
                            <div
                                key={i}
                                className={`quiz-engine__dot ${
                                i === index
                                    ? "quiz-engine__dot--current"
                                    : i < index
                                    ? "quiz-engine__dot--done"
                                    : "quiz-engine__dot--pending"
                                }`}
                                onClick={() => goTo(i)}
                                style={{ cursor: "pointer" }}
                            />
                            ))}
                        </div>
                        <span className="quiz-engine__counter">
                            {index + 1}/{deck.length}
                        </span>
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