import styles from '../Styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGmail, SiCodechef, SiCodeforces } from "react-icons/si";
import { GoDotFill } from "react-icons/go";


const Footer = () => {
     return (
          <>
               <br className={styles.footerLine} />
               <div className={styles.footerContainer}>
                    <div className={styles.footer}>
                         <div className={styles.leftFooterContent}>
                              <div>
                                   <h2>Rahul Raj</h2>
                                   <p>Full Stack Developer , Backend Engineer & frontend Developer passionate about building scalable systems and beautiful user experiences.</p>
                                   <p className={styles.deginaton}><GoDotFill color='green' /> Currently at IIIT Bhopal</p>
                                   <p className={styles.deginaton}><GoDotFill color='green' /> Looking for new opportunities.</p>

                              </div>
                         </div>
                         <div className={styles.rightFooterContent}>
                              <div>
                                   <h3>Contact with Me</h3>
                                   <div className={styles.iconcontainer}>

                                        <div onClick={() => window.open("https://github.com/rjrahulraj/", "_blank")} className={styles.github} >
                                             <FaGithub size={35} />
                                             <p className={styles.iconsName}>Github</p>
                                        </div>
                                        <div onClick={() => window.open("https://www.linkedin.com/in/rahul-raj-795825253/", "_blank")} className={styles.linkedin} >
                                             <FaLinkedin size={35} /> <p className={styles.iconsName}>LinkedIn</p>
                                        </div>
                                        <div onClick={() => window.open("https://www.instagram.com/rahul._.rj09/", "_blank")} className={styles.instagram} >
                                             <FaInstagram size={35} /> <p className={styles.iconsName}>Instagram</p>
                                        </div>
                                        <div onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rjrahulraj0007@gmail.com")} className={styles.gmail} >
                                             <SiGmail size={35} /> <p className={styles.iconsName}>Gmail</p>
                                        </div>
                                        <div onClick={() => window.open("https://leetcode.com/u/rolex0007/")} className={styles.leetcode} >
                                             <SiLeetcode size={35} /> <p className={styles.iconsName}>LeetCode</p>
                                        </div>

                                        <div onClick={() => window.open("https://www.codechef.com/users/rj_rahulraj")} className={styles.codechef} >
                                             <SiCodechef size={35} /> <p className={styles.iconsName}>CodeChef</p>
                                        </div>
                                        <div onClick={() => window.open("https://codeforces.com/profile/rahul_rj09")} className={styles.codeforces} >
                                             <SiCodeforces size={35} /> <p className={styles.iconsName}>CodeForces</p>
                                        </div>

                                   </div>
                              </div>

                         </div>

                    </div >
                    <br />
                    <div className={styles.copyRight}>
                         <p>© 2024 Rahul Raj. All rights reserved.</p>
                    </div>

               </div>
          </>
     )
}

export default Footer;
