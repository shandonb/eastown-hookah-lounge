"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Box
      width="100vw"
      height="35vh"
      bgImage="url('/img/hero-banner.webp')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      position="relative"
      mt="16"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="50%"
        height="100%"
        backdropFilter="blur(5px)"
        maskImage="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)"
        zIndex="0"
      />
      <Flex
        p="12"
        width="50%"
        height="100%"
        bg="linear-gradient(90deg, rgba(0,0,5,1.0) 0%, rgba(0,0,5,0.7) 80%, rgba(0,0,5,0.0) 100%)"
        alignItems="center"
        alignContent="center"
        justify="center"
        position="relative"
        zIndex="1"
        wrap="wrap"       
      >
        <Image 
          src="ehl-logo.svg" 
          alt="Eastown Hookah Lounge"
          width="40%"
          mb="6"
        />
        <Heading 
          flexBasis="100%" 
          textAlign="center" 
          textTransform={"uppercase"}
          size="3xl"
        > 
          Grand Rapids&apos; premiere hookah experience 
        </Heading>
        <Heading
          flexBasis={"100%"}
          textAlign={"center"}
          textTransform={"uppercase"}
          size={"lg"}
        >
          Since 2005
        </Heading>
      </Flex>
    </Box>
  )
}