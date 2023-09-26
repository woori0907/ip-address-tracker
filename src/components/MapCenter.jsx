import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapCenter = ({ lat, long }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, long]);
  }, [lat, long]);
  return null;
};
