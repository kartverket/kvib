import {
  Button,
  Center,
  FileUpload,
  FileUploadList,
  FileUploadProps,
  FileUploadTrigger,
  FileUpload as KvibFileUpload,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFileUpload> = {
  title: "Komponenter/File Upload",
  component: KvibFileUpload,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    invalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    colorPalette: {
      description: "Color of the radio",
      table: {
        type: {
          summary: "green | blue | gray | red",
        },
        defaultValue: {
          summary: "green",
        },
      },
      options: ["green", "blue", "gray", "red", "orange", "purple"],
      control: { type: "select" },
    },
    allowDrop: {
      description: "Whether to allow drag and drop in the dropzone element",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
      control: "boolean",
    },
    maxFiles: {
      description: "The maximum number of files",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "1",
        },
      },
      control: "number",
    },
    maxFileSize: {
      description: "The maximum file size in bytes",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "Infinity",
        },
      },
      control: "number",
    },
  },
};

export default meta;
type FileUploadStory = StoryObj<typeof KvibFileUpload>;

const FileUploadExample = (args: FileUploadProps) => (
  <Center>
    <FileUpload {...args}>
      <FileUploadTrigger>
        <Button colorPalette={args.colorPalette} leftIcon="upload_2">
          Last opp fil
        </Button>
      </FileUploadTrigger>
      <FileUploadList />
    </FileUpload>
  </Center>
);

export const Preview: FileUploadStory = {
  render: args => <FileUploadExample {...args} />,
};
