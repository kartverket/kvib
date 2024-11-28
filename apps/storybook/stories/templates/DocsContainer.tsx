import { Box } from "@kvib/react";
import { ReactNode } from "react";

type DocsStoriesContainerProps = {
  children: ReactNode;
};

export const DocsContainer = ({ children }: DocsStoriesContainerProps) => {
  return <Box padding="0 1rem">{children}</Box>;
};
