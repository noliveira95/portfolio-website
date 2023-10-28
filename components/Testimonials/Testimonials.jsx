import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section id={styles.testimonials}>
      <h2 className={styles["testimonials-heading"]}>Testimonials</h2>
      <div className={styles["testimonial-container"]}>
        <blockquote className={styles["testimonial-blockquote"]}>
          <p className={styles["testimonial-quote"]}>
            &quot;Nicholas was a part in getting our app to market. He asked the
            right questions and quickly delivered results. I would 100% work
            with him again!&quot;
          </p>
          <div className="testimonial-author-wrapper">
            <cite className={styles["testimonial-author"]}>
              Joshua Leavitt{" "}
            </cite>
          </div>
          <div className={styles["author-title-wrapper"]}>
            <cite className={styles["author-title"]}>CEO, Intagly</cite>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonials;
