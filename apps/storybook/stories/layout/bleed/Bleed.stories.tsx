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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Bleed.displayName = "Bleed";
Box.displayName = "Box";
Stack.displayName = "Stack";
Heading.displayName = "Heading";

export const Preview: Story = {
  render: args => (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed inline="10" {...args}>
        <Box background="orange.50" height="20">
          Bleed content
        </Box>
      </Bleed>

      <Stack mt="6">
        <Heading size="md">Heading</Heading>
      </Stack>
    </Box>
  ),
};
