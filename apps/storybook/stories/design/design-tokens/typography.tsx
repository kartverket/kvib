import * as tg from "@kvib/react/src/theme/tokens/typography";
import { Box } from "@kvib/react/src";

export const Typography = () => {
  return (
    <Box language="tsx">
      <h3>Letter Spacing:</h3>
      <pre>{JSON.stringify(tg.letterSpacings, null, 2)}</pre>
      <h3>Line Heights:</h3>
      <pre>{JSON.stringify(tg.lineHeights, null, 2)}</pre>
      <h3>Font Weights:</h3>
      <pre>{JSON.stringify(tg.fontWeights, null, 2)}</pre>
      <h3>Fonts:</h3>
      <pre>{JSON.stringify(tg.fonts, null, 2)}</pre>
      <h3>Font Sizes:</h3>
      <pre>{JSON.stringify(tg.fontSizes, null, 2)}</pre>
    </Box>
  );
};
