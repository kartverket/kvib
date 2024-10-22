import { Box, Show as KvibShow } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibShow> = {
  title: "Annet/Show-Hide",
  component: KvibShow,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    above: {
      description:
        "A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    below: {
      description:
        "A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    breakpoint: {
      description:
        "A custom css media query that determines when the children are rendered. Will render children if that query resolves to true.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    ssr: {
      table: {
        type: { summary: "Boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibShow>;

export const Preview: Story = {
  render: args => (
    <>
      <KvibShow {...args} above="md">
        <Box p={4} bg="yellow.50">
          Denne teksten vises på store skjermer
        </Box>
      </KvibShow>
      <KvibShow {...args} below="md">
        <Box p={4} bg="blue.50">
          Denne teksten vises på små skjermer
        </Box>
      </KvibShow>
    </>
  ),
};
