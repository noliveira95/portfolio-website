import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>
        Contact me using the form below,
        <br /> or{' '}
        <a href="mailto:contact@nickolive.com" target="_blank">
          click here to send me an email.
        </a>
      </p>
      <div className={styles['contact-form-wrapper']}>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
