import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerSliders,
  ColorPickerTrigger,
  HStack,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPicker> = {
  title: "Komponenter/Color Picker",
  component: ColorPicker,
  parameters: {
    docs: {
      story: { inline: true },
    },
    layout: "centered",
  },
  argTypes: {
    defaultValue: {
      description:
        "The initial value of the color picker when it is first rendered. Use when you do not need to control the state of the color picker.",
      table: {
        type: { summary: "Color" },
      },
      defaultValue: { summary: "#000000" },
    },
    value: {
      description: "The current color value",
      table: {
        type: { summary: "Color" },
      },
    },
    format: {
      description: "The format of the color picker",
      table: {
        type: { summary: "ColorFormat" },
        defaultValue: { summary: "rgba" },
      },
    },
    defaultOpen: {
      description: "Whether the color picker is open by default",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    positioning: {
      description: "The positioning of the color picker",
      table: {
        type: { summary: "PositioningOptions" },
      },
    },
    open: {
      description: "Whether the color picker is open",
      table: {
        type: { summary: "boolean" },
      },
    },
    onValueChange: {
      description: "Function called when the color value changes",
      table: {
        type: {
          summary: "(details: ValueChangeDetails) => void",
        },
      },
    },
    onValueChangeEnd: {
      description: "Handler that is called when the user stops dragging.",
      table: {
        type: {
          summary: "(details: ValueChangeDetails) => void",
        },
      },
    },
    onPointerDownOutside: {
      description: "Function called when the pointer is pressed down outside the component",
      table: {
        type: {
          summary: "(event: PointerDownOutsideEvent) => void",
        },
      },
    },
    openAutoFocus: {
      description: "Whether the color picker should autofocus when opened",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
ColorPicker.displayName = "ColorPicker";
ColorPickerArea.displayName = "ColorPickerArea";
ColorPickerContent.displayName = "ColorPickerContent";
ColorPickerControl.displayName = "ColorPickerControl";
ColorPickerEyeDropper.displayName = "ColorPickerEyeDropper";
ColorPickerInput.displayName = "ColorPickerInput";
ColorPickerLabel.displayName = "ColorPickerLabel";
ColorPickerSliders.displayName = "ColorPickerSliders";
ColorPickerTrigger.displayName = "ColorPickerTrigger";
HStack.displayName = "HStack";

export const Preview: Story = {
  render: args => (
    <ColorPicker {...args}>
      <ColorPickerLabel>Select color</ColorPickerLabel>
      <ColorPickerControl>
        <ColorPickerInput />
        <ColorPickerTrigger />
      </ColorPickerControl>
      <ColorPickerContent>
        <ColorPickerArea />
        <HStack>
          <ColorPickerEyeDropper />
          <ColorPickerSliders />
        </HStack>
      </ColorPickerContent>
    </ColorPicker>
  ),
};
