import { Alert as KvibAlert, AlertIcon, AlertTitle, AlertDescription, VStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAlert> = {
  title: "Komponenter/Alert",
  component: KvibAlert,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    colorScheme: {
      description: "",
      options: ["green", "blue", "gray", "red", "orange", "purple"],
      defaultValue: { summary: "blue" },
      control: { type: "radio" },
    },
    status: {
      description:
        "This affects the color scheme and icon used. Setting the colorScheme prop will overide the colorScheme of the status.",
      options: ["error", "success", "warning", "info"],
      defaultValue: { summary: "info" },
      control: { type: "radio" },
    },
    variant: {
      description: "",
      options: ["subtle", "solid", "left-accent", "top-accent"],
      defaultValue: { summary: "subtle" },
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAlert>;

export const Alert: Story = {
  args: { status: "success" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <AlertTitle>This is the alert title!</AlertTitle>
      <AlertDescription>This is the alert description.</AlertDescription>
    </KvibAlert>
  ),
};

export const AlertSuccess: Story = {
  args: { status: "success", variant: "left-accent" },
  render: (args) => (
    <KvibAlert status={"success"} {...args}>
      <AlertIcon />
      <AlertTitle>Settings saved</AlertTitle>
    </KvibAlert>
  ),
};

export const AlertInfo: Story = {
  args: { status: "info" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <AlertTitle>Tips</AlertTitle>
      <AlertDescription>
        To insert a new picture, you can use the File Browser found in the menu at the top of the page.
      </AlertDescription>
    </KvibAlert>
  ),
};

export const AlertWarning: Story = {
  args: { variant: "left-accent", status: "warning" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <AlertTitle>You are about to permanently delete the file</AlertTitle>
      <AlertDescription>You can not retrieve it after deletion</AlertDescription>
    </KvibAlert>
  ),
};

export const AlertError: Story = {
  args: { status: "error" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <AlertTitle>Can't connect to the server</AlertTitle>
      <AlertDescription>Try again in a few minutes, or contact us if the problem continues</AlertDescription>
    </KvibAlert>
  ),
};

export const AlertEmphasisWarning: Story = {
  args: { status: "warning" },
  render: (args) => (
    <VStack gap="1rem">
      <KvibAlert {...args}>
        <AlertIcon />
        <AlertTitle>I'm an important warning</AlertTitle>
        <AlertDescription>I'm important</AlertDescription>
      </KvibAlert>
      <KvibAlert variant="solid" {...args}>
        <AlertIcon />
        <AlertTitle>I'm an even more important warning</AlertTitle>
        <AlertDescription>I'm more important that the alert above!</AlertDescription>
      </KvibAlert>
    </VStack>
  ),
};
