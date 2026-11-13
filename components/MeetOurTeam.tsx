import type { TeamMember } from "@/lib/mappers/about";
import TeamIntro from "@/components/TeamIntro";

/** "Meet Our Team" grid (admin "Our Team" module → /team-members). */
export default function MeetOurTeam({ members = [] }: { members?: TeamMember[] }) {
  if (members.length === 0) return null;
  return (
    <section className="sec team-section">
      <div className="wrap">
        {/* section header */}
        <div className="sec-head">
          <span className="eyebrow">Our Leadership</span>
          <h2 className="h-lg">Meet Our Team</h2>
          <p>
            The dedicated professionals who lead Garrison Academy Kharian Cantt — guiding
            students, staff, and families with expertise, integrity, and genuine care.
          </p>
        </div>

        {/* team grid */}
        <div className="team-grid">
          {members.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-photo-wrap">
                {member.photo && (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-photo-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.name === "Ms. Iram Saeed Butt" ? "bottom" : "top" }}
                  />
                )}
                {/* fallback initials shown via CSS when image is missing */}
                <span className="team-initials" aria-hidden="true">
                  {member.initials}
                </span>
              </div>
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <TeamIntro text={member.intro} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
