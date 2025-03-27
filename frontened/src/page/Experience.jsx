import styles from '../Styles/Experience.module.css'

import reckline from '../../assests/history/Reckline.png'

const Experience = () => {
     return (
          <section className={styles.experience}>

               <h2>Experience</h2>
               <div className={styles.experienceContainer}>
                    <div className={styles.experienceContent}>
                         <div className={styles.experience}>
                              <img src={reckline} alt="" />
                              <h3>Reckline Intern</h3>
                              <p>Worked on building online betting games.My responsibilities included creating and managing users with multiple roles, implementing a secure points management system, storing transaction records, and handling live data for real-time betting interactions </p>
                         </div>
                    </div>

               </div>
          </section>
     )
}

export default Experience