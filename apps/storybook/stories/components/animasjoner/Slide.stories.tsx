import { Meta, StoryObj } from "@storybook/react";
import { Slide as KvibSlide, SlideProps, Box, Button, useDisclosure } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof KvibSlide> = {
  title: "Animasjoner/Slide",
  component: KvibSlide,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    in: {
      description: "If true, Shows children. Triggers on enter and exit states",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    unmountOnExit: {
      description: "If true, unmounts after 'in' is set to 'false' and animation is done",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    direction: {
      description: "Pick which direction to slide from",
      table: {
        type: { summary: "right | left | top | bottom" },
        defaultValue: { summary: "right" },
      },
      control: "select",
      options: ["top", "bottom", "right", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlide>;

const SlideEx = ({ ...args }: SlideProps) => {
  return (
    <Box w={300} h={300}>
      <KvibSlide {...args}>
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
    </Box>
  );
};

export const nonCanvasExample = () => {
  const { isOpen: isOpenT, onToggle: onToggleT } = useDisclosure();
  const { isOpen: isOpenB, onToggle: onToggleB } = useDisclosure();
  const { isOpen: isOpenR, onToggle: onToggleR } = useDisclosure();
  const { isOpen: isOpenL, onToggle: onToggleL } = useDisclosure();

  return (
    <Box>
      <Button onClick={onToggleT}>Toggle top</Button>
      <KvibSlide in={isOpenT} style={{ zIndex: -10 }} direction="top">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Hall
        </Box>
      </KvibSlide>
      <Button onClick={onToggleB}>Toggle bottom</Button>
      <KvibSlide in={isOpenB} style={{ zIndex: -10 }} direction="bottom">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
      <Button onClick={onToggleR}>Toggle right</Button>
      <KvibSlide in={isOpenR} style={{ zIndex: -10 }} direction="right">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
      <Button onClick={onToggleL}>Toggle left</Button>
      <KvibSlide in={isOpenL} style={{ zIndex: -10 }} direction="left">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
    </Box>
  );
};

export const Slide: Story = {
  args: { in: false },
  render: (args) => <SlideEx {...args} />,
};
