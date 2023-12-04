import { useRef, useState } from "react";
import { IconButton, Input, theme } from "@kvib/react";
import { useTimeFieldState } from "react-stately";
import { TimeValue } from "@react-types/datepicker";
import { CalendarDateTime, parseTime } from "@internationalized/date";
import { TimeField } from "./TimeField";
import { useFormControlContext } from "@chakra-ui/react";

type TimepickerProps = {
  size?: "xs" | "sm" | "md" | "lg";
  width?: "fit-content" | "full";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  colorScheme?: "green" | "blue";
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  minuteInterval?: number;
};

export const Timepicker = ({
  size,
  width = "fit-content",
  variant = "outline",
  colorScheme = "green",
  value,
  defaultValue = getCurrentTime(),
  onChange = () => {},
  isDisabled: isDisabledExternally = false,
  isInvalid: isInvalidExternally = false,
  minuteInterval = 30,
}: TimepickerProps) => {
  // Get state from form control context
  const formControlContext = useFormControlContext();
  const isDisabledFromForm = formControlContext?.isDisabled || false;
  const isInvalidFromForm = formControlContext?.isInvalid || false;

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
    validationState: isInvalid ? "invalid" : "valid",
  });
  const dateTime = state.value as CalendarDateTime | null;
  const buttonSize = size === "lg" ? "sm" : "xs";
  const inputRef = useRef<HTMLDivElement>(null);
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
  const focusStyles = isFocused
    ? {
        borderColor: "blue.500",
        boxShadow: `0 0 0 1px ${theme.colors.blue[500]}`,
        _hover: { borderColor: isInvalid ?? "blue.500" },
      }
    : {};
  return (
    <Input
      as="div"
      display="flex"
      variant={variant}
      size={size}
      width={width}
      paddingX={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={inputRef}
      sx={focusStyles}
    >
      <IconButton
        onClick={() => adjustTime("backward")}
        size={buttonSize}
        colorScheme={colorScheme}
        variant="ghost"
        icon="chevron_left"
        aria-label="earlier time"
        isDisabled={isDisabled}
      />
      <TimeField state={state} colorScheme={colorScheme} />
      <IconButton
        onClick={() => adjustTime("forward")}
        size={buttonSize}
        colorScheme={colorScheme}
        variant="ghost"
        icon="chevron_right"
        aria-label="later time"
        isDisabled={isDisabled}
      />
    </Input>
  );
};

export const getCurrentTime = () => parseTime(new Date().toTimeString().split(" ")[0]);
export const getTimestampFromTime = (time: CalendarDateTime | null) => `${time?.hour ?? 0}:${time?.minute ?? 0}`;
