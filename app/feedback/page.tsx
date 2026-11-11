import { ShieldCheck, EyeOff, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Editorial } from "@/components/Editorial";
import PublicForm from "@/components/PublicForm";
import { BANNER } from "@/lib/images";
import { api, asList } from "@/lib/api";
import { getFormConfig } from "@/lib/mappers/careers";

export const metadata = { title: "Feedback & Complaints" };
export const dynamic = "force-dynamic";

/** site-settings "feedbackPage" key (admin: Feedback page) */
type FeedbackPageSettings = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  handlingHeading?: string;
  handlingPoints?: { title: string; description?: string }[];
};

const ICONS = [EyeOff, ShieldCheck, MessageSquare];

export default async function FeedbackPage() {
  const [page, form] = await Promise.all([
    api<FeedbackPageSettings | null>("/site-settings/feedbackPage", null),
    getFormConfig("feedback"),
  ]);
  const points = asList<{ title: string; description?: string }>(page?.handlingPoints);

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow || ""}
        title={page?.heading || "Feedback & complaints"}
        intro={page?.description}
        image={BANNER.feedback}
        crumb={[{ label: "Feedback / Complaints" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Your voice matters" title={form?.heading || "Tell us what's on your mind"} intro={form?.instructions || undefined} />
        </div>
        <Editorial
          rail={
            points.length > 0 ? (
              <div className="factcard">
                <h4>{page?.handlingHeading || "How we handle feedback"}</h4>
                {points.map((p, i) => {
                  const Ic = ICONS[i % ICONS.length];
                  return (
                    <div className="inforow" key={`${p.title}-${i}`}>
                      <div className="ir-ic"><Ic size={20} strokeWidth={1.8} /></div>
                      <div><div className="ir-v">{p.title}</div>{p.description ? <div className="f-meta" style={{ marginTop: 2 }}>{p.description}</div> : null}</div>
                    </div>
                  );
                })}
              </div>
            ) : null
          }
        >
          <PublicForm formKey="feedback" config={form} />
        </Editorial>
      </section>
    </>
  );
}
