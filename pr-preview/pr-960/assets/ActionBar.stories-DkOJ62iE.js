import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{i as s,u as p,C as m,j as u,k as B,l as A,B as x}from"./index-Dsql8TDy.js";const g={title:"Komponenter/Action Bar",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},layout:"centered"}},S=t=>{const{open:i,onOpen:l,onClose:n}=p();return e.jsxs(e.Fragment,{children:[e.jsx(m,{onCheckedChange:d=>{d.checked?l():n()},colorPalette:t.colorPalette,children:"Show Action Bar"}),e.jsx(s,{open:i,onExitComplete:n,closeOnInteractOutside:!1,...t,children:e.jsxs(u,{children:[e.jsx(B,{children:"Selection content"}),e.jsx(A,{}),e.jsx(x,{variant:"outline",size:"sm",colorPalette:t.colorPalette,children:"Action"})]})})]})},j=`
<ActionBar open={open} onExitComplete={onClose} closeOnInteractOutside={false} {...props}>
  <ActionBarContent>
    <ActionBarSelectionTrigger>Selection content</ActionBarSelectionTrigger>
    <ActionBarSeparator />
    <Button>
      Action
    </Button>
  </ActionBarContent>
</ActionBar>
`,o={render:t=>e.jsx(S,{...t}),parameters:{docs:{source:{code:j}}}};var r,a,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ActionBarExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: actionBarString
      }
    }
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const h=["Preview"],O=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{O as A,o as P};
