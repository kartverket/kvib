import { Stack as KvibStack, Text as KvibText } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibText> = {
  title: "Komponenter/Text",
  component: KvibText,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibText>;

export const Preview: Story = {
  args: { children: "Dette er en eksempeltekst" },
  render: args => <KvibText {...args} />,
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
