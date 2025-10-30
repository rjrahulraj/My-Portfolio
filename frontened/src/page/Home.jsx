import React from 'react'
import styles from '../Styles/Home.module.css'
import me2 from '../../assests/hero/me2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import AboutMe from '../components/AboutMe';
import Expertises from '../components/Expertises';
import Features from '../components/Features';
const Home = () => {
     return (
          <>
               <div className={styles.home}>
                    <div className={styles.homecontent}>
                         <h2>Hi, I'm a Rahul Raj</h2>
                         <p>A passionate Full Stack Developer and DevOps enthusiast currently pursuing B.Tech at IIIT Bhopal.</p>
                         <p>I love building dynamic and responsive web applications that solve real-world problems.</p>
                         <p>Passionate about algorithmic optimization and shipping features that actually scale.</p>
                         <p>Let's connect and build something amazing together!</p>
                         <div className={styles.homebtn}>
                              <button className={styles.connectBtn}>
                                   Let's Connect <FaArrowRightLong />  </button>
                              <button onClick={() => window.open("https://drive.google.com/file/d/1spOe-VGxXySuLgk3dcjBcbr_bjbkuJni/view")} className={styles.viewBtn}> <FaFileAlt /> View Resume </button>
                         </div>
                    </div>
                    <div className={styles.homepic}>
                         <img src={me2} alt="" />
                    </div>
               </div>
               <div>
                    <Features></Features>
                    <Expertises></Expertises>
                    <AboutMe></AboutMe>
               </div>
          </>
     )
}

export default Home
