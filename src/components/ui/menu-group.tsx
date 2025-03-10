"use client";
import { Heading, Separator, Flex } from "@chakra-ui/react";
import React from "react";

export interface MenuGroupProps {
  /** Title section for the group */
  title: string;
  /** Subtitle section for the group */
  subtitle?: string;
  /** Child objects (Expects MenuList) */
  children: React.ReactNode;
  /** Number of columns. Supports single values or Charka UI breakpoints */
  cols: number | {base?: number; sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
}

export function MenuGroup ({ title, children, cols, subtitle}: MenuGroupProps) {
  let col: number;
  let reactiveCol: object;
  if (typeof cols === "number") {
    col = 100/cols
  } else {
    reactiveCol = {
      base: cols.base ? `${100/cols.base}%` : undefined,
      sm: cols.sm ? `${100/cols.sm}%` : undefined,
      md: cols.md ? `${100/cols.md}%` : undefined,
      lg: cols.lg ? `${100/cols.lg}%` : undefined,
      xl: cols.xl ? `${100/cols.xl}%` : undefined,
      "2xl": cols["2xl"] ? `${100/cols["2xl"]}%` : undefined
    } 
  }
  return (
    <Flex
      wrap="wrap"
      width="100%"
      justify="center"
      px={{
        base: 4,
        md: 0
      }}
    >
      <Separator
        size={"lg"}
        width="100%"
        my="2"
      />
      <Flex width="100%" justify="center">
        <Heading
          my={subtitle ? 0 : 2}
          size={{
            base: "2xl",
            md: "4xl",
            "2xl": "5xl",
          }}
        >
          { title }
        </Heading>
      </Flex>
      {(subtitle) && (
        <Flex width="100%" justify="center">
          <Heading
            my="2"
            size="sm"
          >
            { subtitle }
          </Heading>
        </Flex>
      )}
      <Flex
        wrap="wrap"
        justify={"center"}
        alignItems="Center"
        width={{
          base: "100%",
          lg: "60%"
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Flex 
            key={index}
            wrap={"wrap"}
            width={typeof cols === "number" ? `${col}%` : reactiveCol }
          >
            {child}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}