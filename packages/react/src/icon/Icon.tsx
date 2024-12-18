import { Merge } from "@/components/utils";
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from "@chakra-ui/react";
import "material-symbols";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

export type IconProps = Merge<ChakraIconProps, Omit<React.HTMLAttributes<HTMLSpanElement>, "color">> & {
  /** The icon from Material symbols you want to display */
  icon: MaterialSymbol;

  /** The font size of the icon */
  size?: 20 | 24 | 40 | 48 | number;

  /** The color of the icon */
  color?: string;

  /** The weight of the icon */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /** The grade of the icon */
  grade?: -25 | 0 | 200;

  /** Decides whether the icon is filled or not */
  filled?: boolean;

  /** Decides whether a screen reader will vocalize the icon name or not */
  ariaIsHidden?: boolean;

  /** Custom class name for styling */
  className?: string;
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      icon,
      size = 24,
      color = "colorPalette.500",
      weight,
      grade,
      filled,
      ariaIsHidden = true,
      className = "",
      style,
      colorPalette = "green",
      ...props
    },
    ref,
  ) => (
    <ChakraIcon colorPalette={colorPalette} color={color}>
      <span
        ref={ref}
        className={`material-symbols-rounded ${className}`}
        aria-hidden={ariaIsHidden}
        style={
          {
            ...style,
            fontSize: size,
            fontWeight: weight,
            fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight ? weight : 300}, 'GRAD' ${grade ? grade : 0}`,
          } as React.CSSProperties
        }
        {...props}
      >
        {icon}
      </span>
    </ChakraIcon>
  ),
);
