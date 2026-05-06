import { useState } from "react";
import "../styles/QuizEngine.css";
import topicos from "../data/topicos";

export default function QuizEngine({
  questions,
  checkpoint,
  onBack,
  onFinished,
  onMoreQuestions,
}) {
  const [currentQ, setCurrentQ] = useState(checkpoint?.currentQ ?? 0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(checkpoint?.score ?? 0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState(checkpoint?.answers ?? []);

  const question = questions[currentQ];

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === question.correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { correct }]);
  }

  function handleNext() {
    if (currentQ + 1 >= questions.length) {
      // Notifica o pai para salvar no localStorage ANTES de mostrar a tela final
      onFinished?.(questions.map((q) => q.id));
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    }
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-result">
        <div className="quiz-result__icon">{pct >= 70 ? "🌸" : "📚"}</div>
        <h2 className="quiz-result__title">Fim da rodada</h2>
        <p className="quiz-result__score">{score}/{questions.length}</p>
        <p className="quiz-result__pct">{pct}% de acerto</p>
        
        <div className="quiz-result__dots">
          {answers.map((a, i) => (
            <div key={i} className={`quiz-result__dot quiz-result__dot--${a.correct ? "correct" : "wrong"}`}>
              {a.correct ? "✓" : "✗"}
            </div>
          ))}
        </div>

        <div className="quiz-result__actions">
          <button className="quiz-result__btn-back" onClick={() => onBack(null)}>Voltar</button>
          <button className="quiz-result__btn-retry" onClick={onMoreQuestions}>Mais 15 questões →</button>
        </div>
      </div>
    );
  }

  const topico = topicos.find((t) => t.id === question.topicoId);

  return (
    <div className="quiz-engine">
      <div className="quiz-engine__body">
        <div className="quiz-engine__progress">
          <button className="quiz-engine__back-btn" onClick={() => onBack({ currentQ, score, answers })}>←</button>
          <div className="quiz-engine__dots">
            {questions.map((_, i) => (
              <div key={i} className={`quiz-engine__dot ${i === currentQ ? 'quiz-engine__dot--current' : i < currentQ ? 'quiz-engine__dot--done' : 'quiz-engine__dot--pending'}`} />
            ))}
          </div>
          <span className="quiz-engine__counter">{currentQ + 1}/{questions.length}</span>
        </div>

        {topico && <div className="quiz-engine__badge">{topico.titulo}</div>}
        <p className="quiz-engine__question-text">{question.question}</p>

        <div className="quiz-engine__options">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className={`quiz-engine__option ${selected === null ? '' : idx === question.correct ? 'quiz-engine__option--correct' : idx === selected ? 'quiz-engine__option--wrong' : ''}`}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
            >
              <span className="quiz-engine__option-dot" />
              <span className="quiz-engine__option-text">{opt}</span>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="quiz-engine__explanation">
            <p className="quiz-engine__explanation-text">{question.explanation}</p>
          </div>
        )}
      </div>

      {selected !== null && (
        <button className="quiz-engine__next-btn" onClick={handleNext}>
          {currentQ + 1 >= questions.length ? "Finalizar" : "Próxima →"}
        </button>
      )}
    </div>
  );
}