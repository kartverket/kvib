import {
  ActionBar,
  ActionBarContent,
  ActionBarProps,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Checkbox,
  SwitchCheckedChangeDetails,
  useDisclosure,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ActionBar> = {
  title: "Komponenter/Action Bar",
  component: ActionBar,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    layout: "centered",
  },
};

export default meta;

/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends ActionBarProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
ActionBar.displayName = "ActionBar";
ActionBarContent.displayName = "ActionBarContent";
ActionBarSelectionTrigger.displayName = "ActionBarSelectionTrigger";
ActionBarSeparator.displayName = "ActionBarSeparator";
Button.displayName = "Button";

export const Preview: Story = {
  render: args => {
    const { open, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Checkbox
          onCheckedChange={(e: SwitchCheckedChangeDetails) => {
            if ((e as { checked: boolean }).checked) {
              onOpen();
            } else {
              onClose();
            }
          }}
          colorPalette={args.colorPalette}
        >
          Show Action Bar
        </Checkbox>
        <ActionBar open={open} onExitComplete={onClose} closeOnInteractOutside={false} {...args}>
          <ActionBarContent>
            <ActionBarSelectionTrigger>Selection content</ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
              Action
            </Button>
          </ActionBarContent>
        </ActionBar>
      </>
    );
  },
};
