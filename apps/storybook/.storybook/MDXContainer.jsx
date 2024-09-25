import { KvibProvider } from "@kvib/react/src";
import { DocsContainer } from "@storybook/blocks";
import React, { useEffect } from "react";
import * as FooterInlineStories from "./../stories/components/sideelementer/footer/footer-inline/FooterInline.stories";

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
        <FooterInlineStories.FooterInlineCustom.render />
      </DocsContainer>
    </KvibProvider>
  );
};

export default MDXContainer;
