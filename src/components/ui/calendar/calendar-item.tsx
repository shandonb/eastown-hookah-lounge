"use client";

import { Flex, Heading } from "@chakra-ui/react";

export interface CalendarItemProps {
  /** Day of the week */
  day: string;
  children: React.ReactNode;
}

export default function CalendarItem({day, children}: CalendarItemProps) {
  return(
    <Flex width="500px" height="500px" justify={"center"} wrap="wrap">
      <Heading border="md" width="100%" bg="bg.emphasized" pb="0" mb="0">{day}</Heading>
      { children }
    </Flex>
  )
}