import { Meta, StoryFn } from '@storybook/react';
import { Provider } from '@/components/ui/provider';
import { Theme } from '@chakra-ui/react';
import type { CalendarItemProps} from '@/components/ui/calendar/calendar-item';
import CalendarItem from '@/components/ui/calendar/calendar-item';

const CalendarItemStory: Meta<typeof CalendarItem> = {
  title: 'Components/CalendarItem',
  component: CalendarItem
} as Meta<typeof CalendarItem>;

export default CalendarItemStory;

const Template: StoryFn<CalendarItemProps> = (args) => (
  <Provider>
    <Theme appearance="dark">
      <CalendarItem {...args}></CalendarItem>
    </Theme>
  </Provider>
)

export const Default = Template.bind({});
Default.args = {
  day: "Monday"
}