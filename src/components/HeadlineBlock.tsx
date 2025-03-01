"use client";

import { Grid, Heading } from "@chakra-ui/react";

interface HeadlineBlockProps {
  heading: string;
  copy?: string;
  height?: number;
}

export default function HeadlineBlock({heading, copy, height=30}: HeadlineBlockProps) {
  return (
    <Grid placeItems="center" placeContent="center" height={`${height}vh`} gap="6">
      <Heading size={"6xl"} textTransform={"uppercase"}>{heading}</Heading>
      <Heading width="40%" textAlign={"center"}>{copy}</Heading>
    </Grid>
  )
}
