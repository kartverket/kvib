import { Box, VStack, Text, Heading, Flex } from "@kvib/react/src";
import { colors, fontWeights, fontSizes } from "@kvib/react/src/theme/tokens";

type ColorScaleType =
  | string
  | {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const renderColors = (name: string, colorScale: ColorScaleType) => {
  if (typeof colorScale === "string") {
    const hex = colorScale;
    return (
      <VStack alignItems="flex-start" spacing="4px" borderRadius="6px" border={`1px solid ${colors.gray[100]}`} w={92}>
        <Box backgroundColor={hex} height="60px" width="100%"></Box>
        <Text fontWeight={fontWeights["bold"]} fontSize={fontSizes["sm"]} paddingLeft="6px">
          {name}
        </Text>
        <Text fontSize={fontSizes["xs"]} paddingLeft="6px">
          {hex}
        </Text>
      </VStack>
    );
  }

  return Object.entries(colorScale).map(([value, hex]) => (
    <VStack
      key={value}
      alignItems="flex-start"
      spacing="2px"
      borderRadius="6px"
      border={`1px solid ${colors.gray[100]}`}
      w={92}
    >
      <Box backgroundColor={hex} height="60px" width="100%" />
      <Text fontWeight={fontWeights["bold"]} fontSize={fontSizes["sm"]} paddingLeft="6px">{`${name}-${value}`}</Text>
      <Text fontSize={fontSizes["xs"]} paddingLeft="6px">
        {hex}
      </Text>
    </VStack>
  ));
};

export const Colors = () => {
  return (
    <Box marginBottom="40px">
      {Object.entries(colors).map(([name, colorScale]) => (
        <Box key={name} marginTop="20px">
          <Heading size="md" as="h3">
            {capitalizeFirstLetter(name)}
          </Heading>
          <Flex gap="8px" flexWrap="wrap">
            {renderColors(name, colorScale)}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
