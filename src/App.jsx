import { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import ResumoPage from "./pages/ResumoPage";
import QuizPage from "./pages/QuizPage";
import FlashcardPage from "./pages/FlashcardPage";
import ProvaSelectPage from "./pages/ProvaSelectPage";
import topicos, { provas } from "./data/topicos";

export default function App() {
  const [activeProvaId, setActiveProvaId] = useState(null); // null = tela de seleção
  const [activeTab, setActiveTab] = useState("resumo");
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  function handleSelectProva(id) {
    const topicosProva = topicos.filter(t => t.provaId === id);
    setSelectedTopicId(topicosProva[0]?.id ?? null);
    setActiveProvaId(id);
    setActiveTab("resumo");
  }

  function handleTabChange(tab) {
    // Ao trocar de aba, garante que o tópico selecionado é da prova ativa
    const topicosProva = topicos.filter(t => t.provaId === activeProvaId);
    if (topicosProva.length > 0 && !topicosProva.find(t => t.id === selectedTopicId)) {
      setSelectedTopicId(topicosProva[0].id);
    }
    setActiveTab(tab);
  }

  const navegarParaTopicoNoResumo = (id) => {
    setSelectedTopicId(id);
    setActiveTab("resumo");
  };

  // ── Tela de seleção de prova ────────────────────────────
  if (!activeProvaId) {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <ProvaSelectPage onSelectProva={handleSelectProva} />
      </>
    );
  }

  const provaAtiva = provas.find(p => p.id === activeProvaId);
  const topicosProva = topicos.filter(t => t.provaId === activeProvaId);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        provaAtiva={provaAtiva}
        onTrocarProva={() => setActiveProvaId(null)}
      />

      {activeTab === "resumo" && (
        <ResumoPage
          activeId={selectedTopicId}
          onSelectTopic={setSelectedTopicId}
          topicos={topicosProva}
        />
      )}

      {activeTab === "flashcards" && (
        <FlashcardPage
          onNavigate={navegarParaTopicoNoResumo}
          provaId={activeProvaId}
          topicos={topicosProva}
        />
      )}

      {activeTab === "quiz" && (
        <QuizPage
          onNavigate={navegarParaTopicoNoResumo}
          provaId={activeProvaId}
          topicos={topicosProva}
        />
      )}
    </>
  );
}