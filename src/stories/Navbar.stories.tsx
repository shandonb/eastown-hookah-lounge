import { Navbar } from "@/components/ui/navbar";

const NavbarStory = {
  title: 'Components/Navbar',
  component: Navbar
};

export default NavbarStory;

const Template = () => (
  <Navbar />
);

export const Default = Template.bind({});