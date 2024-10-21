import { composeStories } from "@storybook/react";
import * as ButtonStories from "../../components/skjemaelementer/button/Button.stories";
import * as CheckboxStories from "../../components/skjemaelementer/checkbox/Checkbox.stories";
import * as CloseButtonStories from "../../components/skjemaelementer/close-button/CloseButton.stories";
import * as DatepickerStories from "../../components/skjemaelementer/datepicker/Datepicker.stories";
import * as EditableStories from "../../components/skjemaelementer/editable/Editable.stories";
import * as FileUploadStories from "../../components/skjemaelementer/file-upload/FileUpload.stories";
import * as FormControlStories from "../../components/skjemaelementer/form-control/Form-control.stories";
import * as IconButtonStories from "../../components/skjemaelementer/icon-button/IconButton.stories";
import * as InputStories from "../../components/skjemaelementer/Input/Input.stories";
import * as NumberInputStories from "../../components/skjemaelementer/number-input/NumberInput.stories";
import * as PinInputStories from "../../components/skjemaelementer/pin-input/PinInput.stories";
import * as RadioStories from "../../components/skjemaelementer/radio/Radio.stories";
import * as RangeSliderStories from "../../components/skjemaelementer/range-slider/RangeSlider.stories";
import * as SelectStories from "../../components/skjemaelementer/select/Select.stories";
import * as SliderStories from "../../components/skjemaelementer/slider/Slider.stories";
import * as SwitchStories from "../../components/skjemaelementer/switch/Switch.stories";
import * as TextAreaStories from "../../components/skjemaelementer/textarea/Textarea.stories";
import * as TimepickerStories from "../../components/skjemaelementer/timepicker/Timepicker.stories";

export type ColorScheme = "green" | "blue";

export const Button = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const IconButton = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(IconButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const CloseButton = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CloseButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Input = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(InputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const FormControl = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(FormControlStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Select = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SelectStories);
  return <Preview colorScheme={colorScheme} />;
};

export const TextArea = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TextAreaStories);
  return <Preview colorScheme={colorScheme} />;
};

export const NumberInput = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(NumberInputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Checkbox = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CheckboxStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Datepicker = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(DatepickerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Timepicker = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TimepickerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Editable = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(EditableStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Radio = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(RadioStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Switch = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SwitchStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Slider = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SliderStories);
  return <Preview colorScheme={colorScheme} />;
};

export const RangeSlider = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(RangeSliderStories);
  return <Preview colorScheme={colorScheme} />;
};

export const PinInput = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(PinInputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const FileUpload = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(FileUploadStories);
  return <Preview colorScheme={colorScheme} />;
};
