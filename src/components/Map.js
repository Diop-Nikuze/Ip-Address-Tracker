import { Box } from "@chakra-ui/react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ locations }) => {
  return (
    <Box mt={150}>
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

            <Marker position={[loc.location.lat, loc.location.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        );
      })}
    </Box>
  );
};

export default Map;
