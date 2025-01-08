import { Bleed, BleedProps, Box, Heading, Stack } from "@kvib/react";

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
  argTypes: {
    inline: {
      description: "The negative margin on the x-axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginInline']",
        },
      },
    },
    block: {
      description: "The negative margin on the y-axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginBlock']",
        },
      },
    },
    inlineStart: {
      description: "The negative margin on the inline-start axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginInlineStart']",
        },
      },
    },
    inlineEnd: {
      description: "The negative margin on the inline-end axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginInlineEnd']",
        },
      },
    },
    blockStart: {
      description: "The negative margin on the block-start axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginBlockStart']",
        },
      },
    },
    blockEnd: {
      description: "The negative margin on the block-end axis",
      table: {
        type: {
          summary: "SystemStyleObject['marginBlockEnd']",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<BleedProps>;

const BleedExample = (args: BleedProps) => (
  <Box padding="10" rounded="sm" borderWidth="1px">
    <Bleed inline="10" {...args}>
      <Box
        background="repeating-linear-gradient(
        125deg,
        #c0c0c0,
        #c0c0c0 1px,
        #f0f0f0 1px,
        #f0f0f0 5px
      )"
        height="20"
      >
        Bleed
      </Box>
    </Bleed>

    <Stack mt="6">
      <Heading size="md">Heading</Heading>
    </Stack>
  </Box>
);

const bleedString = `
<Bleed>
  ...
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
