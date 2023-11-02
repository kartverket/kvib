import { Meta, StoryObj } from "@storybook/react";
import {
  Badge as KvibBadge,
  Stack as KvibStack,
  Card as KvibCard,
  CardBody as KvibCardBody,
  CardFooter as KvibCardFooter,
  Heading as KvibHeading,
  Text as KvibText,
  Image as KvibImage,
  Divider as KvibDivider,
  Button as KvibButton,
  ButtonGroup as KvibButtonGroup,
} from "@kvib/react/src";

const meta: Meta<typeof KvibBadge> = {
  title: "Komponenter/Data Display/Badge",
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
    colorScheme: {
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

export const Badge: Story = {
  args: { children: "Badge" },
  render: (args) => <KvibBadge {...args} />,
};

export const BadgeTexts: Story = {
  args: {},
  render: (args) => (
    <>
      <KvibBadge colorScheme="green">Success</KvibBadge>
      <KvibBadge colorScheme="red">Rejected</KvibBadge>
    </>
  ),
};

export const BadgeHensikt: Story = {
  args: {},
  render: (args) => (
    <>
      <KvibBadge colorScheme="blue">New</KvibBadge>
      <KvibBadge colorScheme="red" variant="solid">
        Not working
      </KvibBadge>
    </>
  ),
};
export const BadgeGreen: Story = {
  args: {},
  render: (args) => <KvibBadge colorScheme="green">Success</KvibBadge>,
};

export const BadgeRed: Story = {
  args: {},
  render: (args) => <KvibBadge colorScheme="red">Removed</KvibBadge>,
};

export const BadgeBlue: Story = {
  args: {},
  render: (args) => <KvibBadge colorScheme="blue">New</KvibBadge>,
};

export const BadgeCard: Story = {
  args: {},
  render: (args) => (
    <KvibCard {...args} maxW="sm">
      <KvibCardBody>
        <KvibBadge colorScheme="blue" ml="300px" mb="10px">
          Ny
        </KvibBadge>
        <KvibImage
          src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Boat dock with small boats"
          borderRadius="md"
        />
        <KvibStack mt="6" spacing="3">
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
        <KvibButtonGroup spacing="2">
          <KvibButton variant="primary" colorScheme="blue">
            Les artikkel
          </KvibButton>
          <KvibButton variant="ghost" colorScheme="blue">
            Legg til i leseliste
          </KvibButton>
        </KvibButtonGroup>
      </KvibCardFooter>
    </KvibCard>
  ),
};

export const BadgeVariants: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
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
