import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Map } from "./Map";
import styles from "./Results.module.css";

export const Result = ({ address }) => {
  /** api 불러와서 처리 */
  const [ipGeoInfo, setGeoInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIpGeo = async (address) => {
    await fetch(`http://ip-api.com/json/${address}`)
      .then((response) => response.json())
      .then((data) => {
        setGeoInfo(data);
        console.log(data);
        setIsLoading(true);
      });
  };

  const initResult = async () => {
    const myIp = await fetch("http://ip-api.com/json/")
      .then((response) => response.json())
      .then((data) => data.query);
    getIpGeo(myIp);
  };
  useEffect(() => {
    /** 맨처음은 접속자 IP 가져와서 보여주기 */
    initResult();
  }, []);
  useEffect(() => {
    getIpGeo(address);
  }, [address]);

  return (
    <section className={styles.result_wrap}>
      <div className={styles.card_absolute}>
        {isLoading ? (
          <Card ip={ipGeoInfo?.query} geoInfo={ipGeoInfo} />
        ) : (
          <p>Loading</p>
        )}
      </div>

      {isLoading ? (
        <Map long={ipGeoInfo?.lon} lat={ipGeoInfo?.lat} />
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};

// }
// city={ipGeoInfo?.city}
// state_prove={ipGeoInfo?.state_prove}
// country_name={ipGeoInfo?.country_name}
// time_zone={ipGeoInfo?.time_zone}
// isp={ipGeoInfo?.isp}
