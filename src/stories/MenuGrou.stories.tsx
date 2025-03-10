import { Meta, StoryFn } from "@storybook/react";
import { MenuGroup, MenuGroupProps } from "@/components/ui/menu-group";
import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import { MenuList } from "@/components/ui/menu-list";

interface MenuGroupStoryProps {
  theme: 'light' | 'dark';
  numberOfChildren: number;
}

type StoryProps = MenuGroupProps & MenuGroupStoryProps;

const MenuGroupStory: Meta<typeof MenuGroup> = {
  title: 'Components/MenuGroup',
  component: MenuGroup,
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
    },
    numberOfChildren: {
      type: 'number',
      defaultValue: 4
    }
  }
} as Meta<typeof MenuGroup>;

export default MenuGroupStory;

const Template: StoryFn<StoryProps> = (args) => {
  const { theme, numberOfChildren, ...props } = args;
  return (
    <Provider>
      <Theme appearance={theme}>
        <MenuGroup {...props}>
          {[...Array(numberOfChildren).keys()].map(n => (
            <MenuList key={n} title="Example item" />
          ))}
        </MenuGroup>
      </Theme>
    </Provider>
  )
};

export const Default = Template.bind({});
Default.args = {
  cols: 3,
  title: 'Group title',
  subtitle: 'Additional information',
  theme: 'dark'
}