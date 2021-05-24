import React from "react";
import { Box, Text, Flex, Heading, Image, Input } from "@chakra-ui/react";
import bg from "../images/pattern-bg.png";
import iconArrow from "../images/icon-arrow.svg";

const Home = ({ details }) => {
  // const [data, setData] = useState("");
  // let textInput = React.createRef();

  // let onclickHandler = (e) => {
  //   e.preventDefault();
  //   setData(textInput.current.value);
  // };

  return (
    <Box bg="gray.100" h="120vh">
      <Box
        bgImage={bg}
        h={{ base: "55vh", sm: "55vh", md: "55vh", lg: "50vh" }}
      >
        <Flex direction="column" align="center">
          <Heading my={45} color="white">
            IP Address Tracker
          </Heading>
          <Flex align="center">
            <Input
              h={{ base: 55, sm: 55, md: 55, lg: 70 }}
              w={{ base: 300, sm: 300, md: 300, lg: 700 }}
              bg="white"
              border="none"
              borderLeftRadius="xl"
              borderRightRadius="none"
              fontSize={18}
            ></Input>
            <Flex
              bg="black"
              h={{ base: 57, sm: 57, md: 57, lg: 73 }}
              w={{ base: 50, sm: 50, md: 50, lg: 75 }}
              align="center"
              justify="center"
              borderRightRadius="xl"
              as="button"
              // onClick={onOnclickHandler}
            >
              <Image src={iconArrow}></Image>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bg="white"
          justify="space-around"
          align="center"
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          h={{ base: 250, sm: 250, md: 250, lg: 120 }}
          w={{ base: 300, sm: 300, md: 300, lg: 1100 }}
          m="50px auto"
          borderRadius="xl"
          textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
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
              {details.map((adress) => {
                return <h1>{`${adress.ip}`}</h1>;
              })}
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
              {details.map((adress) => {
                return <h1>{`${adress.location.country}`}</h1>;
              })}
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
              {details.map((adress) => {
                return <h1>{`${adress.location.timezone}`}</h1>;
              })}
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
              {details.map((adress) => {
                return <h1>{`${adress.isp}`}</h1>;
              })}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
