import { Toast as KvibToast, useToast, Button, Icon, Stack, HStack, Center } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibToast> = {
  title: "Komponenter/Toast",
  component: KvibToast,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    addRole: {
      description: "",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    containerSyle: {
      description: "Style for the outer container",
      table: {
        type: { summary: "styleProps" },
      },
      control: "text",
    },
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
        defaultValue: { summary: 9000 },
      },
      control: { type: "number" },
    },
    icon: {
      description: "Custom icon that will be displayed",
      table: {
        type: { summary: "<Icon/>" },
        defaultValue: { summary: "none" },
      },
      control: "string",
    },
    id: {
      description: "Descriptive text on the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isClosable: {
      description: "if true, the toast will show a close button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    onClose: {
      description: "function to be triggered when the toast gets closed",
      table: {
        type: { summary: "() => void" },
      },
      control: "",
    },
    onCloseComplete: {
      description: "Callback function to run side effects after the toast has closed.",
      table: {
        type: { summary: "() => void" },
      },
      control: "",
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
      description: "The status of the toast",
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
  const toast = useToast();

  return (
    <Center>
      <Button
        colorScheme={args.btnClr}
        w={args.btnW}
        onClick={() =>
          toast({
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
        {args.title}
      </Button>
    </Center>
  );
};

type Story = StoryObj<typeof KvibToast>;

export const Toast: Story = {
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    status: "success",
    duration: 9000,
    icon: "check",
  },
  render: (args) => <ToastExample {...args} />,
};

export const ToastStatus: Story = {
  args: { duration: 5000, btnW: "500px" },
  render: (args) => (
    <Stack>
      <ToastExample
        {...args}
        btnClr="blue"
        title="Info"
        description="Hold inne ctrl for å zoome på kartet"
        status="info"
      />
      ,
      <ToastExample
        {...args}
        btnClr="orange"
        title="Warning"
        description="Dette kan bare gjøres to ganger til i dag"
        status="warning"
      />
      ,
      <ToastExample {...args} btnClr="green" title="Success" description="Informasjon oppdatert" status="success" />,
      <ToastExample {...args} btnClr="red" title="Error" description="Noe gikk galt" status="error" />,
      <ToastExample {...args} btnClr="blue" title="Loading" description="laster..." status="loading" />,
    </Stack>
  ),
};

export const ToastPosition: Story = {
  args: { duration: 5000 },
  render: (args) => (
    <div>
      <HStack>
        <ToastExample {...args} position="top-left" title="Top-left" />,
        <ToastExample {...args} position="top" title="Top" />,
        <ToastExample {...args} position="top-right" title="Top-right" />,
      </HStack>
      <HStack>
        <ToastExample {...args} position="bottom-left" title="Bottom-left" />,
        <ToastExample {...args} position="bottom" title="Bottom" />,
        <ToastExample {...args} position="bottom-right" title="Bottom-right" />,
      </HStack>
    </div>
  ),
};
