import React from "react";
import './Skills.css';

const skills = [
    "Java",
    "Python",
    "C / C++ (Gömülü Sistemler, Algoritmalar)",
    "HTML / CSS / JavaScript (Web Geliştirme)",
    "React.js - Next.js",
    "Node.js (Temel Seviye)",
    "MySQL",
    "Figma"
];

const Skills = () => (
    <section className="skills-section">
        <h2>Yetenekler</h2>
        <div className="skills-list">
            {skills.map((skill, idx) => (
                <span className="skill-badge" key={idx}>{skill}</span>
            ))}
        </div>
    </section>
);

export default Skills;
