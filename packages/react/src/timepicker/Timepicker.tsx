import { IconButton } from "@/button";
import { useRecipe } from "@/hooks";
import { Box } from "@/layout";
import { useFieldContext } from "@chakra-ui/react";
import { CalendarDateTime, parseTime } from "@internationalized/date";
import { useRef, useState } from "react";
import { TimeValue } from "react-aria";
import { useTimeFieldState } from "react-stately";
import { inputTheme } from "../theme/components/input";
import { TimeField } from "./TimeField";

type TimepickerProps = {
  size?: "xs" | "sm" | "md" | "lg";
  width?: "fit-content" | "full";
  variant?: "outline" | "subtle" | "flushed";
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
  defaultValue = getCurrentTime() as any,
  onChange = () => {},
  disabled: isDisabledExternally = false,
  invalid: isInvalidExternally = false,
  minuteInterval = 30,
  ariaLabel,
}: TimepickerProps) => {
  const recipe = useRecipe({ recipe: inputTheme });

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
    onChange: value => {
      onChange(value as any);
    },
    locale: "nb",
    isDisabled,
    isInvalid,
  });
  const dateTime = state.timeValue;
  const buttonSize = size === "lg" ? "sm" : "xs";
  const inputRef = useRef<HTMLElement | undefined>(undefined);
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
    if (state.value !== null)
      state.setValue(
        state.value.add({
          minutes: minutesAdjustment,
        }),
      );
  };

  // Focus styles for the input
  const focusStyles = getFocusStyles(isFocused, isInvalid, variant);

  const styles = recipe({
    variant,
    size,
  });

  return (
    <Box
      ref={inputRef}
      display="flex"
      alignItems="center"
      width={width}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      css={{
        ...focusStyles,
        ...styles,
      }}
      aria-label={ariaLabel}
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
    </Box>
  );
};

export const getCurrentTime = () => parseTime(new Date().toTimeString().split(" ")[0]);
export const getTimestampFromTime = (time: CalendarDateTime | null) => `${time?.hour ?? 0}:${time?.minute ?? 0}`;

const getFocusStyles = (isFocused: boolean, isInvalid: boolean, variant: "outline" | "subtle" | "flushed") => {
  if (isFocused) {
    // Check the variant and apply corresponding styles
    switch (variant) {
      case "outline":
        return {
          borderColor: "blue.500",
          boxShadow: `0 0 0 1px blue.500`,
          _hover: { borderColor: isInvalid ?? "blue.500" },
        };
      case "flushed":
        return {
          borderColor: "blue.500",
          boxShadow: `0 1px 0 0 blue.500`,
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
