import { Box } from "@kvib/react/src";

type DocsStoriesContainerProps = {
  children: React.ReactNode;
};

export const DocsStoriesContainer = ({ children }: DocsStoriesContainerProps) => {
  return (
    <Box borderRadius="2xl" padding="0 2rem" backgroundColor="white">
      {children}
    </Box>
  );
};
