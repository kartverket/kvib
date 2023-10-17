import {
  Card as KvibCard,
  CardHeader as KvibCardHeader,
  CardBody as KvibCardBody,
  CardFooter as KvibCardFooter,
  Stack as KvibStack,
  Text as KvibText,
  Image as KvibImage,
  Heading as KvibHeading,
  Divider as KvibDivider,
  ButtonGroup as KvibButtonGroup,
  Button as KvibButton,
  Icon as KvibIcon,
  Box as KvibBox,
} from "@kvib/react/src/";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCard> = {
  title: "Komponenter/Data Display/Card",
  component: KvibCard,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    direction: {
      table: { type: { summary: String } },
      control: "text",
    },
    align: {
      table: { type: { summary: String } },
      control: "text",
    },
    justify: {
      table: { type: { summary: String } },
      control: "text",
    },
    size: {
      description: "Size of the Card",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the Card",
      table: {
        type: { summary: "elevated | outline | filled | unstyled" },
        defaultValue: { summary: "elevated" },
      },
      options: ["elevated", "outline", "filled", "unstyled"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCard>;

export const Card: Story = {
  args: {},
  render: (args) => (
    <KvibCard {...args}>
      <KvibCardBody>
        <KvibText>Se alle endringer på eiendomsgrenser i år.</KvibText>
      </KvibCardBody>
    </KvibCard>
  ),
};

export const CardVariants: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing="4">
      {["elevated", "outline", "filled", "unstyled"].map((variant) => (
        <KvibCard {...args} key={variant} variant={variant}>
          <KvibCardHeader>
            <KvibHeading size="md">{variant}</KvibHeading>
          </KvibCardHeader>
          <KvibCardBody>
            <KvibText>variant = {variant}</KvibText>
          </KvibCardBody>
        </KvibCard>
      ))}
    </KvibStack>
  ),
};

export const CardSizes: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing="4">
      {["sm", "md", "lg"].map((size) => (
        <KvibCard {...args} key={size} size={size}>
          <KvibCardHeader>
            <KvibHeading size="md">{size}</KvibHeading>
          </KvibCardHeader>
          <KvibCardBody>
            <KvibText>size = {size}</KvibText>
          </KvibCardBody>
        </KvibCard>
      ))}
    </KvibStack>
  ),
};

export const CardImage: Story = {
  args: {},
  render: (args) => (
    <KvibCard {...args} maxW="sm">
      <KvibCardBody>
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

export const CardCentering: Story = {
  args: {},
  render: (args) => (
    <KvibCard {...args} align="center">
      <KvibCardHeader>
        <KvibHeading size="md">Kundeportal</KvibHeading>
      </KvibCardHeader>
      <KvibCardBody>
        <KvibText>Se et utdrag av bruk den siste måneden.</KvibText>
      </KvibCardBody>
      <KvibCardFooter>
        <KvibButton colorScheme="blue">Se utdrag</KvibButton>
      </KvibCardFooter>
    </KvibCard>
  ),
};

export const CardHorizontal: Story = {
  args: {},
  render: (args) => (
    <KvibCard {...args} direction="row" overflow="hidden" variant="outline">
      <KvibImage
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="Boat dock with small boats"
      />

      <KvibStack>
        <KvibCardBody>
          <KvibHeading size="md">Digitalt løft i havn</KvibHeading>

          <KvibText py="2">
            Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
            digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
            havnevirksomhet.
          </KvibText>
        </KvibCardBody>

        <KvibCardFooter>
          <KvibButton variant="primary" colorScheme="blue">
            Les artikkel
          </KvibButton>
        </KvibCardFooter>
      </KvibStack>
    </KvibCard>
  ),
};

export const CardCustom: Story = {
  args: { heading: "Label", text: "hjelpetekst hjelpetekst hjelpetekst" },
  render: (args) => (
    <KvibCard {...args} variant="outlined">
      <KvibCardBody p="20px">
        <KvibHeading size="md">{args.heading}</KvibHeading>
        <KvibText py="2">{args.text}</KvibText>
        <KvibBox position="absolute" top="50%" right="30px" transform="translate(-50%, -50%)">
          <KvibIcon icon="chevron_right" size={48} weight={700} />
        </KvibBox>
      </KvibCardBody>
    </KvibCard>
  ),
};
