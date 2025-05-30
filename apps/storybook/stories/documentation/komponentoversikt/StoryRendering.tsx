import { composeStories } from "@storybook/react";
import * as AccordionStories from "../../components/accordion/Accordion.stories";
import * as ActionBarStories from "../../components/action-bar/ActionBar.stories";
import * as AlertStories from "../../components/alert/Alert.stories";
import * as AvatarStories from "../../components/avatar/Avatar.stories";
import * as BadgeStories from "../../components/badge/Badge.stories";
import * as BreadcrumbStories from "../../components/breadcrumb/Breadcrumb.stories";
import * as ButtonStories from "../../components/button/Button.stories";
import * as CardStories from "../../components/card/Card.stories";
import * as CheckboxCardStories from "../../components/checkbox-card/CheckboxCard.stories";
import * as CheckboxStories from "../../components/checkbox/Checkbox.stories";
import * as ClipboardStories from "../../components/clipboard/Clipboard.stories";
import * as CloseButtonStories from "../../components/close-button/CloseButton.stories";
import * as CodeStories from "../../components/code/Code.stories";
import * as CollapsibleStories from "../../components/collapsible/Collapsible.stories";
import * as ColorPickerStories from "../../components/color-picker/ColorPicker.stories";
import * as ColorSwatchStories from "../../components/color-swatch/ColorSwatch.stories";
import * as DataListStories from "../../components/data-list/DataList.stories";
import * as DatepickerStories from "../../components/datepicker/Datepicker.stories";
import * as DialogStoriea from "../../components/dialog/Dialog.stories";
import * as DrawerStories from "../../components/drawer/Drawer.stories";
import * as EditableStories from "../../components/editable/Editable.stories";
import * as EmptyStateStories from "../../components/empty-state/EmptyState.stories";
import * as FieldStories from "../../components/field/Field.stories";
import * as FieldsetStories from "../../components/fieldset/Fieldset.stories";
import * as FileUploadStories from "../../components/file-upload/FileUpload.stories";
import * as FooterStories from "../../components/footer/Footer.stories";
import * as HeaderStories from "../../components/header/Header.stories";
import * as HeadingStories from "../../components/heading/Heading.stories";
import * as HighlightStories from "../../components/highlight/Highlight.stories";
import * as HoverCardStories from "../../components/hover-card/HoverCard.stories";
import * as IconButtonStories from "../../components/icon-button/IconButton.stories";
import * as IconStories from "../../components/icon/Icon.stories";
import * as ImageStories from "../../components/image/Image.stories";
import * as InputStories from "../../components/input/Input.stories";
import * as KbdStories from "../../components/kbd/Kbd.stories";
import * as LinkOverlayStories from "../../components/link-overlay/LinkOverlay.stories";
import * as LinkStories from "../../components/link/Link.stories";
import * as ListStories from "../../components/list/List.stories";
import * as LogoStories from "../../components/logo/Logo.stories";
import * as MenuStories from "../../components/menu/Menu.stories";
import * as NumberInputStories from "../../components/number-input/NumberInput.stories";
import * as PaginationStories from "../../components/pagination/Pagination.stories";
import * as PasswordInputStories from "../../components/password-input/PasswordInput.stories";
import * as PinInputStories from "../../components/pin-input/PinInput.stories";
import * as PopoverStories from "../../components/popover/Popover.stories";
import * as PortalStories from "../../components/portal/Portal.stories";
import * as ProgressCircleStories from "../../components/progress-circle/ProgressCircle.stories";
import * as ProgressStories from "../../components/progress/Progress.stories";
import * as RadioCardStories from "../../components/radio-card/RadioCard.stories";
import * as RadioStories from "../../components/radio/Radio.stories";
import * as RatingStories from "../../components/rating/Rating.stories";
import * as SearchAsyncStories from "../../components/search-async/SearchAsync.stories";
import * as SearchStories from "../../components/search/Search.stories";
import * as SelectNativeStories from "../../components/select-native/SelectNative.stories";
import * as SelectStories from "../../components/select/Select.stories";
import * as SeparatorStories from "../../components/separator/Separator.stories";
import * as ShowHideStories from "../../components/show/Show.stories";
import * as SkeletonStories from "../../components/skeleton/Skeleton.stories";
import * as SkivNavStories from "../../components/skip-nav/SkipNav.stories";
import * as SliderStories from "../../components/slider/Slider.stories";
import * as SpinnerStories from "../../components/spinner/Spinner.stories";
import * as StatStories from "../../components/stat/Stat.stories";
import * as StatusStories from "../../components/status/Status.stories";
import * as StepperStories from "../../components/steps/Steps.stories";
import * as SwitchStories from "../../components/switch/Switch.stories";
import * as TableStories from "../../components/table/Table.stories";
import * as TabsStories from "../../components/tabs/Tabs.stories";
import * as TagStories from "../../components/tag/Tag.stories";
import * as TextStories from "../../components/text/Text.stories";
import * as TextAreaStories from "../../components/textarea/TextArea.stories";
import * as TimelineStories from "../../components/timeline/Timeline.stories";
import * as TimepickerStories from "../../components/timepicker/Timepicker.stories";
import * as ToastStories from "../../components/toaster/Toaster.stories";
import * as ToggleTipStories from "../../components/toggle-tip/ToggleTip.stories";
import * as TooltipStories from "../../components/tooltip/Tooltip.stories";
import { ColorPalette } from "./Komponenter";

