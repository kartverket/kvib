import { FileUpload as KvibFileUpload } from "@kvib/react/src/file-upload";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFileUpload> = {
  title: "Komponenter/File Upload**",
  component: KvibFileUpload,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    type: {
      description: "Input type",
      table: {
        type: { summary: "file" },
        defaultValue: { summary: "file" },
      },
      options: ["file"],
      control: { type: "radio" },
    },
    size: {
      description: "Input size",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type FileUploadStory = StoryObj<typeof KvibFileUpload>;

export const FileUpload: FileUploadStory = {
  args: {
    type: "file",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => <KvibFileUpload {...args} />,
};
