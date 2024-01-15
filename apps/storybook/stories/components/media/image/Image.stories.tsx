import { Image as KvibImage, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibImage> = {
  title: "Media/Image",
  component: KvibImage,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
    fallback: {
      description: "Fallback element to show if image is loading or image fails.",
      table: {
        type: { summary: "ReactElement<any, string | JSXElementConstructor<any>>" },
      },
      control: "text",
    },
    fallbackSrc: {
      description:
        "Fallback image src to show if image is loading or image fails. Note 🚨: We recommend you use a local image",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    fallbackStrategy: {
      description:
        "- beforeLoadOrError(default): loads the fallbackImage while loading the src - onError: loads the fallbackImage only if there is an error fetching the src",
      table: {
        type: { summary: "FallbackStrategy" },
        defaultValue: { summary: "beforeLoadOrError" },
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
    ignoreFallback: {
      description: "If true, opt out of the fallbackSrc logic and use as img.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
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
  args: {
    onError: undefined,
    onLoad: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof KvibImage>;

export const Image: Story = {
  args: {
    boxSize: "400px",
    fit: "contain",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
  },
  render: (args) => <KvibImage {...args} alt="Map with pins" />,
};

export const ImageSizes: Story = {
  args: {
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
  },
  render: (args) => (
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
  render: (args) => <KvibImage {...args} alt="Map with pins" />,
};

export const ImageFallback: Story = {
  args: {},
  render: (args) => (
    <KvibImage {...args} alt="Map with pins" src="utilgjengelig.png" fallbackSrc="https://via.placeholder.com/150" />
  ),
};
