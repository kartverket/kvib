import { forwardRef } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import "material-symbols";

type IconProps = {
  /**The icon from Material symbols you want to display*/
  icon: MaterialSymbol;

  /**The font size of the icon */
  size?: 20 | 24 | 40 | 48 | number;

  /**The color of the icon*/
  color?: string;

  /**The weight of the icon*/
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /**The of grade the icon*/
  grade?: -25 | 0 | 200;

  /**Decides whether the icon is filled or not*/
  isFilled?: boolean;

  className?: string;
};

export const Icon = forwardRef<IconProps, "span">(
  ({ icon, size, color, weight, grade, isFilled = false, className = "" }, ref) => {
    return (
      <span
        ref={ref}
        className={`material-symbols-rounded ${className}`}
        style={{
          width: size,
          fontSize: size,
          color: color,
          fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight ? weight : 300}, 'GRAD' ${
            grade ? grade : 0
          }`,
        }}
      >
        {icon}
      </span>
    );
  },
);
