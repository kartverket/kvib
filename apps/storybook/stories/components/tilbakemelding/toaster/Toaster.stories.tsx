import { Button, Icon, toaster, ToasterProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ToasterProps> = {
  title: "Komponenter/Toaster",
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    description: {
      description: "Descriptive text on the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    duration: {
      description: "Time for the toast to disappear, in milliseconds. Set to null for infinite",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "9000" },
      },
      control: { type: "number" },
    },
    icon: {
      description: "Custom icon that will be displayed",
      table: {
        type: { summary: "<Icon/>" },
        defaultValue: { summary: "none" },
      },
      control: "text",
    },
    id: {
      description: "Unique html id",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    closeable: {
      description: "if true, the toast will show a close button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    onCloseComplete: {
      description: "Callback function to run side effects after the toast has closed.",
      table: {
        type: { summary: "() => void" },
      },
    },
    position: {
      description: "Placement of the toast",
      table: {
        type: { summary: "top | top-left | top-right | bottom | bottom-left | bottom-right" },
      },
      defaultValue: { summary: "bottom" },
      control: "select",
      options: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"],
    },
    render: {
      description: "Render a component toast component. Any component passed will receive 2 props: id and onClose",
      table: {
        type: { summary: "React element" },
      },
    },
    type: {
      description: "The status (color) of the toast",
      table: {
        type: { summary: "info | warning | success | error | loading" },
      },
      defaultValue: { summary: "info" },
      control: "radio",
      options: ["info", "warning", "success", "error"],
    },
    title: {
      description: "The title of the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;

const ToastExample = ({ ...args }) => (
  <>
    <Button
      colorPalette={args.btnClr}
      w={args.btnW}
      onClick={() =>
        toaster.create({
          icon: <Icon icon={args.icon} />,
          ...args,
        })
      }
    >
      Vis toast
    </Button>
    <Toaster />
  </>
);

type Story = StoryObj<ToasterProps>;

export const Preview: Story = {
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    type: "success",
    duration: 9000,
    icon: "check",
  },
  render: args => <ToastExample {...args} />,
};
