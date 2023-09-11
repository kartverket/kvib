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
import { Stack } from "@kvib/react/src";

const meta: Meta<typeof KvibFade> = {
  title: "Komponenter/Transitions",
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

const FadeEx = ({ ...args }: FadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for Fade</Button>
      <KvibFade in={isOpen} {...args}>
        <Box color={"green"} w={150} h={30} bg={"pink"}>
          Tittei
        </Box>
      </KvibFade>
    </div>
  );
};

export const ScaleFadeEx = ({ ...args }: ScaleFadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for ScaleFade!</Button>
      <KvibScaleFade initialScale={0.9} in={isOpen} {...args}>
        <Box p="40px" color="green" mt="4" bg={"teal.500g"} rounded="md" shadow="md">
          Fade
        </Box>
      </KvibScaleFade>
    </div>
  );
};

export const SlideEx = ({ ...args }: SlideProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for Slide!</Button>
      <KvibSlide direction="bottom" in={isOpen} style={{ zIndex: 10 }} {...args}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </KvibSlide>
    </div>
  );
};

export const SlideFadeEx = ({ ...args }: SlideFadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for Slide!</Button>
      <KvibSlideFade in={isOpen} offsetY="20px" {...args}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </KvibSlideFade>
    </div>
  );
};

export const CollapseEx = ({ ...args }: CollapseProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for Slide!</Button>
      <KvibSlide direction="bottom" in={isOpen} style={{ zIndex: 10 }} {...args}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </KvibSlide>
    </div>
  );
};

export const Transitions: Story = {
  render: () => (
    <Stack>
      <FadeEx></FadeEx>,<ScaleFadeEx></ScaleFadeEx>
      <SlideEx></SlideEx>
      <SlideFadeEx></SlideFadeEx>
    </Stack>
  ),
};
