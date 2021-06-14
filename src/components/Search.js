import React from "react";
import { Flex, Heading, Input, Image } from "@chakra-ui/react";
import iconArrow from "../../src/images/icon-arrow.svg";
import bg from "../../src/images/pattern-bg.png";

const Search = ({ onchange, onsubmit }) => {
  return (
    <Flex
      direction="column"
      align="center"
      bgImage={bg}
      h={{ base: "50vh", sm: "50vh", md: "25vh", lg: "50vh" }}
      position="relative"
    >
      <Heading my={{ base: 25, sm: 25, md: 25, lg: 45 }} color="white">
        IP Address Tracker
      </Heading>
      <form onSubmit={onsubmit}>
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
            onChange={onchange}
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
