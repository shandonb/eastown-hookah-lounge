"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

interface ContentParallaxProps {
  img: string;
  headline?: string;
  copy?: string;
  children?: React.ReactNode;
  height?: number;
  textAlign?: string;
  flexJust?: string;
}

export default function ContentParallax({
  img, 
  headline, 
  copy, 
  children, 
  height=30, 
  textAlign="right", 
  flexJust="end"}
  : ContentParallaxProps) {
  return (
    <Flex 
      position="relative" 
      height={`${height}vh`} 
      width="100%" 
      justify={flexJust}
    >
      <ParallaxBanner
        layers={[
          { image: `${img}`, speed: -90 },
          { speed: -15}
        ]}
        style={{ height: `${height}vh`, position: "absolute", top: 0, left: 0, zIndex: 1}}
        
      />
      <Flex 
        alignContent="center" 
        alignItems="center" 
        flexWrap={"wrap"} 
        width={{
          base: "100%",
          md: "50%",
          lg: "33%"
        }}
        bgColor={"rgba(0,0,15,0.5)"}
        zIndex={"2"} 
        mx={{
          base: 0,
          "2xl": 12
        }}
        my={{
          base: 0,
          "2xl": 6
        }}
        px={{
          base: 5,
          lg: 10
        }}
        backdropFilter={"blur(10px)"}
      >
        <Heading 
          zIndex="2" 
          flexBasis={"100%"} 
          textAlign={textAlign}
        >
          {headline}
        </Heading>

        <Text 
          zIndex={"2"} 
          flexBasis={"100%"} 
          textAlign={textAlign} 
        >
          {copy}
        </Text>

        {children}
      </Flex>
    </Flex>
    
  )
}