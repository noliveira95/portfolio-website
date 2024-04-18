import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div id="contact-me">
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <div className={styles['contact-form-wrapper']}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
