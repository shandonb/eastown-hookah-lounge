import { Meta, StoryFn } from "@storybook/react";
import { MenuGroup, MenuGroupProps } from "@/components/ui/menu-group";
import { MenuList } from "@/components/ui/menu-list";

interface MenuGroupStoryProps {
  numberOfChildren: number;
}

type StoryProps = MenuGroupProps & MenuGroupStoryProps;

const MenuGroupStory: Meta<typeof MenuGroup> = {
  title: 'Components/MenuGroup',
  component: MenuGroup,
  argTypes: {
    numberOfChildren: {
      control: {
        type: 'range',
        min: 0,
        max: 20,
        step: 1
      },
      defaultValue: 4
    }
  }
} as Meta<typeof MenuGroup>;

export default MenuGroupStory;

const Template: StoryFn<StoryProps> = (args) => {
  const { numberOfChildren, ...props } = args;
  return (
    <MenuGroup {...props}>
      {[...Array(numberOfChildren).keys()].map(n => (
        <MenuList key={n} title="Example item" />
      ))}
    </MenuGroup>
  )
};

export const Default = Template.bind({});
Default.args = {
  cols: 3,
  title: 'Group title',
  subtitle: 'Additional information',
}