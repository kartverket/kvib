import { useRecipe } from "@/hooks";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import { KvibSize } from "../../theme/tokens/sizes";

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
  const recipe = useRecipe({ key: "link" });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <ChakraLink css={styles} {...restProps} ref={ref}>
      {children}
      {restProps.external && <LuExternalLink />}
    </ChakraLink>
  );
});
