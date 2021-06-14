import React, { useState } from "react";
import { Flex, Heading, Input, Image } from "@chakra-ui/react";
import iconArrow from "../images/icon-arrow.svg";

const Search = ({ details }) => {
  const [search, setSearch] = useState("");
  const [ip, setIp] = useState(details);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIp(search);
    console.log(event.target.value);
    setSearch("");
  };

  return (
    <Flex direction="column" align="center">
      <Heading my={{ base: 25, sm: 25, md: 25, lg: 45 }} color="white">
        IP Address Tracker
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex align="center">
          <Input
            h={{ base: 55, sm: 55, md: 55, lg: 70 }}
            w={{ base: 200, sm: 200, md: 200, lg: 700 }}
            bg="white"
            placeholder="Search for any IP address or domain"
            border="none"
            borderLeftRadius="xl"
            borderRightRadius="none"
            fontSize={18}
            onChange={handleChange}
          ></Input>
          <Flex
            bg="black"
            h={{ base: 57, sm: 57, md: 57, lg: 73 }}
            w={{ base: 50, sm: 50, md: 50, lg: 75 }}
            align="center"
            justify="center"
            borderRightRadius="xl"
            as="button"
          >
            <Image src={iconArrow}></Image>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

export default Search;
