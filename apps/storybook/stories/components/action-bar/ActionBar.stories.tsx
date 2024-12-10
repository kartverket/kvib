import {
  ActionBar,
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarProps,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Checkbox,
  MenuOpenChangeDetails,
  SwitchCheckedChangeDetails,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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

const Demo = (props: ActionBarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Checkbox
        onCheckedChange={(e: SwitchCheckedChangeDetails) => {
          setOpen((e as { checked: boolean }).checked);
        }}
        colorPalette={props.colorPalette}
      >
        Vis Action bar
      </Checkbox>
      <ActionBar
        open={open}
        onOpenChange={(e: MenuOpenChangeDetails) => {
          setOpen((e as { open: boolean }).open);
        }}
        closeOnInteractOutside={false}
        {...props}
      >
        <ActionBarContent>
          <ActionBarSelectionTrigger>2 elementer valgt</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm" colorPalette={props.colorPalette}>
            Del
          </Button>
          <ActionBarCloseTrigger colorPalette={props.colorPalette} />
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

export const Preview: Story = {
  render: args => <Demo {...args} />,
};
