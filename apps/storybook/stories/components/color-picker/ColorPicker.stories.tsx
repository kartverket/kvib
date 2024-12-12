import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerProps,
  ColorPickerSliders,
  ColorPickerTrigger,
  HStack,
  parseColor,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPicker> = {
  title: "Komponenter/Color Picker",
  component: ColorPicker,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const ColorPickerExample = (props: ColorPickerProps) => (
  <ColorPicker defaultValue={parseColor("#eb5e41")} maxW="200px" {...props}>
    <ColorPickerLabel>Farge</ColorPickerLabel>
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
);

export const Preview: Story = {
  render: args => <ColorPickerExample {...args} />,
};
