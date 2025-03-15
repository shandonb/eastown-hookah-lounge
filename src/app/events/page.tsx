import { Footer } from "@/components/footer"
import ContentParallax from "@/components/parallax-banner"
import Calendar from "@/components/ui/calendar/calendar"
import CalendarItem from "@/components/ui/calendar/calendar-item"
import { Center, Em, Flex, Heading, List } from "@chakra-ui/react"

export default function EventsPage() {
  return (
    <main>
      <ContentParallax
        img="/img/parallax-03.webp"
        headline="Something New Every Day"
        copy="With some kind of event on almost every day of the week, you have plenty of vibes to choose from"
        flexJust="start"
        textAlign="left"
      />
      <Center>
        <Calendar 
          cols={{
            base: 2,
            lg: 7
          }}
          title="Every Week"
        >
          <CalendarItem day="Sunday">-</CalendarItem>
          <CalendarItem day="Monday">Karaoke</CalendarItem>
          <CalendarItem day="Tuesday">-</CalendarItem>
          <CalendarItem day="Wednesday">Smokin&apos; Spoken Word</CalendarItem>
          <CalendarItem day="Thursday">-</CalendarItem>
          <CalendarItem day="Friday">Live DJ</CalendarItem>
          <CalendarItem day="Saturday">Live DJ</CalendarItem>
        </Calendar>
      </Center>
      <ContentParallax
        img="/img/parallax-04.webp"
        headline="Special Occasions"
        copy="From surprise musical guests to Superbowl Sunday, there's always something interesting going down at Eastown Hookah Lounge!"
        flexJust="end"
        textAlign="right"
      />
      <Flex
        width="100%"
        justify={"center"}
        my={10}
        pb={10}
        borderBottom={"sm"}
      >
        <Flex 
          width={{
            base: "100%",
            lg: "60%"
          }}
          wrap="wrap"
        >
          <Heading width="100%">Upcoming Events</Heading>
          <List.Root>
            <List.Item><Em>October 29th</Em> - Hallowween Party | Costume Contest | Over $500 in prizes!</List.Item>
            <List.Item><Em>November 19th</Em> - After Hours Dance Party: Hosted by Layer Cake</List.Item>
            <List.Item><Em>November 23rd</Em> - Biggest Hookah Night of the Year! | Extended Hours, Hookah Specials</List.Item>
          </List.Root>
        </Flex>
      </Flex>
      <Footer />
    </main>
  )
}