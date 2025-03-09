import { MenuGroup } from "@/components/ui/menu-group"
import { MenuList } from "@/components/ui/menu-list"
import { Text } from "@chakra-ui/react"

export default function MenuPage() {
  return(
    <main>
      <MenuGroup title="Step 1: Pick Your Hookah" cols={3}>
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
      <MenuGroup title="Step 2: Pick Your Head" cols={3}>
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
        
      </MenuGroup>
    </main>
  )
}