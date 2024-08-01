import { Alert as KvibAlert, AlertIcon, AlertTitle, AlertDescription, VStack, Box } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAlert> = {
  title: "Tilbakemelding/Alert",
  component: KvibAlert,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    status: {
      description:
        "This affects the color scheme and icon used. Setting the colorScheme prop will overide the colorScheme of the status.",
      table: { type: { summary: "error | success | warning | info" } },
      options: ["error", "success", "warning", "info"],
      defaultValue: { summary: "info" },
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the alert.",
      table: { type: { summary: "subtle | solid | left-accent | top-accent" } },
      options: ["subtle", "solid", "left-accent", "top-accent"],
      defaultValue: { summary: "subtle" },
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAlert>;

export const Alert: Story = {
  args: { status: "info" },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Dette er tittelen!</AlertTitle>
        <AlertDescription>Dette er beskrivelsen.</AlertDescription>
      </Box>
    </KvibAlert>
  ),
};

export const AlertSuccess: Story = {
  args: { status: "success", variant: "left-accent" },
  render: (args) => (
    <KvibAlert status={"success"} {...args}>
      <AlertIcon />
      <AlertDescription>Endringer lagret</AlertDescription>
    </KvibAlert>
  ),
};

export const AlertInfo: Story = {
  args: { status: "info" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Tips</AlertTitle>
        <AlertDescription>
          For å sette inn et nytt bilde, kan du bruke filutforskjeren fra menyen på toppen av siden.
        </AlertDescription>
      </Box>
    </KvibAlert>
  ),
};

export const AlertWarning: Story = {
  args: { variant: "left-accent", status: "warning" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Du er i ferd med å slette fila permanent</AlertTitle>
        <AlertDescription>Du kan ikke hente den i etterkant</AlertDescription>
      </Box>
    </KvibAlert>
  ),
};

export const AlertError: Story = {
  args: { status: "error" },
  render: (args) => (
    <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Får ikke opprettet forbindelse med serveren</AlertTitle>
        <AlertDescription>Prøv igjen om et par minutter, eller ta kontakt hvis problemet forsetter</AlertDescription>
      </Box>
    </KvibAlert>
  ),
};

export const AlertEmphasisWarning: Story = {
  parameters: { a11y: { disable: true } },
  args: { status: "warning" },
  render: (args) => (
    <VStack gap="1rem">
      <KvibAlert {...args}>
        <AlertIcon />
        <Box>
          <AlertTitle>Jeg er en viktig 'warning'</AlertTitle>
          <AlertDescription>Jeg er viktig</AlertDescription>
        </Box>
      </KvibAlert>
      <KvibAlert variant="solid" {...args}>
        <AlertIcon />
        <Box>
          <AlertTitle>Jeg er en enda viktigere 'warning'</AlertTitle>
          <AlertDescription>Jeg er viktigere enn 'waning'-en over!</AlertDescription>
        </Box>
      </KvibAlert>
    </VStack>
  ),
};
