// .storybook/MDXWrapper.tsx
import React from "react";
import { Footer, Header, Heading, KvibProvider } from "@kvib/react/src";
import { DocsContainer } from "@storybook/blocks";

const MDXContainer = ({ children, ...props }) => {
  console.log("MDXHeader", props);
  console.log("MDXHeader", props.context);
  return (
    <KvibProvider>
      <Header />
      <DocsContainer {...props}>{children}</DocsContainer>
      <Footer excludeHelp excludeNews excludeContactInfo excludeOpeningHours excludeSocialMedia />
    </KvibProvider>
  );
};

export default MDXContainer;
