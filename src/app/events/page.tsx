import ContentParallax from "@/components/parallax-banner"
import Calendar from "@/components/ui/calendar/calendar"
import CalendarItem from "@/components/ui/calendar/calendar-item"
import { Center } from "@chakra-ui/react"

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
    </main>
  )
}