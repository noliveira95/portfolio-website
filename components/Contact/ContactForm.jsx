"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import DialogPopup from "../shared/Dialog/Dialog";
import { ThreeDots } from "react-loader-spinner";

function ContactForm() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const form = useRef();
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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
    setIsButtonDisabled(true);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await emailjs
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
          openDialog();
        },
        (error) => {
          console.log("FAILED...");
          console.log(error.text);
          alert("Please verify that you are a human.");
        }
      );
  };

  return (
    <form
      className={styles["contact-form"]}
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      {errors.user_name && (
        <span className={styles["contact-form-error"]}>
          {errors.user_name.message}
        </span>
      )}
      {errors.user_email && (
        <span className={styles["contact-form-error"]}>
          {errors.user_email.message}
        </span>
      )}
      {errors.additional_information && (
        <span className={styles["contact-form-error"]}>
          {errors.additional_information.message}
        </span>
      )}
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Name"
        name="user_name"
        {...register("user_name", {
          required: "Please enter your name.",
          maxLength: 120,
        })}
      />
      <input
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Email"
        name="user_email"
        {...register("user_email", {
          required: "Please enter your email address.",
          pattern: /^\S+@\S+$/i,
        })}
      />
      <textarea
        className={styles["contact-form-field"]}
        type="text"
        placeholder="Additional Information"
        name="message"
        {...register("message", {
          required: false,
          maxLength: {
            value: 250,
            message: "Please enter a message with fewer than 250 characters.",
          },
        })}
      />

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        ref={recaptchaRef}
        onChange={() => setIsButtonDisabled(false)}
      />
      <button
        className={styles.submit}
        type="submit"
        disabled={isButtonDisabled}
      >
        {isSubmitting ? (
          <ThreeDots width={24} height={24} color="#e9eaec" />
        ) : (
          "Send"
        )}
      </button>

      <DialogPopup
        title="Message Sent!"
        description="Thank you for your inquiry, I'll get back to you as soon as possible."
        buttonText="Finish"
        isOpen={dialogIsOpen}
        closeDialog={closeDialog}
      />
    </form>
  );
}

export default ContactForm;
