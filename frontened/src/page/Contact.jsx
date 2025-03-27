import React, { useState } from 'react'
import styles from '../Styles/Contact.module.css'
import heroImage from '../../assests/hero/heroImage.png'

const IntialState = {
     name: '',
     email: '',
     message: '',
}

const Contact = () => {

     const [contactData, setContactData] = useState(IntialState)

     const handleChange = (e) => {
          setContactData({ ...contactData, [e.target.name]: e.target.value })
     }

     const handleSend = () => {
          setContactData({
               name: '',
               email: '',
               message: '',
          })
          alert('Message Sent')
     }


     return (
          <section className={styles.Contact}>
               <h2>Contact Me</h2>
               <div className={styles.contact__container}>
                    <div className={styles.image}>
                         <img src={heroImage} alt="Rahul Raj" />
                    </div>
                    <div className={styles.contactDetails}>
                         <div className={styles.contactName}>
                              <label htmlFor="name">Name</label>
                              <input value={contactData.name} onChange={(e => handleChange(e))} name='name' type="text" />
                         </div>
                         <div className={styles.contactEmail}>
                              <label htmlFor="email">Email</label>
                              <input value={contactData.email} onChange={(e => handleChange(e))} name="email" type="email" />
                         </div>
                         <div className={styles.contactMessage}>
                              <label htmlFor="message">Message</label>
                              <textarea value={contactData.message} onChange={(e => handleChange(e))} name='message' type="button" />
                         </div>
                         <button onClick={handleSend}> Send</button>
                    </div>
               </div>
          </section>
     )
}

export default Contact