import { Box, Icon, Logo, SearchAsync, Flex } from "@kvib/react/src";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";

export type HeaderProps<T> = {
  isSearch?: boolean;
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange?: (newValue: T | null) => void;
};

export const Header = <T extends unknown>({ isSearch, loadOptions, onChange }: HeaderProps<T>) => {
  return (
    <Flex
      bg={"white"}
      borderBottomWidth={"2px"}
      borderBottomColor={"gray.200"}
      py={"29px"}
      paddingLeft={"70px"}
      alignItems={"center"}
    >
      <Box>
        <Logo variant={"horizontal"} size={170} />
      </Box>

      {loadOptions !== undefined && onChange !== undefined && isSearch ? (
        <Box px={"90px"} w={700} paddingTop="10px">
          <SearchAsync
            loadOptions={loadOptions}
            onChange={onChange}
            size={"lg"}
            dropdownIndicator={<Icon icon="search" weight={400} />}
          />
        </Box>
      ) : null}
    </Flex>
  );
};
