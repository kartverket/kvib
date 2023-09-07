import { Box, Icon, Logo, SearchAsync, Flex, useMediaQuery, Search, IconButton } from "@kvib/react/src";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";
import { ChangeEventHandler, useState } from "react";
import { colors } from "../theme/tokens";

type BaseHeaderProps = {
  /** Determines where the content in the header is displayed. */
  justifyContent?: "space-between" | "center" | "start";
  /** Callback for when the logo is clicked. */
  onLogoClick?: React.MouseEventHandler<HTMLDivElement>;
};

type WithSearchProps = {
  /** Determines if the search field is displayed. */
  isSearch: true;
  /** Placeholder text for the search field. */
  placeholder?: string;
};

type WithoutSearchProps = {
  /** Determines if the search field is displayed. */
  isSearch?: false;
  placeholder?: never;
  loadOptions?: never;
  onChange?: never;
  searchFieldVariant?: never;
};

type AsyncSearchProps<T> = WithSearchProps & {
  /** "async" provides a dropdown list with results. */
  searchFieldVariant: "async";
  /** Only for "async" search field: Function to fetch/select options based on input. */
  loadOptions: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  /** 2. Async: Callback for when the selection changes. */
  onChange: (newValue: T | null) => void;
};

type RegularSearchProps = WithSearchProps & {
  /** Determines which variant of searchfield to use. "regular" provides a simple input field. */
  searchFieldVariant?: "regular";
  loadOptions?: never;
  /** 1. Regular: Callback for when the input changes. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type HeaderProps<T> = BaseHeaderProps & (AsyncSearchProps<T> | RegularSearchProps | WithoutSearchProps);

export const Header = <T extends unknown>(props: HeaderProps<T>) => {
  const {
    isSearch = false,
    loadOptions,
    onChange,
    justifyContent = "space-between",
    placeholder = "Søk her...",
    searchFieldVariant = "regular",
    onLogoClick,
  } = props;

  const [isSm] = useMediaQuery("(max-width: 30em)");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const logoSize = isSm ? 110 : 150;
  const headerSize = isSm ? 70 : 90;
  const showLogo = !isSearching || !isSm;
  const showSearchField = isSearch && (!isSm || isSearching);
  const showSearchButton = isSearch && !isSearching && isSm;
  const showExitButton = isSearching && isSm;
  const justify = justifyContent && isSm ? "space-between" : justifyContent;

  return (
    <Flex
      bg="white"
      borderBottomWidth="2px"
      borderBottomColor="gray.200"
      padding={30}
      height={headerSize}
      alignItems="center"
      justifyContent={justify}
      gap={90}
    >
      {showLogo && (
        <Box onClick={onLogoClick} cursor={onLogoClick && "pointer"}>
          <Logo variant="horizontal" size={logoSize} />
        </Box>
      )}

      {showSearchField && (
        <Flex w={400} paddingTop="8px">
          <Box w={"100%"}>
            <SearchField
              loadOptions={loadOptions}
              onChange={onChange}
              placeholder={placeholder}
              searchFieldVariant={searchFieldVariant}
            />
          </Box>
          {showExitButton && (
            <IconButton
              aria-label="close search field"
              icon="close"
              variant="ghost"
              onClick={() => setIsSearching(false)}
            ></IconButton>
          )}
        </Flex>
      )}

      {showSearchButton && (
        <IconButton
          aria-label={"open search field"}
          icon="search"
          variant="ghost"
          marginTop="8px"
          onClick={() => setIsSearching(true)}
          justifySelf="right"
        />
      )}
    </Flex>
  );
};

const SearchField = <T extends unknown>({
  loadOptions,
  onChange,
  placeholder,
  searchFieldVariant,
}: {
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange?: ((newValue: T | null) => void) | ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  searchFieldVariant: "regular" | "async";
}) => {
  if (searchFieldVariant === "async" && loadOptions && onChange) {
    return (
      <SearchAsync
        placeholder={placeholder}
        loadOptions={loadOptions}
        onChange={onChange as (newValue: T | null) => void}
        size="md"
        dropdownIndicator={<Icon icon="search" weight={500} color={colors.green[500]} />}
        aria-label="search async"
      />
    );
  }
  return <Search placeholder={placeholder} onChange={onChange as ChangeEventHandler<HTMLInputElement>} />;
};
