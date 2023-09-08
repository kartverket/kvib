import { Meta, StoryObj } from "@storybook/react";
import {
  Fade as KvibFade,
  ScaleFade as KvibScaleFade,
  Slide as KvibSlide,
  SlideFade as KvibSlideFade,
  Collapse as KvibCollapse,
  useDisclosure,
  Box,
  Button,
  FadeProps,
  ScaleFadeProps,
  SlideProps,
  SlideFadeProps,
  CollapseProps,
} from "@kvib/react/src";

const meta: Meta<typeof KvibFade> = {
  title: "komponenter/transitions/Fade",
  component: KvibFade,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFade>;

const Fade = ({ ...args }: FadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Trykk for transition</Button>
      <KvibFade in={isOpen} {...args}>
        <Box color={"green"} w={150} h={30} bg={"pink"}>
          Tittei
        </Box>
      </KvibFade>
    </>
  );
};
export const FadeEx: Story = {
  args: {},
  render: (args) => <Fade {...args}></Fade>,
};

const ScaleFade = ({ ...args }: ScaleFadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return;
};
