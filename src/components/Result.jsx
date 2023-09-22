import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Map } from "./Map";

export const Result = ({ address }) => {
  /** api 불러와서 처리 */
  const [ipGeoInfo, setGeoInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIpGeo = async (address) => {
    await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ip=${address}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGeoInfo(data);
        setIsLoading(true);
      });
  };

  const initResult = async () => {
    const myIp = await fetch("https://api.ipgeolocation.io/getip")
      .then((response) => response.json())
      .then((data) => data.ip);
    getIpGeo(myIp);
  };
  useEffect(() => {
    /** 맨처음은 접속자 IP 가져와서 보여주기 */
    initResult();
  }, []);
  useEffect(() => {
    /** 맨처음은 접속자 IP 가져와서 보여주기 */
    getIpGeo(address);
  }, [address]);

  return (
    <div>
      {isLoading ? (
        <Card ip={ipGeoInfo?.ip} geoInfo={ipGeoInfo} />
      ) : (
        <p>Loading</p>
      )}

      {isLoading ? (
        <Map long={ipGeoInfo?.longitude} lat={ipGeoInfo?.latitude} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

// }
// city={ipGeoInfo?.city}
// state_prove={ipGeoInfo?.state_prove}
// country_name={ipGeoInfo?.country_name}
// time_zone={ipGeoInfo?.time_zone}
// isp={ipGeoInfo?.isp}
