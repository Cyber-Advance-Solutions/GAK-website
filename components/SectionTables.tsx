// Activity tables used by the Middle and Senior section pages (rows come from the section's studentLife).
import { ccaRow, type SectionActivity } from "@/lib/mappers/sections";

/** Main page calendar: Date | Event */
export function CalendarTable({ items }: { items: SectionActivity[] }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Date</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {items.map((a, i) => (
            <tr key={a.id + i}>
              <td style={{ color: "var(--gold-600)", fontWeight: 600, whiteSpace: "nowrap" }}>{a.date}</td>
              <td>{a.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Sub-page calendar: Sr. | Date | Event */
export function NumberedCalendarTable({ items }: { items: SectionActivity[] }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
        <tbody>
          {items.map((a, i) => (
            <tr key={a.id + i}><td>{i + 1}</td><td>{a.date}</td><td>{a.label}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Senior sections CCA activities: Date | Class IX | Class X (one cell spanning both when it applies to both) */
export function CcaTable({ items }: { items: SectionActivity[] }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr><th>Date</th><th>Class IX</th><th>Class X</th></tr>
        </thead>
        <tbody>
          {items.map((a, i) => {
            const r = ccaRow(a);
            return (
              <tr key={a.id + i}>
                <td>{r.date}</td>
                {r.ix === null ? (
                  <td colSpan={2} style={{ textAlign: "center" }}>{a.label}</td>
                ) : (
                  <>
                    <td style={r.ix === "---" ? { textAlign: "center" } : undefined}>{r.ix}</td>
                    <td style={r.x === "---" ? { textAlign: "center" } : undefined}>{r.x}</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
