import { Link as ChakraLink, LinkProps as ChakraLinkProps, forwardRef } from "@chakra-ui/react";

export type LinkProps = Omit<ChakraLinkProps, "colorScheme" | "variant"> & {
  /** The color of the link.
   * @default green
   */
  colorScheme?: "green" | "blue";
};

/** Link to different sites or parts of site
 *
 * You can specify the `color` prop to get different link designs.
 */
export const Link = forwardRef<LinkProps, "a">(({ children, colorScheme = "green", ...props }, ref) => {
  const isExternal = props.isExternal !== undefined ? props.isExternal : Boolean(props.href?.match(/^https?:\/\//));
  return (
    <ChakraLink {...props} ref={ref} colorScheme={colorScheme} isExternal={isExternal}>
      {children}
      {isExternal && (
        <span
          className="material-symbols-rounded"
          style={{ fontSize: "18px", verticalAlign: "middle", marginLeft: "4px" }}
          aria-label="launch-ikon"
          role="link"
        >
          launch
        </span>
      )}
    </ChakraLink>
  );
});
