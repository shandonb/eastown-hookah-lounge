"use client";
import { Heading, Separator, Flex } from "@chakra-ui/react";
import React from "react";

export interface MenuGroupProps {
  /** Title section for the group */
  title: string;
  /** Child objects (Expects MenuList) */
  children: React.ReactNode;
  /** Number of columns. Uses Chakra Fractional width */
  cols: number | {base?: number; sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
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
          width={typeof cols === "number" ? `1/${cols}` : {
            base: cols.base ? `1/${cols.base}` : undefined,
            sm: cols.sm ? `1/${cols.sm}` : undefined,
            md: cols.md ? `1/${cols.md}` : undefined,
            lg: cols.lg ? `1/${cols.lg}` : undefined,
            xl: cols.xl ? `1/${cols.xl}` : undefined,
            "2xl": cols["2xl"] ? `1/${cols["2xl"]}` : undefined,
          }}
        >
          {child}
        </Flex>
      ))}
    </Flex>
  )
}