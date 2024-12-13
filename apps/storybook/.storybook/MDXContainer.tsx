import { FooterInline, KvibProvider, Link } from "@kvib/react";
import { DocsContainer, Unstyled } from "@storybook/blocks";
import React, { useEffect } from "react";

export const MDXContainer = ({ children, context }) => {
  // Remove table of contents if there are no h2 or h3 elements on the page
  useEffect(() => {
    document.querySelectorAll(".sbdocs-content").forEach(el => {
      const tocContainer = el.nextElementSibling;
      const headings = el.querySelectorAll("h2, h3");

      if (headings.length <= 1 && tocContainer) {
        tocContainer.classList.add("toc-no-children");
      }
    });
  }, []);

  return (
    <Unstyled>
      <KvibProvider>
        <DocsContainer context={context}>
          {children}
          <FooterInline accessibilityUrl="https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9">
            <Link
              href="https://github.com/kartverket/kvib"
              aria-label="Besøk Kartverkets Designsystem på Github"
              fontWeight="bold"
            >
              Github
            </Link>
          </FooterInline>
        </DocsContainer>
      </KvibProvider>
    </Unstyled>
  );
};
