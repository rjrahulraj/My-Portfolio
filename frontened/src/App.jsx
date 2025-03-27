
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Footer from './components/Footer'
import About from './page/About'
import Contact from './page/Contact'
import Experience from './page/Experience'
import Project from './page/Project'
import Skill from './page/Skill'

function App() {

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/experience" element={<Experience></Experience>} />
        <Route path="/project" element={<Project></Project>} />
        <Route path="/skill" element={<Skill></Skill>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
