import ContentParallax from "@/components/parallax-banner"
import { Center, Flex, Table } from "@chakra-ui/react"

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
        <Flex
          width={{
            base: "100%",
            md: "80%",
            lg: "50%"
          }}
          justify={"center"}
        >
          <Table.Root 
            variant={"outline"}
            size={"lg"}
          >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader padding={"10"}>Sunday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Monday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Tuesday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Wednesday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Thursday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Friday</Table.ColumnHeader>
                <Table.ColumnHeader padding={"10"}>Saturday</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell padding={"10"}> - </Table.Cell>
                <Table.Cell padding={"10"}>Karaoke</Table.Cell>
                <Table.Cell padding={"10"}> - </Table.Cell>
                <Table.Cell padding={"10"}>Smokin Spoken Word</Table.Cell>
                <Table.Cell padding={"10"}>Live DJ</Table.Cell>
                <Table.Cell padding={"10"}>Live DJ</Table.Cell>
                <Table.Cell padding={"10"}>Live DJ</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </Center>
    </main>
  )
}