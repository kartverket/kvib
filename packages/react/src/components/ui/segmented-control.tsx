"use client";

import { useSlotRecipe } from "@/hooks";
import { segmentedControlTheme } from "@/theme/components/segmented-control";
import { For, SegmentGroup } from "@chakra-ui/react";
import * as React from "react";

interface Item {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps extends SegmentGroup.RootProps {
  items: Array<string | Item>;
}

function normalize(items: Array<string | Item>): Item[] {
  return items.map(item => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControl(props, ref) {
    const { items, ...rest } = props;
    const data = React.useMemo(() => normalize(items), [items]);

    const recipe = useSlotRecipe({ recipe: segmentedControlTheme });
    const styles = recipe({ ...rest });
    const { root, item, itemText, indicator } = styles;

    return (
      <SegmentGroup.Root ref={ref} css={root} {...rest}>
        <SegmentGroup.Indicator css={indicator} />
        <For each={data}>
          {element => (
            <SegmentGroup.Item key={element.value} value={element.value} disabled={element.disabled} css={item}>
              <SegmentGroup.ItemText css={itemText}>{element.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          )}
        </For>
      </SegmentGroup.Root>
    );
  },
);
