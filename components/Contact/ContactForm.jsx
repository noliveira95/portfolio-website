"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function ContactForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  // };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const templateParams = {
      user_name: data.user_first_name + " " + data.user_last_name,
      user_email: data.user_email,
      message: data.message,
    };

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        templateParams,
        "Igz98Ny1j25t2gvsI"
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log("FAILED...");
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className={styles["contact-form"]}
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="First name"
        name="user_first_name"
        {...register("user_first_name", { required: true, maxLength: 80 })}
      />
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Last name"
        name="user_last_name"
        {...register("user_last_name", { required: true, maxLength: 100 })}
      />
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Email"
        name="user_email"
        {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Additional Information"
        name="message"
        {...register("message", {
          required: false,
          maxLength: 250,
        })}
      />

      <input className={styles.submit} type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
