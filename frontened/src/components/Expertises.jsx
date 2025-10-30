import React from "react";
import styles from "../Styles/Expertises.module.css";

const leftColumn = {
     eyebrow: "BACKEND (SECURE & PERFORMANT)",
     title: "Resilient, Modular & High-Performance Architecture.",
     subtitle:
          "Build robust systems with clean logic, optimized for speed, scalability, and security.",
     items: [
          {
               id: 1,
               title: "Architecture",
               desc: "Modular, layered architecture ensuring maintainability and reusability.",
          },
          {
               id: 2,
               title: "Data Flow",
               desc: "Efficient API and database interaction with clean request/response handling.",
          },
          {
               id: 3,
               title: "Security",
               desc: "Authentication, authorization, and data encryption to protect sensitive information.",
          },
     ],
};

const rightColumn = {
     eyebrow: "DEVOPS (RELIABLE & AUTOMATED)",
     title: "Automated, Scalable & CD Pipelines.",
     subtitle: "Streamlining infrastructure and CI/CD workflows to support seamless development.",
     items: [
          {
               id: 1,
               title: "Infrastructure as Code",
               desc: "Declarative configurations using tools like Terraform or CloudFormation.",
          },
          {
               id: 2,
               title: "CI/CD Pipelines",
               desc: "Automated testing, build, and deployment for rapid delivery cycles.",
          },
          {
               id: 3,
               title: "Monitoring",
               desc: "Real-time tracking and logging for performance insights and issue resolution.",
          },
     ],
};

const Card = ({ idx, title, desc, highlight }) => (
     <article
          className={`${styles.card} ${highlight ? styles.highlight : ""}`}
          tabIndex={0}
          role="article"
          aria-label={title}
     >
          <div className={styles.num} aria-hidden>
               <span>{idx}</span>
          </div>

          <div className={styles.cardContent}>
               <h3 className={styles.cardTitle}>{title}</h3>
               <p className={styles.cardDesc}>{desc}</p>
          </div>
     </article>
);

export default function Expertises() {
     return (
          <section className={styles.expertSection} id="expertise">
               <div className={styles.container}>
                    <div className={styles.columns}>
                         {/* Left */}
                         <div className={styles.column}>
                              <p className={`${styles.eyebrow} ${styles.eyebrowLeft}`}>
                                   {leftColumn.eyebrow}
                              </p>
                              <h2 className={styles.heading}>{leftColumn.title}</h2>
                              <p className={styles.lead}>{leftColumn.subtitle}</p>

                              <div className={styles.cardGrid}>
                                   {leftColumn.items.map((it, i) => (
                                        <Card
                                             key={it.id}
                                             idx={it.id}
                                             title={it.title}
                                             desc={it.desc}
                                             highlight={i === 0} /* highlight first card as in screenshot */
                                        />
                                   ))}
                              </div>
                         </div>

                         {/* Right */}
                         <div className={styles.column}>
                              <p className={`${styles.eyebrow} ${styles.eyebrowRight}`}>
                                   {rightColumn.eyebrow}
                              </p>
                              <h2 className={styles.heading}>{rightColumn.title}</h2>
                              <p className={styles.lead}>{rightColumn.subtitle}</p>

                              <div className={styles.cardGrid}>
                                   {rightColumn.items.map((it, i) => (
                                        <Card
                                             key={it.id}
                                             idx={it.id}
                                             title={it.title}
                                             desc={it.desc}
                                             highlight={false}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
