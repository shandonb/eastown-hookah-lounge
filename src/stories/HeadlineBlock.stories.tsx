import { Meta, StoryFn } from '@storybook/react';
import HeadlineBlock, { HeadlineBlockProps } from '@/components/HeadlineBlock';


const HeadlineBlockStory: Meta<typeof HeadlineBlock> = {
  title: 'Components/HeadlineBlock',
  component: HeadlineBlock,
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: [
        'light',
        'dark'
      ],
      defaultValue: "dark"
    }
  }
} as Meta<typeof HeadlineBlock>;

export default HeadlineBlockStory;

const Template: StoryFn<HeadlineBlockProps> = (args) => {
  return(
    <HeadlineBlock {...args} />
  )
}

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading section',
  copy: 'Body copy',
  height: '30vh'
}