import { MenuGroup } from "@/components/ui/menu-group"
import { MenuList } from "@/components/ui/menu-list"
import { Flex, Heading, Text } from "@chakra-ui/react"

export default function MenuPage() {
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
        <MenuList title="Starbuzz">
          <Heading 
            size={"sm"}
            textDecoration={"underline"}
          >
            (+$4.30 Single | +$4.31 Double)
          </Heading>
          <Text>Blue Mist</Text>
          <Text>Code 69</Text>
          <Text>Creamsicle</Text>
          <Text>Fuzzy Navel</Text>
          <Text>Gummy Bears</Text>
          <Text>Irish Peach</Text>
          <Text>Mighty Freeze</Text>
          <Text>Obamagranate</Text>
          <Text>Purple Haze</Text>
          <Text>Queen of Sex</Text>
          <Text>Safari Melon Dew</Text>
          <Text>Simply Mint</Text>
          <Text>Skittles</Text>
          <Text>Sweetarts</Text>
          <Text>Tropicool</Text>
          <Text>Watermelon Freeze</Text>
          <Text>White Mint</Text>
        </MenuList>

        <MenuList title="Single Flavors">
          <Text>Blueberry</Text>
          <Text>Cherry</Text>
          <Text>Cinnamon</Text>
          <Text>Coconut</Text>
          <Text>Coconut</Text>
          <Text>Double Apple</Text>
          <Text>Grape</Text>
          <Text>Grapefruit</Text>
          <Text>Guava</Text>
          <Text>Lemon</Text>
          <Text>Mango</Text>
          <Text>Mint</Text>
          <Text>Orange</Text>
          <Text>Peach</Text>
          <Text>Pineapple</Text>
          <Text>Raspberry</Text>
          <Text>Rose</Text>
          <Text>Strawberry</Text>
          <Text>Vanilla</Text>
          <Text>Watermelon</Text>
        </MenuList>

        <MenuList title="House Mixes">
          <Text>Fruit Rollup</Text>
          <Text>Garden of Babylon</Text>
          <Text>Gum Mint</Text>
          <Text>Lemon Mint</Text>
          <Text>Orange Cream</Text>
          <Text>Orange Mint</Text>
          <Text>Paris Hilton</Text>
          <Text>Peaches &apos;N&apos; Cream</Text>
          <Text>Strawberries &apos;N&apos; Cream</Text>
        </MenuList>

        <MenuList title="Mocktails">
          <Text>Pineapple Upside-Down Cake</Text>
          <Text>Sex on the Beach</Text>
          <Text>Strawberry Mojito</Text>
          <Text>Vanilla Mint Mojito</Text>
        </MenuList>

        <MenuList title="Fumari">
          <Heading
            size={"sm"}
            textDecoration={"underline"}
          >
            (+$4.30 Single | +$4.31 Double)
          </Heading>
          <Text>Blueberry Muffin</Text>
          <Text>Spiced Chai</Text>
          <Text>Red Gummy Bear</Text>
          <Text>White Gummy Bear</Text>
        </MenuList>

        <MenuList title="Hometown Flavors">
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Batter Up Tigers</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Blueberry Orange)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Detroit Basketball</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Blueberry Cherry Vanilla)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Red Wings Slapshot</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Raspberry Mint)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Roaring Lions</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Blueberry Vanilla)</Text>
          </Flex>
        </MenuList>

        <MenuList title="Hero Mixes">
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Black Panther</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Raspberry Grape)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Captain America</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Mango Peach Coconut)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Doctor Strange</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Guess the Flavor)</Text>
          </Flex>
          <Flex
            wrap="wrap"
          >
            <Text width="100%">Iron Man</Text>
            <Text width="100%" fontSize="xs" mb={2}>(Mango Cherry Raspberry)</Text>
          </Flex>
        </MenuList>
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
    </main>
  )
}