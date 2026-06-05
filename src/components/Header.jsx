import "../styles/Header.css";

const TABS = [
  { key: "resumo",     label: "Resumo",     icon: "📖" },
  { key: "quiz",       label: "Quiz",       icon: "✏️"  },
  { key: "flashcards", label: "Flashcards", icon: "🗂️" },
];

export default function Header({ activeTab, onTabChange, provaAtiva, onTrocarProva }) {
  return (
    <>
      <header className="header">
        <div className="header__brand">
          <div className="header__dot" />
          <span className="header__title">Inteligência Artificial</span>
        </div>
        {provaAtiva && (
          <button className="header__prova-btn" onClick={onTrocarProva}>
            <span className="header__prova-label">{provaAtiva.titulo}</span>
            <span className="header__prova-trocar">Trocar</span>
          </button>
        )}
      </header>

      <nav className="tab-nav">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`tab-nav__item${activeTab === tab.key ? " tab-nav__item--active" : ""}`}
          >
            <span className="tab-nav__icon">{tab.icon}</span>
            <span className="tab-nav__label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}