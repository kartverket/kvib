import { composeStories } from "@storybook/react";
import * as PortalStories from "../../components/annet/portal/Portal.stories";
import * as ShowHideStories from "../../components/annet/show-hide/ShowHide.stories";
import * as VisuallyHiddenStories from "../../components/annet/visually-hidden/VisuallyHidden.stories";
import * as AccordionStories from "../../components/datavisning/accordion/Accordion.stories";
import * as BadgeStories from "../../components/datavisning/badge/Badge.stories";
import * as CardStories from "../../components/datavisning/card/Card.stories";
import * as CodeStories from "../../components/datavisning/code/Code.stories";
import * as KbdStories from "../../components/datavisning/kbd/Kbd.stories";
import * as ListStories from "../../components/datavisning/list/List.stories";
import * as StatStories from "../../components/datavisning/stat/Stat.stories";
import * as TableStories from "../../components/datavisning/table/Table.stories";
import * as TagStories from "../../components/datavisning/tag/Tag.stories";
import * as AspectRatioStories from "../../components/Layout/AspectRatio/AspectRatio.stories";
import * as BoxStories from "../../components/Layout/Box/Box.stories";
import * as CenterStories from "../../components/Layout/Center/Center.stories";
import * as ContainerStories from "../../components/Layout/Container/Container.stories";
import * as FlexStories from "../../components/Layout/Flex/Flex.stories";
import * as GridStories from "../../components/Layout/Grid/Grid.stories";
import * as SimpleGridStories from "../../components/Layout/SimpleGrid/SimpleGrid.stories";
import * as StackStories from "../../components/Layout/Stack/Stack.stories";
import * as WrapStories from "../../components/Layout/Wrap/Wrap.stories";
import * as AvatarStories from "../../components/media/avatar/Avatar.stories";
import * as IconStories from "../../components/media/icon/Icon.stories";
import * as ImageStories from "../../components/media/image/Image.stories";
import * as BreadcrumbStories from "../../components/navigasjon/breadcrumb/Breadcrumb.stories";
import * as LinkOverlayStories from "../../components/navigasjon/link-overlay/LinkOverlay.stories";
import * as LinkStories from "../../components/navigasjon/link/Link.stories";
import * as MenuStories from "../../components/navigasjon/menu/Menu.stories";
import * as SkivNavStories from "../../components/navigasjon/skip-nav/SkipNav.stories";
import * as TabsStories from "../../components/navigasjon/tabs/Tabs.stories";
import * as AlertDialogStories from "../../components/overlay/alert-dialog/AlertDialog.stories";
import * as DrawerStories from "../../components/overlay/drawer/Drawer.stories";
import * as ModalStories from "../../components/overlay/modal/Modal.stories";
import * as PopoverStories from "../../components/overlay/popover/Popover.stories";
import * as TooltipStories from "../../components/overlay/tooltip/Tooltip.stories";
import * as SearchAsyncStories from "../../components/search/search-async/SearchAsync.stories";
import * as SearchStories from "../../components/search/search/Search.stories";
import * as DividerStories from "../../components/sideelementer/divider/Divider.stories";
import * as FooterStories from "../../components/sideelementer/footer/footer/Footer.stories";
import * as HeaderStories from "../../components/sideelementer/header/Header.stories";
import * as LogoStories from "../../components/sideelementer/logo/Logo.stories";
import * as ButtonStories from "../../components/skjemaelementer/button/Button.stories";
import * as CheckboxStories from "../../components/skjemaelementer/checkbox/Checkbox.stories";
import * as CloseButtonStories from "../../components/skjemaelementer/close-button/CloseButton.stories";
import * as DatepickerStories from "../../components/skjemaelementer/datepicker/Datepicker.stories";
import * as EditableStories from "../../components/skjemaelementer/editable/Editable.stories";
import * as FileUploadStories from "../../components/skjemaelementer/file-upload/FileUpload.stories";
import * as FormControlStories from "../../components/skjemaelementer/form-control/Form-control.stories";
import * as IconButtonStories from "../../components/skjemaelementer/icon-button/IconButton.stories";
import * as InputStories from "../../components/skjemaelementer/Input/Input.stories";
import * as NumberInputStories from "../../components/skjemaelementer/number-input/NumberInput.stories";
import * as PinInputStories from "../../components/skjemaelementer/pin-input/PinInput.stories";
import * as RadioStories from "../../components/skjemaelementer/radio/Radio.stories";
import * as RangeSliderStories from "../../components/skjemaelementer/range-slider/RangeSlider.stories";
import * as SelectStories from "../../components/skjemaelementer/select/Select.stories";
import * as SliderStories from "../../components/skjemaelementer/slider/Slider.stories";
import * as SwitchStories from "../../components/skjemaelementer/switch/Switch.stories";
import * as TextAreaStories from "../../components/skjemaelementer/textarea/Textarea.stories";
import * as TimepickerStories from "../../components/skjemaelementer/timepicker/Timepicker.stories";
import * as AlertStories from "../../components/tilbakemelding/alert/Alert.stories";
import * as CircularProgressStories from "../../components/tilbakemelding/circular-progress/CircularProgress.stories";
import * as ProgressStories from "../../components/tilbakemelding/progress/Progress.stories";
import * as SkeletonStories from "../../components/tilbakemelding/skeleton/Skeleton.stories";
import * as SpinnerStories from "../../components/tilbakemelding/spinner/Spinner.stories";
import * as StepperStories from "../../components/tilbakemelding/stepper/Stepper.stories";
import * as ToastStories from "../../components/tilbakemelding/toast/Toast.stories";
import * as HeadingStories from "../../design/heading/Heading.stories";
import * as HighlightStories from "../../design/highlight/Highlight.stories";
import * as TextStories from "../../design/text/Text.stories";

