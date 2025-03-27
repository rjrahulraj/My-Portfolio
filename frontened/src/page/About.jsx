import React from 'react';
import styles from '../Styles/About.module.css';
import me2 from '../../assests/hero/me2.jpeg';

const About = () => {
     return (
          <section className={styles.about}>
               <h2>About Me</h2>
               <div className={styles.about__container}>
                    <div className={styles.image}>
                         <img src={me2} alt="Rahul Raj" />
                    </div>
                    <div className={styles.points}>
                         <div className={styles.point}>
                              <h2>I'm Rahul Raj</h2>
                              <p>I am  B.Tech student at IIIT Bhopal and a passionate Full-Stack Developer with a strong foundation in DSA and MERN stack, I specialize in building scalable web applications with intuitive user experiences.</p>
                         </div>
                         <div className={styles.point}>
                              <h2>Frontend Developer</h2>
                              <p>I build responsive and optimized websites for smooth user experiences.</p>
                         </div>
                         <div className={styles.point}>
                              <h2>Backend Developer</h2>
                              <p>I develop fast and optimized backend systems and REST APIs.</p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default About;
