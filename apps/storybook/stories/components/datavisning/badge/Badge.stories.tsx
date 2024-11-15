import {
  Badge as KvibBadge,
  Button as KvibButton,
  ButtonGroup as KvibButtonGroup,
  Card as KvibCard,
  CardBody as KvibCardBody,
  CardFooter as KvibCardFooter,
  Separator as KvibDivider,
  Heading as KvibHeading,
  Image as KvibImage,
  Stack as KvibStack,
  Text as KvibText,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBadge> = {
  title: "Komponenter/Badge",
  component: KvibBadge,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the badge",
      table: {
        type: { summary: "solid | subtle | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["solid", "subtle", "outline"],
      control: "radio",
    },
    colorPalette: {
      description: "The visual color appearance of the badge",
      table: {
        type: { summary: "green | blue | red | gray" },
        defultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBadge>;

export const Preview: Story = {
  args: {
    children: "Badge",
    fontSize: "sm",
  },
  render: args => <KvibBadge {...args} />,
};

export const BadgeTexts: Story = {
  render: () => (
    <>
      <KvibBadge colorPalette="green">Success</KvibBadge>
      <KvibBadge colorPalette="red">Rejected</KvibBadge>
    </>
  ),
};

export const BadgeHensikt: Story = {
  render: () => (
    <>
      <KvibBadge colorPalette="blue">New</KvibBadge>
      <KvibBadge colorPalette="red" variant="solid">
        Not working
      </KvibBadge>
    </>
  ),
};

export const BadgeGreen: Story = {
  render: () => <KvibBadge colorPalette="green">Success</KvibBadge>,
};

export const BadgeRed: Story = {
  render: () => <KvibBadge colorPalette="red">Removed</KvibBadge>,
};

export const BadgeBlue: Story = {
  render: () => <KvibBadge colorPalette="blue">New</KvibBadge>,
};

export const BadgeCard: Story = {
  render: args => (
    <KvibStack direction="column">
      <KvibCard {...args} maxW="sm">
        <KvibCardBody>
          <KvibBadge colorPalette="green" ml="300px" mb="10px">
            Åpen
          </KvibBadge>
          <KvibImage
            src="https://media.istockphoto.com/id/637589830/photo/electrical-engineer-while-working-laptopl.webp?b=1&s=170667a&w=0&k=20&c=FG3lM0bqCk6In10R9cCIbilzvO0PkwXKDmzeXCCQAkU="
            alt="Boat dock with small boats"
            borderRadius="md"
          />
          <KvibStack mt="6" gap="3">
            <KvibHeading size="md">NRL gir tryggare luftfart</KvibHeading>
            <KvibText>
              Helikopter og andre som flyg lågt, treng detaljert og påliteleg oversyn over kor det finst hinder for
              luftfarta. Derfor må alle som eig eit luftfartshinder melde inn dette til Nasjonalt register over
              luftfartshinder (NRL), som Kartverket driv.
            </KvibText>
          </KvibStack>
        </KvibCardBody>
        <KvibDivider />
        <KvibCardFooter>
          <KvibButtonGroup gap="2">
            <KvibButton variant="primary" colorPalette="blue">
              Les artikkel
            </KvibButton>
            <KvibButton variant="ghost" colorPalette="blue">
              Legg til i leseliste
            </KvibButton>
          </KvibButtonGroup>
        </KvibCardFooter>
      </KvibCard>
      <KvibCard {...args} maxW="sm">
        <KvibCardBody>
          <KvibBadge colorPalette="red" ml="300px" mb="10px">
            Lukket
          </KvibBadge>
          <KvibImage
            src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="Boat dock with small boats"
            borderRadius="md"
          />
          <KvibStack mt="6" gap="3">
            <KvibHeading size="md">Digitalt løft i havn</KvibHeading>
            <KvibText>
              Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
              digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
              havnevirksomhet.
            </KvibText>
          </KvibStack>
        </KvibCardBody>
        <KvibDivider />
        <KvibCardFooter>
          <KvibButtonGroup gap="2">
            <KvibButton variant="primary" colorPalette="blue">
              Les artikkel
            </KvibButton>
            <KvibButton variant="ghost" colorPalette="blue">
              Legg til i leseliste
            </KvibButton>
          </KvibButtonGroup>
        </KvibCardFooter>
      </KvibCard>
    </KvibStack>
  ),
};

export const BadgeVariants: Story = {
  args: { colorPalette: "green" },
  render: args => (
    <KvibStack direction="row">
      <KvibBadge {...args} variant="outline">
        Default
      </KvibBadge>
      <KvibBadge {...args} variant="solid">
        Success
      </KvibBadge>
      <KvibBadge {...args} variant="subtle">
        Removed
      </KvibBadge>
    </KvibStack>
  ),
};
