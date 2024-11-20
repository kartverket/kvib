import { Header as KvibHeader } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHeader> = {
  title: "Komponenter/Header",
  component: KvibHeader,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {
    justifyContent: {
      table: {
        type: { summary: "start | center | space-between" },
        defaultValue: { summary: "space-between" },
      },
      options: ["start", "center", "space-between"],
      control: { type: "radio" },
    },
    logoLinkDisabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    logoLink: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/" },
      },
      control: "text",
    },
    logoLinkProps: {
      table: { summary: "object" },
      defaultValue: { summary: undefined },
    },
    showMenuButton: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    showChildrenInMenu: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    collapseBreakpoint: {
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "sm" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    gap: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "90" },
      },
      control: "number",
    },
    logoVariant: {
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
  args: { onMenuButtonClick: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibHeader>;

export const Preview: Story = {
  args: { logoAltText: "Kartverket Logo" },
  render: args => <KvibHeader {...args} />,
};
