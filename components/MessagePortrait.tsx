import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import type { MessageLeader } from "@/lib/messages";

type Props = {
  leader: MessageLeader;
  cta?: { label: string; href: string };
};

/** Full-width portrait above a multi-paragraph leadership message. */
export default function MessagePortrait({
  leader,
  cta = { label: "About the school", href: "/about" },
}: Props) {
  const lines = leader.heading.split("\n");

  return (
    <div className="msgport">
      <div className="msgport-media">
        <div className="msgport-frame">
          <Image
            src={leader.image}
            alt={leader.imageAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="msgport-img"
          />
        </div>
        <div className="msgport-plate">
          <Flame className="msgport-mark" size={26} strokeWidth={1.75} />
          <div>
            <span className="msgport-name">{leader.name}</span>
            <span className="msgport-role">{leader.role}</span>
          </div>
        </div>
      </div>

      <div className="msgport-body">
        <span className="eyebrow">{leader.eyebrow}</span>
        <h2 className="h-md msgport-heading">
          {lines.map((line, i) => (
            <span key={line}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        {leader.message.map((para) => (
          <p className="msgport-para" key={para.slice(0, 48)}>
            {para}
          </p>
        ))}
        <Link className="btn-primary msgport-cta" href={cta.href}>
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
