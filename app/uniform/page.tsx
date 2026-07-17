import { Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "School Uniform" };

type Row = [string, string];
const APSACS: { summer: Row[]; winter: Row[] } = {
  summer: [["Shirt", "Light grey half-sleeve, school monogram"], ["Trouser", "Navy blue / pleated skirt"], ["Tie", "Green & gold striped"], ["Shoes", "Black leather, white socks"]],
  winter: [["Shirt", "Grey full-sleeve with blazer"], ["Blazer", "Navy with crest pocket badge"], ["Sweater", "Green V-neck pullover"], ["Shoes", "Black leather, grey socks"]],
};
const APSIS: { summer: Row[]; winter: Row[] } = {
  summer: [["Shirt", "White half-sleeve, APSIS monogram"], ["Trouser", "Maroon / pleated skirt"], ["Tie", "Maroon & grey"], ["Shoes", "Black leather, white socks"]],
  winter: [["Shirt", "White full-sleeve with blazer"], ["Blazer", "Maroon with APSIS crest"], ["Sweater", "Grey V-neck pullover"], ["Shoes", "Black leather, grey socks"]],
};

function UniformCard({ img, tag, title, rows }: { img: string; tag: string; title: string; rows: Row[] }) {
  return (
    <div className="streamcard">
      <div className="sc-img" style={{ backgroundImage: `url(${img})` }}><span className={`sc-tag${tag === "Winter" ? " alt" : ""}`}>{tag}</span></div>
      <div className="sc-bd">
        <h3>{title}</h3>
        <div className="prose" style={{ marginTop: 10 }}>
          <ul>{rows.map(([k, v]) => (<li key={k}><b>{k}</b> — {v}</li>))}</ul>
        </div>
      </div>
    </div>
  );
}

export default function UniformPage() {
  return (
    <>
      <PageHero
        eyebrow="Dress code"
        title="School uniform"
        intro="Summer and winter uniform guidelines for both the APSACS and APSIS streams."
        image={BANNER.uniform}
        crumb={[{ label: "School Uniform" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="APSACS stream" title="APSACS · FBISE uniform" />
          <div className="streams">
            <UniformCard img="/hero1.jpg" tag="Summer" title="Summer uniform" rows={APSACS.summer} />
            <UniformCard img="/hero3.jpg" tag="Winter" title="Winter uniform" rows={APSACS.winter} />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="APSIS stream" title="APSIS · Cambridge uniform" />
          <div className="streams">
            <UniformCard img="/hero2.jpg" tag="Summer" title="Summer uniform" rows={APSIS.summer} />
            <UniformCard img="/hero3.jpg" tag="Winter" title="Winter uniform" rows={APSIS.winter} />
          </div>
          <div className="note-box mt2" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Info size={18} strokeWidth={1.8} style={{ flex: "none", marginTop: 2 }} />
            <span>Uniform is available from the authorised campus tailor and approved stockists listed in the prospectus.</span>
          </div>
        </div>
      </section>
    </>
  );
}
