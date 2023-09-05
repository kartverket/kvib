import { Box, Icon, Logo, SearchAsync, Flex, useMediaQuery } from "@kvib/react/src";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";

export type HeaderProps<T> = {
  isSearch?: boolean;
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange?: (newValue: T | null) => void;
  isCentered?: boolean;
};

const Header = <T extends unknown>({ isSearch, loadOptions, onChange, isCentered }: HeaderProps<T>) => {
  const [sm] = useMediaQuery("(max-width: 30em)");

  return (
    <Flex
      bg="white"
      borderBottomWidth="2px"
      borderBottomColor="gray.200"
      padding={30}
      alignItems="center"
      justifyContent={isCentered ? "center" : undefined}
      gap={90}
    >
      <Box>
        <Logo variant="horizontal" size={sm ? 130 : 170} />
      </Box>

      {isSearch && loadOptions && onChange && !sm && (
        <Box w={400} paddingTop="14px">
          <SearchAsync
            loadOptions={loadOptions}
            onChange={onChange}
            size="md"
            dropdownIndicator={<Icon icon="search" weight={400} />}
          />
        </Box>
      )}
    </Flex>
  );
};

export { Header };
