import React from "react";
import { Link as ChakraLink, LinkProps as ChakraLinkProps, forwardRef } from "@chakra-ui/react";

type LinkProps = Omit<ChakraLinkProps, "variant"> & {
  variant?: "primary" | "secondary" | "tertiary";
};
/** Link to different sites or parts of site
 *
 * You can specify the `variant` prop to get different link designs.
 */
export const TextLink = forwardRef<LinkProps, "a">(({ children, ...props }, ref) => {
  const isExternal = props.isExternal !== undefined ? props.isExternal : Boolean(props.href?.match(/^https?:\/\//));
  return (
    <ChakraLink {...props} ref={ref} isExternal={isExternal}>
      {children}
      {isExternal && (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "18px", verticalAlign: "middle", marginLeft: "4px" }}
          aria-label="Ekstern lenke"
        >
          launch
        </span>
      )}
    </ChakraLink>
  );
});
