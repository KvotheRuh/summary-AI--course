import { useRef, useEffect } from "react";
import "../styles/global.css";

export default function Sidebar({ label = "Tópicos", items, activeId, onSelect }) {
  const listRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current && listRef.current) {
      const list = listRef.current;
      const item = activeRef.current;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const listWidth = list.offsetWidth;
      list.scrollTo({
        left: itemLeft - listWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <p className="sidebar__label">{label}</p>
      </div>
      <div className="sidebar__list" ref={listRef}>
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={item.id === activeId ? activeRef : null}
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