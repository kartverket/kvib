import {
  Button,
  Checkbox,
  CloseButton,
  Datepicker,
  Editable,
  EditableInput,
  EditablePreview,
  FileUpload,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Textarea,
  Timepicker,
} from "@kvib/react/src";
import { ReactElement } from "react";

interface Komponentdetaljer {
  navn: string;
  beskrivelse: string;
  komponent: ReactElement;
  tag?: string;
  link: string;
}

interface Kategori {
  navn: string;
  beskrivelse?: string;
  komponenter: Record<string, Komponentdetaljer>;
}

export const Komponenter: Record<string, Kategori> = {
  Form: {
    navn: "Skjemaelementer",

    komponenter: {
      Button: {
        navn: "Button",
        beskrivelse: "Button",
        komponent: <Button>Button</Button>,
        link: "button",
      },
      IconButton: {
        navn: "IconButton",
        beskrivelse: "IconButton",
        komponent: <IconButton icon="search" aria-label="Forhåndsvisning av IconButton" />,
        link: "icon-button",
      },
      CloseButteon: {
        navn: "CloseButton",
        beskrivelse: "CloseButton",
        komponent: <CloseButton />,
        link: "close-button",
      },
      Input: {
        navn: "Input",
        beskrivelse: "Input",
        komponent: <Input placeholder="Skriv her..." />,
        link: "input",
      },
      FormControl: {
        navn: "FormControl",
        beskrivelse: "FormControl",
        komponent: (
          <FormControl>
            <FormHelperText>Validering av innputt</FormHelperText>
            <Input placeholder="Skriv her..." />
            <FormErrorMessage>Feilmelding</FormErrorMessage>
          </FormControl>
        ),
        link: "form-control",
      },
      Select: {
        navn: "Select",
        beskrivelse: "Select",
        komponent: (
          <Select placeholder="Velg alternativ" aria-label="select">
            <option value="option1">Alternativ 1</option>
            <option value="option2">Alternativ 2</option>
            <option value="option3">Alternativ 3</option>
          </Select>
        ),
        link: "select",
      },
      Textarea: {
        navn: "Textarea",
        beskrivelse: "Textarea",
        komponent: <Textarea placeholder="Dette er et større tekstfelt" />,
        link: "textarea",
      },
      NumberInput: {
        navn: "NumberInput",
        beskrivelse: "NumberInput",
        komponent: (
          <NumberInput defaultValue={3507}>
            <NumberInputField />
            <NumberInputStepper />
          </NumberInput>
        ),
        link: "number-input",
      },
      CheckBox: {
        navn: "Checkbox",
        beskrivelse: "Checkbox",
        komponent: <Checkbox>Denne kan hukes av</Checkbox>,
        link: "checkbox",
      },
      DatePicker: {
        navn: "DatePicker",
        beskrivelse: "DatePicker",
        komponent: <Datepicker />,
        link: "datepicker",
        tag: "beta",
      },
      TimePicker: {
        navn: "Timepicker",
        beskrivelse: "Timepicker",
        komponent: <Timepicker />,
        link: "timepicker",
        tag: "beta",
      },
      Editable: {
        navn: "Editable",
        beskrivelse: "Editable",
        komponent: (
          <Editable defaultValue="Klikk for å redigere">
            <EditableInput />
            <EditablePreview />
          </Editable>
        ),
        link: "editable",
      },
      Radio: {
        navn: "Radio",
        beskrivelse: "Radio",
        komponent: (
          <RadioGroup defaultValue={"1"}>
            <Stack direction={"row"}>
              <Radio value={"1"}>En</Radio>
              <Radio value={"2"}>To</Radio>
              <Radio value={"3"}>Tre</Radio>
            </Stack>
          </RadioGroup>
        ),
        link: "radio",
      },
      Slider: {
        navn: "Slider",
        beskrivelse: "Slider",
        komponent: (
          <Slider minW={"12rem"}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        ),
        link: "slider",
      },
      RangeSlider: {
        navn: "RangeSlider",
        beskrivelse: "RangeSlider",
        komponent: (
          <RangeSlider aria-label={["min", "max"]} colorScheme="green" defaultValue={[10, 40]} minW={"12rem"}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        ),
        link: "range-slider",
      },
      PinInput: {
        navn: "PinInput",
        beskrivelse: "PinInput",
        komponent: (
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        ),
        link: "pin-input",
      },
      FileUpload: {
        navn: "FileUpload",
        beskrivelse: "FileUpload",
        komponent: <FileUpload />,
        link: "file-upload",
      },
    },
  },
  /* Search: {
    navn: "Søk",
    komponenter: {
      Search: {
        navn: "Search",
        beskrivelse: "Search",
        komponent: "søk-search--search",
        link: "search",
      },
      SearchAsync: {
        navn: "SearchAsync",
        beskrivelse: "SearchAsync",
        komponent: "søk-searchasync--search-async",
        link: "searchAsync",
        tag: "beta",
      },
    },
  },
  DataDisplay: {
    navn: "Datavisning",
    komponenter: {
      Badge: {
        navn: "Badge",
        beskrivelse: "",
        komponent: "datavisning-badge--badge",

        link: "badge",
      },
      Table: {
        navn: "Table",
        beskrivelse: "",
        komponent: "datavisning-table--table",

        link: "table",
      },
      Code: {
        navn: "Code",
        beskrivelse: "",
        komponent: "datavisning-code--code",

        link: "code",
      },
      Tag: {
        navn: "Tag",
        beskrivelse: "",
        komponent: "datavisning-tag--tag",

        link: "tag",
      },
      Stat: {
        navn: "Stat",
        beskrivelse: "",
        komponent: "datavisning-stat--stat",

        link: "stat",
      },
      Card: {
        navn: "Card",
        beskrivelse: "",
        komponent: "datavisning-card--card",

        link: "card",
      },
      Kbd: {
        navn: "Kbd",
        beskrivelse: "",
        komponent: "datavisning-kbd--kbd",

        link: "kbd",
      },
      List: {
        navn: "List",
        beskrivelse: "",
        komponent: "datavisning-list--list",

        link: "list",
      },
      Accordion: {
        navn: "Accordion",
        beskrivelse: "",
        komponent: "datavisning-accordion--accordion",

        link: "accordion",
      },
    },
  },

  Layout: {
    navn: "Layout",
    komponenter: {
      Box: {
        navn: "Box",
        beskrivelse: "",
        komponent: "layout-box--simple-box",

        link: "box",
      },
      Container: {
        navn: "Container",
        beskrivelse: "",
        komponent: "layout-container--container",

        link: "container",
      },
      Flex: {
        navn: "Flex",
        beskrivelse: "",
        komponent: "layout-flex--flex",

        link: "flex",
      },
      Grid: {
        navn: "Grid",
        beskrivelse: "",
        komponent: "layout-grid--grid",

        link: "grid",
      },
      AspectRatio: {
        navn: "AspectRatio",
        beskrivelse: "",
        komponent: "layout-aspect-ratio--aspect-ratio",

        link: "aspect-ratio",
      },
      Stack: {
        navn: "Stack",
        beskrivelse: "",
        komponent: "layout-stack--stack",

        link: "stack",
      },
      SimpleGrid: {
        navn: "SimpleGrid",
        beskrivelse: "",
        komponent: "layout-simplegrid--simple-grid",

        link: "simplegrid",
      },
      Wrap: {
        navn: "Wrap",
        beskrivelse: "",
        komponent: "layout-wrap--wrap",

        link: "wrap",
      },
      Center: {
        navn: "Center",
        beskrivelse: "",
        komponent: "layout-center--center",

        link: "center",
      },
    },
  },
  Typography: {
    navn: "Typografi",
    komponenter: {
      Heading: {
        navn: "Heading",
        beskrivelse: "",
        komponent: "designfundament-heading--heading",

        link: "heading",
      },
      Text: {
        navn: "Text",
        beskrivelse: "",
        komponent: "designfundament-text--text",

        link: "text",
      },
      Highlight: {
        navn: "Highlight",
        beskrivelse: "",
        komponent: "datavisning-highlight--highlight",

        link: "highlight",
      },
    },
  },
  PageElements: {
    navn: "Sideelementer",
    komponenter: {
      Logo: {
        navn: "Logo",
        beskrivelse: "",
        komponent: "sideelementer-logo--logo",

        link: "logo",
      },
      Header: {
        navn: "Header",
        beskrivelse: "",
        komponent: "sideelementer-header--header",
        link: "header",
        tag: "beta",
      },
      Footer: {
        navn: "Footer",
        beskrivelse: "",
        komponent: "sideelementer-footer-footer--footer-none",
        link: "footer-footer",
        tag: "beta",
      },
      Divider: {
        navn: "Divider",
        beskrivelse: "",
        komponent: "sideelementer-divider--divider",

        link: "divider",
      },
    },
  },
  Media: {
    navn: "Media",
    komponenter: {
      Image: {
        navn: "Image",
        beskrivelse: "",
        komponent: "media-image--image",

        link: "image",
      },
      Icon: {
        navn: "Icon",
        beskrivelse: "",
        komponent: "media-ikoner--default-icon",
        link: "ikoner",
      },
      Avatar: {
        navn: "Avatar",
        beskrivelse: "",
        komponent: "media-avatar--avatar",
        link: "avatar",
      },
    },
  },

  Navigation: {
    navn: "Navigasjon",
    komponenter: {
      Breadcrumbs: {
        navn: "Breadcrumb",
        beskrivelse: "",
        komponent: "navigasjon-breadcrumb--breadcrumb",
        link: "breadcrumb",
      },
      Tabs: {
        navn: "Tabs",
        beskrivelse: "",
        komponent: "navigasjon-tabs--tabs",
        link: "tabs",
      },
      Menu: {
        navn: "Menu",
        beskrivelse: "",
        komponent: "navigasjon-menu--menu",
        link: "menu",
      },
      Link: {
        navn: "Link",
        beskrivelse: "",
        komponent: "navigasjon-link--link",
        link: "link",
      },
      LinkOverlay: {
        navn: "LinkOverlay",
        beskrivelse: "",
        komponent: "navigasjon-linkoverlay--link-overlay",
        link: "linkoverlay",
      },
      SkipNav: {
        navn: "SkipNav",
        beskrivelse: "",
        komponent: "navigasjon-skipnav--skip-nav-link",
        link: "skipnav",
      },
    },
  },
  Overlay: {
    navn: "Overlay",
    komponenter: {
      Tooltip: {
        navn: "Tooltip",
        beskrivelse: "",
        komponent: "overlay-tooltip--tooltip",
        link: "tooltip",
      },
      Modal: {
        navn: "Modal",
        beskrivelse: "",
        komponent: "overlay-modal--modal",
        link: "modal",
      },
      Popover: {
        navn: "Popover",
        beskrivelse: "",
        komponent: "overlay-popover--popover",
        link: "popover",
      },
      AlertDialog: {
        navn: "Alert Dialog",
        beskrivelse: "",
        komponent: "overlay-alert-dialog--alert-dialog",
        link: "alert-dialog",
      },
      Drawer: {
        navn: "Drawer",
        beskrivelse: "",
        komponent: "overlay-drawer--drawer",
        link: "drawer",
      },
    },
  },
  Others: {
    navn: "Annet",
    komponenter: {
      VisuallyHidden: {
        navn: "Visually Hidden",
        beskrivelse: "",
        komponent: "annet-visually-hidden--visually-hidden",
        link: "visually-hidden",
      },
      ShowHide: {
        navn: "Show/Hide",
        beskrivelse: "",
        komponent: "annet-show-hide--show-hide",
        link: "show-hide",
      },
      Portal: {
        navn: "Portal",
        beskrivelse: "",
        komponent: "annet-portal--portal",
        link: "portal",
      },
    }, */
};
