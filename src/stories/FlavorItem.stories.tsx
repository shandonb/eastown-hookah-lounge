import { Meta, StoryFn } from "@storybook/react";
import { FlavorItem, FlavorItemProps } from "@/components/ui/flavor-item";
import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";

interface FlavorItemStoryProps {
  /** Swap between Chakra UI light and dark themes */
  theme: "light" | "dark";
}

type StoryProps = FlavorItemStoryProps & FlavorItemProps;

const FlavorItemStory: Meta<typeof FlavorItem> = {
  title: 'Components/FlavorItem',
  component: FlavorItem,
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: [
        'light',
        'dark'
      ],
      defaultValue: 'dark'
    }
  }
} as Meta<typeof FlavorItem>;

export default FlavorItemStory;

const Template: StoryFn<StoryProps> = (args) => {
  const { theme, ...props } = args;
  return(
    <Provider>
      <Theme appearance={theme}>
        <FlavorItem {...props} />
      </Theme>
    </Provider>
  )
};

export const Default = Template.bind({});
Default.args = {
  name: 'Flavor Name',
  description: 'Component flavors',
  theme: 'dark'
}