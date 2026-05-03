import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ResumoPage.css";
import topicos from "../data/topicos";

const PER_PAGE = 4; // paragraphs visible per page

export default function ResumoPage() {
  const [activeId, setActiveId] = useState(topicos[0].id);
  const [page, setPage]         = useState(0);

  function handleSelect(id) { setActiveId(id); setPage(0); }

  const topico     = topicos.find((t) => t.id === activeId);
  const idx        = topicos.findIndex((t) => t.id === activeId);
  const paragraphs = topico.conteudo.split("\n\n");
  const totalPages = Math.ceil(paragraphs.length / PER_PAGE);
  const pageParas  = paragraphs.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <div className="app-shell">
      <Sidebar items={topicos} activeId={activeId} onSelect={handleSelect} />

      <div className="main">
        <div className="content-card">
          {/* Header */}
          <div className="content-card__header">
            <p className="content-card__eyebrow">
              Tópico {String(idx + 1).padStart(2, "0")} · {topicos.length} tópicos
            </p>
            {/* Aqui mantemos o título normal, o negrito você ajusta no CSS como combinamos antes! */}
            <h2 className="content-card__title">{topico.titulo}</h2>
          </div>

          {/* Scrollable body */}
          <div className="content-card__body">
            {topico.gif && (
              <>
                <img src={topico.gif} alt={topico.gifLabel || ""} className="resumo__gif" />
                {topico.gifLabel && <p className="resumo__gif-label">{topico.gifLabel}</p>}
              </>
            )}
            
            {/* ✨ A MÁGICA ACONTECE AQUI ✨ */}
            {pageParas.map((p, i) => (
              <p 
                key={i} 
                className="resumo__paragrafo"
                dangerouslySetInnerHTML={{ __html: p }} 
              />
            ))}
            {/* --------------------------- */}

          </div>

          {/* Footer pagination */}
          <div className="content-card__footer">
            <div className="pagination">
              <button
                className="pagination__btn"
                onClick={() => page > 0 ? setPage(p => p - 1) : handleSelect(topicos[idx - 1].id)}
                disabled={page === 0 && idx === 0}
              >
                <span className="pagination__btn-arrow">←</span>
                {page > 0 ? "Anterior" : "Tópico ant."}
              </button>

              <div className="pagination__info">
                <div className="pagination__dots">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <div
                      key={i}
                      className={`pagination__dot${i === page ? " pagination__dot--active" : ""}`}
                      onClick={() => setPage(i)}
                    />
                  ))}
                </div>
                <span className="pagination__page-text">
                  {page + 1} / {totalPages}
                </span>
              </div>

              <button
                className="pagination__btn pagination__btn--primary"
                onClick={() => page < totalPages - 1 ? setPage(p => p + 1) : handleSelect(topicos[idx + 1].id)}
                disabled={page === totalPages - 1 && idx === topicos.length - 1}
              >
                {page < totalPages - 1 ? "Próxima" : "Próx. tópico"}
                <span className="pagination__btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}