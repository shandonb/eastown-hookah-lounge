import { Meta, StoryFn } from "@storybook/react";
import { MenuList, MenuListProps } from "@/components/ui/menu-list";

const MenuListStory: Meta<typeof MenuList> = {
  title: 'Components/MenuList',
  component: MenuList
} as Meta<typeof MenuList>;

export default MenuListStory;

const Template: StoryFn<MenuListProps> = (args) => {
  return (
    <MenuList {...args} />
  )
};

export const Default = Template.bind({});

Default.args = {
  title: 'List title',
}