"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

/**
 * ContentParallax Component props
 */
export interface ContentParallaxProps {
  /** URL for background image */
  img: string;
  /** Headline text for content box (optional) */
  headline?: string;
  /** Body copy for content box (optional) */
  copy?: string;
  /** Any additional child elements */
  children?: React.ReactNode;
  /** Height of the banner */
  imgHeight?: string;
  /** Text alignment: left, center, or right */
  textAlign?: "left" | "center" | "right";
  /** Justification for the text content; start (left), center, or end (right) */
  flexJust?: "start" | "center" | "end";
  /** Speed of the parallax effect */
  parSpeed?: number;
}

export default function ContentParallax({
  img, 
  headline, 
  copy, 
  children, 
  imgHeight="30vh", 
  textAlign="right", 
  flexJust="end",
  parSpeed=-90
}
  : ContentParallaxProps) {
  return (
    <Flex 
      position="relative" 
      height={imgHeight} 
      width="100%" 
      justify={flexJust}
    >
      <ParallaxBanner
        layers={[
          { image: `${img}`, speed: parSpeed },
          { speed: -15}
        ]}
        style={{ height: imgHeight, position: "absolute", top: 0, left: 0, zIndex: 1}}
        
      />
      {(headline || copy) && (
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
          {(headline) && (
            <Heading 
              zIndex="2" 
              flexBasis={"100%"} 
              textAlign={textAlign}
            >
              {headline}
            </Heading>
          )}
          {(copy) && (
            <Text 
              zIndex={"2"} 
              flexBasis={"100%"} 
              textAlign={textAlign} 
            >
              {copy}
            </Text>
          )}
          {children}
        </Flex>
  )}
    </Flex>
    
  )
}