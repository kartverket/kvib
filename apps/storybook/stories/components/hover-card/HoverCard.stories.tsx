import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardProps,
  HoverCardTrigger,
  Link,
  Stack,
  Text,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HoverCard> = {
  title: "Komponenter/Hover Card",
  component: HoverCard,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

const HoverCardExample = (props: HoverCardProps) => (
  <HoverCard {...props}>
    <HoverCardTrigger asChild>
      <Link href="#">Hover for å vise et kort</Link>
    </HoverCardTrigger>
    <HoverCardContent>
      <HoverCardArrow />
      <Stack gap="1">
        <Text textStyle="sm" fontWeight="semibold">
          Her er det innhold!
        </Text>
        <Text textStyle="sm" color="fg.muted">
          Denne dukker opp mens man holder over lenken.
        </Text>
      </Stack>
    </HoverCardContent>
  </HoverCard>
);

export const Preview: Story = {
  render: args => <HoverCardExample {...args} />,
};
