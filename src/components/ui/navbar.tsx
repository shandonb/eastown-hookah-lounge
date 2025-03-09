"use client";

import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Faculty_Glyphic } from "next/font/google";
import { navigation } from "@/config/routes";

const faculty = Faculty_Glyphic({ weight: "400", subsets: ["latin"] });

export function Navbar() {
  return (
    <Flex 
      justify="center" 
      className={faculty.className} 
      fontSize={["xs", undefined, undefined, "xl"]} 
      py="5"
      position="sticky"
      top="0"
      left="0"
      width="100%"
      bg="rgba(0, 0, 0, 0.45)"
      backdropFilter="blur(8px)"
      zIndex="100"
    >
      <Flex as="nav" justify="space-evenly" width="100%">
        {navigation.map(({ label, href }) => (
          <ChakraLink key={href} as={Link} href={href}>
            {label.toUpperCase()}
          </ChakraLink>
        ))}
      </Flex>
    </Flex>
    
  );
}