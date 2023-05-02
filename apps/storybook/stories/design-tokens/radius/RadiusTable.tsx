import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { radii as radius } from "@kvib/react/src/theme/foundations";

const example = (radius: any) => <Box backgroundColor="gainsboro" width="80px" height="80px" borderRadius={radius} />;

export const RadiusTable = () => {
  return (
    <TableContainer>
      <Table variant="simple" size="lg" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(radius).map(([size, value]) => (
            <Tr key={size}>
              <Td>
                <Center>{example(value)}</Center>
              </Td>
              <Td>{`${size} / ${value}`}</Td>
              <Td>{`var(--kvib-radii-${size})`}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
