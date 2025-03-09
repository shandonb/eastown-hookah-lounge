"use client";

import { List, Heading, Flex } from "@chakra-ui/react";
import React from "react";

export interface MenuListProps {
  title: string;
  children?: React.ReactNode
};

export function MenuList ({ title, children }: MenuListProps) {
  return(
    <Flex
      wrap="wrap"
      borderWidth={{
        base: "0px",
        md: "3px",
        lg: "0px"
      }}
      padding={{
        base: 3,
        lg: 5
      }}
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