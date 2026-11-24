// pages/mechanics.jsx
import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629, // Default to center of India (you can change it)
};

function MechanicsMap() {
  const [marker, setMarker] = useState(null);

  const handleGeocode = (address) => {
    if (!window.google) {
      console.error("Google Maps API not loaded yet.");
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;
        setMarker({ lat: loc.lat(), lng: loc.lng() });
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter your location"
          onBlur={(e) => handleGeocode(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={marker || defaultCenter}
        zoom={marker ? 15 : 5}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MechanicsMap;
