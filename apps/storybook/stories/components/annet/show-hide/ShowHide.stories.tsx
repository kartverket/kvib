import { Show as KvibShow, Hide as KvibHide, Box } from "@kvib/react/src";
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
        type: { summary: Boolean },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibShow>;

export const Show: Story = {
  args: {},
  render: (args) => (
    <KvibShow {...args} breakpoint="(max-width: 400px)">
      <Box>Teksten dukker opp på skjermer med 400px eller mindre.</Box>
    </KvibShow>
  ),
};

export const ShowHide: Story = {
  args: {},
  render: (args) => (
    <>
      <KvibShow {...args} above="sm">
        <Box>Denne teksten dukker opp på skjermer med "sm" eller større bredde.</Box>
      </KvibShow>
      <KvibHide {...args} below="md">
        <Box>Denne teksten forsvinner på skjermer med "md" eller mindre bredde.</Box>
      </KvibHide>
    </>
  ),
};
