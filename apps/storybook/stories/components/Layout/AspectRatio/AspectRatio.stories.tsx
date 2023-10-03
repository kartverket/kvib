import { AspectRatio as KvibAspectRatio } from "@kvib/react/src/layout";
// import { Image } from "@kvib/react/src/";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAspectRatio> = {
  title: "Komponenter/Layout/AspectRatio",
  component: KvibAspectRatio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    ratio: {
      description: "The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",
      table: { type: { summary: "ResponsiveValue<number>" } },
      control: "number",
    },
  },
};

export default meta;
// type Story = StoryObj<typeof KvibAspectRatio>;

// export const AspectRatio: Story = {
//   args: { ratio: 4 / 3 },
//   render: (args) => (
//     <KvibAspectRatio {...args}>
//       <Image
//         alt="trees"
//         src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
//       />
//     </KvibAspectRatio>
//   ),
// };

// export const AspectRatioMap: Story = {
//   args: { ratio: 16 / 9 },
//   render: (args) => (
//     <KvibAspectRatio {...args}>
//       <iframe
//         title="hønefoss kart"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"
//       ></iframe>
//     </KvibAspectRatio>
//   ),
// };

// export const AspectRatioVideo: Story = {
//   args: { maxW: "560px", ratio: 1 },
//   render: (args) => (
//     <KvibAspectRatio {...args}>
//       <iframe
//         title="kart og kompass"
//         src="https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr"
//         allowFullScreen
//       />
//     </KvibAspectRatio>
//   ),
// };
