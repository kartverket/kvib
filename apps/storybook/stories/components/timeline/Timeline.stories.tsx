import {
  Icon,
  KvibTimeline,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<KvibTimeline.RootProps> = {
  title: "Komponenter/Timeline",
  component: KvibTimeline.Root,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      config: {
        rules: [
          {
            // Turned off aria value violation due to false error.
            id: "aria-valid-attr-value",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
  argTypes: {
    colorPalette: {
      description: "Color palette of the component",
      table: {
        type: { summary: "gray | green | blue" },
        defaultValue: { summary: "gray" },
      },
      options: ["gray", "green", "blue"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant of the component",
      table: {
        type: { summary: "'subtle' | 'solid' | 'outline' | 'plain'" },
        defaultValue: { summary: "solid" },
      },
      options: ["subtle", "solid", "outline", "plain"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<KvibTimeline.RootProps>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Timeline.displayName = "Timeline";
TimelineItem.displayName = "TimelineItem";
TimelineConnector.displayName = "TimelineConnector";
TimelineContent.displayName = "TimelineContent";
TimelineDescription.displayName = "TimelineDescription";
TimelineTitle.displayName = "TimelineTitle";
Icon.displayName = "Icon";

export const Preview: Story = {
  render: args => (
    <Timeline {...args}>
      <TimelineItem>
        <TimelineConnector p="1em">
          <Icon icon="check" colorPalette={args.colorPalette} />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle>Title</TimelineTitle>
          <TimelineDescription>Description</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
