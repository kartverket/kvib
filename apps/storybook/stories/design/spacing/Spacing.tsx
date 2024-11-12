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
import { colors, spacing, spacingOrder } from "@kvib/react/src/theme/tokens";

const example = (spacing: any) => <Box bg={colors.blue[400]} w={spacing} h="16px" />;

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
      {spacingOrder.map(key => (
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
);
