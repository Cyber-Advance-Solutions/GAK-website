import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import OverviewSection from "@/components/OverviewSection";
import ChatWidget from "@/components/ChatWidget";
import FacilitiesSwiper from "@/components/FacilitiesSwiper";
import { ArrowRight, BookOpen, Backpack, Layers, GraduationCap, Globe, Bell, CalendarDays, Download } from "lucide-react";
import ClassroomsSwiper from "@/components/ClassroomsSwiper";

export default function HomePage() {
  return (
    <div className="home-v2">
      <Hero />
      <Marquee />
      <OverviewSection />

      {/* slim stat strip */}
      {/* <section className="statstrip"><div className="wrap ssrow">
        <div className="ss"><div className="n">1972</div><div className="l">Established</div></div>
        <div className="ss"><div className="n">3,200<span>+</span></div><div className="l">Students enrolled</div></div>
        <div className="ss"><div className="n">2</div><div className="l">Academic streams</div></div>
        <div className="ss"><div className="n">98<span>%</span></div><div className="l">FBISE pass rate</div></div>
      </div></section> */}

      {/* welcome + two streams */}
      <section className="sec"><div className="wrap welcome">
        <div className="welcome-copy">
          <span className="eyebrow">Welcome to Garrison Academy Kharian Cantt</span>
          <h2 className="h-lg">One disciplined campus,<br/>two academic streams.</h2>
          <p>Since 1985, Garrison Academy Kharian Cantt has educated the children of Kharian Cantt with the values of the Army Public Schools &amp; Colleges System — academic rigour, character and genuine care. Choose the pathway that fits your child.</p>
          <Link className="link-arrow" href="/about">More about the school <ArrowRight size={16} /></Link>
        </div>
        <div className="streams">
          <Link className="streamcard" href="/sections/senior-girls">
            <div className="sc-img" style={{ backgroundImage: "url(/adm-block.jpg)" }}><span className="sc-tag">National</span></div>
            <div className="sc-bd"><h3>APSACS · FBISE</h3><p>The national curriculum from Pre-School to Intermediate, with consistently strong board results.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
          </Link>
          <Link className="streamcard" href="/sections/apsis">
            <div className="sc-img" style={{ backgroundImage: "url(/apsis.jpg)" }}><span className="sc-tag alt">International</span></div>
            <div className="sc-bd"><h3>APSIS · Cambridge</h3><p>A globally benchmarked Cambridge pathway, opening doors to universities at home and abroad.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
          </Link>
        </div>
      </div></section>

      {/* principal quote band */}
      <section className="quoteband"><div className="wrap qb">
        <div className="qb-portrait">
          <img alt="principal" src="/principal.png" style={{ width: '100%', height: "100%", borderRadius: '50%', objectFit: "cover" }} />
          {/* <span>BK</span> */}
        </div>
        <div className="qb-body">
          <span className="eyebrow">From the Principal&rsquo;s Desk</span>
          <blockquote>We build character before we build careers. Discipline here is a gift, not a burden — and every child is seen, known and guided.</blockquote>
          <div className="qb-foot">
            <div className="qb-who"><div className="nm">Mrs Shahida Rehman</div><div className="rl">Principal, Garrison Academy Kharian Cantt</div></div>
            <Link className="btn-ghost dark" href="/messages/principal">Read full message</Link>
          </div>
        </div>
      </div></section>

      {/* academic pathway */}
      <section className="sec"><div className="wrap">
        <div className="sec-head"><span className="eyebrow">Academic Pathway</span><h2 className="h-lg">A clear journey — from first steps to final exams.</h2></div>
        <div className="pathway">
          <div className="pw"><i className="pw-ic"><BookOpen size={24} /></i><div className="pw-n">Step 01</div><h4>Pre-School</h4><p>Play-based foundation years</p></div>
          <div className="pw"><i className="pw-ic"><Backpack size={24} /></i><div className="pw-n">Step 02</div><h4>Junior School</h4><p>Classes I – III</p></div>
          <div className="pw"><i className="pw-ic"><Layers size={24} /></i><div className="pw-n">Step 03</div><h4>Middle School</h4><p>Classes IV – VIII</p></div>
          <div className="pw"><i className="pw-ic"><GraduationCap size={24} /></i><div className="pw-n">Step 04</div><h4>Senior School</h4><p>FBISE · IX – XII</p></div>
          <div className="pw"><i className="pw-ic"><Globe size={24} /></i><div className="pw-n">Step 05</div><h4>APSIS</h4><p>Cambridge international</p></div>
        </div>
      </div></section>

      {/* campus gallery */}
      <section className="sec"><div className="wrap">
        <div className="sec-head"><span className="eyebrow">Campus Life</span><h2 className="h-lg">Where learning feels like belonging.</h2></div>
        <div className="gallery">
          <div className="ga big" style={{ backgroundImage: "url(/hero3.png)" }}><span className="cap">Campus &amp; grounds</span></div>
          <ClassroomsSwiper />
          <FacilitiesSwiper />
        </div>
      </div></section>

      {/* notices + events */}
      <section className="sec"><div className="wrap noticegrid">
        <div className="npanel">
          <div className="np-h"><i className="np-ic"><Bell size={22} /></i><div><span className="eyebrow">Latest</span><h3 className="h-md">Notices &amp; Circulars</h3></div></div>
          <ul className="notelist">
            <li><span className="d">12 Jun</span><Link href="/downloads">Summer vacation timings — Session 2026</Link></li>
            <li><span className="d">06 Jun</span><Link href="/downloads">Parent–teacher meeting schedule (all sections)</Link></li>
            <li><span className="d">28 May</span><Link href="/downloads">Mid-term datesheet — Senior School</Link></li>
            <li><span className="d">19 May</span><Link href="/downloads">Fee challan reminder — 2nd quarter</Link></li>
          </ul>
          <Link className="link-arrow" href="/downloads">All downloads <ArrowRight size={16} /></Link>
        </div>
        <div className="npanel">
          <div className="np-h"><i className="np-ic"><CalendarDays size={22} /></i><div><span className="eyebrow">Upcoming</span><h3 className="h-md">Events &amp; Activities</h3></div></div>
          <ul className="eventlist">
            <li><div className="dchip"><b>14</b><span>AUG</span></div><div className="ev"><div className="et">Independence Day 🇵🇰</div><div className="es">All Sections · Proud Pakistani Programme</div></div></li>
            <li><div className="dchip"><b>15</b><span>AUG</span></div><div className="ev"><div className="et">Orientation Day</div><div className="es">APSIS Grade I–VIII · Parents</div></div></li>
            <li><div className="dchip"><b>24</b><span>AUG</span></div><div className="ev"><div className="et">SDGs Awareness Week</div><div className="es">Junior, Middle &amp; Senior Sections</div></div></li>
          </ul>
          <Link className="link-arrow" href="/activities">Full calendar <ArrowRight size={16} /></Link>
        </div>
      </div></section>

      {/* admissions CTA */}
      <section className="sec"><div className="wrap"><div className="ctaband">
        <span className="eyebrow" style={{ color: "var(--gold-300)" }}>Session 2026</span>
        <h2 className="h-lg" style={{ marginBottom: 12 }}>Admissions are now open.</h2>
        <p>Secure your child&rsquo;s seat at one of Kharian&rsquo;s most trusted institutions. Apply online in minutes or download the form.</p>
        <div className="cta-row"><Link className="btn-primary" href="/admissions">Begin Application</Link><Link className="btn-ghost" href="/downloads"><Download size={16} /> Download form</Link></div>
      </div></div></section>

      <ChatWidget />
    </div>
  );
}
