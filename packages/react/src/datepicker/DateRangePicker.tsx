import { useTheme } from "@kvib/react/src";
import { nb } from "date-fns/locale";
import { DateRange, DayPicker, DayPickerProps } from "react-day-picker";
import "react-day-picker/style.css";

export type DateRangePickerProps = DayPickerProps & {
  selected?: DateRange | undefined;
  onSelect?: (range: DateRange | undefined) => void;
  mode?: "range";
  colorScheme?: "green" | "blue";
  showDropdownMonthYear?: boolean;
};

export const DateRangePicker = ({ ...props }: DateRangePickerProps) => {
  const uniqueClassName = generateUniqueClassName("kvib-datepicker");
  const theme = useTheme();
  const style = css(
    uniqueClassName,
    theme.colors[props.colorScheme ?? theme.components.Datepicker.defaultProps.colorScheme],
  );
  return (
    <>
      <style>{style}</style>
      <DayPicker
        classNames={{ root: uniqueClassName }}
        locale={nb}
        captionLayout={props.showDropdownMonthYear ? "dropdown" : "label"}
        {...props}
        mode="range"
      />
    </>
  );
};

// Function to generate the css for the day picker
const css = (className: string, colorPalette: Record<number, string>) => {
  return `
 .${className} {

   /* Colors */
  --rdp-accent-color: ${colorPalette[500]}; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: ${colorPalette[100]}; /* The accent background color used for selected days and UI elements. */
  --rdp-day_button-border: none; /* The border of the day buttons. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the start date in a range. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the end date in a range. */
  --rdp-range_start-color: #fff;
  --rdp-range_end-color: #fff;
  --rdp-selected-border: 1px solid var(--rdp-accent-color); /* The border color of the selected days. */

  /* Fonts */
  --rdp-week_number-font: 12px/1 sans-serif;

  /* Day buttons */
  --rdp-day-width: 42px; /* Width of the day cells. */
  --rdp-day-height: 42px; /* Height of the day cells. */
  --rdp-day_button-height: var(--rdp-day-height); /* Height of the day buttons. */
  --rdp-day_button-width: var(--rdp-day-width); /* Width of the day buttons. */
  --rdp-day_button-border-radius: 50%;
  --rdp-outside-opacity: 0.4; /* Opacity of the days outside the current month. */
  --rdp-disabled-opacity: 0.25; /* Opacity of the disabled days. */

  /* Week numbers */
  --rdp-weekday-text-align: center;

  /* Day styles */
  .rdp-today {
    font-weight: 700;
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
    text-transform: uppercase;
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
    padding: 0.5em;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
  }

  .rdp-footer {
  padding: 0.5em;
  padding-left: 0.75em;
    font-weight: 400;
    font-size: 14px;
  }

  .rdp-dropdowns {
    gap: 0.5em;
  }

  /* Range styles */
  .rdp-range_middle, .rdp-range_start, .rdp-range_end {
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-range_start {
    border-top-left-radius: var(--rdp-day_button-border-radius);
    border-bottom-left-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-range_end {
    border-top-right-radius: var(--rdp-day_button-border-radius);
    border-bottom-right-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-day_button {
    margin: -1px;
  }

  .rdp-day:hover:not(.rdp-selected):not(.rdp-disabled) {
    background-color: var(--rdp-accent-background-color);
    border-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-outside.rdp-range_start,
  .rdp-outside.rdp-range_middle,
  .rdp-outside.rdp-range_end {
    opacity: 1;
  }


`;
};

// Function to generate a unique class name
const generateUniqueClassName = (baseName: string) => {
  const uniquePart = Math.random().toString(36).substring(2, 7); // Generates a random string
  return `${baseName}-${uniquePart}`;
};
