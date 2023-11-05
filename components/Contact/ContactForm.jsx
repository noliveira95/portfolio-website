"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const form = useRef();
  const recaptchaRef = useRef(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
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
        placeholder="Name"
        name="user_name"
        {...register("user_name", { required: true, maxLength: 120 })}
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

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        ref={recaptchaRef}
      />

      <input className={styles.submit} type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
