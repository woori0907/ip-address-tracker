import React from "react";
import styles from "./InputIP.module.css";

export const InputIP = ({ address, setAddress }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    sendData(e.target.previousSibling.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendData(e.target[0].value);
  };

  const sendData = (value) => {
    let finalvalue = "";
    if (
      value.includes("http://") ||
      value.includes("http://www.") ||
      value.includes("www.")
    ) {
      const startAt = value.indexOf(".");

      finalvalue = value.slice(startAt + 1);
    } else {
      finalvalue = value;
    }
    console.log(finalvalue);
    setAddress(finalvalue);
  };
  return (
    <section className={styles.input_wrap}>
      <a href="#" className={styles.title}>
        IP ADDRESS TRACKER
      </a>
      <form className={styles.input_form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.input_section}
          required
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
