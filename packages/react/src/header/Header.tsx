import { Box, Icon, Logo, SearchAsync, Flex, useMediaQuery, Search, IconButton } from "@kvib/react/src";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";
import { ChangeEventHandler, useState } from "react";
import { colors } from "../theme/tokens";

type BaseHeaderProps = {
  isCentered?: boolean;
  onLogoClick?: React.MouseEventHandler<HTMLDivElement>;
};

type WithSearchProps = {
  isSearch: true;
  placeholder?: string;
};

type WithoutSearchProps = {
  isSearch?: false;
  placeholder?: never;
  loadOptions?: never;
  onChange?: never;
  searchFieldType?: never;
};

type AsyncSearchProps<T> = WithSearchProps & {
  searchFieldType: "async";
  loadOptions: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange: (newValue: T | null) => void;
};

type RegularSearchProps = WithSearchProps & {
  searchFieldType?: "regular";
  loadOptions?: never;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type HeaderProps<T> = BaseHeaderProps & (AsyncSearchProps<T> | RegularSearchProps | WithoutSearchProps);

const Header = <T extends unknown>(props: HeaderProps<T>) => {
  const {
    isSearch = false,
    loadOptions,
    onChange,
    isCentered = false,
    placeholder,
    searchFieldType = "regular",
    onLogoClick,
  } = props;

  const [isSm] = useMediaQuery("(max-width: 30em)");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const logoSize = isSm ? 130 : 170;
  const headerSize = isSm ? 90 : 110;
  const showLogo = !isSearching || !isSm;
  const showSearchField = isSearch && (!isSm || isSearching);
  const showSearchButton = isSearch && !isSearching && isSm;
  const showExitButton = isSearching && isSm;
  const justifyContent = isCentered ? (isSm ? "space-between" : "center") : "space-between";

  return (
    <Flex
      bg="white"
      borderBottomWidth="2px"
      borderBottomColor="gray.200"
      padding={30}
      height={headerSize}
      alignItems="center"
      justifyContent={justifyContent}
      gap={90}
    >
      {showLogo && (
        <Box onClick={onLogoClick}>
          <Logo variant="horizontal" size={logoSize} />
        </Box>
      )}

      {showSearchField && (
        <Flex w={400} paddingTop="15px">
          <Box w={"100%"}>
            <SearchField
              loadOptions={loadOptions}
              onChange={onChange}
              placeholder={placeholder}
              searchFieldType={searchFieldType}
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
          marginTop="15px"
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
  searchFieldType,
}: {
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange?: ((newValue: T | null) => void) | ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  searchFieldType: "regular" | "async";
}) => {
  if (searchFieldType === "async" && loadOptions && onChange) {
    return (
      <SearchAsync
        placeholder={placeholder}
        loadOptions={loadOptions}
        onChange={onChange as (newValue: T | null) => void}
        size="md"
        dropdownIndicator={<Icon icon="search" weight={500} color={colors.green[500]} />}
      />
    );
  }
  return <Search placeholder={placeholder} onChange={onChange as ChangeEventHandler<HTMLInputElement>} />;
};

export { Header };
