import { Badge as ChakraBadge, BadgeProps as ChakraBadgeProps, forwardRef } from "@chakra-ui/react";

export type BadgeProps = Omit<ChakraBadgeProps, "colorScheme"> & {
  /** The color of the badge.
   * @default gray
   */
  colorScheme?: "green" | "blue" | "red" | "gray";
};

export const Badge = forwardRef<BadgeProps, "span">(({ ...props }, ref) => {
  return <ChakraBadge {...props} ref={ref} />;
});
