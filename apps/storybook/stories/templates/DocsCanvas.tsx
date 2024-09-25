import { Box } from "@kvib/react/src";

export const DocsCanvas = ({ children }: { children: React.ReactNode }) => (
  <Box
    display="block"
    p="40px"
    m="25px 0 40px"
    borderColor="var(--kvib-colors-chakra-border-color)"
    borderWidth="1px"
    className="sbdocs sbdocs-preview sb-unstyled"
  >
    <Box className="docs-story">
      <Box className="innerZoomElementWrapper">{children}</Box>
    </Box>
  </Box>
);
