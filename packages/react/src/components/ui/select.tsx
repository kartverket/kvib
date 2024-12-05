"use client";

import type { CollectionItem } from "@chakra-ui/react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import * as React from "react";
import { PropsWithChildren } from "react";

interface SelectTriggerProps extends ChakraSelect.ControlProps {
  clearable?: boolean;
}

export const SelectTrigger = ChakraSelect.Trigger as React.FC<PropsWithChildren<SelectTriggerProps>>;

interface SelectContentProps extends ChakraSelect.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const SelectContent = ChakraSelect.Content as React.FC<PropsWithChildren<SelectContentProps>>;

interface SelectItemProps extends ChakraSelect.ItemProps {
  item: CollectionItem;
}

export const SelectItem = ChakraSelect.Item as React.FC<PropsWithChildren<SelectItemProps>>;

interface SelectValueTextProps extends Omit<ChakraSelect.ValueTextProps, "children"> {
  placeholder?: string;
  children?(items: CollectionItem[]): React.ReactNode;
}

export const SelectValueText = ChakraSelect.ValueText as React.FC<SelectValueTextProps>;

export const SelectRoot = ChakraSelect.Root as ChakraSelect.RootComponent;

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
  label: React.ReactNode;
}

export const SelectItemGroup = React.forwardRef<HTMLDivElement, PropsWithChildren<SelectItemGroupProps>>(
  function SelectItemGroup(props, ref) {
    const { children, label, ...rest } = props;
    return (
      <ChakraSelect.ItemGroup {...rest} ref={ref}>
        <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
        {children}
      </ChakraSelect.ItemGroup>
    );
  },
);

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
