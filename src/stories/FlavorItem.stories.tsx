import { Meta, StoryFn } from "@storybook/react";
import { FlavorItem, FlavorItemProps } from "@/components/ui/flavor-item";

const FlavorItemStory: Meta<typeof FlavorItem> = {
  title: 'Components/FlavorItem',
  component: FlavorItem
} as Meta<typeof FlavorItem>;

export default FlavorItemStory;

const Template: StoryFn<FlavorItemProps> = (args) => {
  return(
    <FlavorItem {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  name: 'Flavor Name',
  description: 'Component flavors',
}