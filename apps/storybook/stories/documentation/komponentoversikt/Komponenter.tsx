import { ReactElement } from "react";
import {
  Accordion,
  ActionBar,
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
  CheckboxCard,
  Clipboard,
  CloseButton,
  Code,
  Collapsible,
  ColorPicker,
  ColorSwatch,
  Container,
  DataList,
  Datepicker,
  Dialog,
  Divider,
  Drawer,
  Editable,
  EmptyState,
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

export const Komponenter: (colorPalette: ColorPalette) => Record<string, Kategori> = colorPalette => ({
  Komponenter: {
    navn: "Komponenter",
    komponenter: {
      ActionBar: {
        navn: "Action Bar",
        beskrivelse: "",
        story: ActionBar(colorPalette),
        link: "action-bar",
      },
      CheckboxCard: {
        navn: "Checkbox Card",
        beskrivelse: "",
        story: CheckboxCard(colorPalette),
        link: "checkbox-card",
      },
      Clipboard: {
        navn: "Clipboard",
        beskrivelse: "",
        story: Clipboard(colorPalette),
        link: "clipboard",
      },
      Collapsible: {
        navn: "Collapsible",
        beskrivelse: "",
        story: Collapsible(colorPalette),
        link: "collapsible",
      },
      ColorPicker: {
        navn: "Color Picker",
        beskrivelse: "",
        story: ColorPicker(colorPalette),
        link: "color-picker",
      },
      ColorSwatch: {
        navn: "Color Swatch",
        beskrivelse: "",
        story: ColorSwatch(colorPalette),
        link: "color-swatch",
      },
      DataList: {
        navn: "Data List",
        beskrivelse: "",
        story: DataList(colorPalette),
        link: "data-list",
      },
      EmptyState: {
        navn: "Empty State",
        beskrivelse: "",
        story: EmptyState(colorPalette),
        link: "empty-state",
      },
    },
  },
  Skjemaelementer: {
    navn: "Skjemaelementer",
    komponenter: {
      Button: {
        navn: "Button",
        beskrivelse: "Button",
        story: Button(colorPalette),
        link: "button",
      },
      IconButton: {
        navn: "IconButton",
        beskrivelse: "IconButton",
        story: IconButton(colorPalette),
        link: "icon-button",
      },
      CloseButton: {
        navn: "CloseButton",
        beskrivelse: "CloseButton",
        story: CloseButton(colorPalette),
        link: "close-button",
      },
      Input: {
        navn: "Input",
        beskrivelse: "Input",
        story: Input(colorPalette),
        link: "input",
      },
      FormControl: {
        navn: "FormControl",
        beskrivelse: "FormControl",
        story: FormControl(colorPalette),
        link: "form-control",
      },
      Select: {
        navn: "Select",
        beskrivelse: "Select",
        story: Select(colorPalette),
        link: "select",
      },
      Textarea: {
        navn: "Textarea",
        beskrivelse: "Textarea",
        story: TextArea(colorPalette),
        link: "textarea",
      },
      NumberInput: {
        navn: "NumberInput",
        beskrivelse: "NumberInput",
        story: NumberInput(colorPalette),
        link: "number-input",
      },
      CheckBox: {
        navn: "Checkbox",
        beskrivelse: "Checkbox",
        story: Checkbox(colorPalette),
        link: "checkbox",
      },
      DatePicker: {
        navn: "Datepicker",
        beskrivelse: "Datepicker",
        story: Datepicker(colorPalette),
        link: "datepicker",
        tag: "beta",
      },
      TimePicker: {
        navn: "Timepicker",
        beskrivelse: "Timepicker",
        story: Timepicker(colorPalette),
        link: "timepicker",
        tag: "beta",
      },
      Editable: {
        navn: "Editable",
        beskrivelse: "Editable",
        story: Editable(colorPalette),
        link: "editable",
      },
      Radio: {
        navn: "Radio",
        beskrivelse: "Radio",
        story: Radio(colorPalette),
        link: "radio",
      },
      Switch: {
        navn: "Switch",
        beskrivelse: "Switch",
        story: Switch(colorPalette),
        link: "switch",
      },
      Slider: {
        navn: "Slider",
        beskrivelse: "Slider",
        story: Slider(colorPalette),
        link: "slider",
      },
      PinInput: {
        navn: "PinInput",
        beskrivelse: "PinInput",
        story: PinInput(colorPalette),
        link: "pin-input",
      },
      FileUpload: {
        navn: "FileUpload",
        beskrivelse: "FileUpload",
        story: FileUpload(colorPalette),
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
        story: Search(colorPalette),
        link: "search",
      },
      SearchAsync: {
        navn: "SearchAsync",
        beskrivelse: "SearchAsync",
        story: SearchAsync(colorPalette),
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
        story: Badge(colorPalette),
        link: "badge",
      },
      Table: {
        navn: "Table",
        beskrivelse: "",
        story: Table(colorPalette),
        link: "table",
      },
      Code: {
        navn: "Code",
        beskrivelse: "",
        story: Code(colorPalette),
        link: "code",
      },
      Tag: {
        navn: "Tag",
        beskrivelse: "",
        story: Tag(colorPalette),
        link: "tag",
      },
      Stat: {
        navn: "Stat",
        beskrivelse: "",
        story: Stat(colorPalette),
        link: "stat",
      },
      Card: {
        navn: "Card",
        beskrivelse: "",
        story: Card(colorPalette),
        link: "card",
      },
      Kbd: {
        navn: "Kbd",
        beskrivelse: "",
        story: Kbd(colorPalette),
        link: "kbd",
      },
      List: {
        navn: "List",
        beskrivelse: "",
        story: List(colorPalette),
        link: "list",
      },
      Accordion: {
        navn: "Accordion",
        beskrivelse: "",
        story: Accordion(colorPalette),
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
        story: Box(colorPalette),
        link: "box",
      },
      Container: {
        navn: "Container",
        beskrivelse: "",
        story: Container(colorPalette),
        link: "container",
      },
      Flex: {
        navn: "Flex",
        beskrivelse: "",
        story: Flex(colorPalette),
        link: "flex",
      },
      Grid: {
        navn: "Grid",
        beskrivelse: "",
        story: Grid(colorPalette),
        link: "grid",
      },
      Stack: {
        navn: "Stack",
        beskrivelse: "",
        story: Stack(colorPalette),
        link: "stack",
      },
      SimpleGrid: {
        navn: "SimpleGrid",
        beskrivelse: "",
        story: SimpleGrid(colorPalette),
        link: "simplegrid",
      },
      Center: {
        navn: "Center",
        beskrivelse: "",
        story: Center(colorPalette),
        link: "center",
      },
      AspectRatio: {
        navn: "AspectRatio",
        beskrivelse: "",
        story: AspectRatio(colorPalette),
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
        story: Heading(colorPalette),
        link: "heading",
      },
      Text: {
        navn: "Text",
        beskrivelse: "",
        story: Text(colorPalette),
        link: "text",
      },
      Highlight: {
        navn: "Highlight",
        beskrivelse: "",
        story: Highlight(colorPalette),
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
        story: Logo(colorPalette),
        link: "logo",
      },
      Header: {
        navn: "Header",
        beskrivelse: "",
        story: Header(colorPalette),
        link: "header",
        tag: "beta",
      },
      Footer: {
        navn: "Footer",
        beskrivelse: "",
        story: Footer(colorPalette),
        link: "footer-footer",
        tag: "beta",
      },
      Divider: {
        navn: "Divider",
        beskrivelse: "",
        story: Divider(colorPalette),
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
        story: Image(colorPalette),
        link: "image",
      },
      Icon: {
        navn: "Icon",
        beskrivelse: "",
        story: Icon(colorPalette),
        link: "ikoner",
      },
      Avatar: {
        navn: "Avatar",
        beskrivelse: "",
        story: Avatar(colorPalette),
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
        story: Breadcrumb(colorPalette),
        link: "breadcrumb",
      },
      Tabs: {
        navn: "Tabs",
        beskrivelse: "",
        story: Tabs(colorPalette),
        link: "tabs",
      },
      Menu: {
        navn: "Menu",
        beskrivelse: "",
        story: Menu(colorPalette),
        link: "menu",
      },
      Link: {
        navn: "Link",
        beskrivelse: "",
        story: Link(colorPalette),
        link: "link",
      },
      LinkOverlay: {
        navn: "LinkOverlay",
        beskrivelse: "",
        story: LinkOverlay(colorPalette),
        link: "linkoverlay",
      },
      SkipNav: {
        navn: "SkipNav",
        beskrivelse: "",
        story: SkipNav(colorPalette),
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
        story: Tooltip(colorPalette),
        link: "tooltip",
      },
      Dialog: {
        navn: "Dialog",
        beskrivelse: "",
        story: Dialog(colorPalette),
        link: "dialog",
      },
      Popover: {
        navn: "Popover",
        beskrivelse: "",
        story: Popover(colorPalette),
        link: "popover",
      },
      Drawer: {
        navn: "Drawer",
        beskrivelse: "",
        story: Drawer(colorPalette),
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
        story: Alert(colorPalette),
        link: "alert",
      },
      ProgressCircle: {
        navn: "Progress Circle",
        beskrivelse: "",
        story: ProgressCircle(colorPalette),
        link: "progress-circle",
      },
      Progress: {
        navn: "Progress",
        beskrivelse: "",
        story: Progress(colorPalette),
        link: "progress",
      },
      Skeleton: {
        navn: "Skeleton",
        beskrivelse: "",
        story: Skeleton(colorPalette),
        link: "skeleton",
      },
      Spinner: {
        navn: "Spinner",
        beskrivelse: "",
        story: Spinner(colorPalette),
        link: "spinner",
      },
      Stepper: {
        navn: "Stepper",
        beskrivelse: "",
        story: Stepper(colorPalette),
        link: "stepper",
      },
      Toast: {
        navn: "Toast",
        beskrivelse: "",
        story: Toast(colorPalette),
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
        story: VisuallyHidden(colorPalette),
        link: "visually-hidden",
      },
      ShowHide: {
        navn: "Show/Hide",
        beskrivelse: "",
        story: ShowHide(colorPalette),
        link: "show-hide",
      },
      Portal: {
        navn: "Portal",
        beskrivelse: "",
        story: Portal(colorPalette),
        link: "portal",
      },
    },
  },
});
