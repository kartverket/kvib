import { Image as KvibImage, Stack as KvibStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibImage> = {
  title: "Komponenter/Image",
  component: KvibImage,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    align: {
      description: "How to align the image within its bounds. It maps to css `object-position` property.",
      table: {
        type: { summary: "ResponsiveValue<ObjectPosition<Length>>" },
      },
      control: "text",
    },
    crossOrigin: {
      description:
        "The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.",
      table: {
        type: { summary: `"" | "anonymous" | "use-credentials"` },
      },
      control: "text",
    },
    fit: {
      description: "How the image to fit within its bounds. It maps to css `object-fit` property.",
      table: {
        type: { summary: "ResponsiveValue<ObjectFit>" },
      },
      control: "text",
    },
    htmlHeight: {
      description: "The native HTML height attribute to the passed to the img",
      table: {
        type: { summary: "string | number" },
      },
      control: "text",
    },
    htmlWidth: {
      description: "The native HTML width attribute to the passed to the img",
      table: {
        type: { summary: "string | number" },
      },
      control: "text",
    },
    loading: {
      table: {
        type: { summary: "eager | lazy" },
      },
      options: ["eager", "lazy"],
      control: { type: "radio" },
    },
    onError: {
      description: "A callback for when there was an error loading the image src",
      table: {
        type: { summary: "ReactEventHandler<HTMLImageElement>" },
      },
      control: "text",
    },
    onLoad: {
      description: "A callback for when the image src has been loaded",
      table: {
        type: { summary: "ReactEventHandler<HTMLImageElement>" },
      },
      control: "text",
    },
    sizes: {
      description: "The image sizes attribute",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    src: {
      description: "The image src attribute",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    srcSet: {
      description: "The image srcset attribute",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibImage>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibImage as any).displayName = "Image";

export const Preview: Story = {
  args: {
    boxSize: "400px",
    fit: "contain",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
  },
  render: args => <KvibImage {...args} alt="Map with pins" />,
};

export const ImageSizes: Story = {
  args: {
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
  },
  render: args => (
    <KvibStack direction="row">
      <KvibImage boxSize="100px" {...args} alt="Map with pins" />
      <KvibImage boxSize="150px" {...args} alt="Map with pins" />
      <KvibImage boxSize="200px" {...args} alt="Map with pins" />
    </KvibStack>
  ),
};

export const ImageBorderRadius: Story = {
  args: {
    boxSize: "150px",
    borderRadius: "full",
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
  },
  render: args => <KvibImage {...args} alt="Map with pins" />,
};
