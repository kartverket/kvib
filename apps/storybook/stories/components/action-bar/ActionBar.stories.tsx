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
  },
};

export default meta;

/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends ActionBarProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

const ActionBarExample = (props: Props) => {
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
        colorPalette={props.colorPalette}
      >
        Vis Action Bar
      </Checkbox>
      <ActionBar open={open} onExitComplete={onClose} closeOnInteractOutside={false}>
        <ActionBarContent {...props}>
          <ActionBarSelectionTrigger>2 elementer valgt</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm" colorPalette={props.colorPalette}>
            Del
          </Button>
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

export const Preview: Story = {
  render: args => <ActionBarExample {...args} />,
};
