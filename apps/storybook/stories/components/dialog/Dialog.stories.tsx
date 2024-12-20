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
    colorPalette: {
      description: "The color palette of the component",
      table: {
        type: { summary: "green | blue | gray | red" },
        defaultValue: { summary: "green" },
      },
      control: { type: "radio" },
      options: ["green", "blue", "gray", "red"],
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
    centered: {
      description: "Whether the dialog should be centered",
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
type Story = StoryObj<typeof Dialog>;

const DialogExample = ({ ...args }) => {
  return (
    <>
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button colorPalette={args.colorPalette}>Åpne dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Her er en modal</DialogTitle>
          </DialogHeader>
          <DialogBody>
            Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis.
          </DialogBody>

          <DialogFooter justifyContent="space-between">
            <Button variant="tertiary" colorPalette={args.colorPalette}>
              Tertiær
            </Button>
            <Box>
              <Button mr={3} variant="secondary" colorPalette={args.colorPalette}>
                Sekundær
              </Button>
              <DialogActionTrigger asChild>
                <Button colorPalette={args.colorPalette}>Primær</Button>
              </DialogActionTrigger>
            </Box>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </Dialog>
    </>
  );
};

export const Preview: Story = {
  render: (args: DialogProps) => <DialogExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
};
