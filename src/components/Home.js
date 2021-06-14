import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Home = ({ details }) => {
  return (
    <Box position="absolute">
      {details.map((address) => {
        return (
          <Box mt={-120}>
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
                  {`${address.ip}`}
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
                  {`${address.location.country}`}
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
                  {`${address.location.timezone}`}
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
                  {`${address.isp}`}
                </Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
