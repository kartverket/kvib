import { Input } from "@/input";
import { Text } from "@/typography";
import { forwardRef, JSX, ReactNode, Ref, useEffect, useRef } from "react";
import {
  ActionMeta,
  FormatOptionLabelMeta,
  GroupBase,
  MenuPlacement,
  OptionsOrGroups,
  SelectInstance,
} from "react-select";
import AsyncSelect from "react-select/async";

export type SearchAsyncElement<T> = SelectInstance<T, boolean, GroupBase<T>>;

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
  clearable?: boolean;

  /** Custom JSX for the dropdown indicator. */
  dropdownIndicator?: JSX.Element;

  /** Default options shown when no input is given. If true, all options will be shown. */
  defaultOptions?: T[] | boolean;

  /** Id set to the SelectContainer component */
  id?: string;

  /** Determines if the input is disabled */
  disabled?: boolean;

  /** Determines the color of the border when focused. Use color keys in `theme.colors`. */
  focusBorderColor?: string;

  /** Function to map inputValue to a text output when no options are loaded */
  noOptionsMessage?: ((obj: { inputValue: string }) => ReactNode) | undefined;

  /** Default placement of the menu in relation to the control. 'auto' will flip when there isn't enough space below the control. */
  menuPlacement?: MenuPlacement;

  /** Variable to override the selected value of the component. Null resets the component and undefined  is ignored. When in use update value from the onChange function */
  value?: T | null;

  /** Function for formatting the labels in the dropdown menu */
  optionLabelFormatter?: (data: T, formatOptionLabelMeta: FormatOptionLabelMeta<T>) => ReactNode;

  /** Reference to the instance of the select element. Note that this is not a default HTMLSelectElement, but a class from the react-select package. As such, the
   * type must be imported from KVIB.
   */
  ref?: Ref<SearchAsyncElement<T>>;
};

type WithMulti<T> = {
  /** Determines if it is possible to choose several values. */
  multi: true;
  /** Callback for when the selection changes. If `isMulti=true` the type is `(newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void` */
  onChange: (newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void;
};

type WithoutMulti<T> = {
  multi?: false;
  /** If `isMulti=false`, the type is `(newValue: T | null) => void` */
  onChange: (newValue: T | null) => void;
};

export type SearchAsyncProps<T> = BaseProps<T> & (WithMulti<T> | WithoutMulti<T>);

function genericForwardRef<T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
): (props: P & React.RefAttributes<T>) => React.ReactNode {
  return forwardRef(render as any) as any;
}

const CustomControl = ({ children, innerProps, innerRef, ...props }: any) => {
  return <Input {...innerProps} {...props} />;
};

// SearchAsync uses the async version of react-select to fetch and display options.
const SearchAsyncNoRef = <T extends unknown>(
  {
    loadOptions,
    onChange,
    placeholder,
    debounceTime,
    autoFocus,
    className,
    clearable = true,
    dropdownIndicator,
    defaultOptions,
    id,
    multi = false,
    noOptionsMessage,
    disabled,
    menuPlacement = "bottom",
    value,
    optionLabelFormatter,
  }: SearchAsyncProps<T>,
  ref: Ref<SelectInstance<T, boolean, GroupBase<T>>> | undefined,
) => {
  const noOptionsMessageDefault = ({ inputValue }: { inputValue: string }): ReactNode => {
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
    if (multi) {
      const multiChange = onChange as (newValue: readonly T[] | null, actionMeta: ActionMeta<T>) => void;
      multiChange(newValue as readonly T[], actionMeta!);
    } else {
      const singleChange = onChange as (newValue: T | null) => void;
      singleChange(newValue as T | null);
    }
  };

  return (
    <AsyncSelect
      components={{
        DropdownIndicator: () => dropdownIndicator ?? null,
        // Only use separator when there is a dropdownindicator
        ...(!dropdownIndicator ? { IndicatorSeparator: () => null } : {}),
        Input: CustomControl,
        Placeholder: () => null,
      }}
      formatOptionLabel={optionLabelFormatter}
      isClearable={clearable}
      autoFocus={autoFocus}
      className={className ? className : ""}
      onChange={onChangeWrapper}
      noOptionsMessage={noOptionsMessage || noOptionsMessageDefault}
      loadingMessage={() => <Text>Laster...</Text>}
      loadOptions={debounceTime ? loadOptionsDebounce : loadOptions}
      blurInputOnSelect={false}
      placeholder={placeholder}
      defaultOptions={defaultOptions}
      id={id}
      isMulti={multi}
      isDisabled={disabled}
      menuPlacement={menuPlacement}
      value={value}
      ref={ref}
      styles={{
        control: () => ({
          all: "unset",
        }),
      }}
    />
  );
};

export const SearchAsync = genericForwardRef(SearchAsyncNoRef);

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction<T> = (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;

const useDebounce = <T extends unknown>(func: SomeFunction<T>, delay = 300) => {
  // useRef is used to hold a mutable reference to the timer which doesn't cause re-renders.
  const timer = useRef<Timer | undefined>(undefined);

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
