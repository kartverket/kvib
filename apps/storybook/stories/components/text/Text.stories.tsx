import { Flex, Stack as KvibStack, Text as KvibText } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibText> = {
  title: "Komponenter/Text",
  component: KvibText,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    fontSize: {
      description: "Size of the text",
      table: { type: { summary: "string" } },
      control: "text",
    },
    textStyle: {
      description: "Use either fontSize or textStyle to set the size of the text",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'" },
        defaultValue: { summary: "md" },
      },
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
    truncate: {
      description: "Truncate text with ellipsis after a single line",
      table: { type: { summary: "boolean" } },
      control: "boolean",
    },
    lineClamp: {
      description: "Limit the number of lines displayed",
      table: { type: { summary: "number" } },
      control: "number",
    },
    fontWeight: {
      description: "Font weight of the text",
      table: { type: { summary: "50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900" } },
      control: "select",
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibText>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibText.displayName = "Text";
Flex.displayName = "Flex";

export const Preview: Story = {
  args: { children: "Example text" },
  render: args => (
    <Flex maxW="sm">
      <KvibText {...args} />
    </Flex>
  ),
};

export const TextSizes: Story = {
  args: {},
  render: args => (
    <KvibStack gap={3}>
      <KvibText {...args} fontSize="6xl" maxLines={1}>
        (6xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="5xl" maxLines={1}>
        (5xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="4xl">
        (4xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="3xl">
        (3xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="2xl">
        (2xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="xl">
        (xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="lg">
        (lg) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="md">
        (md) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="sm">
        (sm) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="xs">
        (xs) Kartverkets interaksjon- og designbibliotek
      </KvibText>
    </KvibStack>
  ),
};

export const TextOverride: Story = {
  args: {},
  render: args => (
    <>
      <KvibText {...args} as="b">
        Bold
      </KvibText>
      <br />
      <KvibText {...args} as="i">
        Italic
      </KvibText>
      <br />
      <KvibText {...args} as="u">
        Underline
      </KvibText>
      <br />
      <KvibText {...args} as="abbr">
        I18N
      </KvibText>
      <br />
      <KvibText {...args} as="cite">
        Citation
      </KvibText>
      <br />
      <KvibText {...args} as="del">
        Deleted
      </KvibText>
      <br />
      <KvibText {...args} as="em">
        Emphasis
      </KvibText>
      <br />
      <KvibText {...args} as="ins">
        Inserted
      </KvibText>
      <br />
      <KvibText {...args} as="kbd">
        Ctrl + C
      </KvibText>
      <br />
      <KvibText {...args} as="mark">
        Highlighted
      </KvibText>
      <br />
      <KvibText {...args} as="s">
        Strikethrough
      </KvibText>
      <br />
      <KvibText {...args} as="samp">
        Sample
      </KvibText>
      <br />
      <KvibText {...args} as="sub">
        sub
      </KvibText>
      <br />
      <KvibText {...args} as="sup">
        sup
      </KvibText>
    </>
  ),
};
