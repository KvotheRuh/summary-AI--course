import { useState } from "react";
import "../styles/QuizEngine.css";
import topicos from "../data/topicos";

export default function QuizEngine({ questions, onBack }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore]       = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers]   = useState([]);

  const question = questions[currentQ];

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === question.correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { correct: idx === question.correct }]);
  }

  function handleNext() {
    if (currentQ + 1 >= questions.length) setFinished(true);
    else { setCurrentQ((q) => q + 1); setSelected(null); }
  }

  function handleRestart() {
    setCurrentQ(0); setSelected(null);
    setScore(0); setFinished(false); setAnswers([]);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const msg = pct >= 80 ? "Excelente resultado!" : pct >= 60 ? "Bom trabalho, revise os erros." : "Continue estudando!";
    return (
      <div className="quiz-result">
        <div className="quiz-result__icon">{pct >= 80 ? "🌸" : pct >= 60 ? "🌼" : "📚"}</div>
        <h2 className="quiz-result__title">Quiz concluído</h2>
        <p className="quiz-result__msg">{msg}</p>
        <p className="quiz-result__score">{score}<span className="quiz-result__score-total">/{questions.length}</span></p>
        <p className="quiz-result__pct">{pct}% de acerto</p>
        <div className="quiz-result__dots">
          {answers.map((a, i) => (
            <div key={i} className={`quiz-result__dot quiz-result__dot--${a.correct ? "correct" : "wrong"}`}>
              {a.correct ? "✓" : "✗"}
            </div>
          ))}
        </div>
        <div className="quiz-result__actions">
          <button className="quiz-result__btn-back" onClick={onBack}>← Voltar</button>
          <button className="quiz-result__btn-retry" onClick={handleRestart}>Tentar novamente</button>
        </div>
      </div>
    );
  }

  const topico = topicos.find((t) => t.id === question.topicoId);

  function optionClass(idx) {
    if (selected === null) return "quiz-engine__option";
    if (idx === question.correct) return "quiz-engine__option quiz-engine__option--correct";
    if (idx === selected) return "quiz-engine__option quiz-engine__option--wrong";
    return "quiz-engine__option";
  }

  return (
    <div className="quiz-engine">
      <div className="quiz-engine__body">
        <div className="quiz-engine__progress">
          <button className="quiz-engine__back-btn" onClick={onBack}>←</button>
          <div className="quiz-engine__dots">
            {questions.map((_, i) => {
              let cls = "quiz-engine__dot ";
              if (i === currentQ) cls += "quiz-engine__dot--current";
              else if (i < currentQ) cls += "quiz-engine__dot--done";
              else cls += "quiz-engine__dot--pending";
              return <div key={i} className={cls} />;
            })}
          </div>
          <span className="quiz-engine__counter">{currentQ + 1}/{questions.length}</span>
        </div>

        {topico && <div className="quiz-engine__badge">{topico.titulo}</div>}
        <p className="quiz-engine__question-text">{question.question}</p>

        <div className="quiz-engine__options">
          {question.options.map((opt, idx) => (
            <button key={idx} className={optionClass(idx)} onClick={() => handleSelect(idx)} disabled={selected !== null}>
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
          {currentQ + 1 >= questions.length ? "Ver resultado" : "Próxima →"}
        </button>
      )}
    </div>
  );
}
