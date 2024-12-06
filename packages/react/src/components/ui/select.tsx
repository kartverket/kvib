"use client";

import type { CollectionItem } from "@chakra-ui/react";
import { Select as ChakraSelect, Portal } from "@chakra-ui/react";
import * as React from "react";
import { CloseButton } from "./close-button";

interface SelectTriggerProps extends ChakraSelect.ControlProps {
  clearable?: boolean;
}

export function SelectTrigger(props: SelectTriggerProps) {
  const { children, clearable, ...rest } = props;
  return (
    <ChakraSelect.Control {...rest}>
      <ChakraSelect.Trigger>{children}</ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup>
        {clearable && <SelectClearTrigger />}
        <ChakraSelect.Indicator />
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Control>
  );
}

const SelectClearTrigger = (props: ChakraSelect.ClearTriggerProps) => {
  return (
    <ChakraSelect.ClearTrigger asChild {...props}>
      <CloseButton size="xs" variant="plain" focusVisibleRing="inside" focusRingWidth="2px" pointerEvents="auto" />
    </ChakraSelect.ClearTrigger>
  );
};

interface SelectContentProps extends ChakraSelect.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export function SelectContent(props: SelectContentProps) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraSelect.Positioner>
        <ChakraSelect.Content {...rest} />
      </ChakraSelect.Positioner>
    </Portal>
  );
}

export function SelectItem(props: ChakraSelect.ItemProps) {
  const { item, children, ...rest } = props;
  return (
    <ChakraSelect.Item key={item.value} item={item} {...rest}>
      {children}
      <ChakraSelect.ItemIndicator />
    </ChakraSelect.Item>
  );
}

interface SelectValueTextProps extends Omit<ChakraSelect.ValueTextProps, "children"> {
  children?(items: CollectionItem[]): React.ReactNode;
}

export function SelectValueText(props: SelectValueTextProps) {
  const { children, ...rest } = props;
  return (
    <ChakraSelect.ValueText {...rest}>
      <ChakraSelect.Context>
        {select => {
          const items = select.selectedItems;
          if (items.length === 0) return props.placeholder;
          if (children) return children(items);
          if (items.length === 1) return select.collection.stringifyItem(items[0]);
          return `${items.length} selected`;
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  );
}

export function SelectRoot(props: ChakraSelect.RootProps) {
  return (
    <ChakraSelect.Root {...props} positioning={{ sameWidth: true, ...props.positioning }}>
      {props.asChild ? (
        props.children
      ) : (
        <>
          <ChakraSelect.HiddenSelect />
          {props.children}
        </>
      )}
    </ChakraSelect.Root>
  );
}

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
  label: React.ReactNode;
}

export function SelectItemGroup(props: SelectItemGroupProps) {
  const { children, label, ...rest } = props;
  return (
    <ChakraSelect.ItemGroup {...rest}>
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  );
}

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
