import{j as t}from"./index-D6_wGsWO.js";import{I as a,d as g}from"./index-80IJmMl9.js";const h={title:"Komponenter/Image",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{align:{description:"How to align the image within its bounds. It maps to css `object-position` property.",table:{type:{summary:"ResponsiveValue<ObjectPosition<Length>>"}},control:"text"},crossOrigin:{description:"The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.",table:{type:{summary:'"" | "anonymous" | "use-credentials"'}},control:"text"},fit:{description:"How the image to fit within its bounds. It maps to css `object-fit` property.",table:{type:{summary:"ResponsiveValue<ObjectFit>"}},control:"text"},htmlHeight:{description:"The native HTML height attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},htmlWidth:{description:"The native HTML width attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},loading:{table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:{type:"radio"}},onError:{description:"A callback for when there was an error loading the image src",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},onLoad:{description:"A callback for when the image src has been loaded",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},sizes:{description:"The image sizes attribute",table:{type:{summary:"string"}},control:"text"},src:{description:"The image src attribute",table:{type:{summary:"string"}},control:"text"},srcSet:{description:"The image srcset attribute",table:{type:{summary:"string"}},control:"text"}},args:{onError:void 0,onLoad:void 0}},r={args:{boxSize:"400px",fit:"contain",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>t.jsx(a,{...e,alt:"Map with pins"})},o={args:{fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>t.jsxs(g,{direction:"row",children:[t.jsx(a,{boxSize:"100px",...e,alt:"Map with pins"}),t.jsx(a,{boxSize:"150px",...e,alt:"Map with pins"}),t.jsx(a,{boxSize:"200px",...e,alt:"Map with pins"})]})},i={args:{boxSize:"150px",borderRadius:"full",fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:e=>t.jsx(a,{...e,alt:"Map with pins"})};var s,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    boxSize: "400px",
    fit: "contain",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibImage {...args} alt="Map with pins" />
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibStack direction="row">
      <KvibImage boxSize="100px" {...args} alt="Map with pins" />
      <KvibImage boxSize="150px" {...args} alt="Map with pins" />
      <KvibImage boxSize="200px" {...args} alt="Map with pins" />
    </KvibStack>
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var b,d,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    boxSize: "150px",
    borderRadius: "full",
    fit: "cover",
    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
  },
  render: args => <KvibImage {...args} alt="Map with pins" />
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const f=["Preview","ImageSizes","ImageBorderRadius"],y=Object.freeze(Object.defineProperty({__proto__:null,ImageBorderRadius:i,ImageSizes:o,Preview:r,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{y as I,r as P,i as a,o as b};
