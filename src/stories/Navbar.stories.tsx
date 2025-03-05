import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import { Navbar } from "@/components/ui/navbar";

const NavbarStory = {
  title: 'Components/Navbar',
  component: Navbar
};

export default NavbarStory;

const Template = () => (
  <Provider>
    <Theme appearance="dark">
      <Navbar />
    </Theme>
  </Provider>
);

export const Default = Template.bind({});