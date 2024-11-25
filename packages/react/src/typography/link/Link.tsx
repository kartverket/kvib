import { useRecipe } from "@/hooks";
import { KvibSize } from "@/theme/tokens/sizes";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export interface LinkProps extends ChakraLinkProps {
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
  const inputRecipe = useRecipe({ key: "link" });
  const [recipeProps, restProps] = inputRecipe.splitVariantProps(props);
  console.log("recipeProps", recipeProps);
  return (
    <ChakraLink css={inputRecipe(recipeProps)} {...restProps} {...props} ref={ref}>
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
