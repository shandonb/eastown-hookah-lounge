import HeroBanner from "@/components/ui/hero-banner";
import ContentParallax from "@/components/parallax-banner";
import HeadlineBlock from "@/components/HeadlineBlock";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ContentParallax 
        img="/img/parallax-01.webp"
        headline="A Flavor for Every Taste"
        copy="With over 50 flavors to choose from and millions of possible combinations, you're sure to find something you'll love"
        flexJust="end"
        textAlign="right"
      />
      <HeadlineBlock
        heading="Live DJs, Spoken Word Poetry, Music, and More!"
        copy="Enjoy our roster of house DJs on the weekend, Smokin' Spoken Word (Michigan's longest constantly running spoken word poetry night, presented by The Diatribe) every Wednesday, or set your own vibe during the weekdays with our jukebox!"
      />
      <ContentParallax
        img="/img/parallax-02.webp"
        headline="An Eastown Staple"
        copy="Located in the old Intersection, with Yesterdog across the street, Eastown Hookah Lounge sits at the cultural heart of Grand Rapids"
        flexJust="start"
        textAlign="left"
      />
      <Footer />
    </div>
  );
}
