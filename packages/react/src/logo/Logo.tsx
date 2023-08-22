import { LogoHorizontal } from "../assets/logo_horizontal";
import { LogoVertical } from "../assets/logo_vertical";

export type LogoProps = {
  /** The variant of the logo
   * @default "vertical"*/
  variant?: "vertical" | "horizontal";
  /** The size of the logo. Width in pixels.
   * @default 184/125*/
  size?: number;
};

export const Logo = ({ variant = "vertical", size }: LogoProps) => {
  const { width, height } = computeDimensions(variant, size);

  if (variant === "horizontal") {
    return <LogoHorizontal width={width} height={height} />;
  }
  return <LogoVertical width={width} height={height} />;
};

const computeDimensions = (variant: "vertical" | "horizontal", size?: number) => {
  const defaultWidth = variant === "horizontal" ? 184 : 125;
  const aspectRatio = variant === "horizontal" ? 64 / 184 : 91 / 125;

  const width = size ?? defaultWidth;
  const height = width * aspectRatio;

  return { width, height };
};