// Komponenter

export const ActionBar = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ActionBarStories);
  return <Preview colorPalette={colorPalette} />;
};

export const CheckboxCard = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CheckboxCardStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Clipboard = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ClipboardStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Collapsible = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(CollapsibleStories);
  return <Preview colorPalette={colorPalette} />;
};

export const ColorPicker = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ColorPickerStories);
  return <Preview colorPalette={colorPalette} />;
};

export const ColorSwatch = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ColorSwatchStories);
  return <Preview colorPalette={colorPalette} />;
};

export const DataList = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(DataListStories);
  return <Preview colorPalette={colorPalette} />;
};

export const EmptyState = (_: ColorPalette) => {
  const { Preview } = composeStories(EmptyStateStories);
  return <Preview />;
};

export const Field = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(FieldStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Fieldset = (_: ColorPalette) => {
  const { Preview } = composeStories(FieldsetStories);
  return <Preview />;
};

export const Footer = (colorPalette: ColorPalette) => {
  const { FooterInline } = composeStories(FooterStories);
  return <FooterInline colorPalette={colorPalette} />;
};

export const HoverCard = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(HoverCardStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Icon = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(IconStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Pagination = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(PaginationStories);
  return <Preview colorPalette={colorPalette} />;
};

export const PasswordInput = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(PasswordInputStories);
  return <Preview colorPalette={colorPalette} />;
};

export const RadioCard = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(RadioCardStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Rating = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(RatingStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Status = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(StatusStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Timeline = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(TimelineStories);
  return <Preview colorPalette={colorPalette} />;
};

export const ToggleTip = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ToggleTipStories);
  return <Preview colorPalette={colorPalette} />;
};

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

export const Select = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SelectStories);
  return <Preview colorPalette={colorPalette} />;
};

export const SelectNative = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SelectNativeStories);
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

export const Separator = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(SeparatorStories);
  return <Preview colorPalette={colorPalette} />;
};

// Media

export const Image = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ImageStories);
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

export const Dialog = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(DialogStoriea);
  return <Preview colorPalette={colorPalette} />;
};

export const Popover = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(PopoverStories);
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

export const ProgressCircle = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ProgressCircleStories);
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

export const Show = (colorPalette: ColorPalette) => {
  const { Preview } = composeStories(ShowHideStories);
  return <Preview colorPalette={colorPalette} />;
};

export const Portal = (_: ColorPalette) => {
  const { Preview } = composeStories(PortalStories);
  return <Preview />;
};
