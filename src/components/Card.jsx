import React from "react";
import styles from "./Card.module.css";

export const Card = ({ geoInfo }) => {
  console.log(geoInfo);
  const { ip, city, state_prov, time_zone, isp } = geoInfo;
  return (
    <section className={styles.result_wrap}>
      <div className={styles.result_group}>
        <p className={styles.result_label}>IP ADDRESS</p>
        <p className={styles.result_text}>{ip}</p>
      </div>
      <div className={styles.short_line}></div>
      <div className={styles.result_group}>
        <p className={styles.result_label}>LOCATION</p>
        <p className={styles.result_text}>
          {city}, {state_prov}
        </p>
      </div>
      <div className={styles.short_line}></div>

      <div className={styles.result_group}>
        <p className={styles.result_label}>TIME ZONE</p>
        <p className={styles.result_text}>UTF {time_zone.offset_with_dst}</p>
      </div>
      <div className={styles.short_line}></div>

      <div className={styles.result_group}>
        <p className={styles.result_label}>ISP</p>
        <p className={styles.result_text}>{isp}</p>
      </div>
    </section>
  );
};
