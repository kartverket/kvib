import { Button, Icon, Toaster as KvibToast, Toaster, toaster } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<KvibToast> = {
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
    isClosable: {
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
        defaultValue: { summary: "bottom" },
      },
      control: "select",
      options: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"],
    },
    render: {
      description: "Render a component toast component. Any component passed will receive 2 props: id and onClose",
      table: {
        type: { summary: "React element" },
      },
    },
    status: {
      description: "The status (color) of the toast",
      table: {
        type: { summary: "info | warning | success | error | loading" },
        defaultValue: { summary: "info" },
      },
      control: "select",
      options: ["info", "warning", "success", "error", "loading"],
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

const ToastExample = ({ ...args }) => {
  return (
    <>
      <Button
        colorScheme={args.btnClr}
        w={args.btnW}
        onClick={() =>
          toaster.create({
            title: args.title,
            description: args.description,
            status: args.status,
            duration: args.duration,
            isClosable: args.isClosable,
            icon: <Icon icon={args.icon} />,
            position: args.position,
          })
        }
      >
        Vis toast
      </Button>
      <Toaster />
    </>
  );
};

type Story = StoryObj<KvibToast>;

export const Preview: Story = {
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    status: "success",
    duration: 9000,
    icon: "check",
  },
  render: args => <ToastExample {...args} />,
};
