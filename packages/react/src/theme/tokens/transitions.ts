export const transitionProperty = {
  common: { value: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform" },
  colors: { value: "background-color, border-color, color, fill, stroke" },
  dimensions: { value: "width, height" },
  position: { value: "left, right, top, bottom" },
  background: { value: "background-color, background-image, background-position" },
};

export const transitionTimingFunction = {
  "ease-in": { value: "cubic-bezier(0.4, 0, 1, 1)" },
  "ease-out": { value: "cubic-bezier(0, 0, 0.2, 1)" },
  "ease-in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
};

export const transitionDuration = {
  "ultra-fast": { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  normal: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  "ultra-slow": { value: "500ms" },
};
