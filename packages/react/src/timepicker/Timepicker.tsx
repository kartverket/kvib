import { IconButton } from "@/button";
import { Field } from "@/field";
import { useFieldContext } from "@chakra-ui/react";
import { CalendarDateTime, parseTime } from "@internationalized/date";
import { TimeValue } from "@react-types/datepicker";
import { useRef, useState } from "react";
import { useTimeFieldState } from "react-stately";
import { TimeField } from "./TimeField";

type TimepickerProps = {
  size?: "xs" | "sm" | "md" | "lg";
  width?: "fit-content" | "full";
  variant?: "outline" | "flushed" | "unstyled";
  colorPalette?: "green" | "blue";
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  disabled?: boolean;
  invalid?: boolean;
  minuteInterval?: number;
  ariaLabel?: string;
};

export const Timepicker = ({
  size,
  width = "fit-content",
  variant = "outline",
  colorPalette,
  value,
  defaultValue = getCurrentTime(),
  onChange = () => {},
  disabled: isDisabledExternally = false,
  invalid: isInvalidExternally = false,
  minuteInterval = 30,
  ariaLabel,
}: TimepickerProps) => {
  // Get state from form control context
  const formControlContext = useFieldContext();
  const isDisabledFromForm = formControlContext?.disabled || false;
  const isInvalidFromForm = formControlContext?.invalid || false;

  // Determine the effective isDisabled and isInvalid states
  const isDisabled = isDisabledExternally || isDisabledFromForm;
  const isInvalid = isInvalidExternally || isInvalidFromForm;

  // Hook for managing state of the time field
  const state = useTimeFieldState({
    value,
    defaultValue,
    onChange,
    locale: "nb",
    isDisabled,
    isInvalid,
  });
  const dateTime = state.value as CalendarDateTime | null;
  const buttonSize = size === "lg" ? "sm" : "xs";
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Calculation for adjusting time with the arrow buttons
  const adjustTime = (direction: "forward" | "backward") => {
    if (!dateTime) {
      return;
    }
    let minutesAdjustment;
    if (direction === "backward") {
      minutesAdjustment = -(dateTime.minute % minuteInterval || minuteInterval);
    } else {
      // forward
      minutesAdjustment = minuteInterval - (dateTime.minute % minuteInterval) || minuteInterval;
    }
    state.setValue(
      state.value.add({
        minutes: minutesAdjustment,
      }),
    );
  };

  // Focus styles for the input
  const focusStyles = getFocusStyles(isFocused, isInvalid, variant);

  return (
    <Field
      aria-label={ariaLabel || "timepicker"}
      width={width}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      disabled={isDisabled}
      invalid={isInvalid}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={inputRef}
      style={focusStyles}
    >
      <IconButton
        onClick={() => adjustTime("backward")}
        size={buttonSize}
        colorPalette={colorPalette}
        variant="ghost"
        icon="chevron_left"
        aria-label="earlier time"
        disabled={isDisabled}
      />
      <TimeField state={state} colorPalette={colorPalette} />
      <IconButton
        onClick={() => adjustTime("forward")}
        size={buttonSize}
        colorPalette={colorPalette}
        variant="ghost"
        icon="chevron_right"
        aria-label="later time"
        disabled={isDisabled}
      />
    </Field>
  );
};

export const getCurrentTime = () => parseTime(new Date().toTimeString().split(" ")[0]);
export const getTimestampFromTime = (time: CalendarDateTime | null) => `${time?.hour ?? 0}:${time?.minute ?? 0}`;

const getFocusStyles = (
  isFocused: boolean,
  isInvalid: boolean,
  variant: "outline" | "filled" | "flushed" | "unstyled",
) => {
  if (isFocused) {
    // Check the variant and apply corresponding styles
    switch (variant) {
      case "outline":
        return {
          borderColor: "blue.500",
          /* boxShadow: `0 0 0 1px ${defaultKvibTheme.colors.blue[500]}`, */
          _hover: { borderColor: isInvalid ?? "blue.500" },
        };
      case "flushed":
        return {
          borderColor: "blue.500",
          /* boxShadow: `0 1px 0 0 ${defaultKvibTheme.colors.blue[500]}`, */
          _hover: { borderColor: isInvalid ?? "blue.500" },
        };
      default:
        return {
          borderColor: "blue.500",
          _hover: { borderColor: isInvalid ?? "blue.500" },
        };
    }
  } else {
    return {}; // Return an empty object when not focused
  }
};
