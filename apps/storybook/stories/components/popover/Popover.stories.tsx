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
    modal: {
      description:
        "Whether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;

/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends PopoverProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(Popover as any).displayName = "Popover";
PopoverTrigger.displayName = "PopoverTrigger";
PopoverContent.displayName = "PopoverContent";
PopoverArrow.displayName = "PopoverArrow";
PopoverBody.displayName = "PopoverBody";
PopoverTitle.displayName = "PopoverTitle";
PopoverCloseTrigger.displayName = "PopoverCloseTrigger";
Button.displayName = "Button";
Text.displayName = "Text";

export const Preview: Story = {
  render: (args: Props) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseTrigger />
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="bold">Popover title</PopoverTitle>
          <Text mt="4px">Popover content</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ),
};
