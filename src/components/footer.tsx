"use client";

import { Box, Flex, Heading, List, IconButton, Link } from "@chakra-ui/react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
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
      pt={{
        base: 0,
        sm: 4,
        lg: 16
      }} 
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
        <Flex 
          wrap={"wrap"} 
          justify="center"
          align={"center"}
          alignContent={"center"}
          height="100%"
        >
          <Heading 
            size="2xl"
            flexBasis="100%"
            textAlign={"center"}
          >
            Hours of Operation:
          </Heading>
          <List.Root 
            variant={"plain"}
            mt="3"
          >
            <List.Item>Sunday - 5:00PM - 12:00AM</List.Item>
            <List.Item>Monday - 5:00PM - 2:00AM</List.Item>
            <List.Item>Tuesday - 5:00PM - 2:00AM</List.Item>
            <List.Item>Wednesday - 5:00PM - 2:00AM</List.Item>
            <List.Item>Thursday - 5:00PM - 2:00AM</List.Item>
            <List.Item>Friday - 5:00PM - 4:00AM</List.Item>
            <List.Item>Saturday - 5:00PM - 4:00AM</List.Item>
          </List.Root>
        </Flex>
      </Box>
      <Flex 
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
        justify={"center"}
      >
        <Leaflet />
      </Flex>
      <Flex
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
        align={"center"}
        alignContent={"center"}
        justify={{
          base: "center",
          lg: "end"
        }}
        pr={{
          base: 4,
          md: 6,
          lg:12
        }}
        wrap={"wrap"}
      >
        <Heading
          flexBasis={"100%"}
          textAlign={"right"}
          textTransform={"uppercase"}
        >
          Eastown Hookah Lounge
        </Heading>
        <List.Root
          variant={"plain"}
          mt="3"
        >
          <List.Item ml={"auto"}>1522 Wealthy St SE, Grand Rapids MI</List.Item>
          <List.Item ml={"auto"}>Phone: (616) 456-6664</List.Item>
          <List.Item ml={"auto"}>
            <IconButton 
              aria-label="EHL Facebook" 
              variant={"ghost"}
              asChild
            >
              <Link href="https://www.facebook.com/EastownHookah">
                <BsFacebook />
              </Link>
            </IconButton>
            <IconButton 
              aria-label="EHL Instagram"
              variant={"ghost"}
              asChild
            >
              <Link href="https://www.instagram.com/Eastownhookahlounge">
                <BsInstagram />
              </Link>
            </IconButton>
          </List.Item>
        </List.Root>
      </Flex>
    </Flex>
  )
}