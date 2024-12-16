import{j as t}from"./index-D6_wGsWO.js";import{aI as i,aJ as l,aK as s}from"./index-hsVzZxqS.js";const d={title:"Komponenter/Editable",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{defaultValue:{description:"The initial value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the Editable will be disabled.",table:{type:{summary:"boolean"}},control:"boolean"},isPreviewFocusable:{description:"If true, the read only view, has a tabIndex set to 0 so it can receive focus via the keyboard or click.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},onCancel:{description:"Callback invoked when user cancels input with the Esc key. It provides the last confirmed value as argument.",table:{type:{summary:"(previousValue: string) => void"}},control:"text"},onChange:{description:"Callback invoked when user changes input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},onEdit:{description:"Callback invoked once the user enters edit mode.",table:{type:{summary:"() => void"}},control:"text"},onSubmit:{description:"Callback invoked when user confirms value with enter key or by blurring input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},placeholder:{description:"The placeholder text when the value is empty.",table:{type:{summary:"string"}},control:"text"},selectAllOnFocus:{description:"If true, the input's text will be highlighted on focus.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},startWithEditView:{description:"If true, the Editable will start with edit mode by default.",table:{type:{summary:"boolean"}},control:"boolean"},submitOnBlur:{description:"If true, it'll update the value onBlur and turn off the edit mode.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},value:{description:"The value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"}},args:{onCancel:void 0,onChange:void 0,onEdit:void 0,onSubmit:void 0}},e={args:{defaultValue:"Redigerbar tekst"},render:n=>t.jsxs(i,{...n,children:[t.jsx(l,{}),t.jsx(s,{})]})};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    defaultValue: "Redigerbar tekst"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableInput />
    </KvibEditable>
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{m as E,e as P};
