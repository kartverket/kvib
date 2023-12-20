interface ComponentDetails {
  name: string;
  description: string;
  code: string;

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
        link: "button",
      },
      IconButton: {
        name: "IconButton",
        description: "IconButton",
        code: "knapper-icon-button--icon-button",
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

    components: {
      FormControl: {
        name: "FormControl",
        description: "FormControl",
        code: "skjemaelementer-form-control--form-control",
        link: "form-control",
      },
      Input: {
        name: "Input",
        description: "Input",
        code: "skjemaelementer-input--input",
        link: "input",
      },
      Select: {
        name: "Select",
        description: "Select",
        code: "skjemaelementer-select--select",
        link: "select",
      },
      Textarea: {
        name: "Textarea",
        description: "Textarea",
        code: "skjemaelementer-textarea--textarea",
        link: "textarea",
      },
      NumberInput: {
        name: "NumberInput",
        description: "NumberInput",
        code: "skjemaelementer-number-input--number-input",
        link: "number-input",
      },
      CheckBox: {
        name: "Checkbox",
        description: "Checkbox",
        code: "skjemaelementer-checkbox--checkbox",
        link: "checkbox",
      },
      DatePicker: {
        name: "DatePicker",
        description: "DatePicker",
        code: "skjemaelementer-datepicker--datepicker",
        link: "datepicker",
      },
      TimePicker: {
        name: "Timepicker",
        description: "Timepicker",
        code: "skjemaelementer-timepicker--timepicker",
        link: "timepicker",
      },
      Editable: {
        name: "Editable",
        description: "Editable",
        code: "skjemaelementer-editable--editable",

        link: "editable",
      },
      Radio: {
        name: "Radio",
        description: "Radio",
        code: "skjemaelementer-radio--radio",

        link: "radio",
      },
      RangeSlider: {
        name: "RangeSlider",
        description: "RangeSlider",
        code: "skjemaelementer-range-slider--range-slider",

        link: "range-slider",
      },
      Slider: {
        name: "Slider",
        description: "Slider",
        code: "skjemaelementer-slider--slider",

        link: "slider",
      },
      PinInput: {
        name: "PinInput",
        description: "PinInput",
        code: "skjemaelementer-pin-input--pin-input",

        link: "pin-input",
      },
      FileUpload: {
        name: "FileUpload",
        description: "FileUpload",
        code: "skjemaelementer-file-upload--file-upload",

        link: "file-upload",
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

        link: "badge",
      },
      Table: {
        name: "Table",
        description: "",
        code: "datavisning-table--table",

        link: "table",
      },
      Code: {
        name: "Code",
        description: "",
        code: "datavisning-code--code",

        link: "code",
      },
      Tag: {
        name: "Tag",
        description: "",
        code: "datavisning-tag--tag",

        link: "tag",
      },
      Stat: {
        name: "Stat",
        description: "",
        code: "datavisning-stat--stat",

        link: "stat",
      },
      Card: {
        name: "Card",
        description: "",
        code: "datavisning-card--card",

        link: "card",
      },
      Kbd: {
        name: "Kbd",
        description: "",
        code: "datavisning-kbd--kbd",

        link: "kbd",
      },
      List: {
        name: "List",
        description: "",
        code: "datavisning-list--list",

        link: "list",
      },
      Accordion: {
        name: "Accordion",
        description: "",
        code: "datavisning-accordion--accordion",

        link: "accordion",
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

        link: "box",
      },
      Container: {
        name: "Container",
        description: "",
        code: "layout-container--container",

        link: "container",
      },
      Flex: {
        name: "Flex",
        description: "",
        code: "layout-flex--flex",

        link: "flex",
      },
      Grid: {
        name: "Grid",
        description: "",
        code: "layout-grid--grid",

        link: "grid",
      },
      AspectRatio: {
        name: "AspectRatio",
        description: "",
        code: "layout-aspect-ratio--aspect-ratio",

        link: "aspect-ratio",
      },
      Stack: {
        name: "Stack",
        description: "",
        code: "layout-stack--stack",

        link: "stack",
      },
      SimpleGrid: {
        name: "SimpleGrid",
        description: "",
        code: "layout-simplegrid--simple-grid",

        link: "simple-grid",
      },
      Wrap: {
        name: "Wrap",
        description: "",
        code: "layout-wrap--wrap",

        link: "wrap",
      },
      Center: {
        name: "Center",
        description: "",
        code: "layout-center--center",

        link: "center",
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

        link: "heading",
      },
      Text: {
        name: "Text",
        description: "",
        code: "typografi-text--text",

        link: "text",
      },
      Highlight: {
        name: "Highlight",
        description: "",
        code: "typografi-highlight--highlight",

        link: "highlight",
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

        link: "logo",
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

        link: "image",
      },
      Icon: {
        name: "Icon",
        description: "",
        code: "media-ikoner--default-icon",

        link: "icon",
      },
      Avatar: {
        name: "Avatar",
        description: "",
        code: "media-avatar--avatar",

        link: "avatar",
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
        link: "tooltip",
      },
      Modal: {
        name: "Modal",
        description: "",
        code: "overlay-modal--modal",
        link: "modal",
      },
      Popover: {
        name: "Popover",
        description: "",
        code: "overlay-popover--popover",
        link: "popover",
      },
      AlertDialog: {
        name: "Alert Dialog",
        description: "",
        code: "overlay-alert-dialog--alert-dialog",
        link: "alert-dialog",
      },
      Drawer: {
        name: "Drawer",
        description: "",
        code: "overlay-drawer--drawer",
        link: "drawer",
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
        link: "visually-hidden",
      },
      ShowHide: {
        name: "Show/Hide",
        description: "",
        code: "annet-show-hide--show-hide",
        link: "show-hide",
      },
      Portal: {
        name: "Portal",
        description: "",
        code: "annet-portal--portal",
        link: "portal",
      },
    },
  },
};
