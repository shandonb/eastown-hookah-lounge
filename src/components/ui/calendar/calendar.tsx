"use client";

import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export interface CalendarProps {
  /** Number of columns. Uses numbers or breakpoints */
  cols: number | { base?: number, sm?: number, md?: number, lg?: number, xl?: number, "2xl"?: number };
  /** Calendar headline */
  title?: string;
  /** Child object */
  children: React.ReactNode;
}

export default function Calendar({cols, children, title}: CalendarProps){
  let columns: string;
  let bPointColumns: object;
  if (typeof cols === "number") {
    columns = `${100 / cols}%`;
  } else {
    bPointColumns = {
      base: cols.base ? `${100 / cols.base}%` : undefined,
      sm: cols.sm ? `${100 / cols.sm}%` : undefined,
      md: cols.md ? `${100 / cols.md}%` : undefined,
      lg: cols.lg ? `${100 / cols.lg}%` : undefined,
      xl: cols.xl ? `${100 / cols.xl}%` : undefined,
      "2xl": cols["2xl"] ? `${100 / cols["2xl"]}%` : undefined,
    }
  }
  return(
    <Flex width="100%" wrap={"wrap"} justify={"center"}>
      {(title) && (
        <Flex width="100%" justify="Center" mb="6">
          <Heading>{ title }</Heading>
        </Flex>
      )}
      <Flex
        width={{
          base: "100%",
          lg: "60%"
        }}
        wrap={"wrap"}
        justify={"center"}
      >
        {React.Children.map(children, (child, index) => (
          <Flex
            key={index}
            wrap={"wrap"}
            width={ typeof cols === "number" ? columns : bPointColumns }
          >
            {child}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}