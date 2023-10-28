"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Additional Information"
        {...register("Additional Information", {
          required: false,
          maxLength: 250,
        })}
      />

      <input className={styles.submit} type="submit" />
    </form>
  );
}

export default ContactForm;
