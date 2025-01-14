import{j as a}from"./jsx-runtime-DQFEoQHt.js";import{I as t}from"./image-BajOZyTZ.js";import{S as g}from"./stack-BAqUyaXt.js";const f={title:"Komponenter/Image",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{align:{description:"How to align the image within its bounds. It maps to css `object-position` property.",table:{type:{summary:"ResponsiveValue<ObjectPosition<Length>>"}},control:"text"},crossOrigin:{description:"The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.",table:{type:{summary:'"" | "anonymous" | "use-credentials"'}},control:"text"},fit:{description:"How the image to fit within its bounds. It maps to css `object-fit` property.",table:{type:{summary:"ResponsiveValue<ObjectFit>"}},control:"text"},htmlHeight:{description:"The native HTML height attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},htmlWidth:{description:"The native HTML width attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},loading:{table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:{type:"radio"}},onError:{description:"A callback for when there was an error loading the image src",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},onLoad:{description:"A callback for when the image src has been loaded",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},sizes:{description:"The image sizes attribute",table:{type:{summary:"string"}},control:"text"},src:{description:"The image src attribute",table:{type:{summary:"string"}},control:"text"},srcSet:{description:"The image srcset attribute",table:{type:{summary:"string"}},control:"text"}}};t.displayName="Image";const r={args:{boxSize:"400px",fit:"contain",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>a.jsx(t,{...e,alt:"Map with pins"})},i={args:{fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>a.jsxs(g,{direction:"row",children:[a.jsx(t,{boxSize:"100px",...e,alt:"Map with pins"}),a.jsx(t,{boxSize:"150px",...e,alt:"Map with pins"}),a.jsx(t,{boxSize:"200px",...e,alt:"Map with pins"})]})},o={args:{boxSize:"150px",borderRadius:"full",fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>a.jsx(t,{...e,alt:"Map with pins"})};var s,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    boxSize: "400px",
    fit: "contain",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibImage {...args} alt="Map with pins" />
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibStack direction="row">
      <KvibImage boxSize="100px" {...args} alt="Map with pins" />
      <KvibImage boxSize="150px" {...args} alt="Map with pins" />
      <KvibImage boxSize="200px" {...args} alt="Map with pins" />
    </KvibStack>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var b,d,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    boxSize: "150px",
    borderRadius: "full",
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibImage {...args} alt="Map with pins" />
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const h=["Preview","ImageSizes","ImageBorderRadius"],M=Object.freeze(Object.defineProperty({__proto__:null,ImageBorderRadius:o,ImageSizes:i,Preview:r,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{M as I,r as P};
