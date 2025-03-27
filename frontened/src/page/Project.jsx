import React from 'react'
import styles from '../Styles/Project.module.css'
import project from '../../assests/projects/project.png'
import { Link } from 'react-router-dom'

const Project = () => {
     return (
          <div className={styles.projects}>
               <h2>Projects</h2>
               <div className={styles.projectContainer}>
                    <div className={styles.projectCard}>
                         <img src={project} alt="" />
                         <h3>Delish Dish</h3>
                         <p>Delish Dish is a full-stack food delivery application built using the MERN stack. It allows users to browse restaurants, add items to their cart, and place orders with secure payment integration. The platform includes user authentication, real-time order tracking, and an admin dashboard for managing menus and orders. The design is fully responsive, ensuring a seamless experience across devices.</p>
                         <div className={styles.tech_stack}>
                              <span>React</span>
                              <span>Node.js</span>
                              <span>Express</span>
                              <span>MongoDB</span>
                              <span>Stripe</span>
                         </div>
                         <div className={styles.projectLinks}>
                              <button><Link className={styles.link} to="https://github.com/rjrahulraj/Delish-Dish">Repo</Link></button>
                              <button><Link className={styles.link} to="https://delish-dish.onrender.com/">Site</Link></button>
                         </div>

                    </div>
                    <div className={styles.projectCard}>
                         <img src={project} alt="" />
                         <h3>SnapChat</h3>
                         <p>This real-time messaging app enables users to engage in individual and group chats with a smooth and intuitive interface. it supports features like typing indicators, read receipts, push notifications, and admin controls for group chats. The application ensures secure and instant communication while maintaining a responsive and user-friendly experience.</p>
                         <div className={styles.tech_stack}>
                              <span>React</span>
                              <span>Node.js</span>
                              <span>Express</span>
                              <span>MongoDB</span>
                              <span>Websocket</span>
                         </div>
                         <div className={styles.projectLinks}>
                              <button><Link className={styles.link} to="https://github.com/rjrahulraj/CHAT-APP">Repo</Link></button>
                              <button><Link className={styles.link} to="https://snap-chat.onrender.com/">Site</Link></button>
                         </div>

                    </div>
                    <div className={styles.projectCard}>
                         <img src={project} alt="" />
                         <h3>TechVersity</h3>
                         <p>Techversity delivers a comprehensive range of IT services and administrative functions, with a core emphasis on
                              efficient CRUD operations.Developed a robust admin dashboard for comprehensive oversight of operations, including advanced user
                              management and detailed service tracking.Implemented secure authentication and authorization mechanisms, ensuring user data integrity and
                              protection.</p>
                         <div className={styles.tech_stack}>
                              <span>React</span>
                              <span>Node.js</span>
                              <span>Express</span>
                              <span>MongoDB</span>

                         </div>
                         <div className={styles.projectLinks}>
                              <button><Link className={styles.link} to="https://github.com/rjrahulraj/Admin_project">Repo</Link></button>
                              <button><Link className={styles.link} to="https://techversity.onrender.com/">Site</Link></button>
                         </div>
                    </div>
               </div>
          </div >
     )
}

export default Project