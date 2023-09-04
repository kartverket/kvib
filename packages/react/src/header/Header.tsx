import { Box, Logo, SearchAsync } from "@kvib/react/src";
import { GroupBase, OptionsOrGroups } from "chakra-react-select";

export type HeaderProps<T> = {
  isSearch?: boolean;
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void) => void;
  onChange?: (newValue: T | null) => void;
};

export const Header = <T extends unknown>({ isSearch, loadOptions, onChange }: HeaderProps<T>) => {
  return (
    <Box
      bg={"white"}
      borderBottomWidth={"2px"}
      borderBottomColor={"gray.200"}
      py={"29px"}
      paddingLeft={"70px"}
      display={"flex"}
      alignItems={"center"}
    >
      <Logo variant={"horizontal"} size={170} />

      {loadOptions !== undefined && onChange !== undefined && isSearch ? (
        <Box px={"90px"} w={500}>
          <SearchAsync loadOptions={loadOptions} onChange={onChange} size={"lg"} />
        </Box>
      ) : null}
    </Box>
  );
};
