import { GraduationCap, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Organogram" };

function Org({ vp, nodes }: { vp: string; nodes: { t: string; s?: string }[] }) {
  return (
    <div className="org">
      <div className="node top"><div className="t">Principal</div><div className="s">Head of Campus</div></div>
      <div className="connector" />
      <div className="node"><div className="t">{vp}</div></div>
      <div className="connector" />
      <div className="row">
        {nodes.map((n) => (
          <div className="branch" key={n.t}>
            <div className="connector up" />
            <div className="node"><div className="t">{n.t}</div>{n.s ? <div className="s">{n.s}</div> : null}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="School organogram"
        intro="How GAK Campus is organised — academic leadership and administrative governance."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="One campus, two clear lines of leadership" />
          <Tabs
            items={[
              {
                label: "Academic",
                panel: (
                  <Org vp="Vice Principal (Academics)" nodes={[
                    { t: "Head — Pre-School", s: "Early Years" },
                    { t: "Head — Middle", s: "Classes VI–VIII" },
                    { t: "Head — Senior", s: "FBISE" },
                    { t: "Head — APSIS", s: "Cambridge" },
                  ]} />
                ),
              },
              {
                label: "Administrative",
                panel: (
                  <Org vp="Vice Principal (Administration)" nodes={[
                    { t: "Accounts & Finance" },
                    { t: "HR & Admin" },
                    { t: "Examinations" },
                    { t: "IT & LMS" },
                  ]} />
                ),
              },
            ]}
          />
          <div className="grid g2" style={{ maxWidth: 560, marginTop: 34 }}>
            <div className="linkcard"><div className="lc-ic"><GraduationCap size={22} strokeWidth={1.8} /></div><div><h4>Academic line</h4><p>Section heads reporting to the Vice Principal (Academics).</p></div></div>
            <div className="linkcard"><div className="lc-ic"><Building2 size={22} strokeWidth={1.8} /></div><div><h4>Administrative line</h4><p>Support departments under the Vice Principal (Administration).</p></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
