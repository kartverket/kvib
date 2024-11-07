import { forwardRef } from "react";
import { LinkButton, LinkButtonProps } from "../components/ui/link-button";

export type LinkProps = Omit<LinkButtonProps, "colorScheme" | "variant"> & {
  /** The color of the link.
   * @default green
   */
  colorScheme?: "green" | "blue";
};

/** Link to different sites or parts of site
 *
 * You can specify the `color` prop to get different link designs.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  const isExternal = props.external !== undefined ? props.external : Boolean(props.href?.match(/^https?:\/\//));
  return (
    <LinkButton {...props} ref={ref} external={isExternal}>
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
    </LinkButton>
  );
});
