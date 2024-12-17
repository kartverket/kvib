import { List, ListProps } from "@kvib/react";

export const Liste = (props: ListProps) => (
  <List pl="1.5rem" m="0" gap={3} {...props} fontSize="md" lineHeight="md">
    {props.children}
  </List>
);
