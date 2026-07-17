export function Editorial({ rail, children }: { rail: React.ReactNode; children: React.ReactNode }) {
  return <div className="wrap editorial"><aside className="rail">{rail}</aside><div className="maincol">{children}</div></div>;
}
export function FactCard({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="factcard">
      <h4>{title}</h4>
      <ul>{rows.map(([k, v]) => (<li key={k}><span>{k}</span><b>{v}</b></li>))}</ul>
    </div>
  );
}
