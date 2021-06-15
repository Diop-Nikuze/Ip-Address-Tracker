import { Box } from "@chakra-ui/react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import iconLocation from "../images/icon-location.svg";
import L from "leaflet";

const markerIcon = new L.icon({
  iconUrl: iconLocation,
  iconSize: [25, 45],
});

const Map = ({ locations }) => {
  return (
    <Box
      mt={{ base: -150, sm: -150, md: -250, lg: -100 }}
      pos="absolute"
      zIndex="-1"
    >
      {locations.map((loc) => {
        return (
          <MapContainer
            key={`${loc.location.lat} ${loc.location.lng}`}
            center={[loc.location.lat, loc.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              position={[loc.location.lat, loc.location.lng]}
              icon={markerIcon}
            >
              <Popup>{`${loc.location.region}`}</Popup>
            </Marker>
          </MapContainer>
        );
      })}
    </Box>
  );
};

export default Map;
