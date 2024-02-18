import { Button, Stack, Input } from "@kvib/react/src";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const DarkModeExample = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("green.500", "green.200");
  const color = useColorModeValue("white", "black");
  const boxBg = useColorModeValue("white", "black");
  const inputColor = useColorModeValue("black", "cyan");

  return (
    <>
      <Stack bg={boxBg} width={250} padding={50}>
        <label>Dark Mode</label>
        <Input placeholder="Skriv her..." />
        <label>Example</label>
        <Input placeholder="Skriv her..." color={inputColor} borderColor={inputColor} />
        <Button color={color} bg={bg} size="md" onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Stack>
    </>
  );
};
