import { Box, Link } from "@kvib/react/src";

const h2 = [
  "Typografi",
  "Breakpoints",
  "Spacings",
  "Sizes",
  "Radius",
  "Z-index",
  "Transitions",
  "Borders",
  "Shadows",
  "Blurs",
];

const Links = () => {
  return h2.map((name) => {
    return (
      <div>
        <div>
          <Link href={`/?path=/docs/design-fundament-design-tokens--docs#${name.toLowerCase()}`}>{name}</Link>
        </div>
        <br />
      </div>
    );
  });
};

export const ContentList = () => {
  return (
    <Box position="fixed" right="8%">
      <Links />
    </Box>
  );
};
