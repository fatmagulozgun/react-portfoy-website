import React from "react";
import './Education.css';

const Education = () => (
    <section className="education-section">
        <h2>Eğitim</h2>
        <div className="education-list">
            <div className="education-item">
                <h3>Burdur Mehmet Akif Ersoy Üniversitesi</h3>
                <p>Yazılım Mühendisliği<br />2022 - Devam Ediyor</p>
            </div>
            <div className="education-item">
                <h3>Adana İsmet İnönü Mesleki ve Teknik Anadolu Lisesi</h3>
                <p>Bilişim Teknolojileri<br />2016 - 2020</p>
            </div>
        </div>
    </section>
);

export default Education;
