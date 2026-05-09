import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ResumoPage.css";
import topicos from "../data/topicos";

const PER_PAGE = 4;

export default function ResumoPage({ activeId, onSelectTopic }) {
  const [page, setPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reseta estados ao trocar de tópico
  useEffect(() => {
    setPage(0);
    setCurrentSlide(0);
  }, [activeId]);

  const topico = topicos.find((t) => t.id === activeId) || topicos[0];
  const idx = topicos.findIndex((t) => t.id === activeId);

  // Lógica para fragmentação de texto (Modo Padrão)
  const paragraphs = topico.conteudo ? topico.conteudo.split("\n\n") : [];
  const totalPages = Math.ceil(paragraphs.length / PER_PAGE);
  const pageParas = paragraphs.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <div className="app-shell">
      <Sidebar items={topicos} activeId={activeId} onSelect={onSelectTopic} />

      <div className="main">
        <div className="content-card">
          <div className="content-card__header">
            <p className="content-card__eyebrow">
              Tópico {String(idx + 1).padStart(2, "0")} · {topicos.length} tópicos
            </p>
            <h2 className="content-card__title">{topico.titulo}</h2>
          </div>

          <div className="content-card__body">
            {topico.slides ? (
              /* ── MODO SLIDE ── */
              <div className="slide-system">
                <div className="slide-system__display">
                  
                  {/* LEGENDA NO TOPO (Movida conforme solicitado) */}
                  <div className="slide-system__caption">
                    <p
                      className="resumo__paragrafo"
                      dangerouslySetInnerHTML={{ __html: topico.slides[currentSlide].legenda }}
                    />
                  </div>

                  {/* CONTAINER DA IMAGEM + SETAS SOBREPOSTAS */}
                  <div className="slide-img-row">
                    <button
                      className="slide-arrow left"
                      onClick={() => setCurrentSlide(s => s - 1)}
                      disabled={currentSlide === 0}
                    >
                      ‹
                    </button>

                    <img
                      src={topico.slides[currentSlide].img}
                      alt={`Passo ${currentSlide + 1}`}
                      className="resumo__gif"
                    />

                    <button
                      className="slide-arrow right"
                      onClick={() => setCurrentSlide(s => s + 1)}
                      disabled={currentSlide === topico.slides.length - 1}
                    >
                      ›
                    </button>
                  </div>

                  {/* BOLINHAS DE PROGRESSO */}
                  <div className="slide-dots">
                    {topico.slides.map((_, i) => (
                      <div
                        key={i}
                        className={`slide-dot${i === currentSlide ? " active" : ""}`}
                        onClick={() => setCurrentSlide(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── MODO TEXTO PADRÃO ── */
              <>
                {topico.gif && (
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <img src={topico.gif} alt="" className="resumo__gif" />
                    {topico.gifLabel && <p className="resumo__gif-label">{topico.gifLabel}</p>}
                  </div>
                )}

                {pageParas.map((p, i) => (
                  <p 
                    key={i} 
                    className="resumo__paragrafo" 
                    dangerouslySetInnerHTML={{ __html: p }} 
                  />
                ))}
              </>
            )}
          </div>

          <div className="content-card__footer">
            <div className="pagination">
              <button
                className="pagination__btn"
                onClick={() => (page > 0 ? setPage(p => p - 1) : onSelectTopic(topicos[idx - 1]?.id))}
                disabled={page === 0 && idx === 0}
              >
                ← {page > 0 ? "Anterior" : "Tópico ant."}
              </button>

              <div className="pagination__info">
                <div className="pagination__dots">
                  {!topico.slides &&
                    Array.from({ length: totalPages }).map((_, i) => (
                      <div
                        key={i}
                        className={`pagination__dot${i === page ? " pagination__dot--active" : ""}`}
                        onClick={() => setPage(i)}
                      />
                    ))}
                </div>
              </div>

              <button
                className="pagination__btn pagination__btn--primary"
                onClick={() =>
                  !topico.slides && page < totalPages - 1
                    ? setPage(p => p + 1)
                    : onSelectTopic(topicos[idx + 1]?.id)
                }
                disabled={
                  (!topico.slides && page === totalPages - 1 && idx === topicos.length - 1) ||
                  (topico.slides && idx === topicos.length - 1)
                }
              >
                {!topico.slides && page < totalPages - 1 ? "Próxima" : "Próx. tópico"} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}