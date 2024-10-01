import { Button, Editable, EditableInput, EditablePreview, Flex, Input, useClipboard } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import { DocsCanvas } from "../templates/DocsCanvas";
import { ClipboardStrings } from "./srcClipboardStrings";
export const ClipboardExample = () => {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <DocsCanvas>
      <Flex mb={2}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
      <Source code={ClipboardStrings} dark />
    </DocsCanvas>
  );
};
