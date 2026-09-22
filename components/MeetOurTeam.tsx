import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  intro: string;
  photo: string;
  initials: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Mrs. Shahida Rehman",
    role: "Principal, GAK",
    intro:
      "Mrs. Shahida Rehman leads Garrison Academy Kharian Cantt with a deep commitment to character, critical thinking, and holistic development. Under her guidance, the school nurtures independent thinkers who are equipped to face the challenges of a rapidly changing world.",
    photo: "/principal.png",
    initials: "SR",
  },
  {
    name: "Ms. Birjees Tahira",
    role: "Vice Principal, APSIS",
    intro:
      "Ms. Birjees Tahira holds an M.Sc. in Physics along with M.Ed., M.Phil. in Education, and a Master's in Educational Leadership and Management. She oversees the Cambridge international pathway at GAK, ensuring academic rigour and global standards across all APSIS year groups.",
    photo: "/sections/apsis/birjees-tahira.png",
    initials: "BT",
  },
  {
    name: "Mrs. Sobia Altaf",
    role: "Section Head, Senior Girls",
    intro:
      "Mrs. Sobia Altaf brings an M.Phil. in English Linguistics to her leadership of the Senior Girls Section. Since joining in April 2024, she has championed a culture of academic excellence, discipline, and confidence among senior female students.",
    photo: "/sections/senior-girls/sobia-altaf.jpg",
    initials: "SA",
  },
  {
    name: "Mr. Atiq ur Rehman",
    role: "Section Head, Senior Boys",
    intro:
      "Mr. Atiq ur Rehman has served GAK since 1998, bringing over two decades of experience to the Senior Boys Section. Holding an MA in Islamiat and Political Science with a B.Ed., he fosters discipline, integrity, and a strong work ethic in every student.",
    photo: "/sections/senior-boys/atiq-ur-rehman.jpg",
    initials: "AR",
  },
  {
    name: "Mrs. Qudsia Bukhari",
    role: "Section Head, Middle Girls",
    intro:
      "Mrs. Qudsia Bukhari has been part of the GAK family since 1999. With an MA in English Literature and a B.Ed., she creates an environment in the Middle Girls Section where curiosity is celebrated and every learner is encouraged to reach her potential.",
    photo: "/sections/middle-girls/qudsia-bukhari.jpg",
    initials: "QB",
  },
  {
    name: "Ms. Mariam Umar",
    role: "Section Head, Middle Boys",
    intro:
      "Ms. Mariam Umar leads the Middle Boys Section with an MA in English and a B.Ed. She is committed to building strong academic foundations while nurturing the values of respect, responsibility, and teamwork in every student under her care.",
    photo: "/sections/middle-boys/image1.jpeg",
    initials: "MU",
  },
  {
    name: "Ms. Iram Saeed Butt",
    role: "Section Head, Junior Section",
    intro:
      "Ms. Iram Saeed Butt heads the Junior Section, guiding young learners through the crucial primary years with warmth and dedication. Her leadership ensures that every child builds a confident foundation for lifelong learning.",
    photo: "/sections/junior-section/iram-saeed-butt.jpg",
    initials: "IB",
  },
  {
    name: "Farhat Jabeen",
    role: "Section Head, Pre-School",
    intro:
      "Farhat Jabeen has nurtured the youngest members of the GAK community since 2005. With an MA in English, she creates a safe, playful, and stimulating environment in the Pre-School where every child's earliest learning journey begins with care and joy.",
    photo: "/sections/pre-school/section-head.jpg",
    initials: "FJ",
  },
];

export default function MeetOurTeam() {
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
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-photo-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.name === 'Ms. Iram Saeed Butt' ? 'bottom' : 'top', }}
                />
                {/* fallback initials shown via CSS when image is missing */}
                <span className="team-initials" aria-hidden="true">
                  {member.initials}
                </span>
              </div>
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <p className="team-intro">{member.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
