import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Editorial } from "@/components/Editorial";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Contact Us" };

const INFO: [React.ReactNode, string, React.ReactNode][] = [
  [
    <Phone key="p" size={20} strokeWidth={1.8} />,
    "Phone",
    <>
      053-9240263<span>Mobile / WhatsApp: 0330-425 (GAK) 0111</span>
    </>,
  ],
  [
    <Mail key="m" size={20} strokeWidth={1.8} />,
    "Email",
    <>
      <span>gakhrn@gmail.com</span>
    </>,
  ],
  [
    <MapPin key="l" size={20} strokeWidth={1.8} />,
    "Campus",
    <>
      GAK Campus, Kharian Cantt<span>Gujrat, Punjab</span>
    </>,
  ],
  [
    <Clock key="c" size={20} strokeWidth={1.8} />,
    "Office hours",
    <>
      Mon – Fri, 8:00 AM – 2:00 PM<span>Saturday: by appointment</span>
    </>,
  ],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        intro="Reach the right department by phone or email, and find us in Kharian Cantt."
        image={BANNER.contact}
        crumb={[{ label: "Contact Us" }]}
      />
      <section className="sec">
        <SectionHead eyebrow="We're here to help" title="Send us a message" />
        <Editorial
          rail={
            <div className="factcard">
              <h4>Reach us directly</h4>
              {INFO.map(([ic, k, v]) => (
                <div className="inforow" key={k}>
                  <div className="ir-ic">{ic}</div>
                  <div>
                    <div className="ir-k">{k}</div>
                    <div className="ir-v">{v}</div>
                  </div>
                </div>
              ))}
              <div className="mapph">
                <div>
                  <MapPin size={28} strokeWidth={1.6} />
                  <div style={{ fontWeight: 700, marginTop: 6 }}>
                    GAK Campus, Kharian Cantt
                  </div>
                  <div style={{ fontSize: ".8rem", color: "var(--ink-soft)" }}>
                    Google Maps embed in production
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className="form">
            <div className="frow">
              <div className="field">
                <label>
                  Your name <span className="req">*</span>
                </label>
                <input placeholder="Full name" />
              </div>
              <div className="field">
                <label>
                  Contact <span className="req">*</span>
                </label>
                <input placeholder="Phone or email" />
              </div>
            </div>
            <div className="field">
              <label>Subject</label>
              <select>
                <option>General enquiry</option>
                <option>Admissions</option>
                <option>Accounts / fee</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label>
                Message <span className="req">*</span>
              </label>
              <textarea placeholder="How can we help?" />
            </div>
            <ToastButton
              msg="Thank you — your message has been sent."
              className="btn-submit"
            >
              Send message
            </ToastButton>
          </div>
        </Editorial>
      </section>
    </>
  );
}
