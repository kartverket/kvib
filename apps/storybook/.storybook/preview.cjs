export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "documentation/Introduksjon",
        "documentation/Oppsett",
        "documentation/Bidra",
      ],
    },
  },
};
