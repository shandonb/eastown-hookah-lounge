"use client";
import { Heading, Separator, Flex } from "@chakra-ui/react";

export interface MenuGroupProps {
  title: string;
  children: React.ReactNode;
}

export function MenuGroup ({ title, children}: MenuGroupProps) {
  return (
    <Flex>
      <Separator
        size={"lg"}
      />
      <Heading>
        { title }
      </Heading>
    </Flex>
  )
}