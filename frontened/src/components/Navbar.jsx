import React, { useState } from 'react'
import Styles from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdClose } from 'react-icons/md'; // Close icon for toggle

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const handleToggle = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <nav className={Styles.navbar}>
               <div className={Styles.navbarContainer}>
                    <div className={Styles.logo}><h2>My Portfolio</h2></div>
                    <div>
                         <ul className={`${Styles.navbarLinks} ${menuOpen ? Styles.active : ''}`}>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/experience">Experience</Link></li>
                              <li><Link to="/project">Projects</Link></li>
                              <li><Link to="/skill">Skills</Link></li>
                              <li><Link to="/about">About</Link></li>
                         </ul>
                         <button className={Styles.navbarResponsiveBtn} onClick={handleToggle}>
                              {menuOpen ? <MdClose size={30} /> : <IoReorderThreeOutline size={30} />}
                         </button>
                    </div>
               </div>
          </nav>
     )
}
export default Navbar
