"use client";

import { List, Heading, Flex } from "@chakra-ui/react";
import React from "react";
export interface MenuListProps {
  /** Header for the list of items */
  title: string;
  /** Child items */
  children?: React.ReactNode
};
/** Test description */
export function MenuList ({ title, children }: MenuListProps) {
  return(
    <Flex
      wrap="wrap"
      width="100%"
      padding={{
        base: 3,
        lg: 5
      }}
      gap={0}
      alignContent={"center"}
    >
      <Heading 
        width="100%"
        textDecoration={"underline"}
      >
        { title }
      </Heading>
      <List.Root
        variant="plain"
        width="100%"
      >
        {React.Children.map(children, (child, index) => (
          <List.Item 
            key={index}
          >
            {child}
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  )
}