import React from 'react';
import './Team.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social icons
import { FaCode, FaDesktop, FaDatabase, FaMobile, FaBrain, FaClipboardCheck } from 'react-icons/fa'; // Import role-specific icons

const Team = () => {
  const teamMembers = [
    {
      name: "Promodi Silva",
      role: "Team Lead",
      emoji: "👩‍💻",
      github: "https://github.com/Pramodi25"  
    },
    {
      name: "Ravindu Sandumith",
      role: "Member",
      emoji: "👨‍💻",
      github: "https://github.com/rasandu17"  
    },
    {
      name: "Navinya Dewamiththe",
      role: "Member",
      emoji: "👩‍💻",
      github: "https://github.com/Navinya20"  
    },
    {
      name: "Akila Sandakelum",
      role: "Member",
      emoji: "👨‍💻",
      github: "https://github.com/Akilalochana"
    },
    {
      name: "Pujana Rathnayake",
      role: "Member",
      emoji: "👨‍💻",
      github: "https://github.com/pujanar"  
    },
    {
      name: "Yuneth Samarasinghe",
      role: "Member",
      emoji: "👨‍💻",
      github: "https://github.com/yuneth123"  
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Our Team</h2>
        <p className="section-desc">
          Meet the talented individuals behind Ceilão.Grid
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <a 
              key={index} 
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card"
            >
              <div className="member-emoji">
                {member.emoji}
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
