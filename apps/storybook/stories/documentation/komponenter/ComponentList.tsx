interface ComponentProps {
  children?: string;
  icon?: string;
  placeholder?: string;
}

interface ComponentDetails {
  name: string;
  description: string;
  code: string;
  props?: ComponentProps;
  tag?: string;
  link: string;
}

interface Category {
  name: string;
  description?: string;
  components: Record<string, ComponentDetails>;
}

export const ComponentList: Record<string, Category> = {
  Buttons: {
    name: "Knapper",
    components: {
      Button: {
        name: "Button",
        description: "Button",
        code: "knapper-button--button",
        props: {
          children: "Button",
        },
        link: "button",
      },
      IconButton: {
        name: "IconButton",
        description: "IconButton",
        code: "knapper-icon-button--icon-button",
        props: {
          icon: "arrowRight",
          children: "IconButton",
        },
        link: "icon-button",
      },
      CloseButteon: {
        name: "CloseButton",
        description: "CloseButton",
        code: "knapper-close-button--close-button",

        link: "close-button",
      },
    },
  },
  Form: {
    name: "Skjemaelementer",
    description:
      "Skjemaelementer er komponenter som brukes i skjemaer. De kan brukes alene eller i kombinasjon med andre komponenter.",
    components: {
      FormControl: {
        name: "FormControl",
        description: "FormControl",
        code: "skjemaelementer-form-control--form-control",

        link: "",
      },
      Input: {
        name: "Input",
        description: "Input",
        code: "skjemaelementer-input--input",
        props: {
          placeholder: "Input",
        },
        link: "input-input",
      },
      Select: {
        name: "Select",
        description: "Select",
        code: "skjemaelementer-select--select",
        props: {
          placeholder: "Select",
        },
        link: "",
      },
      Textarea: {
        name: "Textarea",
        description: "Textarea",
        code: "skjemaelementer-textarea--textarea",
        props: {
          placeholder: "Textarea",
        },
        link: "",
      },
      NumberInput: {
        name: "NumberInput",
        description: "NumberInput",
        code: "skjemaelementer-number-input--number-input",
        props: {
          placeholder: "NumberInput",
        },
        link: "",
      },
      CheckBox: {
        name: "CheckBox",
        description: "CheckBox",
        code: "skjemaelementer-checkbox--checkbox",

        link: "",
      },
      DatePicker: {
        name: "DatePicker",
        description: "DatePicker",
        code: "skjemaelementer-datepicker--datepicker",

        link: "",
      },
      TimePicker: {
        name: "TimePicker",
        description: "TimePicker",
        code: "skjemaelementer-timepicker--timepicker",

        link: "",
      },
      Editable: {
        name: "Editable",
        description: "Editable",
        code: "skjemaelementer-editable--editable",

        link: "",
      },
      Radio: {
        name: "Radio",
        description: "Radio",
        code: "skjemaelementer-radio--radio",

        link: "",
      },
      RangeSlider: {
        name: "RangeSlider",
        description: "RangeSlider",
        code: "skjemaelementer-range-slider--range-slider",

        link: "",
      },
      Slider: {
        name: "Slider",
        description: "Slider",
        code: "skjemaelementer-slider--slider",

        link: "",
      },
      PinInput: {
        name: "PinInput",
        description: "PinInput",
        code: "skjemaelementer-pin-input--pin-input",

        link: "",
      },
      FileUpload: {
        name: "FileUpload",
        description: "FileUpload",
        code: "skjemaelementer-file-upload--file-upload",

        link: "",
      },
    },
  },
  Search: {
    name: "Søk",
    components: {
      Search: {
        name: "Search",
        description: "Search",
        code: "søk-search--search",
        link: "search",
      },
      SearchAsync: {
        name: "SearchAsync",
        description: "SearchAsync",
        code: "søk-searchasync--search-async",
        link: "searchAsync",
        tag: "beta",
      },
    },
  },
  DataDisplay: {
    name: "Datavisning",
    components: {
      Badge: {
        name: "Badge",
        description: "",
        code: "datavisning-badge--badge",

        link: "",
      },
      Table: {
        name: "Table",
        description: "",
        code: "datavisning-table--table",

        link: "",
      },
      Code: {
        name: "Code",
        description: "",
        code: "datavisning-code--code",

        link: "",
      },
      Tag: {
        name: "Tag",
        description: "",
        code: "datavisning-tag--tag",

        link: "",
      },
      Stat: {
        name: "Stat",
        description: "",
        code: "datavisning-stat--stat",

        link: "",
      },
      Card: {
        name: "Card",
        description: "",
        code: "datavisning-card--card",

        link: "",
      },
      Kbd: {
        name: "Kbd",
        description: "",
        code: "datavisning-kbd--kbd",

        link: "",
      },
      List: {
        name: "List",
        description: "",
        code: "datavisning-list--list",

        link: "",
      },
      Accordion: {
        name: "Accordion",
        description: "",
        code: "datavisning-accordion--accordion",

        link: "",
      },
    },
  },

  Layout: {
    name: "Layout",
    components: {
      Box: {
        name: "Box",
        description: "",
        code: "layout-box--simple-box",

        link: "",
      },
      Container: {
        name: "Container",
        description: "",
        code: "layout-container--container",

        link: "",
      },
      Flex: {
        name: "FlexBox",
        description: "",
        code: "layout-flex--flex",

        link: "",
      },
      Grid: {
        name: "Grid",
        description: "",
        code: "layout-grid--grid",

        link: "",
      },
      AspectRatio: {
        name: "AspectRatio",
        description: "",
        code: "layout-aspect-ratio--aspect-ratio",

        link: "",
      },
      Stack: {
        name: "Stack",
        description: "",
        code: "layout-stack--stack",

        link: "",
      },
      SimpleGrid: {
        name: "SimpleGrid",
        description: "",
        code: "layout-simplegrid--simple-grid",

        link: "",
      },
      Wrap: {
        name: "Wrap",
        description: "",
        code: "layout-wrap--wrap",

        link: "",
      },
      Center: {
        name: "Center",
        description: "",
        code: "layout-center--center",

        link: "",
      },
    },
  },
  Typography: {
    name: "Typografi",
    components: {
      Heading: {
        name: "Heading",
        description: "",
        code: "typografi-heading--heading",

        link: "",
      },
      Text: {
        name: "Text",
        description: "",
        code: "typografi-text--text",

        link: "",
      },
      Highlight: {
        name: "Highlight",
        description: "",
        code: "typografi-highlight--highlight",

        link: "",
      },
    },
  },
  PageElements: {
    name: "Sideelementer",
    components: {
      Logo: {
        name: "Logo",
        description: "",
        code: "sideelementer-logo--logo",

        link: "",
      },
      Header: {
        name: "Header",
        description: "",
        code: "sideelementer-header--header",

        link: "header",
      },
      Footer: {
        name: "Footer",
        description: "",
        code: "sideelementer-footer-footer--footer-none",

        link: "footer",
      },
      Divider: {
        name: "Divider",
        description: "",
        code: "sideelementer-divider--divider",

        link: "divider",
      },
    },
  },
  Media: {
    name: "Media",
    components: {
      Image: {
        name: "Image",
        description: "",
        code: "media-image--image",

        link: "",
      },
      Icon: {
        name: "Icon",
        description: "",
        code: "media-ikoner--default-icon",

        link: "",
      },
      Avatar: {
        name: "Avatar",
        description: "",
        code: "media-avatar--avatar",

        link: "",
      },
    },
  },

  Navigation: {
    name: "Navigasjon",
    components: {
      Breadcrumbs: {
        name: "Breadcrumb",
        description: "",
        code: "navigasjon-breadcrumb--breadcrumb",
        link: "breadcrumb",
      },
      Tabs: {
        name: "Tabs",
        description: "",
        code: "navigasjon-tabs--tabs",
        link: "tabs",
      },
      Menu: {
        name: "Menu",
        description: "",
        code: "navigasjon-menu--menu",
        link: "menu",
      },
      Link: {
        name: "Link",
        description: "",
        code: "navigasjon-link--link",
        link: "link",
      },
      LinkOverlay: {
        name: "LinkOverlay",
        description: "",
        code: "navigasjon-linkoverlay--link-overlay",
        link: "link-overlay",
      },
      SkipNav: {
        name: "SkipNav",
        description: "",
        code: "navigasjon-skipnav--skip-nav-link",
        link: "skip-nav",
      },
    },
  },
  Overlay: {
    name: "Overlay",
    components: {
      Tooltip: {
        name: "Tooltip",
        description: "",
        code: "overlay-tooltip--tooltip",
        link: "",
      },
      Modal: {
        name: "Modal",
        description: "",
        code: "overlay-modal--modal",
        link: "",
      },
      Popover: {
        name: "Popover",
        description: "",
        code: "overlay-popover--popover",
        link: "",
      },
      AlertDialog: {
        name: "Alert Dialog",
        description: "",
        code: "overlay-alert-dialog--alert-dialog",
        link: "",
      },
      Drawer: {
        name: "Drawer",
        description: "",
        code: "overlay-drawer--drawer",
        link: "",
      },
    },
  },
  Others: {
    name: "Annet",
    components: {
      VisuallyHidden: {
        name: "Visually Hidden",
        description: "",
        code: "annet-visually-hidden--visually-hidden",
        link: "",
      },
      ShowHide: {
        name: "Show/Hide",
        description: "",
        code: "annet-show-hide--show-hide",
        link: "",
      },
      Portal: {
        name: "Portal",
        description: "",
        code: "annet-portal--portal",
        link: "",
      },
    },
  },
};
