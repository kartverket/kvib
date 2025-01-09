import { Box, Float } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Float> = {
  title: "Komponenter/Layout/Float",
  component: Float,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    placement: {
      description: "The placement of the indicator",
      table: {
        type: {
          summary:
            "ConditionalValue< | 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' | 'bottom-center' | 'top-center' >",
        },
        defaultValue: { summary: "'top-end'" },
      },
      control: {
        type: "select",
      },
      options: ["bottom-end", "bottom-start", "top-end", "top-start", "bottom-center", "top-center"],
    },
    offsetX: {
      description: "The x offset of the indicator",
      table: {
        type: {
          summary: "SystemStyleObject['left']",
        },
      },
      control: {
        type: "number",
      },
    },
    offsetY: {
      description: "The y offset of the indicator",
      table: {
        type: {
          summary: "SystemStyleObject['top']",
        },
      },
      control: {
        type: "number",
      },
    },
    offset: {
      description: "The x and y offset of the indicator",
      table: {
        type: {
          summary: "SystemStyleObject['top']",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Float>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Float.displayName = "Float";
Box.displayName = "Box";

export const Preview: Story = {
  render: args => (
    <Box pos="relative" w="80px" h="80px" bg="gray.200">
      <Float {...args}>
        <Box borderRadius={"full"} bg="red.400" h="24px" w="24px" />
      </Float>
    </Box>
  ),
  parameters: {
    layout: "centered",
  },
};
