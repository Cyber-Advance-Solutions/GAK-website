export default function ActivityCard({ img, tag, title, desc }: { img: string; tag?: string; title: string; desc?: string }) {
  return (
    <div className="streamcard">
      <div className="sc-img" style={{ backgroundImage: `url(${img})` }}>{tag ? <span className="sc-tag">{tag}</span> : null}</div>
      <div className="sc-bd"><h3 style={{ fontSize: "1.08rem" }}>{title}</h3>{desc ? <p>{desc}</p> : null}</div>
    </div>
  );
}
