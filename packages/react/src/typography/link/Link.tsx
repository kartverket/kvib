import { linkRecipe } from "@/theme/recipes/link.recipe";
import { KvibSize } from "@/theme/tokens/sizes";
import { Link as ChakraLink, LinkProps as ChakraLinkProps, RecipeVariantProps } from "@chakra-ui/react";
import { forwardRef } from "react";

type LinkVariantProps = RecipeVariantProps<typeof linkRecipe>;

export interface LinkProps extends ChakraLinkProps, LinkVariantProps {
  /** If `true`, the link will open in a new tab. */
  external?: boolean;

  /** The size of the link */
  size?: KvibSize;
}

/** Link to different sites or parts of site
 *
 * You can specify the `color` prop to get different link designs.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  return (
    <ChakraLink {...props} ref={ref}>
      {children}
      {props.external && (
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
