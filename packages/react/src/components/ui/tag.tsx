import { useSlotRecipe } from "@/hooks";
import { Tag as ChakraTag } from "@chakra-ui/react";
import { forwardRef } from "react";

export interface TagProps extends ChakraTag.RootProps {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  onClose?: VoidFunction;
  closable?: boolean;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(props, ref) {
  const { startElement, endElement, onClose, closable = !!onClose, children, ...rest } = props;
  const tagRecipe = useSlotRecipe({ key: "tag" });
  const recipeProps = tagRecipe(props);

  const {
    root: rootStyling,
    startElement: startElementStyling,
    label: labelStyling,
    endElement: endElementStyling,
    closeTrigger: closeTriggerStyling,
  } = recipeProps;

  return (
    <ChakraTag.Root ref={ref} css={rootStyling} {...rest}>
      {startElement && <ChakraTag.StartElement css={startElementStyling}>{startElement}</ChakraTag.StartElement>}
      <ChakraTag.Label css={labelStyling}>{children}</ChakraTag.Label>
      {endElement && <ChakraTag.EndElement css={endElementStyling}>{endElement}</ChakraTag.EndElement>}
      {closable && (
        <ChakraTag.EndElement css={endElementStyling}>
          <ChakraTag.CloseTrigger onClick={onClose} css={closeTriggerStyling} />
        </ChakraTag.EndElement>
      )}
    </ChakraTag.Root>
  );
});
