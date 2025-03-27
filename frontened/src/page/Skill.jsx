import styles from '../Styles/Skill.module.css'
import css from '../../assests/skills/css.png'
import html from '../../assests/skills/html.png'
import mongodb from '../../assests/skills/mongodb.png'
import node from '../../assests/skills/node.png'
import react from '../../assests/skills/react.png'
import springboot from '../../assests/skills/spring-boot-logo.png'


import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiCplusplusbuilder } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Skill = () => {
     return (
          <section>
               <div className={styles.skills}>
                    <h2>Skills</h2>
                    <div className={styles.skillContainer}>
                         <div className={styles.skill}>
                              <FaHtml5 />
                              <h3>HTML</h3>
                         </div>
                         <div className={styles.skill}>
                              <FaCss3Alt />
                              <h3>CSS</h3>
                         </div>
                         <div className={styles.skill}>
                              <FaReact />
                              <h3>React</h3>
                         </div>
                         <div className={styles.skill}>
                              <FaNode />
                              <h3>Node</h3>
                         </div>
                         <div className={styles.skill}>
                              <SiExpress />
                              <h3>Express</h3>
                         </div>
                         <div className={styles.skill}>
                              <SiSpringboot />
                              <h3>Spring-boot</h3>
                         </div>
                         <div className={styles.skill}>
                              < DiMongodb />
                              <h3>Mongodb</h3>
                         </div>
                         <div className={styles.skill}>
                              < FaGitAlt />
                              <h3>Git </h3>
                         </div>
                         <div className={styles.skill}>
                              < FaSquareGithub />
                              <h3>GitHub </h3>
                         </div>
                         <div className={styles.skill}>
                              < SiRedux />
                              <h3>Redux</h3>
                         </div>
                         <div className={styles.skill}>
                              < SiNumpy />
                              <h3>Numpy</h3>
                         </div>
                         <div className={styles.skill}>
                              < SiPandas />
                              <h3>Pandas</h3>
                         </div>


                    </div>
                    <div className={styles.languages}>
                         <div className={styles.skill}>
                              < SiCplusplusbuilder />
                              <h3>C/C++</h3>
                         </div>
                         <div className={styles.skill}>
                              < IoLogoJavascript />
                              <h3>Javascript</h3>
                         </div>
                         <div className={styles.skill}>
                              < SiTypescript />
                              <h3>Typescript</h3>
                         </div>
                         <div className={styles.skill}>
                              < FaJava />
                              <h3>Java</h3>
                         </div>
                         <div className={styles.skill}>
                              < FaPython />
                              <h3>Python</h3>
                         </div>
                    </div>

               </div>
          </section>
     )
}

export default Skill