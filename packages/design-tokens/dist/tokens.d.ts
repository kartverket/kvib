declare const root: RootObject
export default root
interface RootObject {
  color: Color;
  size: Size;
}
interface Size {
  font: Font2;
}
interface Font2 {
  small: string;
  medium: string;
  large: string;
  base: string;
}
interface Color {
  base: Base;
  font: Font;
}
interface Font {
  base: string;
  secondary: string;
  tertiary: string;
}
interface Base {
  green: string;
  blue: string;
  pink: string;
  yellow: string;
  black: string;
  white: string;
}