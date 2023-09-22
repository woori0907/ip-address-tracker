import React from "react";

export const Card = ({ geoInfo }) => {
  console.log(geoInfo);
  const { ip, city, state_prov, time_zone, isp } = geoInfo;
  return (
    <section>
      <div>
        <p>IP ADDRESS</p>
        <p>{ip}</p>
      </div>
      <div>
        <p>LOCATION</p>
        <p>
          {city}, {state_prov}
        </p>
      </div>
      <div>
        <p>TIME ZONE</p>
        <p>UTF {time_zone.offset_with_dst}</p>
      </div>
      <div>
        <p>ISP</p>
        <p>{isp}</p>
      </div>
    </section>
  );
};
