"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import DialogPopup from "../shared/Dialog/Dialog";

function ContactForm() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

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

  const openDialog = () => {
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    reset();
    recaptchaRef.current.reset();
    setDialogIsOpen(false);
  };

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
          console.log("isSubmitSuccessful", isSubmitSuccessful);
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("isSubmitSuccessful", isSubmitSuccessful);
          console.log("FAILED...");
          console.log(error.text);
          alert("Please verify that you are a human.");
        }
      );
    if (isSubmitSuccessful) {
      openDialog();
    }
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

      <DialogPopup
        title="Message Sent!"
        description="Thank you for your inquiry"
        buttonText="Finish"
        isOpen={dialogIsOpen}
        closeDialog={closeDialog}
      />
    </form>
  );
}

export default ContactForm;
