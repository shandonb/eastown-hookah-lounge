import { Meta, StoryFn } from '@storybook/react';
import type { CalendarItemProps} from '@/components/ui/calendar/calendar-item';
import CalendarItem from '@/components/ui/calendar/calendar-item';

const CalendarItemStory: Meta<typeof CalendarItem> = {
  title: 'Components/CalendarItem',
  component: CalendarItem,
  argTypes: {
    contents: {
      control: {
        type: 'text'
      },
      defaultValue: 'Some text'
    }
  }
} as Meta<typeof CalendarItem>;

interface CalendarItemStoryProps extends CalendarItemProps {
  contents: string;
}

export default CalendarItemStory;

const Template: StoryFn<CalendarItemStoryProps> = (args) => {
  const { contents, ...props } = args;
  return(
    <CalendarItem {...props}>
      { contents }
    </CalendarItem>
)}

export const Default = Template.bind({});
Default.args = {
  day: "Monday",
  contents: 'Some Text'
}