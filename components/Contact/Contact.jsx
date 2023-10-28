import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles["contact-form-wrapper"]}>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
