import { Button } from "@kvib/react/src/Button";
import { StoryFn, Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Komponenter/Knapp",
  component: Button,
};

export default meta;

export const Primary: StoryFn<typeof Button> = () => <Button>Button</Button>;
