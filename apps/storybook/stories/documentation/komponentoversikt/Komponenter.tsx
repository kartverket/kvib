import { ReactElement } from "react";
import {
  Accordion,
  Alert,
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Breadcrumb,
  Button,
  Card,
  Center,
  Checkbox,
  CloseButton,
  Code,
  Container,
  Datepicker,
  Dialog,
  Divider,
  Drawer,
  Editable,
  FileUpload,
  Flex,
  Footer,
  FormControl,
  Grid,
  Header,
  Heading,
  Highlight,
  Icon,
  IconButton,
  Image,
  Input,
  Kbd,
  Link,
  LinkOverlay,
  List,
  Logo,
  Menu,
  NumberInput,
  PinInput,
  Popover,
  Portal,
  Progress,
  ProgressCircle,
  Radio,
  Search,
  SearchAsync,
  Select,
  ShowHide,
  SimpleGrid,
  Skeleton,
  SkipNav,
  Slider,
  Spinner,
  Stack,
  Stat,
  Stepper,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  TextArea,
  Timepicker,
  Toast,
  Tooltip,
  VisuallyHidden,
} from "./StoryRendering";

interface Komponentdetaljer {
  navn: string;
  beskrivelse: string;
  story: ReactElement;
  tag?: string;
  link: string;
}

interface Kategori {
  navn: string;
  beskrivelse?: string;
  komponenter: Record<string, Komponentdetaljer>;
}

export type ColorPalette = "green" | "blue";

