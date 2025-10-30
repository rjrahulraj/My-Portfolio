import React from "react";
import styles from "../Styles/Experience.module.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
     {
          id: 1,
          company: "Easy Byts Web Solution (Remote)",
          role: "Software Developer Intern",
          date: "Jun 2024 — Jul 2024",
          bullets: [
               "Built and deployed a real-time chat app (MERN + Socket.IO)",
               "Implemented JWT authentication and optimized REST APIs for performance",
               "Participated in Agile sprints and conducted code reviews for best practices",
          ],
          tags: ["MERN", "Socket.IO", "JWT"],
          link: "#",
     },
     {
          id: 2,
          company: "Reckline Sport (Intern)",
          role: "Backend Developer",
          date: "Sep 2024 — Nov 2024",
          bullets: [
               "Developed role-based user management system with points and transaction tracking",
               "Handled live data streams and designed admin dashboards for performance monitoring",
          ],
          tags: ["Node.js", "MongoDB", "Redis"],
          link: "#",
     },
     {
          id: 3,
          company: "Hacktoberfest 2025 (Open Source Contributor)",
          role: "Open Source Contributor",
          date: "Oct 2025",
          bullets: [
               "Contributed to multiple open-source repositories and successfully merged 7+ PRs (12+ raised)",
               "Developed complete frontend for a job portal using React, Vite, TypeScript, and ShadCN",
               "Built functionalities like job posting, applying, resume upload, and interview scheduling",
               "Enhanced DSA repositories with algorithms, clear explanations, and LeetCode solutions",
               "Created a mini JavaScript flag guessing game and contributed to other open projects",
               "Earned all Hacktoberfest and Holopin badges for successful contributions",
          ],
          tags: ["React", "TypeScript", "Open Source", "Hacktoberfest", "ShadCN", "DSA", "CP"],
          link: "#",
     },
];


export default function Experience() {
     return (
          <section className={styles.section} id="experience" aria-labelledby="experience-heading">
               <div className={styles.container}>
                    <header className={styles.header}>
                         <h2 id="experience-heading" className={styles.title}>Experience</h2>
                         <p className={styles.subtitle}>Where I've worked & what I built</p>
                    </header>

                    <div className={styles.timelineWrap}>
                         <div className={styles.timelineLine} aria-hidden="true" />

                         <div className={styles.items}>
                              {experiences.map((exp, idx) => (
                                   <article
                                        key={exp.id}
                                        className={`${styles.item} ${idx % 2 === 1 ? styles.itemRight : styles.itemLeft}`}
                                        tabIndex={0}
                                        aria-labelledby={`exp-${exp.id}-title`}
                                   >
                                        <div className={styles.badge}>
                                             <FaBriefcase />
                                        </div>

                                        <div className={styles.card}>
                                             <div className={styles.cardHead}>
                                                  <h3 id={`exp-${exp.id}-title`} className={styles.company}>
                                                       {exp.company}
                                                  </h3>
                                                  <span className={styles.date}>
                                                       <FaCalendarAlt className={styles.calendarIcon} /> {exp.date}
                                                  </span>
                                             </div>

                                             <div className={styles.role}>{exp.role}</div>

                                             <ul className={styles.bullets}>
                                                  {exp.bullets.map((b, i) => (
                                                       <li key={i}>{b}</li>
                                                  ))}
                                             </ul>

                                             <div className={styles.cardFooter}>
                                                  <div className={styles.tagRow}>
                                                       {exp.tags.map((t) => (
                                                            <span key={t} className={styles.tag}>{t}</span>
                                                       ))}
                                                  </div>
                                                  <a href={exp.link} className={styles.more} aria-label={`More about ${exp.company}`}>
                                                       Details
                                                  </a>
                                             </div>
                                        </div>

                                        <div className={styles.point} aria-hidden="true" />
                                   </article>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
}
