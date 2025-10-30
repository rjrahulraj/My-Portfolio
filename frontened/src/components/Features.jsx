import React from "react";
import Styles from "../Styles/Features.module.css";
import { FaShieldAlt, FaProjectDiagram, FaTachometerAlt } from "react-icons/fa";

const features = [
     {
          id: 1,
          icon: <FaShieldAlt />,
          title: "Secure & Reliable",
          desc: "Prioritizing data protection, authentication, and fault tolerance to ensure safe and steady performance.",
          accent: "orange",
     },
     {
          id: 2,
          icon: <FaProjectDiagram />,
          title: "Scalable Architecture",
          desc: "Designing systems that grow effortlessly—whether it's handling 10 or 10 million requests.",
          accent: "pink",
     },
     {
          id: 3,
          icon: <FaTachometerAlt />,
          title: "High Performance",
          desc: "Optimized for speed and efficiency to deliver seamless experiences behind the scenes.",
          accent: "teal",
     },
];

export default function Features() {
     return (
          <section className={Styles.featuresSection} aria-label="Features and quote">
               <div className={Styles.container}>
                    <div className={Styles.cardRow}>
                         {features.map((f) => (
                              <article key={f.id} className={Styles.card} tabIndex={0} aria-labelledby={`feature-${f.id}-title`}>
                                   <div className={`${Styles.badge} ${Styles[f.accent]}`} aria-hidden>
                                        {f.icon}
                                   </div>
                                   <div className={Styles.cardBody}>
                                        <h3 id={`feature-${f.id}-title`} className={Styles.cardTitle}>{f.title}</h3>
                                        <p className={Styles.cardText}>{f.desc}</p>
                                   </div>
                              </article>
                         ))}
                    </div>

                    <div className={Styles.quoteWrap}>
                         <blockquote className={Styles.quote}>
                              <span className={Styles.smallQuote} aria-hidden>“</span>
                              <span className={Styles.lead}>
                                   Development: Turning <span className={Styles.wordCoffee}>Coffee</span> into <span className={Styles.wordCode}>Code</span> then <span className={Styles.wordMagic}>Magic</span>.
                              </span>
                         </blockquote>
                    </div>

               </div>
          </section>
     );
}
