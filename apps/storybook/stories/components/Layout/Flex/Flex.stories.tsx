import { Center, Box, Flex as KvibFlex, Spacer, Grid, HStack } from "@kvib/react/src/layout";
import { Text } from "@kvib/react/src/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFlex> = {
  title: "Layout/Flex",
  component: KvibFlex,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFlex>;

export const Flex: Story = {
  render: (args) => (
    <KvibFlex {...args}>
      <Center width="100px" backgroundColor="green.100">
        <Text>Text 1</Text>
      </Center>
      <Center width="100px" height="150px" backgroundColor="blue.100">
        <Text>Text 2</Text>
      </Center>
      <Box flex="1" backgroundColor="yellow.100">
        <Text>Text 3</Text>
      </Box>
    </KvibFlex>
  ),
};

export const FlexWithSpacer: Story = {
  render: (args) => (
    <KvibFlex {...args}>
      <Box padding="4" backgroundColor="green.100">
        Box 1
      </Box>
      <Spacer />
      <Box padding="4" backgroundColor="blue.100">
        Box 2
      </Box>
    </KvibFlex>
  ),
};

export const FlexGridStack: Story = {
  render: () => (
    <>
      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <KvibFlex>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </KvibFlex>
        <Text>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>
        <Text>HStack: The children have equal spacing but don't span the whole container</Text>
        <HStack spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>
    </>
  ),
};
