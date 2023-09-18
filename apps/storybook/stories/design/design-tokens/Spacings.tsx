import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@kvib/react";
import { colors, spacings } from "@kvib/react/src/theme/tokens";

const example = (spacings: any) => <Box backgroundColor={colors.blue["400"]} w={spacings} h="10" />;

export const Spacings = () => {
  <>{example(spacings)}</>;
};
