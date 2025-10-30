import React, { useState } from "react";
import styles from "../Styles/Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
     const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
     const [status, setStatus] = useState(null);

     const handleChange = (e) => {
          setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
               setStatus("error");
               setTimeout(() => setStatus(null), 3000);
               return;
          }
          const subject = encodeURIComponent(form.subject || "Contact from website");
          const body = encodeURIComponent(`Name: ${form.name}\n\n${form.message}\n\n(Email: ${form.email})`);
          window.open(`mailto:rjrahulraj0007@gmail.com?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");

          setStatus("success");
          setForm({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(null), 3500);
     };

     return (
          <section className={styles.contactSection} id="contact">
               <div className={styles.container}>
                    <header className={styles.header}>
                         <h2 className={styles.title}>Contact</h2>
                         <p className={styles.subtitle}>I’d love to hear from you — let’s build something great.</p>
                    </header>

                    <div className={styles.content}>

                         <div className={styles.formWrap}>
                              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                   <div className={styles.row}>
                                        <label className={styles.field}>
                                             <span className={styles.labelText}>Name</span>
                                             <input
                                                  name="name"
                                                  value={form.name}
                                                  onChange={handleChange}
                                                  placeholder="Your full name"
                                                  required
                                                  aria-required="true"
                                             />
                                        </label>

                                        <label className={styles.field}>
                                             <span className={styles.labelText}>Email</span>
                                             <input
                                                  name="email"
                                                  type="email"
                                                  value={form.email}
                                                  onChange={handleChange}
                                                  placeholder="you@email.com"
                                                  required
                                                  aria-required="true"
                                             />
                                        </label>
                                   </div>

                                   <label className={styles.field}>
                                        <span className={styles.labelText}>Subject</span>
                                        <input
                                             name="subject"
                                             value={form.subject}
                                             onChange={handleChange}
                                             placeholder="Brief topic"
                                        />
                                   </label>

                                   <label className={styles.field}>
                                        <span className={styles.labelText}>Message</span>
                                        <textarea
                                             name="message"
                                             rows="6"
                                             value={form.message}
                                             onChange={handleChange}
                                             placeholder="Tell me about your project, question or opportunity..."
                                             required
                                             aria-required="true"
                                        />
                                   </label>

                                   <div className={styles.actions}>
                                        <button type="submit" className={styles.btn}>
                                             Send Message
                                        </button>

                                        {status === "success" && <span className={styles.statusSuccess}>Message opened in mail client ✅</span>}
                                        {status === "error" && <span className={styles.statusError}>Please fill required fields ✖</span>}
                                   </div>
                              </form>
                         </div>

                         <aside className={styles.infoWrap}>
                              <div className={styles.infoCard}>
                                   <div className={styles.icon}><FaEnvelope /></div>
                                   <div className={styles.infoText}>
                                        <h4>Email</h4>
                                        <a target="_blank" href="mailto:rjrahulraj0007@gmail.com" className={styles.infoLink}>rjrahulraj0007@gmail.com</a>
                                   </div>
                              </div>

                              <div className={styles.infoCard}>
                                   <div className={styles.icon}><FaPhoneAlt /></div>
                                   <div className={styles.infoText}>
                                        <h4>Phone</h4>
                                        <a href="tel:+917050583008" className={styles.infoLink}>+91 7050583008</a>
                                   </div>
                              </div>

                              <div className={styles.infoCard}>
                                   <div className={styles.icon}><FaMapMarkerAlt /></div>
                                   <div className={styles.infoText}>
                                        <h4>Location</h4>
                                        <p className={styles.infoSmall}>Bhopal, India</p>
                                   </div>
                              </div>

                              <div className={styles.socialRow}>
                                   <a href="https://github.com/rjrahulraj/" target="_blank" rel="noopener noreferrer" className={styles.social}><FaGithub /></a>
                                   <a href="https://www.linkedin.com/in/rahul-raj-795825253/" target="_blank" rel="noopener noreferrer" className={styles.social}><FaLinkedin /></a>
                                   <a href="https://www.instagram.com/rahul._.rj09/" target="_blank" rel="noopener noreferrer" className={styles.social}><FaInstagram /></a>
                              </div>


                         </aside>
                    </div>
               </div>
          </section>
     );
};

export default Contact;
