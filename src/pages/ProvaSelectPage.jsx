import { provas } from "../data/topicos";
import "../styles/ProvaSelectPage.css";

export default function ProvaSelectPage({ onSelectProva }) {
  return (
    <div className="prova-select">
      <div className="prova-select__inner">
        <div className="prova-select__header">
          <div className="prova-select__dot" />
          <p className="prova-select__eyebrow">Inteligência Artificial</p>
          <h1 className="prova-select__title">Por onde quer começar?</h1>
          <p className="prova-select__subtitle">
            Selecione a prova que deseja estudar. Cada uma contém resumos, flashcards e questões organizados por tópico.
          </p>
        </div>

        <div className="prova-select__grid">
          {provas.map((prova) => (
            <button
              key={prova.id}
              className={`prova-card${prova.emBreve ? " prova-card--em-breve" : ""}`}
              onClick={() => !prova.emBreve && onSelectProva(prova.id)}
              disabled={prova.emBreve}
            >
              <div className="prova-card__emoji">{prova.emoji}</div>
              <div className="prova-card__content">
                <p className="prova-card__title">{prova.titulo}</p>
                <p className="prova-card__desc">{prova.descricao}</p>
              </div>
              {prova.emBreve ? (
                <span className="prova-card__badge prova-card__badge--breve">Em breve</span>
              ) : (
                <span className="prova-card__badge prova-card__badge--estudar">Estudar →</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}