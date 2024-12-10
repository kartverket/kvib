import {
  ActionBar,
  ActionBarContent,
  ActionBarProps,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Switch,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

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
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Switch isChecked={open} onChange={() => setOpen(!open)} colorPalette={props.colorPalette}>
        Vis Action Bar
      </Switch>
      <ActionBar open={open} {...props}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>2 elementer valgt</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Del
          </Button>
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

export const Preview: Story = {
  render: args => <Demo {...args} />,
};
