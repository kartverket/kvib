import { LogoHorizontal } from "@kvib/react/assets";
import { LogoVertical } from "@kvib/react/assets";

export type LogoProps = {
  /** The variant of the logo
   * @default "vertical"*/
  variant?: "vertical" | "horizontal";
  /** The size of the logo. Width in pixels.
   * @default 184/125*/
  size?: number;
  /** Aria-label for the logo.
   * @default "logo"*/
  label?: string;
};

export const Logo = ({ variant = "vertical", size, label }: LogoProps) => {
  const { width, height } = computeDimensions(variant, size);

  if (variant === "horizontal") {
    return <LogoHorizontal label={label} width={width} height={height} />;
  }
  return <LogoVertical label={label} width={width} height={height} />;
};

const computeDimensions = (variant: "vertical" | "horizontal", size?: number) => {
  const defaultWidth = variant === "horizontal" ? 184 : 125;
  const aspectRatio = variant === "horizontal" ? 64 / 184 : 91 / 125;

  const width = size ?? defaultWidth;
  const height = width * aspectRatio;

  return { width, height };
};
