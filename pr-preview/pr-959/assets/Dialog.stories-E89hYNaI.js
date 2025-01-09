import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{Q as s,R as i,B as n,S as d,U as c,V as p,W as m,X as u,Y as h,Z as y}from"./index-CRrqj8Jn.js";import{B as g}from"./box-Bmov6X-Z.js";const b={title:"Komponenter/Dialog (Modal)",component:s,argTypes:{size:{description:"The size of the component",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},open:{name:"open",description:"Whether the dialog is open",table:{type:{summary:"boolean"}}},closeOnEscape:{description:"Whether the dialog should close when the escape key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnInteractOutside:{description:"Whether the dialog should close when interacting outside of it",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},defaultOpen:{description:"The initial open state of the dialog when it is first rendered. Use when you do not need to control its open state.",table:{type:{summary:"boolean"}},control:"boolean"},modal:{description:"Whether to prevent pointer interaction outside the element and hide all content below it",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},motionPreset:{description:"The motion preset of the dialog",table:{type:{summary:"'scale' | 'slide-in-bottom' | 'slide-in-top' | 'slide-in-left' | 'slide-in-right' | 'none'"},defaultValue:{summary:"'scale'"}},control:{type:"radio"},options:["scale","slide-in-bottom","slide-in-top","slide-in-left","slide-in-right","none"]},onOpenChange:{description:"Callback to be invoked when the dialog is opened or closed",table:{type:{summary:"(details: OpenChangeDetails) => void"}}},onInteractOutside:{description:"Function called when an interaction happens outside the component",table:{type:{summary:"(event: InteractOutsideEvent) => void"}}},onExitComplete:{description:"Function called when the focus is moved outside the component",table:{type:{summary:"(event: FocusOutsideEvent) => void"}}},onEscapeKeyDown:{description:"Function called when the escape key is pressed",table:{type:{summary:"(event: KeyboardEvent) => void"}}},preventScroll:{description:"Whether the dialog should prevent scrolling on the body",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{}},x=t=>e.jsx(e.Fragment,{children:e.jsxs(s,{...t,children:[e.jsx(i,{asChild:!0,children:e.jsx(n,{colorPalette:t.colorPalette,children:"Åpne dialog"})}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(p,{children:"Her er en modal"})}),e.jsx(m,{children:"Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis."}),e.jsxs(u,{justifyContent:"space-between",children:[e.jsx(n,{variant:"tertiary",colorPalette:t.colorPalette,children:"Tertiær"}),e.jsxs(g,{children:[e.jsx(n,{mr:3,variant:"secondary",colorPalette:t.colorPalette,children:"Sekundær"}),e.jsx(h,{asChild:!0,children:e.jsx(n,{colorPalette:t.colorPalette,children:"Primær"})})]})]}),e.jsx(y,{})]})]})}),o={render:t=>e.jsx(x,{...t}),parameters:{docs:{source:{type:"code",language:"tsx"}}}};var a,r,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <DialogExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx"
      }
    }
  }
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const f=["Preview"],P=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{P as D,o as P};
