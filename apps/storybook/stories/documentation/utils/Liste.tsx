import { ListProps, UnorderedList } from "@kvib/react/src";

export const Liste = (props: ListProps) => (
  <UnorderedList pl="1.75rem" pt="1rem" m="0" spacing="16px" {...props}>
    {props.children}
  </UnorderedList>
);
