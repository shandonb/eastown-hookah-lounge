import { Meta, StoryFn } from '@storybook/react'
import Leaflet from "@/components/ui/map/map";

interface LeafletStoryProps {
  parentHeight: string;
  parentWidth: string;
}

const LeafletStory: Meta<typeof Leaflet> = {
  title: "Components/Leaflet Map",
  component: Leaflet,
  argTypes: {
    parentHeight: {
      type: "string",
      defaultValue: "500px"
    },
    parentWidth: {
      type: "string",
      defaultValue: "500px"
    }
  }
}

export default LeafletStory;

const Template: StoryFn<LeafletStoryProps> = ({ parentHeight, parentWidth }: LeafletStoryProps) => (
  <div
    style={{
      height: parentHeight,
      width: parentWidth
    }}
  >
    <Leaflet />
  </div>
)

export const Map = Template.bind({})
Map.args = {
  parentHeight: "500px",
  parentWidth: "500px"
};