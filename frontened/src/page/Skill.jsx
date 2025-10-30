import React from "react";
import styles from "../Styles/Skill.module.css";
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase, FaAws, FaJava, FaDocker } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTypescript, SiCplusplus, SiTailwindcss, SiExpress, SiSocketdotio, SiSpringboot, SiNumpy, SiPandas, SiStreamlit, SiLinux, SiGithub } from "react-icons/si";

const skills = [
     {
          category: "Frontend Development",
          items: [
               { name: "React.js", icon: <FaReact color="#61DBFB" /> },
               { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
               { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
               { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
          ],
     },
     {
          category: "Backend Development",
          items: [
               { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
               { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
               { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
               { name: "Socket.IO", icon: <SiSocketdotio color="#FFFFFF" /> },
          ],
     },
     {
          category: "Database & Cloud",
          items: [
               { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
               { name: "SQL", icon: <FaDatabase color="#00B8D9" /> },
               { name: "AWS (EC2, S3)", icon: <FaAws color="#FF9900" /> },
          ],
     },
     {
          category: "Programming Languages",
          items: [
               { name: "C++", icon: <SiCplusplus color="#004482" /> },
               { name: "Python", icon: <FaPython color="#FFD43B" /> },
               { name: "Java", icon: <FaJava color="#E51F24" /> },
          ],
     },
     {
          category: "Data Science & Tools",
          items: [
               { name: "NumPy", icon: <SiNumpy color="#4DABCF" /> },
               { name: "Pandas", icon: <SiPandas color="#150458" /> },
               { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> },
          ],
     },
     {
          category: "DevOps & Others",
          items: [
               { name: "Docker (Learning)", icon: <FaDocker color="#0db7ed" /> },
               { name: "Linux", icon: <SiLinux color="#FCC624" /> },
               { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
               { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
          ],
     },
];

const Skills = () => {
     return (
          <section className={styles.skillsSection} id="skills">
               <div className={styles.container}>
                    <h2 className={styles.heading}>Skills & Expertise</h2>
                    <p className={styles.subHeading}>
                         A blend of frontend precision, backend logic, and full-stack craftsmanship.
                    </p>

                    <div className={styles.skillsGrid}>
                         {skills.map((category, index) => (
                              <div key={index} className={`${styles.skillCard} slideUp`}>
                                   <h3 className={styles.category}>{category.category}</h3>
                                   <div className={styles.skillItems}>
                                        {category.items.map((item, i) => (
                                             <div key={i} className={styles.skillItem}>
                                                  <div className={styles.icon}>{item.icon}</div>
                                                  <p>{item.name}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Skills;
