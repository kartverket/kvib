// .storybook/MDXWrapper.tsx
import React, { useEffect } from "react";
import { KvibProvider } from "@kvib/react/src";
import { DocsContainer, Story } from "@storybook/blocks";

const MDXContainer = ({ children, ...props }) => {
  // Remove table of contents if there are no h2 or h3 elements on the page
  useEffect(() => {
    document.querySelectorAll(".sbdocs-content").forEach((el) => {
      const tocContainer = el.nextElementSibling;
      const headings = el.querySelectorAll("h2, h3");

      if (headings.length <= 1 && tocContainer) {
        tocContainer.classList.add("toc-no-children");
      }
    });
  }, []);

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
