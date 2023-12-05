import {
  Input as KVInput,
  InputProps as KVInputProps,
  Popover,
  useBoolean,
  PopoverContent,
  InputGroup,
  InputRightElement,
  PopoverTrigger,
  PopoverAnchor,
  theme,
} from "@kvib/react/src";
import { forwardRef, useFormControlContext } from "@chakra-ui/react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Icon } from "@kvib/react/src/icon";
import nb from "date-fns/locale/nb/index.js";
import { ChangeEvent, useEffect } from "react";
import { isValid } from "date-fns";

type DatepickerProps = KVInputProps & {
  /**
   * A default date to be selected when the picker is displayed.
   */
  defaultSelected?: Date;

  /**
   * The month to display in the calendar by default.
   */
  defaultMonth?: Date;

  /**
   * The earliest date available for selection.
   */
  fromDate?: Date;

  /**
   * The latest date available for selection.
   */
  toDate?: Date;

  /**
   * Whether or not to show dropdowns for month and year selection.
   */
  showDropdownMonthYear?: boolean;

  /**
   * If set to true, navigation buttons (next/previous month) are hidden.
   */
  disableNavigation?: boolean;

  /**
   * Whether or not to show the days that fall outside the current month.
   */
  showOutsideDays?: boolean;

  /**
   * Whether or not to display the week numbers.
   */
  showWeekNumber?: boolean;

  /**
   * A list of dates that should be disabled for selection.
   */
  disabledDays?: Date[];

  /**
   * Whether or not to use the native datepicker on mobile devices.
   */
  useNative?: boolean;

  /**
   * Sideeffect to be run when a date is selected.
   */
  onChange?: (date: Date | undefined) => void;

  isDisabled?: boolean;

  isInvalid?: boolean;

  colorScheme?: "blue" | "green";
};

type ExcludedProps = "max" | "min" | "defaultValue";

type DatepickerPropsWithoutStandard = Omit<DatepickerProps, ExcludedProps>;

export const Datepicker = forwardRef<DatepickerPropsWithoutStandard, "input">(
  ({ onChange, useNative = true, ...props }, ref) => {
    const KVInputProps = extractKVProps(props);
    const commonProps = getCommonInputProps(props);
    const defaultValue = props.defaultSelected ? formatDate(props.defaultSelected) : undefined;
    const isClient = typeof window === "object";
    const isMobile = isClient ? window.innerWidth < 480 : false;

    const handleNativeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const date = new Date(event.target.value);
      if (isValid(date)) {
        onChange?.(date);
      }
    };

    if (isMobile && useNative)
      return (
        <KVInput
          type="date"
          defaultValue={defaultValue}
          {...KVInputProps}
          {...commonProps}
          onChange={handleNativeChange}
        />
      );

    return <CustomDatepicker {...props} ref={ref} {...commonProps} onChange={onChange} />;
  },
);

const CustomDatepicker = forwardRef<DatepickerPropsWithoutStandard, "input">(
  (
    {
      onChange,
      defaultSelected,
      defaultMonth,
      fromDate,
      toDate,
      showDropdownMonthYear = true,
      disableNavigation,
      showOutsideDays,
      showWeekNumber,
      disabledDays,
      isDisabled: isDisabledExternally = false,
      isInvalid: isInvalidExternally = false,
      isRequired: isRequiredExternally = false,
      colorScheme = "green",
      ...KVInputProps
    },
    ref,
  ) => {
    const style = css(colorScheme);

    // Get state from form control context
    const formControlContext = useFormControlContext();
    const isDisabledFromForm = formControlContext?.isDisabled || false;
    const isInvalidFromForm = formControlContext?.isInvalid || false;
    const isRequiredFromForm = formControlContext?.isRequired || false;

    // Determine the effective isDisabled, isInvalid and isRequired states
    const isDisabled = isDisabledExternally || isDisabledFromForm;
    const isInvalid = isInvalidExternally || isInvalidFromForm;
    const isRequired = isRequiredExternally || isRequiredFromForm;

    const [isPickerVisible, setPickerVisible] = useBoolean(false);
    const { inputProps, dayPickerProps } = useInput({
      defaultSelected,
      format: "dd.MM.yyyy",
      locale: nb,
      fromDate,
      toDate,
      required: isRequired,
    });

    useEffect(() => {
      // Check if the selected date in the day picker has changed
      if (dayPickerProps.selected) {
        onChange?.(dayPickerProps.selected);
        setPickerVisible.off();
      }
    }, [dayPickerProps.selected, onChange]);

    return (
      <Popover
        placement="bottom-start"
        isOpen={isPickerVisible}
        onOpen={setPickerVisible.on}
        onClose={setPickerVisible.off}
      >
        <InputGroup>
          <PopoverAnchor>
            <KVInput
              ref={ref}
              className="custom-datepicker"
              isDisabled={isDisabled}
              isInvalid={isInvalid}
              {...KVInputProps}
              {...inputProps}
            />
          </PopoverAnchor>
          <InputRightElement opacity={isDisabled ? 0.5 : 1} pointerEvents={isDisabled ? "none" : "auto"} height="100%">
            <PopoverTrigger>
              <button
                style={{
                  height: "90%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={setPickerVisible.toggle}
              >
                <Icon icon="calendar_today" size={KVInputProps.size === "xs" || KVInputProps.size === "sm" ? 20 : 24} />
              </button>
            </PopoverTrigger>
          </InputRightElement>
        </InputGroup>
        <PopoverContent width="auto">
          <style>{style}</style>
          <DayPicker
            captionLayout={showDropdownMonthYear ? "dropdown-buttons" : undefined}
            disableNavigation={disableNavigation}
            defaultMonth={defaultMonth}
            showOutsideDays={showOutsideDays}
            showWeekNumber={showWeekNumber}
            disabled={disabledDays}
            {...dayPickerProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

function extractKVProps(props: DatepickerProps): KVInputProps {
  const {
    defaultSelected,
    defaultMonth,
    fromDate,
    toDate,
    showDropdownMonthYear,
    disableNavigation,
    showOutsideDays,
    showWeekNumber,
    disabledDays,
    ...chakraProps
  } = props;

  return chakraProps;
}

type ValidDateInput = number | Date | string;

function formatDate(date: ValidDateInput): string {
  let dateObject: Date;

  if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "string") {
    dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date format.");
    }
  } else {
    throw new Error("Invalid date format.");
  }

  const y = dateObject.getFullYear().toString().padStart(4, "0");
  const m = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const d = dateObject.getDate().toString().padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const getCommonInputProps = (props: DatepickerProps) => {
  const min = props.fromDate ? formatDate(props.fromDate) : undefined;
  const max = props.toDate ? formatDate(props.toDate) : undefined;

  return {
    min,
    max,
  };
};

const css = (colorScheme: "blue" | "green") => {
  return `
 .rdp {
  --rdp-cell-size: 40px; /* Size of the day cells. */
  --rdp-caption-font-size: 18px; /* Font size for the caption labels. */
  --rdp-accent-color: ${theme.colors[colorScheme][500]}; /* Accent color for the background of selected days. */
  --rdp-background-color: ${theme.colors[colorScheme][50]}; /* Background color for the hovered/focused elements. */
  --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
  --rdp-selected-color: #fff; /* Color of selected day text */
}

`;
};
