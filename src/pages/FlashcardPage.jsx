import { useState } from "react";
// Importe o useNavigate se estiver usando react-router-dom
// import { useNavigate } from "react-router-dom"; 
import Sidebar from "../components/Sidebar";
import "../styles/FlashcardPage.css";
import flashcards from "../data/flashcards";
import topicos from "../data/topicos"; // Trazemos os tópicos de volta para a Sidebar

// Função para embaralhar o array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardPage() {
  // const navigate = useNavigate(); // Descomente se usar react-router-dom

  const [deck, setDeck]         = useState(() => [...flashcards]);
  const [index, setIndex]       = useState(0);
  const [flipped, setFlipped]   = useState(false);
  const [seen, setSeen]         = useState(new Set());

  // Função que lida com o clique na Sidebar
  function handleSidebarClick(id) {
    // COMO NAVEGAR PARA O RESUMO:
    
    // Opção 1: Se estiver usando react-router-dom
    // navigate(`/resumo?topico=${id}`); 
    
    // Opção 2: Se estiver usando rotas puras (window.location)
    // window.location.href = `/resumo?topico=${id}`;

    // Opção 3: Se estiver mudando abas via estado no componente App.jsx
    // props.mudarPagina('resumo', id); 

    console.log(`Navegar para o resumo do tópico: ${id}`);
    alert(`Aqui você redireciona para o Resumo do tópico ${id}. Adapte conforme o seu sistema de rotas!`);
  }

  function goTo(i) {
    setSeen((s) => new Set([...s, deck[index]?.id]));
    setIndex(i); 
    setFlipped(false);
  }

  function handleFlip() {
    setSeen((s) => new Set([...s, deck[index]?.id]));
    setFlipped((f) => !f);
  }

  const card = deck[index];

  return (
    <div className="app-shell">
      {/* Sidebar voltou! O activeId é null porque não estamos filtrando um tópico específico nos flashcards */}
      <Sidebar items={topicos} activeId={null} onSelect={handleSidebarClick} />

      <div className="main">
        <div className="content-card">
          <div className="content-card__header">
            <p className="content-card__eyebrow">
              Flashcard {index + 1} de {deck.length} · {seen.size} vistos
            </p>
            <h2 className="content-card__title">Todos os Flashcards (Misturados)</h2>
          </div>

          <div className="content-card__body">
            {card ? (
              <>
                {/* Flip card */}
                <div className="fc-scene" onClick={handleFlip}>
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

                {/* Controls */}
                <div className="fc-controls">
                  <button className="fc-controls__btn" onClick={() => goTo(index - 1)} disabled={index === 0}>← Anterior</button>
                  <div className="fc-controls__center">
                    <button className="fc-controls__flip-btn" onClick={handleFlip}>
                      {flipped ? "Ver pergunta" : "Ver resposta"}
                    </button>
                    <span className="fc-controls__counter">{index + 1} / {deck.length}</span>
                  </div>
                  <button className="fc-controls__btn" onClick={() => goTo(index + 1)} disabled={index === deck.length - 1}>Próximo →</button>
                </div>

                {/* Dot strip com flexWrap para não quebrar a tela com muitos flashcards */}
                <div className="fc-dots" style={{ flexWrap: "wrap", justifyContent: "center", gap: "6px" }}>
                  {deck.map((c, i) => {
                    let cls = "fc-dot";
                    if (i === index) cls += " fc-dot--active";
                    else if (seen.has(c.id)) cls += " fc-dot--seen";
                    return <div key={c.id} className={cls} onClick={() => goTo(i)} />;
                  })}
                </div>
              </>
            ) : (
              <p style={{ color: "var(--texto-fraco)", fontSize: "13px", textAlign: "center", paddingTop: "2rem" }}>
                Sem flashcards disponíveis.
              </p>
            )}
          </div>

          <div className="content-card__footer">
            <div className="fc-toolbar">
              <button 
                className="fc-toolbar__btn" 
                onClick={() => { 
                  setDeck(d => shuffle([...d])); 
                  setIndex(0); 
                  setFlipped(false); 
                  setSeen(new Set()); 
                }}
              >
                ↺ Embaralhar
              </button>
              <button 
                className="fc-toolbar__btn" 
                onClick={() => { 
                  setDeck([...flashcards]); 
                  setIndex(0); 
                  setFlipped(false); 
                  setSeen(new Set()); 
                }}
              >
                ↩ Reiniciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}