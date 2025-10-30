import { useState } from 'react';
import Styles from '../Styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { FiCommand } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const handleToggle = () => setMenuOpen((s) => !s);
     const closeMenu = () => setMenuOpen(false);

     return (
          <div className={Styles.navbarWrapper}>
               <nav className={Styles.navbar} role="navigation" aria-label="Main navigation">
                    <div className={Styles.navbarContainer}>
                         <div className={Styles.logo} onClick={closeMenu} role="button" tabIndex={0}>
                              <FiCommand aria-hidden="true" />
                              <h2>Rj</h2>
                         </div>

                         <div className={Styles.navbarMenu}>
                              <ul className={Styles.navbarLinks}>
                                   <li><Link to="/">Home</Link></li>
                                   <li><Link to="/experience">Experience</Link></li>
                                   <li><Link to="/project">Projects</Link></li>
                                   <li><Link to="/skill">Skills</Link></li>
                                   <li><Link to="/about">Blog</Link></li>
                              </ul>

                         </div>

                         <div>
                              <ul className={Styles.socialIcons}>
                                   <li>
                                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                             <FaGithub size={20} />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.linkedin.com/in/rahul-raj-795825253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                             <FaLinkedin size={20} />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.instagram.com/rahul._.rj09/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                             <FaInstagram size={20} />
                                        </a>
                                   </li>
                              </ul>
                         </div>

                    </div>

               </nav>
               <div>
                    <button
                         className={Styles.navbarResponsiveBtn}
                         onClick={handleToggle}
                         aria-expanded={menuOpen}
                         aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                         {menuOpen ? <MdClose color='white' size={28} /> : <IoReorderThreeOutline size={35} />}
                    </button>
               </div>





               <aside className={`${Styles.navSlide} ${menuOpen ? Styles.open : ''}`} aria-hidden={!menuOpen}>
                    <ul className={Styles.navbarLinks}>
                         <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                         <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
                         <li><Link to="/project" onClick={closeMenu}>Projects</Link></li>
                         <li><Link to="/skill" onClick={closeMenu}>Skills</Link></li>
                         <li><Link to="/about" onClick={closeMenu}>Blog</Link></li>
                    </ul>

                    <div style={{ marginTop: 'auto' }}>
                         <ul className={Styles.socialIcons}>
                              <li>
                                   <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
                              </li>
                              <li>
                                   <a href="https://www.linkedin.com/in/rahul-raj-795825253/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
                              </li>
                              <li>
                                   <a href="https://www.instagram.com/rahul._.rj09/" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
                              </li>
                         </ul>
                    </div>

               </aside>
          </div>
     );
};

export default Navbar;
