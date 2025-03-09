"use client";

import { FlavorItem } from "@/components/ui/flavor-item";
import { MenuGroup } from "@/components/ui/menu-group"
import { MenuList } from "@/components/ui/menu-list"
import { Heading, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface Flavor {
  name: string;
  description?: string;
}

interface FlavorCategory {
  category: string;
  disclaimer?: string;
  flavors: Flavor[];
}

export default function MenuPage() {
  const [flavors, setFlavors] = useState<FlavorCategory[]>([]);
  useEffect(() => {
    fetch("/data/flavors.json")
    .then((res) => res.json())
    .then((data) => setFlavors(data));
  }, []);
  return(
    // Note: A db or object for the menu would make this section easier and cleaner
    <main>
      <MenuGroup 
        title="Step 1: Pick Your Hookah"
        cols={{
          base: 1,
          md: 2,
          lg: 3
        }}
      >
        <MenuList title="Single Hose">
          <Text>$15.52</Text>
          <Text>Covers 1 or 2 people</Text>
          <Text>Perfect for couples or if you&apos;re by yourself!</Text>
        </MenuList>
        <MenuList title="Double Hose">
          <Text>$23.27</Text>
          <Text>Covers up to 3 people</Text>
          <Text>Got a large group? Double hoses are perfect for you!</Text>
        </MenuList>
        <MenuList title="Head Change">
          <Text>$7.45 | $8.45</Text>
          <Text>Reached your time limit but want to keep smoking?</Text>
          <Text>Order a head change!</Text>
        </MenuList>
      </MenuGroup>

      <MenuGroup 
        title="Step 2: Pick Your Head" 
        cols={{
          base: 2,
          md: 3,
          lg: 5
        }}
      >
        <MenuList title="Pineapple Head">
          <Text>+$10</Text>
          <Text>+30 Min</Text>
        </MenuList>

        <MenuList title="Grapefruit Head">
          <Text>+$5</Text>
          <Text>+30 Min</Text>
        </MenuList>

        <MenuList title="Apple Head">
          <Text>+$5</Text>
          <Text>+30 Min</Text>
        </MenuList>
        
        <MenuList title="XL Head">
          <Text>+$2</Text>
        </MenuList>

        <MenuList title="Regular Head" />
      </MenuGroup>

      <MenuGroup
        title="Step 3: Pick Your Flavor(s)"
        cols={{
          base: 1,
          md: 2,
          lg: 3
        }}
      >
        {flavors.map((group, groupIndex) => (
          <MenuList key={groupIndex} title={group.category}>
            {(group.disclaimer) && (
              <Heading
                size={"xs"}
                textDecoration={"underline"}
              >
                {group.disclaimer}
              </Heading>
            )}
            {group.flavors.map((flavor, flavorIndex) => (
              <FlavorItem key={flavorIndex} name={flavor.name} description={flavor.description ? flavor.description : undefined} />
            ))}
          </MenuList>
        ))}
      </MenuGroup>

      <MenuGroup
        title="Step 4: Pick Your Kicker(s)"
        subtitle="(Kickers are optional additives to enhance your smoking experience)"
        cols={{
          base: 2,
          md: 4,
          lg: 6,
        }}
      >
        <MenuList title="Ice">
          <Text>+$1</Text>
        </MenuList>
        <MenuList title="Milk">
          <Text>+$1</Text>
        </MenuList>
        <MenuList title="Red Bull">
          <Text>+$1</Text>
        </MenuList>
        <MenuList title="Juice">
          <Text>+$1</Text>
        </MenuList>
        <MenuList title="Ice Hose">
          <Text>+$2</Text>
        </MenuList>
        <MenuList title="Ice Bucket">
          <Text>+$5</Text>
        </MenuList>
      </MenuGroup>

      <MenuGroup title="" cols={1}>
        <Heading>There is also a selection of drinks and candy available at the bar!</Heading>
      </MenuGroup>
    </main>
  )
}