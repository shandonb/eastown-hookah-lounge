import { Meta, StoryFn } from "@storybook/react";
import { MenuList, MenuListProps } from "@/components/ui/menu-list";
import { FlavorItem } from "@/components/ui/flavor-item";
import MenuListDocs from './menu-list.mdx'

interface MenuListStoryProps extends MenuListProps {
  numberOfChildren: number;
}

const MenuListStory: Meta<typeof MenuList> = {
  title: 'Components/MenuList',
  component: MenuList,
  parameters: {
    docs: {
      page: MenuListDocs
    }
  },
  argTypes: {
    numberOfChildren: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
      defaultValue: 3,
    }
  }
} as Meta<typeof MenuList>;

export default MenuListStory;

const Template: StoryFn<MenuListStoryProps> = (args) => {
  const { numberOfChildren, ...props } = args;
  return (
    <MenuList {...props}>
      {Array.from({ length: numberOfChildren }, (_, index) => (
        <FlavorItem key={index} name={`Flavor ${index + 1}`} description={`Flavor ${index +1}`} />
      ))}
    </MenuList>
  )
};

export const Default = Template.bind({});

Default.args = {
  title: 'List title',
  numberOfChildren: 3,
}