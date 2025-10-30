
import styles from "../Styles/Project.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import snapchat from '../../assests/projects/snapchat.png';
import resumebuilder from '../../assests/projects/resumebuilder.png';
import techversity from '../../assests/projects/techversity.png';
import delishdish from '../../assests/projects/delishdish.png';
const projects = [
     {
          id: 1,
          title: "AI-powered Resume Builder",
          summary:
               "AI-powered Resume Builder that allows users to create, edit, and generate professional resumes effortlessly. The platform enables users to input their personal, educational, and professional details through an intuitive, modal-based interface and instantly view real-time resume previews with multiple modern, ATS-friendly templates. It leverages AI to generate professional summaries, suggest skill enhancements, and optimize resume content based on job descriptions or keywords. The app ensures a consistent and responsive design across all devices using Tailwind CSS and exports high-quality, pixel-perfect PDFs identical to the on-screen preview with react-pdf/renderer. User data is securely stored in MongoDB following a structured schema that includes profile, contact, work experience, education, projects, certifications, and skills.",
          img: resumebuilder,
          tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "OpenAI API"],
          link: "https://ai-resumebuilder-y8qz.onrender.com/",
          github: "https://github.com/rjrahulraj/AI-Resume-Builder",
     },
     {
          id: 2,
          title: "SnapTalk - Real-Time Chat Application",
          summary:
               "A full-featured real-time chat platform inspired by Snapchat’s communication experience. It allows users to chat individually or in groups, with admin controls in group chats such as adding/removing members. The app includes real-time notifications, typing indicators, and online status tracking, ensuring seamless and interactive communication. Built with the MERN stack  and Socket.IO for instant messaging, the platform offers a responsive, modern interface with Tailwind CSS and robust JWT-based authentication for secure user access.",
          img: snapchat,
          tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Socket.IO", "JWT", "websockets"],
          link: "https://snap-chat.onrender.com/",
          github: "https://github.com/rjrahulraj/CHAT-APP",
     },
     {
          id: 3,
          title: "Delish Dish — Food Delivery Application",
          summary:
               "Delish Dish is a responsive, user-friendly food delivery platform built to let customers browse menus, add items to a cart, and place orders quickly. The app shows categorized product listings with images, supports adding/removing items and quantity changes in a dynamic cart, collects delivery details at checkout, and processes orders while keeping inventory and order status consistent. An admin panel allows menu management (CRUD for dishes), order management, and basic analytics. The project includes image uploads for menu items (Cloudinary or similar), JWT-based authentication for users/admins, and a polished, mobile-first UI for smooth ordering on any device.",
          img: delishdish,
          tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
          link: "https://delish-dish.onrender.com/",
          github: "https://github.com/rjrahulraj/Delish-Dish",
     },
     {
          id: 4,
          title: "TechVersity — Admin Platform & IT Services Portal",
          summary:
               "TechVersity is an admin-first IT services platform and training portal that centralizes course management, user administration, and business operations — built to let admins manage content, users, and analytics while delivering courses and services to learners and clients. The platform features a robust admin dashboard for managing courses (CRUD operations), user roles (admins, instructors, learners), and service requests. It includes analytics for tracking user engagement, course completion rates, and service performance. The user interface is designed for ease of navigation and responsiveness, ensuring a seamless experience across devices. Built with the MERN stack, the application incorporates JWT-based authentication for secure access and role management.",
          img: techversity,
          tags: ["React.js", "Node.js", "Express.js", "MongoDB",],
          link: "https://techversity.onrender.com/",
          github: "https://github.com/rjrahulraj/Admin_project",
     },

];

export default function FeaturedProjects() {
     return (
          <section className={styles.section} id="projects">
               <div className={styles.container}>
                    <header className={styles.header}>
                         <h2 className={styles.title}>Featured Projects</h2>
                         <p className={styles.subtitle}>Some of my recent work</p>
                    </header>

                    <div className={styles.grid}>
                         {projects.map((p, idx) => (
                              <article
                                   key={p.id}
                                   className={`${styles.card} ${idx % 2 === 1 ? styles.cardAlt : ""}`}
                                   tabIndex={0}
                                   aria-labelledby={`project-${p.id}-title`}
                              >
                                   <div className={styles.preview}>
                                        <img src={p.img} alt={p.title} className={styles.previewImg} />
                                   </div>

                                   <div className={styles.body}>
                                        <h3 id={`project-${p.id}-title`} className={styles.projectTitle}>
                                             {p.title}
                                        </h3>
                                        <p className={styles.description}>{p.summary}</p>

                                        <div className={styles.meta}>
                                             <div className={styles.tags}>
                                                  {p.tags.map((t) => (
                                                       <span key={t} className={styles.tag}>
                                                            {t}
                                                       </span>
                                                  ))}
                                             </div>

                                             <div className={styles.actions}>
                                                  <Link to={p.github} className={styles.viewBtn} aria-label={`Open ${p.title}`}>
                                                       Github <FaExternalLinkAlt className={styles.icon} />
                                                  </Link>
                                                  <Link to={p.link} className={styles.viewBtn} aria-label={`Open ${p.title}`}>
                                                       View <FaExternalLinkAlt className={styles.icon} />
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </article>
                         ))}
                    </div>
               </div>
          </section>
     );
}
