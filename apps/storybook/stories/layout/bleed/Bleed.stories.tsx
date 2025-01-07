import { Bleed, BleedProps, Box, Heading, Stack, Text } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BleedProps> = {
  title: "Komponenter/Layout/Bleed",
  component: Bleed,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<BleedProps>;

const BleedExample = (args: BleedProps) => (
  <Box padding="10" rounded="sm" borderWidth="1px">
    <Bleed inline="10" {...args}>
      <Box bg="orange" height="20">
        Bleed
      </Box>
    </Bleed>

    <Stack mt="6">
      <Heading size="md">Some Heading</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Stack>
  </Box>
);

const bleedString = `
<Bleed>
  <div />
</Bleed>
`;

export const Preview: Story = {
  render: args => <BleedExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: bleedString,
      },
    },
  },
};
