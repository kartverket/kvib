import { Box, Heading } from "@kvib/react/src";

type DocsHeadingProps = {
  children: string;
};

export const DocsHeading = ({ children }: DocsHeadingProps) => {
  return (
    <Box
      backgroundColor="gray.900"
      height="3rem"
      borderRadius="none"
      paddingLeft="1rem"
      alignItems="center"
      display="flex"
      marginBottom="2rem"
      marginTop="4rem"
      className="docs-heading"
    >
      <Heading margin="0" color="white" size="sm" as="h2" id={children}>
        {children}
      </Heading>
    </Box>
  );
};
