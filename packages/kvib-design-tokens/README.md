# Kvib Design tokens

This is where you'll find the Kvibs design system's design tokens.

## What are design tokens?

Design tokens are any discrete value found in a design. Put in physical terms, they are the quarks of atomic design. Examples are colors, fonts, font sizes, spacing, breakpoints and so forth.

Uniting all of these values in a single structure, and applying those values across all tools applications, ensures a high level of consistency.

You can read more about design tokens and what problem they solve [here](https://www.invisionapp.com/inside-design/design-tokens/).

## What tokens are there?

We have a variety of tokens, and we suggest you explore the different types of tokens in the source folder. That being said, the main groups are:

### Colors

There are a lot of colors in our palette, and the colors are structured into a few useful groups. You can find the complete palette in colors/palette, and the more rememberable aliases for those colors on colors/

There are several more, like colors/main for our main color palette (most colors should come from here), and colors/text for colors used in typography.

### Depth

The depth category includes drop shadows and z-indexes (elevation), grouped by regular use cases.

### Fonts

The font category includes all font families and styles - including matching line heights, font weights and so forth.

### Sizes

You'll find our spacing scale in sizes, along with border radii, breakpoints, font sizes, line heights and strokes.

Spacing values are available as t-shirt sizes (md, 2xl etc), and pixel values (16px, 32px etc.) under size/spacing and size/spacing-px, respectively. Use the one you're most accustomed to (but try to standardize on one in a single app!)

### Timings

The timings category contains all transition timings and easing functions.

## Usage

Design tokens can be consumed through a variety of technologies.

### JavaScript / TypeScript

Install the package with `npm install @kartverket/kvib-design-tokens`.

```tsx
import tokens from "@kartverket/kvib-design-tokens";

const background = tokens.colors.base.green;
```

### CSS

Install the package with `npm install @kartverket/kvib-design-tokens`.

All values are available as CSS custom properties. If you're using Webpack, you can use the tokens like this:

```css
@import "~@kartverket/kvib-design-tokens/dist/tokens.css";

.hero {
  font-size: var(--size-font-small);
}
```

### SCSS

Install this package with `npm install @kartverket/kvib-design-tokens`.

All values are available as SCSS variables.

```scss
@import "~@kartverket/kvib-design-tokens/dist/tokens";

.hero {
  font-size: $size-font-small;

  @media screen and (min-width: $size-breakpoint-lg) {
    font-size: $size-font-medium;
  }
}
```
