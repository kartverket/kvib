import { IconButton } from "@/button";
import { useFieldContext } from "@/hooks";
import { Input, InputGroup, InputProps } from "@/input";
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@/popover";
import { format, isValid, parse } from "date-fns";
import { nb } from "date-fns/locale/nb";
import { ChangeEvent, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { colors } from "../theme/tokens";

export type DatepickerProps = Omit<InputProps, "colorPalette" | "max" | "min" | "defaultValue"> & {
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Whether or not the input is disabled.
   */
  disabled?: boolean;

  /**
   * Whether or not the input is invalid.
   */
  invalid?: boolean;

  /**
   * Whether or not the input is required.
   */
  required?: boolean;

  /**
   * The colorPalette for the Datepicker.
   */
  colorPalette?: "blue" | "green";
};

export const Datepicker = ({ onChange, useNative = false, ...props }: DatepickerProps) => {
  const KVInputProps = extractKVProps(props);
  const commonProps = getCommonInputProps(props);
  const defaultValue = props.defaultSelected ? formatDate(props.defaultSelected) : undefined;
  const isClient = typeof window === "object";
  const isMobile = isClient ? window.innerWidth < 480 : false;

  if (isMobile || useNative)
    return <Input type="date" defaultValue={defaultValue} {...KVInputProps} {...commonProps} onChange={onChange} />;

  return <CustomDatepicker {...props} {...commonProps} onChange={onChange} />;
};

const CustomDatepicker = ({
  onChange,
  defaultSelected,
  defaultMonth,
  fromDate,
  toDate,
  showDropdownMonthYear,
  disableNavigation,
  showOutsideDays,
  showWeekNumber,
  disabledDays,
  colorPalette,
  disabled: isDisabledExternally = false,
  invalid: isInvalidExternally = false,
  required: isRequiredExternally = false,
  ...KVInputProps
}: DatepickerProps) => {
  // Style for the day picker
  const uniqueClassName = generateUniqueClassName("kvib-datepicker");
  const listOfColors = colors[colorPalette ?? "green"];

  const palette = Object.fromEntries(Object.entries(listOfColors).map(([key, obj]) => [key, obj.value]));
  const style = css(uniqueClassName, palette);

  // Get state from form control ccontext
  const formControlContext = useFieldContext();
  const isDisabledFromForm = formControlContext?.disabled || false;
  const isRequiredFromForm = formControlContext?.required || false;

  // Determine the effective isDisabled, isInvalid and isRequired states
  const isDisabled = isDisabledExternally || isDisabledFromForm;
  const isRequired = isRequiredExternally || isRequiredFromForm;

  // State for the day picker
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultSelected ?? undefined);
  const [month, setMonth] = useState(defaultMonth);
  const [inputValue, setInputValue] = useState(selectedDate ? formatDate(selectedDate) : "");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setInputValue(event.target.value);

    const parsedDate = formatDateInput(event.target.value);
    if (parsedDate && isValid(parsedDate)) {
      setMonth(parsedDate);
      setSelectedDate(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  const formatInputOnBlur = () => {
    const parsedDate = formatDateInput(inputValue);
    let tmpInputValue = "";
    if (parsedDate && isValid(parsedDate)) {
      tmpInputValue = format(parsedDate, "dd.MM.yyyy");
    }
    const event = {
      target: {
        value: tmpInputValue,
      },
    } as ChangeEvent<HTMLInputElement>;
    onChange?.(event);
    setInputValue(tmpInputValue);
  };

  const handleDayPickerSelect = (date: Date | undefined) => {
    const event = {
      target: {
        value: date ? format(date, "dd.MM.yyyy") : "",
      },
    } as ChangeEvent<HTMLInputElement>;
    onChange?.(event);

    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(formatDate(date));
      setOpen(false);
    }
  };

  return (
    <Popover
      positioning={{ placement: "bottom", offset: { mainAxis: 0, crossAxis: -15 } }}
      open={open}
      onOpenChange={e => setOpen(e.open)}
    >
      <InputGroup
        css={{
          "& > div[data-between]": {
            paddingInline: "0 !important",
          },
        }}
        endElement={
          <PopoverTrigger
            css={{
              "&:hover": { background: "none", color: "colorPalette.400" },
            }}
            asChild
          >
            <IconButton
              icon="calendar_today"
              colorPalette={colorPalette}
              size={KVInputProps.size}
              aria-label="open datepicker"
              onClick={() => setOpen(!open)}
              variant="plain"
            />
          </PopoverTrigger>
        }
      >
        <Input
          value={inputValue}
          disabled={isDisabled}
          required={isRequired}
          onChange={handleInputChange}
          onBlur={formatInputOnBlur}
          {...KVInputProps}
        />
      </InputGroup>
      <PopoverContent>
        <PopoverBody>
          <style>{style}</style>
          <DayPicker
            onSelect={handleDayPickerSelect}
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={selectedDate}
            classNames={{ root: uniqueClassName }}
            locale={nb}
            showOutsideDays={showOutsideDays}
            showWeekNumber={showWeekNumber}
            disableNavigation={disableNavigation}
            defaultMonth={defaultMonth}
            captionLayout={showDropdownMonthYear ? "dropdown" : "label"}
            startMonth={fromDate}
            endMonth={toDate}
            required={isRequired}
            {...(fromDate && {
              disabled: {
                before: fromDate,
              },
            })}
            {...(toDate && {
              disabled: {
                after: toDate,
              },
            })}
            {...(disabledDays && {
              disabled: disabledDays,
            })}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const formatDateInput = (dateStr: string): Date | undefined => {
  try {
    const formats = ["dd.MM.yy", "dd.MM.yyyy", "dd/MM/yy", "dd/MM/yyyy", "dd-MM-yy", "dd-MM-yyyy"];
    for (const formatStr of formats) {
      const parsedDate = parse(dateStr, formatStr, new Date(), { locale: nb });
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    }
    throw new Error("Ugyldig datoformat");
  } catch (error) {
    return undefined;
  }
};

// Function to extract the props that are used by the KVInput (native) component
function extractKVProps(props: DatepickerProps): InputProps {
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

// Function to format a date to the format used by the datepicker
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
  return `${d}.${m}.${y}`;
}

// Function to get the common input props the native and custom datepicker
const getCommonInputProps = (props: DatepickerProps) => {
  const min = props.fromDate ? formatDate(props.fromDate) : undefined;
  const max = props.toDate ? formatDate(props.toDate) : undefined;

  return {
    min,
    max,
  };
};

// Function to generate the css for the day picker
const css = (className: string, colorPalette: Record<number, string>) => {
  return `
 .${className} {

   /* Colors */
  --rdp-accent-color: ${colorPalette[500]}; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: ${colorPalette[100]}; /* The accent background color used for selected days and UI elements. */

  /* Fonts */
  --rdp-week_number-font: 12px/1 sans-serif;

  /* Day buttons */
  --rdp-day-width: 38px; /* Width of the day cells. */
  --rdp-day-height: 38px; /* Height of the day cells. */
  --rdp-day_button-height: calc(var(--rdp-day-height) + 2px); /* Height of the day buttons. */
  --rdp-day_button-width: calc(var(--rdp-day-width) + 2px); /* Width of the day buttons. */
  --rdp-day_button-border-radius: 50%;
  --rdp-outside-opacity: 0.4; /* Opacity of the days outside the current month. */
  --rdp-disabled-opacity: 0.25; /* Opacity of the disabled days. */

  /* Week numbers */
  --rdp-weekday-text-align: center;

  /* Day styles */
  .rdp-today {
    font-weight: 700;
  }

  .rdp-day {
    box-sizing: border-box;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    border-radius: var(--rdp-day_button-border-radius);
  }


  .rdp-day:hover:not(.rdp-selected):not(.rdp-disabled) {
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-selected {
    background-color: var(--rdp-accent-color);
    color: white;
    box-sizing: border-box;
  }

  /* Navigation buttons */
  .rdp-button_next,
  .rdp-button_previous {
    box-sizing: border-box;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
  }

  .rdp-button_next:not(:disabled):hover,
  .rdp-button_previous:not(:disabled):hover {
    border-radius: var(--rdp-day_button-border-radius);
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-button_next:disabled,
  .rdp-button_previous:disabled,
  .rdp-day_button:disabled
   {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Weekday and week number styles */
  .rdp-weekday {
    vertical-align: middle;
    font-size: 0.75em;
    font-weight: 700;
    text-align: center;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    text-transform: uppercase;
  }

  .rdp-day_button {
  width: 100%;
  height: 100%;
  }


  .rdp-week_number {
    vertical-align: baseline;
    transform: translateY(50%);
    text-align: center;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    line-height: 2px;
  }

  /* Month caption */
  .rdp-month_caption {
    padding: 0.25em;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
  }

  .rdp-dropdowns {
    gap: 0.5em;
  }

}
`;
};

// Function to generate a unique class name
const generateUniqueClassName = (baseName: string) => {
  const uniquePart = Math.random().toString(36).substring(2, 7); // Generates a random string
  return `${baseName}-${uniquePart}`;
};
