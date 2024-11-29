import { ListItem } from "@kvib/react";
import { ReactNode } from "react";

export const Listeelement = ({ tittel, children }: { tittel?: string; children?: ReactNode }) => (
  <ListItem fontSize="md" fontWeight={400} m="0" p="0">
    {tittel && <b>{tittel}</b>}
    {tittel && children && ": "}
    {children}
  </ListItem>
);
