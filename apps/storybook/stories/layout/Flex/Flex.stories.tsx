import { Box, Center, Flex, Text } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Flex> = {
  title: "Komponenter/Layout/Flex",
  component: Flex,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    align: {
      table: {
        type: {
          summary: "SystemStyleObject['alignItems']",
        },
      },
    },
    justify: {
      table: {
        type: {
          summary: "SystemStyleObject['justifyContent']",
        },
      },
    },
    wrap: {
      table: {
        type: {
          summary: "SystemStyleObject['flexWrap']",
        },
      },
    },
    direction: {
      table: {
        type: {
          summary: "SystemStyleObject['flexDirection']",
        },
      },
    },
    basis: {
      table: {
        type: {
          summary: "SystemStyleObject['flexBasis']",
        },
      },
    },
    grow: {
      table: {
        type: {
          summary: "SystemStyleObject['flexGrow']",
        },
      },
    },
    shrink: {
      table: {
        type: {
          summary: "SystemStyleObject['flexShrink']",
        },
      },
    },
    inline: {
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const flexString = `
<Flex {...args}>
  <Center width="100px" bg="green.100">
    <Text>Text 1</Text>
  </Center>
  <Center width="100px" height="150px" bg="blue.100">
    <Text>Text 2</Text>
  </Center>
  <Box flex="1" bg="yellow.100">
    <Text>Text 3</Text>
  </Box>
</Flex>
`;

export const Preview: Story = {
  render: args => (
    <Flex {...args}>
      <Center width="100px" bg="green.100">
        <Text>Text 1</Text>
      </Center>
      <Center width="100px" height="150px" bg="blue.100">
        <Text>Text 2</Text>
      </Center>
      <Box flex="1" bg="yellow.100">
        <Text>Text 3</Text>
      </Box>
    </Flex>
  ),
  parameters: {
    docs: {
      source: {
        code: flexString,
      },
    },
  },
};
