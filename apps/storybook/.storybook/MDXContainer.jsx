// .storybook/MDXWrapper.tsx
import React from "react";
import { KvibProvider } from "@kvib/react/src";
import { DocsContainer } from "@storybook/blocks";

const MDXContainer = ({ children, ...props }) => {
  return (
    <KvibProvider>
      <DocsContainer {...props}>{children}</DocsContainer>
    </KvibProvider>
  );
};

export default MDXContainer;
