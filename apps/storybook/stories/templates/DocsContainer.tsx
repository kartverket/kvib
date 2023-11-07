import { Box } from "@kvib/react/src";

type DocsStoriesContainerProps = {
  children: React.ReactNode;
};

export const DocsContainer = ({ children }: DocsStoriesContainerProps) => {
  return <Box padding="0 1rem">{children}</Box>;
};
