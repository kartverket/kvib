import {
  Box,
  Code,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react/src";
import { colors, spacing } from "@kvib/react/theme/tokens";

const example = (spacing: any) => <Box bg={colors.blue[400].value} w={spacing} h="16px" />;

export const Spacing = () => (
  <Table width="100%">
    <Thead textAlign="left">
      <Tr>
        <Th width="40%">Eksempel</Th>
        <Th width="30%">Verdi</Th>
        <Th width="30%">Kode</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.entries(spacing).map(([size, value]) => {
        const val = value.value;
        return (
          <Tr key={size}>
            <Td backgroundColor="white">{example(val)}</Td>
            <Td backgroundColor="white">{`${size} / ${val}`}</Td>
            <Td backgroundColor="white">
              <Code>{`var(--kvib-spacing-${size})`}</Code>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  </Table>
);
