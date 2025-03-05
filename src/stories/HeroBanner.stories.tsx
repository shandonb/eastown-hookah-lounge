import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import HeroBanner from "@/components/ui/hero-banner";

const HeroBannerStory = {
  title: 'Components/HeroBanner',
  component: HeroBanner
}

export default HeroBannerStory;

const Template = () => (
  <Provider>
    <Theme appearance='dark'>
      <HeroBanner />
    </Theme>
  </Provider>
)

export const Default = Template.bind({});