import { Box, Heading } from "@kvib/react/src";

type DocsStoryHeadingProps = {
  children: React.ReactNode;
};

export const DocsStoryHeading = ({ children }: DocsStoryHeadingProps) => {
  return (
    <Box
      backgroundColor="gray.900"
      height="5rem"
      borderRadius="2xl"
      paddingLeft="3rem"
      alignItems="center"
      display="flex"
      marginBottom="2rem"
      marginTop="4rem"
    >
      <Heading margin="0" color="white" size="md" as="h3">
        {children}
      </Heading>
    </Box>
  );
};
