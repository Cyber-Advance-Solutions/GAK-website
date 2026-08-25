import Image from "next/image";
import type { Staff } from "@/lib/staff";

export default function StaffCard({ s }: { s: Staff }) {
  return (
    <div className="staffcard">
      <div className="sf-ph">
        <Image src={s.photo} alt={s.name} fill sizes="84px" style={s.photoPosition ? { objectPosition: s.photoPosition } : undefined} />
      </div>
      <div className="sf-nm">{s.name}</div>
      {s.role && <div className="sf-role">{s.role}</div>}
      {s.qualification && <div className="sf-q">{s.qualification}</div>}
      {s.joined && <div className="sf-j">Joined {s.joined}</div>}
    </div>
  );
}
