import React from 'react'
import styles from '../Styles/Home.module.css'
import me from '../../assests/hero/me.png'
import me2 from '../../assests/hero/me2.jpeg'
const Home = () => {
     return (
          <div className={styles.home}>
               <div className={styles.homecontent}>
                    <h2>Hi, I'm a Rahul Raj</h2>
                    <p>A passionate Full Stack Developer currently pursuing B.Tech at IIIT Bhopal.</p>
                    <p>I love building dynamic and responsive web applications that solve real-world problems.</p>
                    <p>Let's connect and build something amazing together!</p>
               </div>
               <div className={styles.homepic}>
                    <img src={me2} alt="" />
               </div>
          </div>
     )
}

export default Home
