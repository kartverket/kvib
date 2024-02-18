// .storybook/MDXWrapper.tsx
import React, { useEffect } from "react";
import { KvibProvider, theme } from "@kvib/react/src";
import { DocsContainer, Story } from "@storybook/blocks";
import { ColorModeScript } from "@chakra-ui/react";

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
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
        <Story id="sideelementer-footer-footer-inline--footer-inline-custom" />
      </DocsContainer>
    </KvibProvider>
  );
};

export default MDXContainer;
