"use client";
import { Heading, Separator, Flex } from "@chakra-ui/react";
import React from "react";

export interface MenuGroupProps {
  /** Title section for the group */
  title: string;
  /** Child objects (Expects MenuList) */
  children: React.ReactNode;
  /** Number of columns. Uses Chakra Fractional width */
  cols: number;
}

export function MenuGroup ({ title, children, cols}: MenuGroupProps) {
  return (
    <Flex
      wrap="wrap"
      width="100%"
    >
      <Separator
        size={"lg"}
        width="100%"
        my="2"
      />
      <Heading
        width="100%"
        my="2"
      >
        { title }
      </Heading>
      {React.Children.map(children, (child, index) => (
        <Flex 
          key={index}
          wrap={"wrap"}
          width={`1/${cols}`}
        >
          {child}
        </Flex>
      ))}
    </Flex>
  )
}