import { useTheme, Box } from "@kvib/react/src";

export const ThemeExample = () => {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.red[500] }} width={"450px"} height={"100px"} p={4} color="white" />
  );
};
