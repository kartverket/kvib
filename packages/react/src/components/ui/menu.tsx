"use client";

import { BoxProps } from "@/layout";
import { AbsoluteCenter, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
import { Merge } from "../utils";
import { ButtonProps } from "./button";

interface MenuContentProps extends Merge<BoxProps, ChakraMenu.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(function MenuContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraMenu.Positioner>
        <ChakraMenu.Content ref={ref} {...rest} />
      </ChakraMenu.Positioner>
    </Portal>
  );
});

export const MenuArrow = React.forwardRef<HTMLDivElement, ChakraMenu.ArrowProps>(function MenuArrow(props, ref) {
  return (
    <ChakraMenu.Arrow ref={ref} {...props}>
      <ChakraMenu.ArrowTip />
    </ChakraMenu.Arrow>
  );
});

export const MenuCheckboxItem = React.forwardRef<HTMLDivElement, ChakraMenu.CheckboxItemProps>(
  function MenuCheckboxItem(props, ref) {
    return (
      <ChakraMenu.CheckboxItem ref={ref} {...props}>
        <ChakraMenu.ItemIndicator hidden={false}>
          <LuCheck />
        </ChakraMenu.ItemIndicator>
        {props.children}
      </ChakraMenu.CheckboxItem>
    );
  },
);

export const MenuRadioItem = React.forwardRef<HTMLDivElement, ChakraMenu.RadioItemProps>(
  function MenuRadioItem(props, ref) {
    const { children, ...rest } = props;
    return (
      <ChakraMenu.RadioItem ps="8" ref={ref} {...rest}>
        <AbsoluteCenter axis="horizontal" left="4" asChild>
          <ChakraMenu.ItemIndicator>
            <LuCheck />
          </ChakraMenu.ItemIndicator>
        </AbsoluteCenter>
        <ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>
      </ChakraMenu.RadioItem>
    );
  },
);

export const MenuItemGroup = React.forwardRef<HTMLDivElement, ChakraMenu.ItemGroupProps>(
  function MenuItemGroup(props, ref) {
    const { title, children, ...rest } = props;
    return (
      <ChakraMenu.ItemGroup ref={ref} {...rest}>
        {title && <ChakraMenu.ItemGroupLabel userSelect="none">{title}</ChakraMenu.ItemGroupLabel>}
        {children}
      </ChakraMenu.ItemGroup>
    );
  },
);

export interface MenuTriggerItemProps extends Merge<ButtonProps, ChakraMenu.ItemProps> {
  startIcon?: React.ReactNode;
}

export const MenuTriggerItem = React.forwardRef<HTMLDivElement, MenuTriggerItemProps>(
  function MenuTriggerItem(props, ref) {
    const { startIcon, children, ...rest } = props;
    return (
      <ChakraMenu.TriggerItem ref={ref} {...rest}>
        {startIcon}
        {children}
        <LuChevronRight />
      </ChakraMenu.TriggerItem>
    );
  },
);

export const MenuRadioItemGroup = ChakraMenu.RadioItemGroup;

interface MenuContextTriggerProps extends Merge<ButtonProps, ChakraMenu.ContextTriggerProps> {}

export const MenuContextTrigger = React.forwardRef<HTMLButtonElement, MenuContextTriggerProps>(
  function MenuContextTrigger(props, ref) {
    return <ChakraMenu.ContextTrigger ref={ref} {...props} />;
  },
);

export const MenuRoot = ChakraMenu.Root;
export const MenuSeparator = ChakraMenu.Separator;

interface MenuItemProps extends Merge<BoxProps, ChakraMenu.ItemProps> {
  value: string;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(props, ref) {
  return <ChakraMenu.Item ref={ref} {...props} />;
});

export const MenuItemText = ChakraMenu.ItemText;
export const MenuItemCommand = ChakraMenu.ItemCommand;

interface MenuTriggerProps extends Merge<ButtonProps, ChakraMenu.TriggerProps> {}

export const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(function MenuTrigger(props, ref) {
  return <ChakraMenu.Trigger ref={ref} {...props} />;
});
