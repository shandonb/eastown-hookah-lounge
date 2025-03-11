import ContentParallax from "@/components/parallax-banner"

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
    </main>
  )
}