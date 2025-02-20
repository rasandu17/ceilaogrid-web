import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social icons
import { FaCode, FaDesktop, FaDatabase, FaMobile, FaBrain, FaClipboardCheck } from 'react-icons/fa'; // Import role-specific icons

const Team = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Team Member 2",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Team Member 3",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Team Member 4",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Team Member 5",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Team Member 6",
      github: "#",
      linkedin: "#",
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card reveal">
              <div className="member-info">
                <div className="member-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
              </div>
              <div className="social-container">
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
