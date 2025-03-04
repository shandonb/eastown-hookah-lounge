"use client";

import { Grid, Heading } from "@chakra-ui/react";

interface HeadlineBlockProps {
  heading: string;
  copy?: string;
  height?: number;
}

export default function HeadlineBlock({heading, copy, height=30}: HeadlineBlockProps) {
  return (
    <Grid 
      placeItems="center" 
      placeContent="center" 
      height={`${height}vh`} 
      gap="6"
    >
      <Heading 
        size={{
          base: "md",
          lg: "2xl",
          xl: "4xl",
          "2xl": "6xl"
        }} 
        textTransform={"uppercase"}
        textAlign="center"
      >
        {heading}
      </Heading>
      <Heading 
        width={{
          base: "100%",
          lg: "40%"
        }}
        size={{
          base: "xs",
          lg: "md",
          xl: "lg",
          "2xl": "xl"
        }}
        textAlign={"center"}
      >
        {copy}        
      </Heading>
    </Grid>
  )
}
