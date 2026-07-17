"use client";
import { useEffect, useState } from "react";
export default function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [items]);
  return (
    <div className="subnav"><div className="wrap subnav-in">
      {items.map((i) => (
        <a key={i.id} href={`#${i.id}`} className={active === i.id ? "active" : ""}>{i.label}</a>
      ))}
    </div></div>
  );
}
