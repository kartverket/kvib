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
  /*  const { theme } = useKvibContext();
  const style = css(
    uniqueClassName,
    theme.colors[props.colorScheme ?? theme.components.Datepicker.defaultProps.colorScheme],
  ); */
  return (
    <>
      {/* <style>{style}</style> */}
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

// Function to generate a unique class name
const generateUniqueClassName = (baseName: string) => {
  const uniquePart = Math.random().toString(36).substring(2, 7); // Generates a random string
  return `${baseName}-${uniquePart}`;
};
