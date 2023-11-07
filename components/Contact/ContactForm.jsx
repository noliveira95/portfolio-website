"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
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
          setIsFormSubmitted(isSubmitSuccessful);
          // reset();
          // recaptchaRef.current.reset();
        },
        (error) => {
          console.log("FAILED...");
          console.log(error.text);
          setIsFormSubmitted(isSubmitSuccessful);
          alert("Please verify that you are a human.");
        }
      );
    console.log("isSubmitSuccessful", isSubmitSuccessful);
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
      {isFormSubmitted && (
        <p className={styles["contact-form-success"]}>
          Thank you for your message!
        </p>
      )}
    </form>
  );
}

export default ContactForm;