export const Komponenter: (colorScheme: ColorPalette) => Record<string, Kategori> = colorScheme => ({
  Skjemaelementer: {
    navn: "Skjemaelementer",
    komponenter: {
      Button: {
        navn: "Button",
        beskrivelse: "Button",
        story: Button(colorScheme),
        link: "button",
      },
      IconButton: {
        navn: "IconButton",
        beskrivelse: "IconButton",
        story: IconButton(colorScheme),
        link: "icon-button",
      },
      CloseButton: {
        navn: "CloseButton",
        beskrivelse: "CloseButton",
        story: CloseButton(colorScheme),
        link: "close-button",
      },
      Input: {
        navn: "Input",
        beskrivelse: "Input",
        story: Input(colorScheme),
        link: "input",
      },
      FormControl: {
        navn: "FormControl",
        beskrivelse: "FormControl",
        story: FormControl(colorScheme),
        link: "form-control",
      },
      Select: {
        navn: "Select",
        beskrivelse: "Select",
        story: Select(colorScheme),
        link: "select",
      },
      Textarea: {
        navn: "Textarea",
        beskrivelse: "Textarea",
        story: TextArea(colorScheme),
        link: "textarea",
      },
      NumberInput: {
        navn: "NumberInput",
        beskrivelse: "NumberInput",
        story: NumberInput(colorScheme),
        link: "number-input",
      },
      CheckBox: {
        navn: "Checkbox",
        beskrivelse: "Checkbox",
        story: Checkbox(colorScheme),
        link: "checkbox",
      },
      DatePicker: {
        navn: "Datepicker",
        beskrivelse: "Datepicker",
        story: Datepicker(colorScheme),
        link: "datepicker",
        tag: "beta",
      },
      TimePicker: {
        navn: "Timepicker",
        beskrivelse: "Timepicker",
        story: Timepicker(colorScheme),
        link: "timepicker",
        tag: "beta",
      },
      Editable: {
        navn: "Editable",
        beskrivelse: "Editable",
        story: Editable(colorScheme),
        link: "editable",
      },
      Radio: {
        navn: "Radio",
        beskrivelse: "Radio",
        story: Radio(colorScheme),
        link: "radio",
      },
      Switch: {
        navn: "Switch",
        beskrivelse: "Switch",
        story: Switch(colorScheme),
        link: "switch",
      },
      Slider: {
        navn: "Slider",
        beskrivelse: "Slider",
        story: Slider(colorScheme),
        link: "slider",
      },
      PinInput: {
        navn: "PinInput",
        beskrivelse: "PinInput",
        story: PinInput(colorScheme),
        link: "pin-input",
      },
      FileUpload: {
        navn: "FileUpload",
        beskrivelse: "FileUpload",
        story: FileUpload(colorScheme),
        link: "file-upload",
      },
    },
  },
  Søk: {
    navn: "Søk",
    komponenter: {
      Search: {
        navn: "Search",
        beskrivelse: "Search",
        story: Search(colorScheme),
        link: "search",
      },
      SearchAsync: {
        navn: "SearchAsync",
        beskrivelse: "SearchAsync",
        story: SearchAsync(colorScheme),
        link: "searchasync",
      },
    },
  },
  Datavisning: {
    navn: "Datavisning",
    komponenter: {
      Badge: {
        navn: "Badge",
        beskrivelse: "",
        story: Badge(colorScheme),
        link: "badge",
      },
      Table: {
        navn: "Table",
        beskrivelse: "",
        story: Table(colorScheme),
        link: "table",
      },
      Code: {
        navn: "Code",
        beskrivelse: "",
        story: Code(colorScheme),
        link: "code",
      },
      Tag: {
        navn: "Tag",
        beskrivelse: "",
        story: Tag(colorScheme),
        link: "tag",
      },
      Stat: {
        navn: "Stat",
        beskrivelse: "",
        story: Stat(colorScheme),
        link: "stat",
      },
      Card: {
        navn: "Card",
        beskrivelse: "",
        story: Card(colorScheme),
        link: "card",
      },
      Kbd: {
        navn: "Kbd",
        beskrivelse: "",
        story: Kbd(colorScheme),
        link: "kbd",
      },
      List: {
        navn: "List",
        beskrivelse: "",
        story: List(colorScheme),
        link: "list",
      },
      Accordion: {
        navn: "Accordion",
        beskrivelse: "",
        story: Accordion(colorScheme),
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
        story: Box(colorScheme),
        link: "box",
      },
      Container: {
        navn: "Container",
        beskrivelse: "",
        story: Container(colorScheme),
        link: "container",
      },
      Flex: {
        navn: "Flex",
        beskrivelse: "",
        story: Flex(colorScheme),
        link: "flex",
      },
      Grid: {
        navn: "Grid",
        beskrivelse: "",
        story: Grid(colorScheme),
        link: "grid",
      },
      Stack: {
        navn: "Stack",
        beskrivelse: "",
        story: Stack(colorScheme),
        link: "stack",
      },
      SimpleGrid: {
        navn: "SimpleGrid",
        beskrivelse: "",
        story: SimpleGrid(colorScheme),
        link: "simplegrid",
      },
      Center: {
        navn: "Center",
        beskrivelse: "",
        story: Center(colorScheme),
        link: "center",
      },
      AspectRatio: {
        navn: "AspectRatio",
        beskrivelse: "",
        story: AspectRatio(colorScheme),
        link: "aspect-ratio",
      },
    },
  },
  Designfundament: {
    navn: "Typografi",
    komponenter: {
      Heading: {
        navn: "Heading",
        beskrivelse: "",
        story: Heading(colorScheme),
        link: "heading",
      },
      Text: {
        navn: "Text",
        beskrivelse: "",
        story: Text(colorScheme),
        link: "text",
      },
      Highlight: {
        navn: "Highlight",
        beskrivelse: "",
        story: Highlight(colorScheme),
        link: "highlight",
      },
    },
  },
  Sideelementer: {
    navn: "Sideelementer",
    komponenter: {
      Logo: {
        navn: "Logo",
        beskrivelse: "",
        story: Logo(colorScheme),
        link: "logo",
      },
      Header: {
        navn: "Header",
        beskrivelse: "",
        story: Header(colorScheme),
        link: "header",
        tag: "beta",
      },
      Footer: {
        navn: "Footer",
        beskrivelse: "",
        story: Footer(colorScheme),
        link: "footer-footer",
        tag: "beta",
      },
      Divider: {
        navn: "Divider",
        beskrivelse: "",
        story: Divider(colorScheme),
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
        story: Image(colorScheme),
        link: "image",
      },
      Icon: {
        navn: "Icon",
        beskrivelse: "",
        story: Icon(colorScheme),
        link: "ikoner",
      },
      Avatar: {
        navn: "Avatar",
        beskrivelse: "",
        story: Avatar(colorScheme),
        link: "avatar",
      },
    },
  },
  Navigasjon: {
    navn: "Navigasjon",
    komponenter: {
      Breadcrumbs: {
        navn: "Breadcrumb",
        beskrivelse: "",
        story: Breadcrumb(colorScheme),
        link: "breadcrumb",
      },
      Tabs: {
        navn: "Tabs",
        beskrivelse: "",
        story: Tabs(colorScheme),
        link: "tabs",
      },
      Menu: {
        navn: "Menu",
        beskrivelse: "",
        story: Menu(colorScheme),
        link: "menu",
      },
      Link: {
        navn: "Link",
        beskrivelse: "",
        story: Link(colorScheme),
        link: "link",
      },
      LinkOverlay: {
        navn: "LinkOverlay",
        beskrivelse: "",
        story: LinkOverlay(colorScheme),
        link: "linkoverlay",
      },
      SkipNav: {
        navn: "SkipNav",
        beskrivelse: "",
        story: SkipNav(colorScheme),
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
        story: Tooltip(colorScheme),
        link: "tooltip",
      },
      Dialog: {
        navn: "Dialog",
        beskrivelse: "",
        story: Dialog(colorScheme),
        link: "dialog",
      },
      Popover: {
        navn: "Popover",
        beskrivelse: "",
        story: Popover(colorScheme),
        link: "popover",
      },
      Drawer: {
        navn: "Drawer",
        beskrivelse: "",
        story: Drawer(colorScheme),
        link: "drawer",
      },
    },
  },
  Tilbakemelding: {
    navn: "Tilbakemelding",
    komponenter: {
      Alert: {
        navn: "Alert",
        beskrivelse: "",
        story: Alert(colorScheme),
        link: "alert",
      },
      ProgressCircle: {
        navn: "Progress Circle",
        beskrivelse: "",
        story: ProgressCircle(colorScheme),
        link: "progress-circle",
      },
      Progress: {
        navn: "Progress",
        beskrivelse: "",
        story: Progress(colorScheme),
        link: "progress",
      },
      Skeleton: {
        navn: "Skeleton",
        beskrivelse: "",
        story: Skeleton(colorScheme),
        link: "skeleton",
      },
      Spinner: {
        navn: "Spinner",
        beskrivelse: "",
        story: Spinner(colorScheme),
        link: "spinner",
      },
      Stepper: {
        navn: "Stepper",
        beskrivelse: "",
        story: Stepper(colorScheme),
        link: "stepper",
      },
      Toast: {
        navn: "Toast",
        beskrivelse: "",
        story: Toast(colorScheme),
        link: "toast",
      },
    },
  },
  Annet: {
    navn: "Annet",
    komponenter: {
      VisuallyHidden: {
        navn: "Visually Hidden",
        beskrivelse: "",
        story: VisuallyHidden(colorScheme),
        link: "visually-hidden",
      },
      ShowHide: {
        navn: "Show/Hide",
        beskrivelse: "",
        story: ShowHide(colorScheme),
        link: "show-hide",
      },
      Portal: {
        navn: "Portal",
        beskrivelse: "",
        story: Portal(colorScheme),
        link: "portal",
      },
    },
  },
});
