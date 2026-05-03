import "../styles/global.css";

export default function Sidebar({ label = "Tópicos", items, activeId, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <p className="sidebar__label">{label}</p>
      </div>
      <div className="sidebar__list">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`sidebar__item${item.id === activeId ? " sidebar__item--active" : ""}`}
          >
            <span className="sidebar__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="sidebar__name">{item.titulo}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
