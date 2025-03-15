import ContentParallax from "@/components/parallax-banner"
import Calendar from "@/components/ui/calendar/calendar"
import CalendarItem from "@/components/ui/calendar/calendar-item"
import { Center, Flex, Table, Text } from "@chakra-ui/react"

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
      <Center
        mt={10}
      >
        <Calendar cols={7}>
          <CalendarItem day="Sunday">
            <Text>-</Text>
          </CalendarItem>
        </Calendar>
      </Center>
    </main>
  )
}