import type { Preview } from "@storybook/react";
import "./docs-root.css";
import { MDXContainer } from "./MDXContainer";
import theme from "./theme";

const parameters = {
  backgrounds: {
    default: "light",
    values: [{ name: "light", value: "#ffffff" }],
  },
  layout: "centered",
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
    storySort: (a, b) => {
      // Sorter hovedseksjoner og mapper i denne rekkefølgen
      const order = ["Introduksjon", "Endringslogg", "Komponentoversikt", "Kom i gang", "Bidra", "Komponenter"];

      const aIndex = order.indexOf(a.title.split("/")[0]);
      const bIndex = order.indexOf(b.title.split("/")[0]);

      if (aIndex < bIndex) return -1;
      if (aIndex > bIndex) return 1;

      // Sorter innhold i 'bidra som utvikler'
      const bidraSomUtviklerOrder = [
        "Hurtigveiledning",
        "Bygge",
        "Style",
        "Dokumentere",
        "Teste",
        "Publish",
        "Kjente problemer",
      ];

      const aBidraIndex = bidraSomUtviklerOrder.indexOf(a.title.split("/").pop());
      const bBidraIndex = bidraSomUtviklerOrder.indexOf(b.title.split("/").pop());

      if (aBidraIndex < bBidraIndex) return -1;
      if (aBidraIndex > bBidraIndex) return 1;

      // Prioriter mapper over filer
      const aLength = a.title.split("/").length;
      const bLength = b.title.split("/").length;

      if (aLength < bLength) return 1;
      if (aLength > bLength) return -1;

      // Dersom man er helt inni en mappe skal docs med Docs i tittelen vises først
      if (a.title.includes("Docs") && !b.title.includes("Docs")) return -1;

      // Sorter alfabetisk ellers
      return a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
    },
  },
};
/*
const decorators = [
  Story => (
    <KvibProvider>
      <Story />
    </KvibProvider>
  ),
];
 */
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

const preview: Preview = {
  parameters: parameters,
  tags: ["autodocs"],
};

export default preview;
