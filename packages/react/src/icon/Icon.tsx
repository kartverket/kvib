import "material-symbols";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

// extend SpanProps
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
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
  filled?: boolean;

  /**Decides whether a screen reader will vocalize the icon name or not */
  ariaIsHidden?: boolean;

  className?: string;

  css?: React.CSSProperties;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon, size, color, weight, grade, filled = false, ariaIsHidden = false, className = "", css, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={`material-symbols-rounded ${className}`}
        aria-hidden={ariaIsHidden}
        style={{
          width: size,
          fontSize: size,
          color: color,
          fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight ? weight : 300}, 'GRAD' ${
            grade ? grade : 0
          }`,
          ...css,
        }}
        {...rest}
      >
        {icon}
      </span>
    );
  },
);
