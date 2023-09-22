import { Alert as ChakraAlert, AlertIcon, AlertTitle, AlertDescription, VStack, Icon, Box } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChakraAlert> = {
  title: "Komponenter/Alert",
  component: ChakraAlert,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
type Story = StoryObj<typeof ChakraAlert>;

export const Alert: Story = {
  render: (args) => (
    <ChakraAlert {...args}>
      <AlertIcon />
      <AlertTitle>This is the alert title!</AlertTitle>
      <AlertDescription>This is the alert description.</AlertDescription>
    </ChakraAlert>
  ),
};

export const AlertStatus: Story = {
  render: (args) => (
    <VStack>
      <ChakraAlert status={"success"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert status={"info"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert status={"warning"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert status={"error"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
    </VStack>
  ),
};

export const AlertColors: Story = {
  render: (args) => (
    <VStack>
      <ChakraAlert colorScheme={"green"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert colorScheme={"blue"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert colorScheme={"gray"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert colorScheme={"red"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert colorScheme={"orange"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert colorScheme={"purple"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
    </VStack>
  ),
};

export const AlertVariants: Story = {
  render: (args) => (
    <VStack>
      <ChakraAlert variant={"subtle"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert variant={"solid"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert variant={"left-accent"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
      <ChakraAlert variant={"top-accent"} {...args}>
        <AlertIcon />
        <AlertTitle>This is the alert title!</AlertTitle>
        <AlertDescription>This is the alert description.</AlertDescription>
      </ChakraAlert>
    </VStack>
  ),
};

export const AlertComposition: Story = {
  args: { colorScheme: "blue" },
  render: (args) => (
    <ChakraAlert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="200px"
      {...args}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Sammensatt alert!
      </AlertTitle>
      <AlertDescription maxWidth="m">
        <VStack>
          <p>
            Du kan sette sammen din egen alert, med egen layout, og til og med inkludere andre komponenter inni denne.
          </p>
          <Icon icon="favorite" size={48} color={colors.red[500]} isFilled />
        </VStack>
      </AlertDescription>
    </ChakraAlert>
  ),
};
