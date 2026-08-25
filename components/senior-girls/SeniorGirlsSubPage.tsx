import Link from "next/link";
import { ArrowRight, Building2, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS } from "@/lib/data";
import {
  SECTION_HEAD,
  DEPUTY_HEAD,
  SUBJECT_COORDINATORS,
  DEPARTMENTS,
  FACILITIES_CAMPUS,
  FACILITIES_ACADEMIC,
  SENIOR_GIRLS_SUBPAGES,
  type SeniorGirlsSub,
} from "@/lib/senior-girls-data";

function SectionBody({ slug }: { slug: string }) {
  switch (slug) {
    case "deputy-section-heads":
      return (
        <div className="staffgrid">
          <StaffCard s={DEPUTY_HEAD} />
        </div>
      );

    case "subject-coordinators":
      return (
        <div className="staffgrid">
          {SUBJECT_COORDINATORS.map((s) => (
            <StaffCard key={s.name} s={s} />
          ))}
        </div>
      );

    case "faculty-by-department":
      return (
        <>
          {DEPARTMENTS.map((d) => (
            <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
              <h3>{d.name}</h3>
              <div className="staffgrid">
                {d.teachers.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
              </div>
            </div>
          ))}
        </>
      );

    case "apsacs-academic-schedule-ix-x":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>Class IX</th>
                <th>Class X</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2<sup>nd</sup>, 3<sup>rd</sup> April, 2026</td><td>Teacher&rsquo;s Preparation Days</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>28<sup>th</sup>, 29<sup>th</sup> April, 2026</td><td style={{ textAlign: "center" }}>---</td><td>Teacher&rsquo;s Preparation Days</td></tr>
              <tr><td>4<sup>th</sup> May, 2026</td><td>Orientation Day for Parents</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>6<sup>th</sup> May, 2026</td><td>New Academic Session Begins</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>11<sup>th</sup> – 20<sup>th</sup> May, 2026</td><td>Class Assessment I</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>25<sup>th</sup> – 29<sup>th</sup> May, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Eid ul Azha Holidays</td></tr>
              <tr><td>6<sup>th</sup> June, 2026</td><td>PTM &amp; Result</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>15<sup>th</sup> June – 12<sup>th</sup> July 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Summer Vacations</td></tr>
              <tr><td>13<sup>th</sup> July 2026</td><td colSpan={2} style={{ textAlign: "center" }}>School Reopens after Summer Vacations</td></tr>
              <tr><td>27<sup>th</sup> July – 5<sup>th</sup> August 2026</td><td>Class Assessment II</td><td>Class Assessment I</td></tr>
              <tr><td>22<sup>nd</sup> August 2026</td><td>PTM &amp; Result</td><td>PTM &amp; Result</td></tr>
              <tr><td>7<sup>th</sup> – 16<sup>th</sup> September, 2026</td><td>Class Assessment III</td><td>Class Assessment II</td></tr>
              <tr><td>26<sup>th</sup> September, 2026</td><td>PTM &amp; Result</td><td>PTM &amp; Result</td></tr>
              <tr><td>1<sup>st</sup> October – 20<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
              <tr><td>23<sup>rd</sup> October – 7<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>First Term Examination</td></tr>
              <tr><td>10<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Second Term Begins</td></tr>
              <tr><td>14<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>28<sup>th</sup> December, 2026 – 10<sup>th</sup> January 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Winter Break</td></tr>
              <tr><td>11<sup>th</sup> January, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>School Reopens after Winter Break</td></tr>
              <tr><td>18<sup>th</sup> January – 4<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
              <tr><td>8<sup>th</sup> – 20<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Pre Board Examination</td></tr>
              <tr><td>22<sup>nd</sup> – 26<sup>th</sup> February 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Result Preparation Days</td></tr>
              <tr><td>22<sup>nd</sup> – 12<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Prep Leave for FBISE Examinations</td></tr>
              <tr><td>27<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>10<sup>th</sup> – 12<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Eid ul Fitr Holidays</td></tr>
              <tr><td>17<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>FBISE Examination (Tentative)</td></tr>
            </tbody>
          </table>
        </div>
      );

    case "apsacs-academic-calendar-xi-xii":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>Class XI – XII</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>16<sup>th</sup>, 17<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Teacher&rsquo;s Preparation Day</td></tr>
              <tr><td>18<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Orientation Day for Parents (only XI)</td></tr>
              <tr><td>20<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>New Academic Session Begins</td></tr>
              <tr><td>31<sup>st</sup> August – 8<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Class Assessment I</td></tr>
              <tr><td>12<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>19<sup>th</sup> – 27<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Class Assessment II</td></tr>
              <tr><td>31<sup>st</sup> October, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>30<sup>th</sup> November – 4<sup>th</sup> December 2026</td><td style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
              <tr><td>7<sup>th</sup> – 18<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>1<sup>st</sup> Term Examination</td></tr>
              <tr><td>21<sup>st</sup> December, 2026</td><td style={{ textAlign: "center" }}>2<sup>nd</sup> Term Begins</td></tr>
              <tr><td>24<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>28<sup>th</sup> December, 2026 – 10<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>Winter Break</td></tr>
              <tr><td>11<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>School Reopens</td></tr>
              <tr><td>22<sup>nd</sup> February – 9<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
              <tr><td>10<sup>th</sup> – 12<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Eid ul Fitr Holidays</td></tr>
              <tr><td>15<sup>th</sup> – 26<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Preboard Examination</td></tr>
              <tr><td>29<sup>th</sup> March – 2<sup>nd</sup> April, 2027</td><td style={{ textAlign: "center" }}>Result Preparation Days</td></tr>
              <tr><td>29<sup>th</sup> March – 18<sup>th</sup> April, 2027</td><td style={{ textAlign: "center" }}>Prep Leave for FBISE Examinations</td></tr>
              <tr><td>3<sup>rd</sup> April, 2027</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
              <tr><td>19<sup>th</sup> April, 2027</td><td style={{ textAlign: "center" }}>FBISE Examination (Tentative)</td></tr>
            </tbody>
          </table>
        </div>
      );

    case "cca-activities":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>Class IX</th>
                <th>Class X</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>22<sup>nd</sup> April, 2026</td><td>Investiture Ceremony</td><td style={{ textAlign: "center" }}>---</td></tr>
              <tr><td>1<sup>st</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Labor Day</td></tr>
              <tr><td>6<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Contagious Disease Awareness Day</td></tr>
              <tr><td>10<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Marka-e-Haq</td></tr>
              <tr><td>15<sup>th</sup> – 16<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Literature Festival</td></tr>
              <tr><td>20<sup>th</sup> May, 2026</td><td style={{ textAlign: "center" }}>---</td><td>Investiture Ceremony</td></tr>
              <tr><td>18<sup>th</sup> – 22<sup>nd</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>SDGs Awareness Week</td></tr>
              <tr><td>20<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Takbeer</td></tr>
              <tr><td>24–25<sup>th</sup> June, 2026 Ashura</td><td colSpan={2} style={{ textAlign: "center" }}>24–25<sup>th</sup> June, 2026 Ashura</td></tr>
              <tr><td>5<sup>th</sup> August 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Investiture Ceremony</td></tr>
              <tr><td>12<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Youth Day</td></tr>
              <tr><td>14<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Independence Day</td></tr>
              <tr><td>21<sup>st</sup> – 22<sup>nd</sup> August 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Literature Festival</td></tr>
              <tr><td>25<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>12 Rabi ul Awal</td></tr>
              <tr><td>6<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Defense Day / Youm e Shuhada</td></tr>
              <tr><td>8<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Literacy Day</td></tr>
              <tr><td>21<sup>st</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Peace Day</td></tr>
              <tr><td>28<sup>th</sup> September – 3<sup>rd</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Intra-Regional Sports Competition (G-III)</td></tr>
              <tr><td>30<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Mega Naat &amp; Qirat Competition</td></tr>
              <tr><td>3<sup>rd</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>APSACS Foundation Day</td></tr>
              <tr><td>5<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>World Teachers Day</td></tr>
              <tr><td>7<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Parliamentary Style Debate</td></tr>
              <tr><td>10<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>World Mental Health Day</td></tr>
              <tr><td>15<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Anti-Drug Awareness Day</td></tr>
              <tr><td>9<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Iqbal Day</td></tr>
              <tr><td>16<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Day of Tolerance</td></tr>
              <tr><td>16<sup>th</sup> – 21<sup>st</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Inter Zonal Sports Competition</td></tr>
              <tr><td>23<sup>rd</sup> – 27<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Civic Awareness and Community Service Week</td></tr>
              <tr><td>1<sup>st</sup> – 4<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Science &amp; Technology Week</td></tr>
              <tr><td>3<sup>rd</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Day of Persons with Disabilities</td></tr>
              <tr><td>11<sup>th</sup> – 13<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>AMUN</td></tr>
              <tr><td>16<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Qoumi Azm-e-Taleem</td></tr>
              <tr><td>25<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Quaid&rsquo;s Day</td></tr>
              <tr><td>11<sup>th</sup> – 16<sup>th</sup> January, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>APSACS Sports Championship (G III)</td></tr>
              <tr><td>5<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Kashmir Day</td></tr>
            </tbody>
          </table>
        </div>
      );

    case "cca-plan":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>CCA Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>29<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Contagious Disease Awareness Day</td></tr>
              <tr><td>5<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>Investiture Ceremony</td></tr>
              <tr><td>12<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>International Youth Day</td></tr>
              <tr><td>14<sup>th</sup> August 2026</td><td style={{ textAlign: "center" }}>Independence Day</td></tr>
              <tr><td>21<sup>st</sup> – 22<sup>nd</sup> August, 2026</td><td style={{ textAlign: "center" }}>Literature Festival</td></tr>
              <tr><td>24<sup>th</sup> – 28<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>SDGs Awareness Week</td></tr>
              <tr><td>25<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>12 Rabi ul Awal</td></tr>
              <tr><td>6<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Defense Day / Youm e Shuhada</td></tr>
              <tr><td>8<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>International Literacy Day</td></tr>
              <tr><td>21<sup>st</sup> September, 2026</td><td style={{ textAlign: "center" }}>International Peace Day</td></tr>
              <tr><td>28<sup>th</sup> September – 3<sup>rd</sup> October, 2026</td><td style={{ textAlign: "center" }}>Intra-Regional Sports Competition (G-III)</td></tr>
              <tr><td>30<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Mega Naat &amp; Qirat Competition</td></tr>
              <tr><td>3<sup>rd</sup> October, 2026</td><td style={{ textAlign: "center" }}>APSACS Foundation Day</td></tr>
              <tr><td>5<sup>th</sup> October 2026</td><td style={{ textAlign: "center" }}>World Teachers Day</td></tr>
              <tr><td>7<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Parliamentary Style Debate</td></tr>
              <tr><td>10<sup>th</sup> October 2026</td><td style={{ textAlign: "center" }}>World Mental Health</td></tr>
              <tr><td>15<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Anti-Drug Awareness Day</td></tr>
              <tr><td>9<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>Iqbal Day</td></tr>
              <tr><td>16<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>International Day of Tolerance</td></tr>
              <tr><td>16<sup>th</sup> – 21<sup>st</sup> November, 2026</td><td style={{ textAlign: "center" }}>Inter Zonal Sports Competition</td></tr>
              <tr><td>23<sup>rd</sup> – 27<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>Civic Awareness and Community Service Week</td></tr>
              <tr><td>3<sup>rd</sup> December, 2026</td><td style={{ textAlign: "center" }}>International Day of Persons with Disabilities</td></tr>
              <tr><td>16<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>Youm-e-Qoumi Azm-e-Taleem</td></tr>
              <tr><td>11<sup>th</sup> – 16<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>APSACS Sports Championship (G-III)</td></tr>
              <tr><td>29<sup>th</sup> – 31<sup>st</sup> January, 2027</td><td style={{ textAlign: "center" }}>AMUN</td></tr>
              <tr><td>5<sup>th</sup> February, 2027</td><td style={{ textAlign: "center" }}>Kashmir Day</td></tr>
              <tr><td>8<sup>th</sup> – 12<sup>th</sup> February, 2027</td><td style={{ textAlign: "center" }}>Science &amp; Tech Week</td></tr>
              <tr><td>23<sup>rd</sup> March, 2027</td><td style={{ textAlign: "center" }}>Pakistan Day</td></tr>
            </tbody>
          </table>
        </div>
      );

    case "facilities":
      return (
        <>
          <p style={{ marginBottom: "1.5rem", color: "var(--ink-soft)" }}>
            Our Senior Girls Wing provides a dynamic, safe, and student-centered learning environment designed to support academic excellence and holistic development.
          </p>
          <div className="grid g2">
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <Building2 size={18} strokeWidth={1.8} /> Campus &amp; Infrastructure
              </h3>
              <div className="prose"><ul>{FACILITIES_CAMPUS.map((f) => <li key={f}>{f}</li>)}</ul></div>
            </div>
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <BookOpen size={18} strokeWidth={1.8} /> Academic &amp; Student Development
              </h3>
              <div className="prose"><ul>{FACILITIES_ACADEMIC.map((f) => <li key={f}>{f}</li>)}</ul></div>
            </div>
          </div>
          <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
        </>
      );

    default:
      return null;
  }
}

export default function SeniorGirlsSubPage({ sub }: { sub: SeniorGirlsSub }) {
  const data = SECTIONS["senior-girls"];

  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name, href: "/sections/senior-girls" },
          { label: sub.label },
        ]}
        image={SECTION_HEAD.photo}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section Head", SECTION_HEAD.name],
                  ["Deputy Head", DEPUTY_HEAD.name],
                  ["Classes", "IX – XII (Girls)"],
                  ["Curriculum", "FBISE Board"],
                ]}
              />
              <div className="factcard">
                <h4>Senior Girls pages</h4>
                <ul>
                  {SENIOR_GIRLS_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/senior-girls/${p.slug}`}
                        style={{ color: p.slug === sub.slug ? "var(--ink)" : "var(--green-700)", fontWeight: 600 }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SectionBody slug={sub.slug} />
          </section>
        </Editorial>
      </section>
    </>
  );
}
