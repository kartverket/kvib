// .storybook/MDXWrapper.tsx
import React from "react";
import { KvibProvider } from "@kvib/react/src";
import { DocsContainer, Story } from "@storybook/blocks";

const MDXContainer = ({ children, ...props }) => {
  return (
    <KvibProvider>
      <DocsContainer {...props}>
        {children}
        <Story id="komponenter-footer-footer-inline--footer-inline-custom" />
      </DocsContainer>
    </KvibProvider>
  );
};

export default MDXContainer;
