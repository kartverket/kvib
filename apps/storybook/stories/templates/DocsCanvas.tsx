import { Box, Stack, StackProps } from "@kvib/react/src";

export const DocsCanvas = (props: StackProps) => (
  <Box
    display="block"
    p="40px"
    m="25px 0 40px"
    borderColor="var(--kvib-colors-chakra-border-color)"
    borderWidth="1px"
    className="sbdocs sbdocs-preview sb-unstyled"
  >
    <Box className="docs-story">
      <Stack className="innerZoomElementWrapper" {...props}>
        {props.children}
      </Stack>
    </Box>
  </Box>
);
