import { Box, useTheme } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import { DocsCanvas } from "../templates/DocsCanvas";
import { ThemeStrings } from "./srcThemeStrings";

export const ThemeExample = () => {
  const theme = useTheme();

  return (
    <DocsCanvas>
      <Box style={{ backgroundColor: theme.colors.red[500] }} width={"450px"} height={"100px"} p={4} color="white" />
      <Source code={ThemeStrings} dark />
    </DocsCanvas>
  );
};
