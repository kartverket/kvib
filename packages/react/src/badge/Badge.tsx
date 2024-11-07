import { Badge as ChakraBadge, BadgeProps as ChakraBadgeProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type BadgeProps = Omit<ChakraBadgeProps, "colorScheme"> & {
  /** The color of the badge.
   * @default gray
   */
  colorScheme?: "green" | "blue" | "red" | "gray";
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ ...props }, ref) => {
  return <ChakraBadge {...props} ref={ref} />;
});
