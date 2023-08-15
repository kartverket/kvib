import React, { ReactNode, useEffect, useRef } from "react";
export { Text } from "@chakra-ui/react";
import AsyncSelect from "react-select/async";
import { GroupBase, OptionsOrGroups, SingleValue } from "chakra-react-select";

export interface Props<T> {
  loadOptions: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  handleFromChange: (newValue: SingleValue<T>) => void;
  placeholder?: string;
  autoFocus?: boolean;
  debounceTime?: number;
  className?: string;
}

function AsyncSelect<T>({ loadOptions, handleFromChange, placeholder, debounceTime, autoFocus, className }: Props<T>) {
  const noOptionsMessage = ({ inputValue }: { inputValue: string }): ReactNode => {
    if (inputValue.replaceAll(/\s/g, "").length < 1) {
      return null;
    }
    return <Text>Fant ingen resultat</Text>;
  };

  const loadOptionsDebounce = useDebounce(loadOptions, debounceTime);

  return (
    <AsyncSelect
      autoFocus={autoFocus}
      focusBorderColor="none"
      className={className ? className : ""}
      onChange={handleFromChange}
      noOptionsMessage={noOptionsMessage}
      loadingMessage={() => <Text>Laster...</Text>}
      loadOptions={debounceTime ? loadOptionsDebounce : loadOptions}
      blurInputOnSelect={false}
      controlShouldRenderValue={false}
      placeholder={placeholder ? placeholder : "Søk her"}
    />
  );
}

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction<T> = (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;

function useDebounce<T>(func: SomeFunction<T>, delay = 300) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  return (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => {
    const newTimer = setTimeout(() => {
      return func(inputValue, callback);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };
}

export default AsyncSelect;
