import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import { Footer } from "@/components/footer";

const FooterStory = {
  title: 'Components/Footer',
  component: Footer,
};

export default FooterStory;

const Template = () => (
  <Provider>
    <Theme appearance="dark">
      <Footer />
    </Theme>
  </Provider>
);

export const Default = Template.bind({});