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
type Story = StoryObj<typeof ActionBar>;

const ActionBarExample = (props: ActionBarProps) => {
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
      <ActionBar open={open} onClose={onClose} closeOnInteractOutside={false} {...props}>
        <ActionBarContent>
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
