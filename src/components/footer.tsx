"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Leaflet from "./ui/map";

export function Footer() {
  return (
    <Flex 
      height={{
        base: "120vh",
        md: "80vh",
        lg: "40vh"
      }}
      minHeight="500px"
      width="100%" 
      justify={"space-evenly"} 
      pt={"16"} 
      align={"center"} 
      justifyContent={"center"}
      wrap="wrap"
    >
      <Box 
        width={{
          base: "100%",
          md: "1/2",
          lg: "1/3"
        }} 
        height={{
          base: "1/3",
          md: "1/2",
          lg: "100%"
        }}
      >
        <Flex wrap={"wrap"}>
          <Heading size="2xl" flexBasis={"100%"}>Hours of Operation:</Heading>
          <Text flexBasis={"100%"}>Sunday - 5:00PM - 12:00AM</Text>
          <Text flexBasis={"100%"}>Monday - 5:00PM - 2:00AM</Text>
          <Text flexBasis={"100%"}>Tuesday - 5:00PM - 2:00AM</Text>
          <Text flexBasis={"100%"}>Wednesday - 5:00PM - 2:00AM</Text>
          <Text flexBasis={"100%"}>Thursday - 5:00PM - 2:00AM</Text>
          <Text flexBasis={"100%"}>Friday - 5:00PM - 4:00AM</Text>
          <Text flexBasis={"100%"}>Saturday - 5:00PM - 4:00AM</Text>
        </Flex>
      </Box>
      <Box 
        width={{
          base: "100%",
          md: "1/2",
          lg: "1/3"
        }} 
        height={{
          base: "1/3",
          md: "1/2",
          lg: "100%"
        }}
      >
        <Leaflet />
      </Box>
      <Box 
        width={{
          base: "100%",
          md: "1/2",
          lg: "1/3"
        }} 
        height={{
          base: "1/3",
          md: "1/2",
          lg: "100%"
        }}
      >
        <Heading>Company Information Section</Heading>
      </Box>
    </Flex>
  )
}