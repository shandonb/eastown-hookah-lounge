import { Meta, StoryFn } from '@storybook/react';
import HeadlineBlock, { HeadlineBlockProps } from '@/components/HeadlineBlock';
import { Provider } from '@/components/ui/provider';
import { Theme } from '@chakra-ui/react';

interface HeadlineStoryProps {
  theme: "light" | "dark";
}

type StoryProps = HeadlineBlockProps & HeadlineStoryProps;

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

const Template: StoryFn<StoryProps> = (args) => {
  const { theme, ...props } = args;
  return(
    <Provider>
      <Theme appearance={theme}>
        <HeadlineBlock {...props} />
      </Theme>
    </Provider>
  )
}

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading section',
  copy: 'Body copy',
  height: '30vh',
  theme: 'dark'
}