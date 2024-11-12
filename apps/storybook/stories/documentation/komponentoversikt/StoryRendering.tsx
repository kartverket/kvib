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

export type ColorPalette = "green" | "blue";

// Skjemaelementer

export const Button = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ButtonStories);
  return <Preview colorPalette={colorPalette} />;
};

export const IconButton = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(IconButtonStories);
  return <Preview colorPalette={colorPalette} />;
};

export const CloseButton = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CloseButtonStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Input = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(InputStories);
  return <Preview colorPalette={colorPalette} />;
};

export const FormControl = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(FormControlStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Select = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SelectStories);
  return <Preview colorPalette={colorPalette} />;
};

export const TextArea = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TextAreaStories);
  return <Preview colorPalette={colorPalette} />;
};

export const NumberInput = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(NumberInputStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Checkbox = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CheckboxStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Datepicker = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(DatepickerStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Timepicker = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TimepickerStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Editable = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(EditableStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Radio = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(RadioStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Switch = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SwitchStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Slider = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SliderStories);
  return <Preview colorPalette={colorPalette} />;
};

export const RangeSlider = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(RangeSliderStories);
  return <Preview colorPalette={colorPalette} />;
};

export const PinInput = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(PinInputStories);
  return <Preview colorPalette={colorPalette} />;
};

export const FileUpload = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(FileUploadStories);
  return <Preview colorPalette={colorPalette} />;
};

// Søk

export const Search = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SearchStories);
  return <Preview colorPalette={colorPalette} />;
};

export const SearchAsync = (_: ColorPalette) => {
  const { Preview } = composeStories(SearchAsyncStories);
  return <Preview />;
};

// Datavisning

export const Badge = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(BadgeStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Table = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TableStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Code = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CodeStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Tag = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TagStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Stat = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(StatStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Card = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CardStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Kbd = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(KbdStories);
  return <Preview colorPalette={colorPalette} />;
};

export const List = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ListStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Accordion = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(AccordionStories);
  return <Preview colorPalette={colorPalette} />;
};

// Layout

export const Box = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(BoxStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Container = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ContainerStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Flex = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(FlexStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Grid = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(GridStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Stack = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(StackStories);
  return <Preview colorPalette={colorPalette} />;
};

export const SimpleGrid = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SimpleGridStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Center = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CenterStories);
  return <Preview colorPalette={colorPalette} />;
};

export const AspectRatio = (_: ColorPalette) => {
  const { Preview } = composeStories(AspectRatioStories);
  return <Preview />;
};

// Designfundament

export const Heading = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(HeadingStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Text = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TextStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Highlight = (_: ColorPalette) => {
  const { Preview } = composeStories(HighlightStories);
  return <Preview />;
};

// Sideelementer

export const Logo = (_: ColorPalette) => {
  const { Preview } = composeStories(LogoStories);
  return <Preview />;
};

export const Header = (_: ColorPalette) => {
  const { Preview } = composeStories(HeaderStories);
  return <Preview />;
};

export const Footer = (_: ColorPalette) => {
  const { Preview } = composeStories(FooterStories);
  return <Preview />;
};

export const Divider = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(DividerStories);
  return <Preview colorPalette={colorPalette} />;
};

// Media

export const Image = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ImageStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Icon = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(IconStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Avatar = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(AvatarStories);
  return <Preview colorPalette={colorPalette} />;
};

// Navigasjon

export const Breadcrumb = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(BreadcrumbStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Tabs = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TabsStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Menu = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(MenuStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Link = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(LinkStories);
  return <Preview colorPalette={colorPalette} />;
};

export const LinkOverlay = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(LinkOverlayStories);
  return <Preview colorPalette={colorPalette} />;
};

export const SkipNav = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SkivNavStories);
  return <Preview colorPalette={colorPalette} />;
};

// Overlay

export const Tooltip = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TooltipStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Modal = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ModalStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Popover = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(PopoverStories);
  return <Preview colorPalette={colorPalette} />;
};

export const AlertDialog = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(AlertDialogStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Drawer = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(DrawerStories);
  return <Preview colorPalette={colorPalette} />;
};

// Tilbakemelding

export const Toast = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ToastStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Spinner = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SpinnerStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Skeleton = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SkeletonStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Progress = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ProgressStories);
  return <Preview colorPalette={colorPalette} />;
};

export const CircularProgress = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CircularProgressStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Stepper = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(StepperStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Alert = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(AlertStories);
  return <Preview colorPalette={colorPalette} />;
};

// Annet

export const VisuallyHidden = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(VisuallyHiddenStories);
  return <Preview colorPalette={colorPalette} />;
};

export const ShowHide = (_: ColorPalette) => {
  const { Preview } = composeStories(ShowHideStories);
  return <Preview />;
};

export const Portal = (_: ColorPalette) => {
  const { Preview } = composeStories(PortalStories);
  return <Preview />;
};
