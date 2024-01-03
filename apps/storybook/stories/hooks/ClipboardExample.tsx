import { useClipboard, Flex, Input, Button, Editable, EditablePreview, EditableInput } from "@kvib/react";
export const ClipboardExample = () => {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <>
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
    </>
  );
};
