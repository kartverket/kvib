import { KvibProvider } from "@kvib/react/src/provider/KvibProvider";
import theme from "./theme";
import MDXContainer from "./MDXContainer";
import "./docs-root.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: theme,
    container: MDXContainer,
    toc: {
      contentsSelector: ".sbdocs-content",
      headingSelector: "h2, h3",
      collapseDepth: 0,
      title: "Innhold",
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Info",
        ["Introduksjon", "Oppsett", "Bidra", ["Hurtigveiledning", "Bygge", "Style", "Dokumentere", "Teste", "Publish"]],
        "Design Fundament",
        "Hooks",
        "Komponenter",
        ["Data Display", "Layout", "Typografi"],
      ],
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

const STORYBOOK_DISABLE_CONTROL = { table: { disable: true } };
export const argTypes = {
  as: STORYBOOK_DISABLE_CONTROL,
  htmlTranslate: STORYBOOK_DISABLE_CONTROL,
  _hover: STORYBOOK_DISABLE_CONTROL,
  _active: STORYBOOK_DISABLE_CONTROL,
  _focus: STORYBOOK_DISABLE_CONTROL,
  _highlighted: STORYBOOK_DISABLE_CONTROL,
  _focusWithin: STORYBOOK_DISABLE_CONTROL,
  _focusVisible: STORYBOOK_DISABLE_CONTROL,
  _disabled: STORYBOOK_DISABLE_CONTROL,
  _readOnly: STORYBOOK_DISABLE_CONTROL,
  _before: STORYBOOK_DISABLE_CONTROL,
  _after: STORYBOOK_DISABLE_CONTROL,
  _empty: STORYBOOK_DISABLE_CONTROL,
  _expanded: STORYBOOK_DISABLE_CONTROL,
  _checked: STORYBOOK_DISABLE_CONTROL,
  _grabbed: STORYBOOK_DISABLE_CONTROL,
  _pressed: STORYBOOK_DISABLE_CONTROL,
  _invalid: STORYBOOK_DISABLE_CONTROL,
  _valid: STORYBOOK_DISABLE_CONTROL,
  _loading: STORYBOOK_DISABLE_CONTROL,
  _selected: STORYBOOK_DISABLE_CONTROL,
  _hidden: STORYBOOK_DISABLE_CONTROL,
  _autofill: STORYBOOK_DISABLE_CONTROL,
  _even: STORYBOOK_DISABLE_CONTROL,
  _odd: STORYBOOK_DISABLE_CONTROL,
  _first: STORYBOOK_DISABLE_CONTROL,
  _firstLetter: STORYBOOK_DISABLE_CONTROL,
  _last: STORYBOOK_DISABLE_CONTROL,
  _notFirst: STORYBOOK_DISABLE_CONTROL,
  _notLast: STORYBOOK_DISABLE_CONTROL,
  _visited: STORYBOOK_DISABLE_CONTROL,
  _activeLink: STORYBOOK_DISABLE_CONTROL,
  _activeStep: STORYBOOK_DISABLE_CONTROL,
  _indeterminate: STORYBOOK_DISABLE_CONTROL,
  _groupHover: STORYBOOK_DISABLE_CONTROL,
  _peerHover: STORYBOOK_DISABLE_CONTROL,
  _groupFocus: STORYBOOK_DISABLE_CONTROL,
  _peerFocus: STORYBOOK_DISABLE_CONTROL,
  _groupFocusVisible: STORYBOOK_DISABLE_CONTROL,
  _peerFocusVisible: STORYBOOK_DISABLE_CONTROL,
  _groupActive: STORYBOOK_DISABLE_CONTROL,
  _peerActive: STORYBOOK_DISABLE_CONTROL,
  _groupDisabled: STORYBOOK_DISABLE_CONTROL,
  _peerDisabled: STORYBOOK_DISABLE_CONTROL,
  _groupInvalid: STORYBOOK_DISABLE_CONTROL,
  _peerInvalid: STORYBOOK_DISABLE_CONTROL,
  _groupChecked: STORYBOOK_DISABLE_CONTROL,
  _peerChecked: STORYBOOK_DISABLE_CONTROL,
  _groupFocusWithin: STORYBOOK_DISABLE_CONTROL,
  _peerFocusWithin: STORYBOOK_DISABLE_CONTROL,
  _peerPlaceholderShown: STORYBOOK_DISABLE_CONTROL,
  _placeholder: STORYBOOK_DISABLE_CONTROL,
  _placeholderShown: STORYBOOK_DISABLE_CONTROL,
  _fullScreen: STORYBOOK_DISABLE_CONTROL,
  _selection: STORYBOOK_DISABLE_CONTROL,
  _rtl: STORYBOOK_DISABLE_CONTROL,
  _ltr: STORYBOOK_DISABLE_CONTROL,
  _mediaDark: STORYBOOK_DISABLE_CONTROL,
  _mediaReduceMotion: STORYBOOK_DISABLE_CONTROL,
  _dark: STORYBOOK_DISABLE_CONTROL,
  _light: STORYBOOK_DISABLE_CONTROL,
  _vertical: STORYBOOK_DISABLE_CONTROL,
  _horizontal: STORYBOOK_DISABLE_CONTROL,
};
