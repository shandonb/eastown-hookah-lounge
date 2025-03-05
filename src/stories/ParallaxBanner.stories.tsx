import { Meta, StoryFn } from "@storybook/react";
import ContentParallax, { ContentParallaxProps } from "@/components/parallax-banner";
import { Provider } from "@/components/ui/provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { Theme } from "@chakra-ui/react";

const ParallaxBanner: Meta<typeof ContentParallax> = {
  title: "Components/ParallaxBanner",
  component: ContentParallax,
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export default ParallaxBanner;

const Template: StoryFn<ContentParallaxProps> = (args: ContentParallaxProps) => (
  <Provider>
    <ParallaxProvider>
      <Theme appearance="dark">
        <ContentParallax {...args} />
      </Theme>
    </ParallaxProvider>
  </Provider>
)

export const Default = Template.bind({});
Default.args = {
  img: '/img/parallax-01.webp',
  headline: 'Some Headline',
  copy: 'Detailed copy for the parallax banner',
  imgHeight: '30vh',
  textAlign: 'right',
  flexJust: 'end',
  parSpeed: -90
}