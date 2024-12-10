import {
  ActionBar,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  Button,
  Field,
  FormLabel,
  Switch,
  VStack,
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

const Demo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Field>
      <VStack>
        <FormLabel>Vis Action Bar</FormLabel>
        <Switch isChecked={open} onChange={() => setOpen(!open)}></Switch>
      </VStack>
      <ActionBar open={open}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>2 elementer valgt</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Del
          </Button>
        </ActionBarContent>
      </ActionBar>
    </Field>
  );
};

export const Preview: Story = {
  render: () => <Demo />,
};
