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
} from "@kvib/react/src";
import { forwardRef } from "@chakra-ui/react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Datepicker.css";
import { Icon } from "@kvib/react/src/icon";
import { nb } from "date-fns/locale";

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
};

type ExcludedProps = "max" | "min" | "defaultValue";

type DatepickerPropsWithoutStandard = Omit<DatepickerProps, ExcludedProps>;

export const Datepicker = forwardRef<DatepickerPropsWithoutStandard, "input">(({ useNative = true, ...props }, ref) => {
  const KVInputProps = extractKVProps(props);
  const commonProps = getCommonInputProps(props);
  const defaultValue = props.defaultSelected ? formatDateToLocalISO(props.defaultSelected) : undefined;
  const isClient = typeof window === "object";
  const isMobile = isClient ? window.innerWidth < 480 : false;

  if (isMobile && useNative)
    return <KVInput type="date" defaultValue={defaultValue} {...KVInputProps} {...commonProps} />;

  return <CustomDatepicker {...props} ref={ref} {...commonProps} />;
});

const CustomDatepicker = forwardRef<DatepickerProps, "input">(
  (
    {
      defaultSelected,
      defaultMonth,
      fromDate,
      toDate,
      showDropdownMonthYear = true,
      disableNavigation,
      showOutsideDays,
      showWeekNumber,
      disabledDays,
      ...KVInputProps
    },
    ref,
  ) => {
    const [isPickerVisible, setPickerVisible] = useBoolean(false);
    const { inputProps, dayPickerProps } = useInput({
      defaultSelected,
      format: "yyyy-MM-dd",
      locale: nb,
      fromDate,
      toDate,
    });

    return (
      <Popover
        placement="bottom-start"
        isOpen={isPickerVisible}
        onOpen={setPickerVisible.on}
        onClose={setPickerVisible.off}
      >
        <InputGroup>
          <PopoverAnchor>
            <KVInput type="date" ref={ref} className="custom-datepicker" {...KVInputProps} {...inputProps} />
          </PopoverAnchor>
          <PopoverTrigger>
            <InputRightElement cursor="pointer" onClick={setPickerVisible.toggle}>
              <Icon icon="calendar_today" />
            </InputRightElement>
          </PopoverTrigger>
        </InputGroup>
        <PopoverContent width="auto">
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

function formatDateToLocalISO(date: Date): string {
  const y = date.getFullYear().toString().padStart(4, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0"); // +1 because getMonth() is zero-based
  const d = date.getDate().toString().padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const getCommonInputProps = (props: DatepickerProps) => {
  const min = props.fromDate ? formatDateToLocalISO(props.fromDate) : undefined;
  const max = props.toDate ? formatDateToLocalISO(props.toDate) : undefined;

  return {
    min,
    max,
  };
};
