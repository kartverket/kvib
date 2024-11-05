import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type LinkProps = Omit<ChakraLinkProps, "colorScheme" | "variant"> & {
  /** The color of the link.
   * @default green
   */
  colorScheme?: "green" | "blue";

  /** If true, the link will open in a new tab */
  isExternal?: boolean;
};

/** Link to different sites or parts of site
 *
 * You can specify the `color` prop to get different link designs.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  const isExternal = props.isExternal !== undefined ? props.isExternal : Boolean(props.href?.match(/^https?:\/\//));
  return (
    <ChakraLink {...props} ref={ref}>
      {children}
      {isExternal && (
        <span
          className="material-symbols-rounded"
          style={{ fontSize: "18px", verticalAlign: "middle", marginLeft: "4px" }}
          role="link"
          aria-hidden
        >
          launch
        </span>
      )}
    </ChakraLink>
  );
});
