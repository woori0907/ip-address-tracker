import React from "react";
import styles from "./InputIP.module.css";

export const InputIP = ({ address, setAddress }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    setAddress(e.target.previousSibling.value);
  };

  return (
    <section className={styles.input_wrap}>
      <a href="#" className={styles.title}>
        IP ADDRESS TRACKER
      </a>
      <form className={styles.input_form}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.input_section}
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.submit_button}
        >
          <i className={`fa-solid fa-chevron-right ${styles.arrow_icon}`}></i>
        </button>
      </form>
    </section>
  );
};
