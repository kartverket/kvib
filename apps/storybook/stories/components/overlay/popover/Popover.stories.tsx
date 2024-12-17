import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverProps,
  PopoverTitle,
  PopoverTrigger,
  Text,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Komponenter/Popover",
  component: Popover,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    colorPalette: {
      description: "The color palette of the component",
      table: {
        type: { summary: "'gray' | 'blue' | 'green' | 'red'" },
        defaultValue: { summary: "gray" },
      },
      control: "radio",
      options: ["gray", "blue", "green", "red"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Preview: Story = {
  render: (args: PopoverProps) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" colorPalette={args.colorPalette}>
          Vis popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseTrigger size={"sm"} />
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="bold">Tittel</PopoverTitle>
          <Text my="4">Beskrivelse i popover som vises når man har trykket på triggeren.</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ),
};
