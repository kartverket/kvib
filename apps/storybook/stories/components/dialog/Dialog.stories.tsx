import {
  Box,
  Button,
  Dialog,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogProps,
  DialogTitle,
  DialogTrigger,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Komponenter/Dialog (Modal)",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "The size of the component",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      control: { type: "radio" },
    },
    open: {
      name: "open",
      description: "Whether the dialog is open",
      table: {
        type: { summary: "boolean" },
      },
    },
    closeOnEscape: {
      description: "Whether the dialog should close when the escape key is pressed",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnInteractOutside: {
      description: "Whether the dialog should close when interacting outside of it",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    defaultOpen: {
      description:
        "The initial open state of the dialog when it is first rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    modal: {
      description: "Whether to prevent pointer interaction outside the element and hide all content below it",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    motionPreset: {
      description: "The motion preset of the dialog",
      table: {
        type: { summary: "'scale' | 'slide-in-bottom' | 'slide-in-top' | 'slide-in-left' | 'slide-in-right' | 'none'" },
        defaultValue: { summary: "'scale'" },
      },
      control: { type: "radio" },
      options: ["scale", "slide-in-bottom", "slide-in-top", "slide-in-left", "slide-in-right", "none"],
    },
    onOpenChange: {
      description: "Callback to be invoked when the dialog is opened or closed",
      table: {
        type: { summary: "(details: OpenChangeDetails) => void" },
      },
    },
    onInteractOutside: {
      description: "Function called when an interaction happens outside the component",
      table: {
        type: { summary: "(event: InteractOutsideEvent) => void" },
      },
    },
    onExitComplete: {
      description: "Function called when the focus is moved outside the component",
      table: {
        type: { summary: "(event: FocusOutsideEvent) => void" },
      },
    },
    onEscapeKeyDown: {
      description: "Function called when the escape key is pressed",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    preventScroll: {
      description: "Whether the dialog should prevent scrolling on the body",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
  args: {},
};

export default meta;
/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends DialogProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Dialog.displayName = "Dialog";
DialogTrigger.displayName = "DialogTrigger";
DialogContent.displayName = "DialogContent";
DialogHeader.displayName = "DialogHeader";
DialogTitle.displayName = "DialogTitle";
DialogBody.displayName = "DialogBody";
DialogFooter.displayName = "DialogFooter";
DialogActionTrigger.displayName = "DialogActionTrigger";
DialogCloseTrigger.displayName = "DialogCloseTrigger";
Button.displayName = "Button";

export const Preview: Story = {
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
        </DialogHeader>
        <DialogBody>Dialog content</DialogBody>

        <DialogFooter justifyContent="space-between">
          <Button variant="tertiary" colorPalette={args.colorPalette}>
            Button
          </Button>
          <Box>
            <Button mr={3} variant="secondary" colorPalette={args.colorPalette}>
              Button
            </Button>
            <DialogActionTrigger asChild>
              <Button colorPalette={args.colorPalette}>Button</Button>
            </DialogActionTrigger>
          </Box>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </Dialog>
  ),
};
