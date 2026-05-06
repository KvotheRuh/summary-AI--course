import { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import ResumoPage from "./pages/ResumoPage";
import QuizPage from "./pages/QuizPage";
import FlashcardPage from "./pages/FlashcardPage";
import topicos from "./data/topicos";

export default function App() {
  const [activeTab, setActiveTab] = useState("resumo");
  // Estado global do tópico selecionado
  const [selectedTopicId, setSelectedTopicId] = useState(topicos[0].id);

  // Função para navegar de qualquer lugar para um tópico do resumo
  const navegarParaTopicoNoResumo = (id) => {
    setSelectedTopicId(id);
    setActiveTab("resumo");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === "resumo" && (
        <ResumoPage 
          activeId={selectedTopicId} 
          onSelectTopic={setSelectedTopicId} 
        />
      )}
      
      {activeTab === "flashcards" && (
        <FlashcardPage onNavigate={navegarParaTopicoNoResumo} />
      )}

      {activeTab === "quiz" && (
        <QuizPage onNavigate={navegarParaTopicoNoResumo} />
      )}
    </>
  );
}