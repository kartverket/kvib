import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{E as a,a as l,b as s}from"./editable-CxE1TwDx.js";const d={title:"Komponenter/Editable",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{activationMode:{description:"The activation mode of the component",table:{type:{summary:"ActivationMode"},defaultValue:{summary:"'click'"}},options:["click","dblclick"],control:{type:"radio"}},autoResize:{description:"Whether the editable should auto-resize to fit the content.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},defaultEdit:{description:"The initial edit state of the editable when it is first rendered. Use when you do not need to control its edit state.",table:{type:{summary:"boolean"}},control:"boolean"},defaultValue:{description:"The initial value of the editable",table:{type:{summary:"string"}},control:"text"},edit:{description:"Whether the editable is in edit mode",table:{type:{summary:"boolean"}},control:"boolean"},finalFocusEl:{description:"The element to focus when exiting edit mode",table:{type:{summary:"() => HTMLElement | null"}}},onEditChange:{description:"Callback invoked when the edit state changes",table:{type:{summary:"(details: EditChangeDetails) => void"}},control:"text"},onFocusOutside:{description:"Callback invoked when the editable loses focus",table:{type:{summary:"(event: FocusOutsideEvent) => void"}}},onInteractOutside:{description:"Callback invoked when an interaction happens outside the editable",table:{type:{summary:"(event: InteractOutsideEvent) => void"}}},onPointerDownOutside:{description:"Callback invoked when a pointer down event happens outside the editable",table:{type:{summary:"(event: PointerDownOutsideEvent) => void"}}},onValueChange:{description:"Callback invoked when the value changes",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},onValueCommit:{description:"Callback invoked when the value is committed",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},onValueRevert:{description:"Callback invoked when the value is reverted",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},placeholder:{description:"The placeholder text when the editable is empty",table:{type:{summary:"string"}},control:"text"},translations:{description:"Specifies the localized strings that identifies the accessibility elements and their states",table:{type:{summary:"IntlTranslations"}}},value:{description:"The value of the editable",table:{type:{summary:"string"}},control:"text"}}};a.displayName="Editable";l.displayName="EditableInput";s.displayName="EditablePreview";const e={args:{defaultValue:"Editable text"},render:r=>t.jsxs(a,{...r,children:[t.jsx(s,{}),t.jsx(l,{})]})};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultValue: "Editable text"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableInput />
    </KvibEditable>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{p as E,e as P};
