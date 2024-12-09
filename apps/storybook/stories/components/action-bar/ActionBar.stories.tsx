import {
  ActionBar,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Checkbox,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ActionBar> = {
  title: "Komponenter/Action Bar",
  parameters: {
    docs: {
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionBar>;

const Demo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Checkbox onCheckedChange={e => setChecked(!!e.checked)}>Vis Action Bar</Checkbox>
      <ActionBar open={checked}>
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
  render: () => <Demo />,
};
