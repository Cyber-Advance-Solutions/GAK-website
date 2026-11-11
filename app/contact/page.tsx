import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Editorial } from "@/components/Editorial";
import PublicForm from "@/components/PublicForm";
import { BANNER } from "@/lib/images";
import { getContactSettings } from "@/lib/mappers/contact";
import { getFormConfig } from "@/lib/mappers/careers";

export const metadata = { title: "Contact Us" };
export const dynamic = "force-dynamic";

/** "first value" + the rest as smaller lines, like the original hand-written info rows */
function Lines({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <>
      {items[0]}
      {items.slice(1).map((t) => (
        <span key={t}>{t}</span>
      ))}
    </>
  );
}

export default async function ContactPage() {
  const [c, form] = await Promise.all([getContactSettings(), getFormConfig("contact")]);

  // First entry shows plain, later ones as "Label: value"
  const labelled = (list: { label?: string; value?: string }[], plainFirst = true) =>
    list.filter((x) => x.value).map((x, i) => (i === 0 && plainFirst ? String(x.value) : x.label ? `${x.label}: ${x.value}` : String(x.value)));

  const info: [React.ReactNode, string, string[]][] = [
    [<Phone key="p" size={20} strokeWidth={1.8} />, c.phones[0]?.label || "Phone", labelled(c.phones)],
    [<Mail key="m" size={20} strokeWidth={1.8} />, c.emails[0]?.label || "Email", c.emails.map((e) => e.value).filter(Boolean)],
    [<MapPin key="l" size={20} strokeWidth={1.8} />, "Campus", c.addressLines],
    [<Clock key="c" size={20} strokeWidth={1.8} />, "Office hours", c.officeHours.filter((h) => h.label || h.value).map((h, i) => (i === 0 ? `${h.label ?? ""}, ${h.value ?? ""}` : `${h.label ?? ""}: ${h.value ?? ""}`).replace(/^, |, $|^: |: $/g, ""))],
  ];

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow || ""}
        title={c.heading || "Contact us"}
        intro={c.introText}
        image={BANNER.contact}
        crumb={[{ label: "Contact Us" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow={c.instructions || ""} title={form?.heading || "Send us a message"} intro={form?.instructions || undefined} />
        </div>
        <Editorial
          rail={
            <div className="factcard">
              <h4>{c.directHeading || "Reach us directly"}</h4>
              {info
                .filter(([, , v]) => v.length > 0)
                .map(([ic, k, v]) => (
                  <div className="inforow" key={k}>
                    <div className="ir-ic">{ic}</div>
                    <div>
                      <div className="ir-k">{k}</div>
                      <div className="ir-v"><Lines items={v} /></div>
                    </div>
                  </div>
                ))}
              {c.mapEmbedUrl ? (
                <div className="mapph p-0" style={{ padding: "0px" }}>
                  <div style={{ height: "100%" }}>
                    <iframe
                      src={c.mapEmbedUrl}
                      style={{ border: "0", height: "100%", width: "100%" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>
              ) : null}
              {c.mapLinkUrl ? (
                <p style={{ marginTop: 10 }}>
                  <a href={c.mapLinkUrl} target="_blank" rel="noopener noreferrer" className="dl-btn">Open in Google Maps</a>
                </p>
              ) : null}
            </div>
          }
        >
          <PublicForm formKey="contact" config={form} />
        </Editorial>
      </section>
    </>
  );
}
