import { LogoHorizontal, LogoVertical, LogoSymbol } from "@kvib/react/assets";

export type LogoProps = {
  /** The variant of the logo
   * @default "vertical"*/
  variant?: "vertical" | "horizontal" | "symbol";
  /** The size of the logo. Width in pixels.
   * @default 184/125/42*/
  size?: number;
  /** Aria-label for the logo.
   * @default "Kartverket logo"*/
  label?: string;
};

export const Logo = ({ variant = "vertical", size, label = "Kartverket logo" }: LogoProps) => {
  const { width, height } = computeDimensions(variant, size);

  switch (variant) {
    case "horizontal":
      return <LogoHorizontal label={label} width={width} height={height} />;
    case "symbol":
      return <LogoSymbol label={label} width={width} height={height} />;
    case "vertical":
    default:
      return <LogoVertical label={label} width={width} height={height} />;
  }
};

const computeDimensions = (variant: "vertical" | "horizontal" | "symbol", size?: number) => {
  let defaultWidth: number;
  let aspectRatio: number;

  switch (variant) {
    case "horizontal":
      defaultWidth = 184;
      aspectRatio = 64 / 184;
      break;
    case "symbol":
      defaultWidth = 42;
      aspectRatio = 60 / 42;
      break;
    case "vertical":
    default:
      defaultWidth = 125;
      aspectRatio = 91 / 125;
      break;
  }

  const width = size ?? defaultWidth;
  const height = width * aspectRatio;

  return { width, height };
};
