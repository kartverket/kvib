import{j as e}from"./index-D6_wGsWO.js";import{aS as o,aT as b,aU as c,aV as m}from"./index-aLGUikq2.js";const p={title:"Komponenter/Editable",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{defaultValue:{description:"The initial value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the Editable will be disabled.",table:{type:{summary:"boolean"}},control:"boolean"},isPreviewFocusable:{description:"If true, the read only view, has a tabIndex set to 0 so it can receive focus via the keyboard or click.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},onCancel:{description:"Callback invoked when user cancels input with the Esc key. It provides the last confirmed value as argument.",table:{type:{summary:"(previousValue: string) => void"}},control:"text"},onChange:{description:"Callback invoked when user changes input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},onEdit:{description:"Callback invoked once the user enters edit mode.",table:{type:{summary:"() => void"}},control:"text"},onSubmit:{description:"Callback invoked when user confirms value with enter key or by blurring input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},placeholder:{description:"The placeholder text when the value is empty.",table:{type:{summary:"string"}},control:"text"},selectAllOnFocus:{description:"If true, the input's text will be highlighted on focus.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},startWithEditView:{description:"If true, the Editable will start with edit mode by default.",table:{type:{summary:"boolean"}},control:"boolean"},submitOnBlur:{description:"If true, it'll update the value onBlur and turn off the edit mode.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},value:{description:"The value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"}},args:{onCancel:void 0,onChange:void 0,onEdit:void 0,onSubmit:void 0}},t={args:{defaultValue:"Redigerbar tekst"},render:r=>e.jsxs(o,{...r,children:[e.jsx(b,{}),e.jsx(c,{})]})},a={args:{defaultValue:"Redigerbar tekst"},render:r=>e.jsxs(o,{...r,children:[e.jsx(b,{}),e.jsx(m,{})]})};var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultValue: "Redigerbar tekst"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableInput />
    </KvibEditable>
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,d,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    defaultValue: "Redigerbar tekst"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableTextarea />
    </KvibEditable>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const v=["Preview","EditableTextarea"],g=Object.freeze(Object.defineProperty({__proto__:null,EditableTextarea:a,Preview:t,__namedExportsOrder:v,default:p},Symbol.toStringTag,{value:"Module"}));export{g as E,t as P,a};
