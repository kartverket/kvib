import { Box, Heading } from "@kvib/react/src";

type DocsHeadingProps = {
  children: string;
  light?: boolean;
};

export const DocsHeading = ({ children, light }: DocsHeadingProps) => {
  return (
    <Box
      backgroundColor={light ? "transparent" : "gray.900"}
      height="3rem"
      borderRadius="none"
      paddingLeft="1rem"
      alignItems="center"
      display="flex"
      marginBottom="2rem"
      marginTop="4rem"
      className="docs-heading"
    >
      <Heading margin="0" color={light ? "gray.900" : "white"} size={light ? "md" : "sm"} as="h2" id={children}>
        {children}
      </Heading>
    </Box>
  );
};
