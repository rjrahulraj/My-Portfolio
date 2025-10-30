import React from "react";
import styles from "../Styles/AboutMe.module.css";
import { FaGraduationCap, FaAward, FaBriefcase, FaUsers } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { Link } from "react-router-dom";

const stats = [
     {
          id: 1,
          icon: <FaGraduationCap />,
          title: "IIIT Bhopal",
          subtitle: "BTech in IT (2022–2026)",
     },
     {
          id: 2,
          icon: <FaAward />,
          title: "1735 Rating",
          subtitle: "CodeChef ",
     },
     {
          id: 3,
          icon: <SiLeetcode />,
          title: "1743 Rating",
          subtitle: "Leetcode ",
     },
     {
          id: 4,
          icon: <SiCodeforces />,
          title: "1214 Rating",
          subtitle: "Codeforces",
     },
     {
          id: 5,
          icon: <FaBriefcase />,
          title: "99% Uptime",
          subtitle: "Production Systems",
     },
     {
          id: 6,
          icon: <FaUsers />,
          title: "10,000+ Users",
          subtitle: "Systems Delivered",
     },
];

const AboutMe = () => {
     return (
          <section className={styles.aboutSection} id="about">
               <div className={styles.container}>
                    <header className={styles.header}>
                         <h1 className={styles.title}>About Me</h1>
                         <p className={styles.subtitle}>Get to know me better</p>
                    </header>

                    <div className={styles.content}>
                         {/* Left column: description */}
                         <div className={styles.left}>
                              <p className={styles.intro}>
                                   Hi! I'm <strong>Rahul Raj</strong>, a{" "}
                                   <span className={styles.accent}>Full Stack Developer</span> and{" "}
                                   <span className={styles.accent}>Computer Science</span> student at IIIT Bhopal,
                                   passionate about building scalable and efficient systems.
                              </p>

                              <p className={styles.paragraph}>
                                   I specialize in developing production-ready backend systems using Node.js,
                                   Express and modern web technologies. With experience in building systems that
                                   handle <strong>10,000+ active users</strong> and achieving high availability,
                                   I focus on performance optimization, security and delivering robust features.
                              </p>

                              <p className={styles.paragraph}>
                                   As a top coder , I bring strong algorithmic problem-solving skills to my
                                   development work. I've improved API response times and optimized database queries
                                   in production environments.
                              </p>

                              <div className={styles.ctaRow}>
                                   <Link to="/contact" className={styles.ctaBtn}>
                                        Let's Work Together
                                   </Link>
                              </div>
                         </div>

                         <aside className={styles.right}>
                              <div className={styles.grid}>
                                   {stats.map((s) => (
                                        <article key={s.id} className={styles.card} tabIndex={0} role="article" aria-label={s.title}>
                                             <div className={styles.icon}>{s.icon}</div>
                                             <div className={styles.cardBody}>
                                                  <h4 className={styles.cardTitle}>{s.title}</h4>
                                                  <p className={styles.cardSubtitle}>{s.subtitle}</p>
                                             </div>
                                        </article>
                                   ))}
                              </div>
                         </aside>
                    </div>
               </div>
          </section>
     );
};

export default AboutMe;
