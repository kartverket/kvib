// .storybook/MDXWrapper.tsx
import React from "react";
import { Footer, Header, Heading, KvibProvider, Box } from "@kvib/react/src";
import { DocsContainer } from "@storybook/blocks";

const MDXContainer = ({ children, ...props }) => {
  console.log("MDXHeader", props);
  console.log("MDXHeader", props.context);
  return (
    <KvibProvider>
      <Box bgAttachment={"fixed"} bgGradient="linear-gradient(to bottom right, #e9f4ec 0%, #ffffff 20%)">
        <DocsContainer {...props}>{children}</DocsContainer>
      </Box>
    </KvibProvider>
  );
};

export default MDXContainer;
