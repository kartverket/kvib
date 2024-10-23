import{j as e}from"./extends-CwFRzn3r.js";import{u as f,a as g,c as E,E as o,b,d as w}from"./editable-preview-DfL9-772.js";import{f as k}from"./forward-ref-BWI-Phbn.js";import{c as j}from"./factory-lWLPzty5.js";import{c as T}from"./cx-BDMMs1jM.js";const m=k(function(i,p){const{getTextareaProps:v}=f(),y=g(),h=v(i,p),x=T("chakra-editable__textarea",i.className);return e.jsx(j.textarea,{...h,__css:{outline:0,...E,...y.textarea},className:x})});m.displayName="EditableTextarea";const V={title:"Skjemaelementer/Editable",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{defaultValue:{description:"The initial value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the Editable will be disabled.",table:{type:{summary:"boolean"}},control:"boolean"},isPreviewFocusable:{description:"If true, the read only view, has a tabIndex set to 0 so it can receive focus via the keyboard or click.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onCancel:{description:"Callback invoked when user cancels input with the Esc key. It provides the last confirmed value as argument.",table:{type:{summary:"(previousValue: string) => void"}},control:"text"},onChange:{description:"Callback invoked when user changes input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},onEdit:{description:"Callback invoked once the user enters edit mode.",table:{type:{summary:"() => void"}},control:"text"},onSubmit:{description:"Callback invoked when user confirms value with enter key or by blurring input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},placeholder:{description:"The placeholder text when the value is empty.",table:{type:{summary:"string"}},control:"text"},selectAllOnFocus:{description:"If true, the input's text will be highlighted on focus.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},startWithEditView:{description:"If true, the Editable will start with edit mode by default.",table:{type:{summary:"boolean"}},control:"boolean"},submitOnBlur:{description:"If true, it'll update the value onBlur and turn off the edit mode.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},value:{description:"The value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"}},args:{onCancel:void 0,onChange:void 0,onEdit:void 0,onSubmit:void 0}},t={args:{defaultValue:"Redigerbar tekst"},render:r=>e.jsxs(o,{...r,children:[e.jsx(b,{}),e.jsx(w,{})]})},a={args:{defaultValue:"Redigerbar tekst"},render:r=>e.jsxs(o,{...r,children:[e.jsx(b,{}),e.jsx(m,{})]})};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    defaultValue: "Redigerbar tekst"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableInput />
    </KvibEditable>
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultValue: "Redigerbar tekst"
  },
  render: args => <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableTextarea />
    </KvibEditable>
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const S=["Preview","EditableTextarea"],R=Object.freeze(Object.defineProperty({__proto__:null,EditableTextarea:a,Preview:t,__namedExportsOrder:S,default:V},Symbol.toStringTag,{value:"Module"}));export{R as E,t as P,a};
