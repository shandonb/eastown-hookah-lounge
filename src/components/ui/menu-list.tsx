"use client";

import { List, Heading, Box } from "@chakra-ui/react";
import React from "react";

export interface MenuListProps {
  title: string;
  children?: React.ReactNode
};

export function MenuList ({ title, children }: MenuListProps) {
  return(
    <Box>
      <Heading> { title }</Heading>
      <List.Root>
        {React.Children.map(children, (child, index) => (
          <List.Item key={index}>
            {child}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  )
}