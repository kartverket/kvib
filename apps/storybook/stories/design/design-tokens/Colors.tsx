import { SimpleGrid, Box, VStack, Text, Heading } from "@chakra-ui/react";
import { colors } from "@kvib/react/src/theme/foundations";

type ColorScaleType =
  | string
  | { 50: string; 100: string; 200: string; 300: string; 400: string; 500: string; 600: string };

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const renderColors = (name: string, colorScale: ColorScaleType) => {
  if (typeof colorScale === "string") {
    const hex = colorScale;
    return (
      <VStack alignItems="flex-start" spacing="4px" borderRadius="6px" border={`1px solid ${colors.gray[100]}`}>
        <Box backgroundColor={hex} height="60px" width="100%"></Box>
        <Text as="b" paddingLeft="6px">
          {name}
        </Text>
        <Text paddingLeft="6px">{hex}</Text>
      </VStack>
    );
  }

  return Object.entries(colorScale).map(([value, hex]) => (
    <VStack
      key={value}
      alignItems="flex-start"
      spacing="4px"
      borderRadius="6px"
      border={`1px solid ${colors.gray[100]}`}
    >
      <Box backgroundColor={hex} height="60px" width="100%"></Box>
      <Text as="b" paddingLeft="6px">{`${name}-${value}`}</Text>
      <Text paddingLeft="6px">{hex}</Text>
    </VStack>
  ));
};

export const Colors = () => {
  return (
    <Box marginBottom="40px">
      {Object.entries(colors).map(([name, colorScale]) => (
        <Box key={name} marginTop="20px">
          <Heading as="h3">{capitalizeFirstLetter(name)}</Heading>
          <SimpleGrid columns={[4, 7]} spacing="20px">
            {renderColors(name, colorScale)}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};
