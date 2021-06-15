import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Data = ({ details }) => {
  return (
    <Box maxWidth="90%" margin="50px auto">
      {details.map((address) => {
        return (
          <Box mt={{ base: -180, sm: -200, md: -110, lg: -120 }}>
            <Flex
              bg="white"
              justify="space-around"
              align="center"
              direction={{
                base: "column",
                sm: "column",
                md: "row  ",
                lg: "row",
              }}
              h={{ base: 250, sm: 250, md: 100, lg: 120 }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              borderRadius="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "left",
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
                  UTC {`${address.location.timezone}`}
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

export default Data;
