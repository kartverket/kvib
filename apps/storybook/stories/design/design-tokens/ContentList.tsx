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
        <li>
          <Link
            href={`/?path=/docs/design-fundament-design-tokens--docs#${name.toLowerCase()}`}
            style={{ fontSize: "11px" }}
          >
            {name}
          </Link>
        </li>
      </div>
    );
  });
};

export const ContentList = () => {
  return (
    <Box>
      <h2>Kapitteloversikt</h2>
      <ul>
        <Links />
      </ul>
    </Box>
  );
};
