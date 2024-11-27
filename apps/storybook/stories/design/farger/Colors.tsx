import { Box, Flex, Heading, Text, VStack } from "@kvib/react/src";
import { colors, fontSizes, fontWeights } from "@kvib/react/theme/tokens";

type ColorScaleType = {
  50: { value: string };
  100: { value: string };
  200: { value: string };
  300: { value: string };
  400: { value: string };
  500: { value: string };
  600: { value: string };
  700: { value: string };
  800: { value: string };
  900: { value: string };
};

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const renderColors = (name: string, colorScale: ColorScaleType | { value: string }) => {
  if ("value" in colorScale) {
    const hex = colorScale;
    return (
      <VStack alignItems="flex-start" gap="4px" borderRadius="6px" border={`1px solid ${colors.gray[100]}`} w={92}>
        <Box backgroundColor={hex.value} height="60px" width="100%"></Box>
        <Text fontWeight={fontWeights["bold"].value} fontSize={fontSizes["sm"].value} paddingLeft="6px">
          {name}
        </Text>
        <Text fontSize={fontSizes["xs"].value} paddingLeft="6px">
          {hex.value}
        </Text>
      </VStack>
    );
  }

  return Object.entries(colorScale).map(([value, hex]) => (
    <VStack
      key={value}
      alignItems="flex-start"
      gap="2px"
      borderRadius="6px"
      border={`1px solid ${colors.gray[100]}`}
      w={92}
    >
      <Box backgroundColor={hex.value} height="60px" width="100%" />
      <Text
        fontWeight={fontWeights["bold"].value}
        wordBreak={"break-word"}
        fontSize={fontSizes["sm"].value}
        paddingLeft="6px"
      >{`${name}-${value}`}</Text>
      <Text fontSize={fontSizes["xs"].value} paddingLeft="6px">
        {hex.value}
      </Text>
    </VStack>
  ));
};

export const Colors = () => {
  return (
    <Box marginBottom="40px">
      {Object.entries(colors).map(([name, colorScale]) => (
        <Box key={name} marginTop="20px">
          <Heading size="md" as="h3" id={name}>
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
