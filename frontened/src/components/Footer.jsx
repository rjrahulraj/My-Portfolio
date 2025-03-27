import React from 'react'
import styles from '../Styles/Footer.module.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Footer = () => {
     return (
          <div className={styles.footer}>
               <div className={styles.footercontent}>
                    <h2>Contact</h2>
                    <p>Feel Free to Contact me !!!</p>
               </div>
               <div className={styles.footerLinks}>
                    <div className={styles.footerLink}>
                         <Link to="">
                              < MdEmail />
                              <p>rjrahulraj0007</p>
                         </Link>
                    </div>
                    <div className={styles.footerLink}>
                         <Link to="https://www.linkedin.com/in/rahul-raj-795825253/">
                              < FaLinkedin />
                              <p>rahul-raj-795825253</p>

                         </Link>
                    </div>
                    <div className={styles.footerLink}>
                         <Link to="https://github.com/rjrahulraj/">
                              < FaGithub />
                              <p>rjrahulraj</p>
                         </Link>
                    </div>
                    <div className={styles.footerLink}>
                         <Link to="https://www.instagram.com/rahul._.rj09/">
                              < FaInstagramSquare />
                              <p>rahul._.rj09</p>
                         </Link>
                    </div>

               </div>

          </div>
     )
}

export default Footer
