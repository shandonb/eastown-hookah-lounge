"use client";

import { Center, Flex, Heading, Text } from "@chakra-ui/react";

export interface CalendarItemProps {
  /** Day of the week */
  day: string;
  /** Child objects */
  children: React.ReactNode;
}

export default function CalendarItem({day, children}: CalendarItemProps) {
  return(
    <Flex width="100%" aspectRatio={1} justify={"center"} wrap="wrap" direction={"column"} m={0}>
      <Heading border="md" width="100%" bg="bg.emphasized" pb="0" mb="0" textAlign={"center"}>{day}</Heading>
      <Center flex={1} border="sm"><Text textAlign={"center"}>{ children }</Text></Center>
    </Flex>
  )
}