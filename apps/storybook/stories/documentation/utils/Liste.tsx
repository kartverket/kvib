import { List, ListProps } from "@kvib/react/src";

export const Liste = (props: ListProps) => (
  <List pl="1.75rem" pt="1rem" m="0" gap="16px" {...props}>
    {props.children}
  </List>
);
