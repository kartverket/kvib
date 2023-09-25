import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@kvib/react/src";
import { colors, spacing, spacingOrder } from "@kvib/react/src/theme/tokens";

const example = (spacing: any) => <Box backgroundColor={colors.blue["400"]} w={spacing} h="10" />;

export const Spacing = () => {
  console.log(Object.entries(spacing));
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="40%">Eksempel</Th>
            <Th width="30%">Verdi</Th>
            <Th width="30%">Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {spacingOrder.map((key) => (
            <Tr key={key}>
              <Td backgroundColor="white">{example(spacing[key])}</Td>
              <Td backgroundColor="white">{`${key} / ${spacing[key]}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-spacing-${key})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
