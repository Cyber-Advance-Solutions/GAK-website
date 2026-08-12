import Link from "next/link";
import Image from "next/image";
import { ToastButton } from "@/components/Toast";
import { Facebook, Instagram, Youtube } from "@/components/Icon";

const EXPLORE = [
  ["About Us", "/about"],
  ["Messages", "/messages"],
  ["Organogram", "/organogram"],
  ["Alumni", "/alumni"],
  ["Activities", "/activities"],
];
const PARENTS = [
  ["Admissions", "/admissions"],
  ["School Uniform", "/uniform"],
  ["Scholarships", "/scholarships"],
  ["Downloads", "/downloads"],
  ["FAQs", "/faqs"],
];
const CONNECT = [
  ["Contact Us", "/contact"],
  ["Careers", "/hr"],
  ["Student LMS", "https://student.apms.pk"],
  ["Teacher LMS", "https://apms.pk"],
  ["Feedback", "/feedback"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="ft">
            <div className="fbrand">
              <Image src="/logo.svg" alt="APS&C GAK Campus Kharian Cantt logo" width={52} height={52} />
              <div>
                <div className="nm">APS&amp;C GAK Campus</div>
                <div className="sub">Kharian Cantt</div>
              </div>
            </div>
            <p>
              An Army Public Schools &amp; Colleges System institution committed to knowledge,
              discipline and character since 1985.
            </p>
            <div className="fsoc">
              <ToastButton as="a" msg="Opening Facebook…" className=""><Facebook size={18} /></ToastButton>
              <ToastButton as="a" msg="Opening Instagram…" className=""><Instagram size={18} /></ToastButton>
              <ToastButton as="a" msg="Opening YouTube…" className=""><Youtube size={18} /></ToastButton>
            </div>
          </div>
          <FooterCol title="Explore" links={EXPLORE} />
          <FooterCol title="For Parents" links={PARENTS} />
          <FooterCol title="Connect" links={CONNECT} />
        </div>
        <div className="fbot">
          {/* <span>© 2026 APS&amp;C GAK Campus, Kharian Cantt. All rights reserved.</span> */}
          <span>IT Department, Garrison Academy Kharian Cantt, All Rights Reserved</span>
          <span className="urdu">رَبِّ زِدْنِي عِلْمًا</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {links.map(([label, href]) => {
          const external = href.startsWith("http");
          return (
            <li key={label + href}>
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
