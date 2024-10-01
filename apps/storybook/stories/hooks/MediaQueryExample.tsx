import { Text, useMediaQuery } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import { DocsCanvas } from "../templates/DocsCanvas";
import { MediaQueryBrowserStrings, MediaQueryStrings } from "./srcMediaQueryStrings";
export const MediaQueryExample = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <DocsCanvas>
      <Text>{isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}</Text>
      <Source code={MediaQueryStrings} dark />
    </DocsCanvas>
  );
};

export const MediaQueryBrowserExample = () => {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery(["(min-width: 1920px)", "(display-mode: browser)"]);

  const determineText = () => {
    if (isLargerThanHD) {
      return `high resolution you got there ${isDisplayingInBrowser ? "in your browser" : "on your screen"}`;
    }

    return isDisplayingInBrowser ? "rendering in a browser" : "rendering on something else, e.g. PWA";
  };

  return (
    <DocsCanvas>
      <Text>{determineText()}</Text>
      <Source code={MediaQueryBrowserStrings} dark />
    </DocsCanvas>
  );
};