export type ColorScheme = "green" | "blue";

// Skjemaelementer

export const Button = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const IconButton = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(IconButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const CloseButton = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CloseButtonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Input = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(InputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const FormControl = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(FormControlStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Select = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SelectStories);
  return <Preview colorScheme={colorScheme} />;
};

export const TextArea = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TextAreaStories);
  return <Preview colorScheme={colorScheme} />;
};

export const NumberInput = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(NumberInputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Checkbox = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CheckboxStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Datepicker = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(DatepickerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Timepicker = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TimepickerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Editable = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(EditableStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Radio = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(RadioStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Switch = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SwitchStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Slider = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SliderStories);
  return <Preview colorScheme={colorScheme} />;
};

export const RangeSlider = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(RangeSliderStories);
  return <Preview colorScheme={colorScheme} />;
};

export const PinInput = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(PinInputStories);
  return <Preview colorScheme={colorScheme} />;
};

export const FileUpload = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(FileUploadStories);
  return <Preview colorScheme={colorScheme} />;
};

// Søk

export const Search = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SearchStories);
  return <Preview colorScheme={colorScheme} />;
};

export const SearchAsync = (_: ColorScheme) => {
  const { Preview } = composeStories(SearchAsyncStories);
  return <Preview />;
};

// Datavisning

export const Badge = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(BadgeStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Table = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TableStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Code = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CodeStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Tag = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TagStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Stat = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(StatStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Card = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CardStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Kbd = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(KbdStories);
  return <Preview colorScheme={colorScheme} />;
};

export const List = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ListStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Accordion = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(AccordionStories);
  return <Preview colorScheme={colorScheme} />;
};

// Layout

export const Box = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(BoxStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Container = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ContainerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Flex = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(FlexStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Grid = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(GridStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Stack = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(StackStories);
  return <Preview colorScheme={colorScheme} />;
};

export const SimpleGrid = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SimpleGridStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Wrap = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(WrapStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Center = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CenterStories);
  return <Preview colorScheme={colorScheme} />;
};

export const AspectRatio = (_: ColorScheme) => {
  const { Preview } = composeStories(AspectRatioStories);
  return <Preview />;
};

// Designfundament

export const Heading = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(HeadingStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Text = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TextStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Highlight = (_: ColorScheme) => {
  const { Preview } = composeStories(HighlightStories);
  return <Preview />;
};

// Sideelementer

export const Logo = (_: ColorScheme) => {
  const { Preview } = composeStories(LogoStories);
  return <Preview />;
};

export const Header = (_: ColorScheme) => {
  const { Preview } = composeStories(HeaderStories);
  return <Preview />;
};

export const Footer = (_: ColorScheme) => {
  const { Preview } = composeStories(FooterStories);
  return <Preview />;
};

export const Divider = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(DividerStories);
  return <Preview colorScheme={colorScheme} />;
};

// Media

export const Image = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ImageStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Icon = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(IconStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Avatar = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(AvatarStories);
  return <Preview colorScheme={colorScheme} />;
};

// Navigasjon

export const Breadcrumb = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(BreadcrumbStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Tabs = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TabsStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Menu = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(MenuStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Link = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(LinkStories);
  return <Preview colorScheme={colorScheme} />;
};

export const LinkOverlay = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(LinkOverlayStories);
  return <Preview colorScheme={colorScheme} />;
};

export const SkipNav = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SkivNavStories);
  return <Preview colorScheme={colorScheme} />;
};

// Overlay

export const Tooltip = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(TooltipStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Modal = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ModalStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Popover = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(PopoverStories);
  return <Preview colorScheme={colorScheme} />;
};

export const AlertDialog = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(AlertDialogStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Drawer = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(DrawerStories);
  return <Preview colorScheme={colorScheme} />;
};

// Tilbakemelding

export const Toast = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ToastStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Spinner = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SpinnerStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Skeleton = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(SkeletonStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Progress = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(ProgressStories);
  return <Preview colorScheme={colorScheme} />;
};

export const CircularProgress = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(CircularProgressStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Stepper = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(StepperStories);
  return <Preview colorScheme={colorScheme} />;
};

export const Alert = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(AlertStories);
  return <Preview colorScheme={colorScheme} />;
};

// Annet

export const VisuallyHidden = (colorScheme: ColorScheme) => {
  const { Preview } = composeStories(VisuallyHiddenStories);
  return <Preview colorScheme={colorScheme} />;
};

export const ShowHide = (_: ColorScheme) => {
  const { Preview } = composeStories(ShowHideStories);
  return <Preview />;
};

export const Portal = (_: ColorScheme) => {
  const { Preview } = composeStories(PortalStories);
  return <Preview />;
};
