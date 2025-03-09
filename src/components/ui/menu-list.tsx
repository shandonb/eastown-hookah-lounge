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
      width="100%"
    >
      <Heading width="100%"> { title }</Heading>
      <List.Root>
        {React.Children.map(children, (child, index) => (
          <List.Item key={index}>
            {child}
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  )
}