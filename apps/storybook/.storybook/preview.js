import { KvibProvider } from "@kvib/react/src/KvibProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <KvibProvider>
      <Story />
    </KvibProvider>
  ),
];
