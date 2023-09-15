import { ReactNode, useEffect, useRef } from "react";
import { Text } from "@kvib/react/src";
import { ActionMeta, AsyncSelect as ReactSearch } from "chakra-react-select";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";
import { SizeProp, Variant } from "chakra-react-select/dist/types/types";

// Props interface is defined with a generic T to allow flexibility in the data type of options.
export type BaseProps<T> = {
  /** Function to fetch/select options based on input. */
  loadOptions: (inputValue: string, callback: (options: T[]) => void) => void;

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
  defaultOptions?: T[];

  /** Visual style variant of the input. */
  variant?: Variant;

  /** Id set to the SelectContainer component */
  id?: string;
};

type WithMulti<T> = {
  /** Determines if it is possible to choose several values. */
  isMulti: true;
  /** Callback for when the selection changes. If `isMulti=true` the type is `(newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void` */
  onChange: (newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void;
};

type WithoutMulti<T> = {
  isMulti?: false;
  /** If `isMulti=false`, the type is `(newValue: T | null) => void` */
  onChange: (newValue: T | null) => void;
};

export type Group<T> = { label: string; options: T[] };

export type SearchAsyncProps<T> = BaseProps<T> & (WithMulti<T> | WithoutMulti<T>);

// SearchAsync uses the async version of react-select to fetch and display options.
export const SearchAsync = <T extends unknown>({
  loadOptions,
  onChange,
  placeholder,
  debounceTime,
  autoFocus,
  className,
  isClearable = true,
  dropdownIndicator,
  size,
  defaultOptions,
  variant,
  id,
  isMulti = false,
}: SearchAsyncProps<T>) => {
  const noOptionsMessage = ({ inputValue }: { inputValue: string }): ReactNode => {
    if (inputValue.replaceAll(/\s/g, "").length < 1) {
      return null;
    }
    return <Text>Fant ingen resultater</Text>;
  };

  // We use our custom useDebounce hook to debounce the loadOptions function,
  // ensuring it doesn't get called too frequently.
  const loadOptionsDebounce = useDebounce(loadOptions, debounceTime);

  // Cast onChange to the right type based on if isMulti is true
  const onChangeWrapper = (newValue: readonly T[] | T | null, actionMeta?: ActionMeta<T>) => {
    if (isMulti) {
      const multiChange = onChange as (newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void;
      multiChange(newValue as readonly T[], actionMeta!);
    } else {
      const singleChange = onChange as (newValue: T | null) => void;
      singleChange(newValue as T | null);
    }
  };

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
      onChange={onChangeWrapper}
      noOptionsMessage={noOptionsMessage}
      loadingMessage={() => <Text>Laster...</Text>}
      loadOptions={debounceTime ? loadOptionsDebounce : loadOptions}
      blurInputOnSelect={false}
      placeholder={placeholder ? placeholder : "Søk her..."}
      size={size}
      defaultOptions={defaultOptions}
      variant={variant}
      id={id}
      isMulti={isMulti}
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
