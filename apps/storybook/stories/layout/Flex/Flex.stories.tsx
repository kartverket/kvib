import { Flex } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { DecorativeBox } from "../../documentation/utils/DecorativeBox";

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
      control: {
        type: "select",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Flex.displayName = "Flex";

export const Preview: Story = {
  render: args => (
    <Flex gap="4" {...args}>
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  ),
};
