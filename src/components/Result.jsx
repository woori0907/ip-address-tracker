import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Result = ({ address }) => {
  /** api 불러와서 처리 */
  const [ipGeoInfo, setGeoInfo] = useState();

  const getIpGeo = async (address) => {
    await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ip=${address}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGeoInfo(data);
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
      <Card ip={ipGeoInfo?.ip} />
    </div>
  );
};
