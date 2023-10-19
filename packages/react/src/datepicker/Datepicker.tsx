import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  Popover,
  useBoolean,
  PopoverContent,
  InputGroup,
  InputRightElement,
  PopoverTrigger,
  PopoverAnchor,
} from "@chakra-ui/react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Datepicker.css";
import { Icon } from "@kvib/react/src/icon";
import { nb } from "date-fns/locale";

type DatepickerProps = ChakraInputProps & {
  /**
   * A default date to be selected when the picker is displayed.
   */
  defaultSelected?: Date;

  /**
   * The month to display in the calendar by default.
   */
  defaultMonth?: Date;

  /**
   * The earliest year available for selection.
   */
  fromYear?: number;

  /**
   * The latest year available for selection.
   */
  toYear?: number;

  /**
   * The earliest month available for selection.
   */
  fromMonth?: Date;

  /**
   * The latest month available for selection.
   */
  toMonth?: Date;

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

export const Datepicker = forwardRef<DatepickerProps, "input">(({ useNative = false, ...props }, ref) => {
  const isClient = typeof window === "object";
  const isMobile = isClient ? window.innerWidth < 480 : false;

  if (isMobile && useNative) return <ChakraInput {...props} />;

  return <CustomDatepicker {...props} ref={ref} />;
});

const CustomDatepicker = forwardRef<DatepickerProps, "input">(
  (
    {
      defaultSelected,
      defaultMonth,
      fromYear,
      toYear,
      fromMonth,
      toMonth,
      fromDate,
      toDate,
      showDropdownMonthYear = true,
      disableNavigation,
      showOutsideDays,
      showWeekNumber,
      disabledDays,
      ...restProps
    },
    ref,
  ) => {
    const [isPickerVisible, setPickerVisible] = useBoolean(false);
    const { inputProps, dayPickerProps } = useInput({
      defaultSelected,
      format: "yyyy-MM-dd",
      required: true,
      locale: nb,
      fromYear,
      toYear,
      fromMonth,
      toMonth,
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
            <ChakraInput ref={ref} className="custom-datepicker" {...restProps} {...inputProps} />
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
