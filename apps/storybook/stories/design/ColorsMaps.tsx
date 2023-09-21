import { Box, Flex, Text } from "@kvib/react/src";
import { mapColors } from "@kvib/react/src/theme/tokens/colorsMaps";

const opacitiesHex = ["E6", "B3", "80", "4D", "1A"];

const Color = ({ value }: { value: string }) => {
  return <Box backgroundColor={value} height="60px" width="100%"></Box>;
};

export const ColorBox = ({ color, value }: { color: string; value: string }) => {
  console.log(color);
  return (
    <Flex w={200} border={`2px ${value} solid`} gap="2px">
      {opacitiesHex.map((opacityHex) => (
        <Color key={opacityHex} value={`${value}${opacityHex}`} />
      ))}
    </Flex>
  );
};

export const ColorsMaps = () => {
  return (
    <div>
      {Object.entries(mapColors).map(([colorName, shades]) => (
        <div key={colorName}>
          <h3>{colorName}</h3>
          {Object.values(shades).map((shade, index) => (
            <div key={index}>
              <Text>{index + 1}</Text>
              <ColorBox color={colorName} value={shade} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
