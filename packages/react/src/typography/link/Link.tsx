import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { useToken } from "../../hooks";
import { Box } from "../../layout";
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

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { external, children, colorPalette = "green", ...rest } = props;

  // for å legge ikon bak siste ord i lengre setninger, beklager for hacky løsning :(
  const colorToken = useToken("colors", `${colorPalette}.500`)[0];
  const colorFormattedForSvg = colorToken.replace(/#/g, "%23");
  const svgIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${colorFormattedForSvg}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 3h6v6'%3E%3C/path%3E%3Cpath d='M10 14L21 3'%3E%3C/path%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'%3E%3C/path%3E%3C/svg%3E`;

  return (
    <ChakraLink
      ref={ref}
      colorPalette={colorPalette}
      {...rest}
      style={{ display: "inline-flex", alignItems: "center", position: "relative" }}
    >
      <Box
        as="span"
        style={{
          display: "inline",
          position: "relative",
        }}
      >
        {children}
        {external && (
          <span
            style={{
              display: "inline-block",
              width: "1em",
              height: "1em",
              backgroundImage: `url("${svgIcon}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginLeft: "0.25em",
              verticalAlign: "middle",
              transform: "translateY(-0.1em)",
            }}
          />
        )}
      </Box>
    </ChakraLink>
  );
});
