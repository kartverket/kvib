import{j as o}from"./jsx-runtime-DgHZ7iq2.js";import{bq as r,B as i,br as c}from"./index-CoJY4uhr.js";const l={title:"Komponenter/Toast",component:r,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{type:{description:"The status (color) of the toast",table:{type:{summary:"info | warning | success | error | loading"}},defaultValue:{summary:"info"},control:"radio",options:["info","warning","success","error"]},title:{description:"The title of the toast",table:{type:{summary:"string"}},control:"text"},description:{description:"The description of the toast",table:{type:{summary:"string"}},control:"text"},duration:{description:"The duration of the toast in milliseconds",table:{type:{summary:"number"}},control:"number"}},args:{type:"info",title:"Title",description:"Description",duration:3e3}};r.displayName="Toaster";i.displayName="Button";const e={render:t=>o.jsxs(o.Fragment,{children:[o.jsx(r,{}),o.jsx(i,{colorPalette:t.colorPalette,w:"fit-content",onClick:()=>c.create({title:t.title,description:t.description,type:t.type,duration:t.duration}),children:"Show Toast"})]}),parameters:{docs:{source:{code:`
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        `}}}};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <>
      <Toaster />
      <Button colorPalette={args.colorPalette} w={"fit-content"} onClick={() => toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration
    })}>
        Show Toast
      </Button>
    </>,
  parameters: {
    docs: {
      source: {
        code: \`
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        \`
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const d=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,m as T};
