"use client"

import React, { use } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function Map() {
  const box = {
    width: '100%',
    height: '300px',
  };

  const host = {
    lat: 6.5244,
    lng: 3.3792
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={box}
        center={host}
        zoom={10}
      >
        <Marker position={host} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;