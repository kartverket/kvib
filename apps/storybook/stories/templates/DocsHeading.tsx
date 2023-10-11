import { Box, Heading } from "@kvib/react/src";

type DocsHeadingProps = {
  children: React.ReactNode;
};

export const DocsHeading = ({ children }: DocsHeadingProps) => {
  return (
    <Box
      backgroundColor="gray.900"
      height="3rem"
      borderRadius="none"
      paddingLeft="2rem"
      alignItems="center"
      display="flex"
      marginBottom="2rem"
      marginTop="4rem"
    >
      <Heading margin="0" color="white" size="sm" as="h3">
        {children}
      </Heading>
    </Box>
  );
};
