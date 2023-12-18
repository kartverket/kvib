import { Box, Flex, Heading, Radio, RadioGroup, Stack, Text, useToast } from "@kvib/react/src";
import { MapColorsType } from "@kvib/react/src/theme/tokens";
import { Dispatch, SetStateAction, useState } from "react";

const opacitiesHex = ["FF", "E6", "B3", "80", "4D", "1A"];
const opacitiesRGBA = ["1", "0.9", "0.7", "0.5", "0.3", "0.1"];

const Sticker = ({ colorValue }: { colorValue: string }) => {
  return (
    <Box
      position="absolute"
      left="0"
      bottom="0"
      height="40%"
      backgroundColor="rgba(255,255,255,0.7)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Text color="black" fontWeight="bold" fontSize="smaller">
        {colorValue}
      </Text>
    </Box>
  );
};

const Color = ({ value }: { value: string }) => {
  const [hovered, setHovered] = useState(false);
  const toast = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      function () {
        toast({
          title: "Kopiert!",
          description: text,
          status: "success",
          duration: 2000,
          isClosable: true,
          colorScheme: "blue",
        });
      },
      function (err) {
        console.error("Unable to copy text: ", err);
        toast({
          title: "Error",
          description: "Failed to copy color.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      },
    );
  };

  return (
    <Box backgroundColor="white" height="60px" width="100%">
      {hovered && <Sticker colorValue={value} />}
      <Box
        backgroundColor={value}
        height="60px"
        width="100%"
        _hover={{ opacity: 0.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => copyToClipboard(value)}
        cursor="pointer"
      />
    </Box>
  );
};

export const ColorBox = ({ value, format }: { value: string; format: string }) => {
  const [hovered, setHovered] = useState(false);
  const opacities = format === "RGBA" ? opacitiesRGBA : opacitiesHex;
  const colorValue = (opacity: string) => {
    return format === "RGBA" ? adjustAlpha(value, Number(opacity)) : `${value}${opacity}`;
  };

  return (
    <Flex
      w={240}
      border={`2px ${value} solid`}
      gap="2px"
      backgroundColor={value}
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered && <Sticker colorValue={value} />}
      {opacities.map((opacity) => (
        <Color key={opacity} value={colorValue(opacity)} />
      ))}
    </Flex>
  );
};

export const ColorPalettes = ({ hexColors, RGBAColors }: { hexColors: MapColorsType; RGBAColors?: MapColorsType }) => {
  const [format, setFormat] = useState("HEX");
  let colors;
  if (format === "HEX" || !RGBAColors) {
    colors = hexColors;
  } else {
    colors = RGBAColors;
  }

  return (
    <Flex flexDirection="column" gap={55} marginTop={30}>
      {RGBAColors !== undefined && <ColorFormatPicker format={format} setFormat={setFormat} />}
      {Object.entries(colors).map(([colorName, shades]) => (
        <Box key={colorName}>
          <Heading as="h3" size="md" id={colorName}>
            {capitalizeFirstLetter(colorName)}
          </Heading>
          <Flex gap={5} flexWrap="wrap">
            {Object.values(shades).map((shade, index) => (
              <div key={index}>
                <ColorBox value={shade} format={format} />
              </div>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export const ExampleBox = ({
  value,
  opacityFormat = "Percentage",
}: {
  value: string;
  opacityFormat?: "HEX" | "RGBA" | "Percentage";
}) => {
  const formatOpacity = (opacityFormat: string, opacity: string, index: number) => {
    switch (opacityFormat) {
      case "HEX":
        return opacity;
      case "Percentage":
        return `${parseFloat(opacitiesRGBA[index]) * 100}%`;
      default:
        return opacitiesRGBA[index];
    }
  };

  return (
    <Flex w={240} border={`2px ${value} solid`} gap="2px" backgroundColor={value} position="relative">
      {opacitiesHex.map((opacity, index) => (
        <Box backgroundColor="white" height="60px" width="100%">
          <Flex
            key={opacity}
            backgroundColor={`${value}${opacity}`}
            height="60px"
            width="100%"
            _hover={{ opacity: 0.5 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text fontWeight="semibold" margin={0}>
              {formatOpacity(opacityFormat, opacity, index)}
            </Text>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

// Helpers

const adjustAlpha = (rgbaString: string, newAlpha: number): string => {
  const parts = rgbaString.split(",");
  parts[3] = ` ${newAlpha})`;
  return parts.join(",");
};

const ColorFormatPicker = ({ format, setFormat }: { format: string; setFormat: Dispatch<SetStateAction<string>> }) => {
  return (
    <RadioGroup onChange={setFormat} value={format}>
      <Stack direction="row" gap={5}>
        <Radio colorScheme="blue" value="HEX">
          HEX
        </Radio>
        <Radio value="RGBA">RGBA</Radio>
      </Stack>
    </RadioGroup>
  );
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
