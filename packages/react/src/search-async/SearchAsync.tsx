import { ReactNode, useEffect, useRef } from "react";
import { Text } from "@kvib/react/src";
import { AsyncSelect as ReactSearch } from "chakra-react-select";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";
import { SizeProp, Variant } from "chakra-react-select/dist/types/types";

// Props interface is defined with a generic T to allow flexibility in the data type of options.
export interface Props<T> {
  /** Function to fetch/select options based on input. */
  loadOptions: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;

  /** Callback for when the selection changes. */
  handleFromChange: (newValue: T | null) => void;

  /** Placeholder text for the input field. */
  placeholder?: string;

  /** Determines if the input is focused on mount. */
  autoFocus?: boolean;

  /** Time delay (ms) before invoking `loadOptions`. */
  debounceTime?: number;

  /** Additional CSS class for the component. */
  className?: string;

  /** Allows a clear button in the input. */
  isClearable?: boolean;

  /** Custom JSX for the dropdown indicator. */
  dropdownIndicator?: JSX.Element;

  /** Size of the input (e.g., "small", "medium"). */
  size?: SizeProp;

  /** Default options shown when no input is given. */
  defaultOptions?: OptionsOrGroups<T, GroupBase<T>>;

  /** Visual style variant of the input. */
  variant?: Variant;
}

// SearchAsync uses the async version of react-select to fetch and display options.
export const SearchAsync = <T extends unknown>({
  loadOptions,
  handleFromChange,
  placeholder,
  debounceTime,
  autoFocus,
  className,
  isClearable = true,
  dropdownIndicator,
  size,
  defaultOptions,
  variant,
}: Props<T>) => {
  const noOptionsMessage = ({ inputValue }: { inputValue: string }): ReactNode => {
    if (inputValue.replaceAll(/\s/g, "").length < 1) {
      return null;
    }
    return <Text>Fant ingen resultater</Text>;
  };

  // We use our custom useDebounce hook to debounce the loadOptions function,
  // ensuring it doesn't get called too frequently.
  const loadOptionsDebounce = useDebounce(loadOptions, debounceTime);

  return (
    <ReactSearch
      components={{
        DropdownIndicator: () => dropdownIndicator ?? null,
        // Only use separator when there is a dropdownindicator
        ...(!dropdownIndicator ? { IndicatorSeparator: () => null } : {}),
      }}
      isClearable={isClearable}
      autoFocus={autoFocus}
      className={className ? className : ""}
      onChange={handleFromChange}
      noOptionsMessage={noOptionsMessage}
      loadingMessage={() => <Text>Laster...</Text>}
      loadOptions={debounceTime ? loadOptionsDebounce : loadOptions}
      blurInputOnSelect={false}
      placeholder={placeholder ? placeholder : "Søk her..."}
      size={size}
      defaultOptions={defaultOptions}
      variant={variant}
    />
  );
};

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction<T> = (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;

const useDebounce = <T extends unknown>(func: SomeFunction<T>, delay = 300) => {
  // useRef is used to hold a mutable reference to the timer which doesn't cause re-renders.
  const timer = useRef<Timer>();

  // useEffect is used to handle cleanup: clearing the timer when the component unmounts.
  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  // The debounced function. It resets the timer every time it's called, delaying the execution of the
  // original function until the user stops calling the debounced function for a specified duration.
  return (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => {
    const newTimer = setTimeout(() => {
      return func(inputValue, callback);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };
};
