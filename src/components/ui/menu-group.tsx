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
  /** Number of columns. Uses Chakra Fractional width */
  cols: number | {base?: number; sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
}

export function MenuGroup ({ title, children, cols, subtitle}: MenuGroupProps) {
  return (
    <Flex
      wrap="wrap"
      width="100%"
      justify="center"
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
      >
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
    </Flex>
  )
}