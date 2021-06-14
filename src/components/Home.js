import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Heading, Image, Input } from "@chakra-ui/react";
import bg from "../images/pattern-bg.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Search from "./Search";

const Home = ({ details }) => {
  return (
    <Box bg="gray.100">
      {details.map((address) => {
        return (
          <Box
            bgImage={bg}
            h={{ base: "50vh", sm: "50vh", md: "25vh", lg: "50vh" }}
          >
            <Search details={details} />
            <Flex
              bg="white"
              justify="space-around"
              align="center"
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
              h={{ base: 250, sm: 250, md: 250, lg: 120 }}
              w={{ base: 300, sm: 300, md: 300, lg: 1100 }}
              m="50px auto"
              borderRadius="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
            >
              <Box>
                <Text
                  color="gray.500"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={{ base: 10, sm: 10, md: 10, lg: 13 }}
                >
                  Ip Address
                </Text>
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: 20, sm: 20, md: 20, lg: 30 }}
                >
                  <h1>{`${address.ip}`}</h1>
                </Text>
              </Box>
              <Box
                borderLeft={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #718096",
                }}
                pl={{ base: 0, sm: 0, md: 0, lg: 8 }}
              >
                <Text
                  color="gray.500"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={{ base: 10, sm: 10, md: 10, lg: 13 }}
                >
                  Location
                </Text>
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: 20, sm: 20, md: 20, lg: 30 }}
                >
                  <h1>{`${address.location.country}`}</h1>
                </Text>
              </Box>
              <Box
                borderLeft={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #718096",
                }}
                pl={{ base: 0, sm: 0, md: 0, lg: 8 }}
              >
                <Text
                  color="gray.500"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={{ base: 10, sm: 10, md: 10, lg: 13 }}
                >
                  Timezone
                </Text>
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: 20, sm: 20, md: 20, lg: 30 }}
                >
                  <h1>{`${address.location.timezone}`}</h1>
                </Text>
              </Box>
              <Box
                borderLeft={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #718096",
                }}
                pl={{ base: 0, sm: 0, md: 0, lg: 8 }}
              >
                <Text
                  color="gray.500"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={{ base: 10, sm: 10, md: 10, lg: 13 }}
                >
                  Isp
                </Text>
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: 20, sm: 20, md: 20, lg: 30 }}
                >
                  <h1>{`${address.isp}`}</h1>
                </Text>
              </Box>
            </Flex>
          </Box>
        );
      })}

      {details.map((loc) => {
        return (
          <MapContainer
            key={loc.id}
            center={[loc.location.lat, loc.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              key={loc.id}
              position={[loc.location.lat, loc.location.lng]}
            >
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

export default Home;
