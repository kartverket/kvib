import {
  Box,
  Center,
  Code,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react/src";
import { radii } from "@kvib/react/src/theme/tokens";

const example = (radii: any) => (
  <Box border="2px solid #4DB450" backgroundColor="#E9F4EC" width="80px" height="80px" borderRadius={radii} />
);

export const Radius = () => {
  return (
    <Table width="100%">
      <Thead textAlign="left">
        <Tr>
          <Th width="20%">Eksempel</Th>
          <Th width="50%">Verdi</Th>
          <Th width="30%">Kode</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(radii).map(([size, value]) => {
          const val = value.value;
          return (
            <Tr key={size}>
              <Td backgroundColor="white">
                <Center>{example(val)}</Center>
              </Td>
              <Td backgroundColor="white">{`${size} / ${val}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-radii-${size})`}</Code>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
