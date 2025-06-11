import React from "react";
import './Projects.css';

const projects = [
    {
        name: "Zaman Sınırlı Tetris Oyunu",
        desc: "ESP32, OLED, DFPlayer Mini, LED, Butonlar ile gömülü sistem projesi.",
    },
    {
        name: "Deprem Öncesi Erken Uyarı Sistemi",
        desc: "ESP32, LoRa, OLED, MPU6050, SHT31 ile gömülü sistem projesi.",
    },
    {
        name: "my-watchlist-master",
        desc: "Film ve dizi izleme listesi web uygulaması.",
    },
    {
        name: "yemek-projesi-web",
        desc: "Yemek tarifi ve paylaşım platformu.",
    },
];

const Projects = () => (
    <section className="projects-section">
        <h2>Projeler</h2>
        <div className="projects-list">
            {projects.map((project, idx) => (
                <div className="project-card" key={idx}>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
