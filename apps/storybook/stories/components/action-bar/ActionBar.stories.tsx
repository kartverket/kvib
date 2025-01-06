import {
  ActionBar,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Checkbox,
  KvibActionBar,
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
type Story = StoryObj<typeof ActionBar>;

const ActionBarExample = (props: KvibActionBar.ContentProps) => {
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
          <Button variant="outline" size="sm" colorPalette={props.colorPalette as "green" | "blue" | "gray" | "red"}>
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
