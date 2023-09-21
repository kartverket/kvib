import { Box, Text } from "@kvib/react/src";

// const example
export const Blurs = () => {
  return (
    <Box backdropContrast="1" w="400px" h="300px">
      <Box
        blur="2px"
        w="400px"
        h="300px"
        background={"url(https://thispersondoesnotexist.com/) center/cover no-repeat"}
      >
        <Text color="white">Halla jeg legger flere ord slik at det blir lettere å se setningen</Text>
      </Box>
    </Box>
  );
};
