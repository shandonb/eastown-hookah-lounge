"use client";

import { Flex, Text } from "@chakra-ui/react";

export interface FlavorItemProps {
  name: string;
  description?: string;
}

export function FlavorItem ({ name, description }: FlavorItemProps) {
  return description ? (
    <Flex
      wrap="wrap"
    >
      <Text width="100%">{name}</Text>
      <Text
        width="100%"
        fontSize={"xs"}
        mb={"2"}
      >
        ({description})
      </Text>
    </Flex>
  ) : (
    <Text>{name}</Text>
  )
}