import{j as e}from"./extends-CwFRzn3r.js";import{S as i}from"./switch-CD6YLYlR.js";import{F as f}from"./Form-control-DGJzYvuD.js";import{F as r}from"./Form-label-DGuXXNOx.js";import{S as w}from"./stack-Crl0JO1i.js";import{S as x}from"./simple-grid-CQLrn815.js";const F={title:"Skjemaelementer/Switch",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-describedby":{table:{type:{summary:"string"}},control:"text"},"aria-invalid":{table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},"aria-label":{description:"Defines the string that labels the checkbox element.",table:{type:{summary:"string"}},control:"text"},"aria-labelledby":{description:"Refers to the id of the element that labels the checkbox element.",table:{type:{summary:"string"}},control:"text"},colorScheme:{description:"The visual color appearance of the badge",table:{type:{summary:"green | blue | red | gray"},defultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},defaultChecked:{description:"If true, the checkbox will be initially checked.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},id:{description:"id assigned to input",table:{type:{summary:"string"}},control:"text"},isChecked:{description:"If true, the checkbox will be checked. You'll need to pass onChange to update its value (since it is now controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isFocusable:{description:"If true and isDisabled is passed, the checkbox will remain tabbable but not interactive",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"If true, the checkbox is marked as invalid. Changes style of unchecked state.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the checkbox will be readonly",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isRequired:{description:"If true, the checkbox input is marked as required, and required attribute will be added",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},name:{description:"The name of the input field in a checkbox (Useful for form submission).",table:{type:{summary:"string"}},control:"text"},onBlur:{description:"The callback invoked when the checkbox is blurred (loses focus)",table:{type:{summary:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},control:"function"},onChange:{description:"The callback invoked when the checked state of the Checkbox changes.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}},control:"function"},onFocus:{description:"The callback invoked when the checkbox is focused",table:{type:{summary:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},control:"function"},size:{description:"The size of the Switch",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:"radio"},spacing:{description:"The spacing between the switch and its label text",table:{type:{summary:"ResponsiveValue<string | number | (string & {})> "},defaultValue:{summary:"0.5rem"}},control:"text"},tabIndex:{description:"The tab-index property of the underlying input element.",table:{type:{summary:"number"}},control:"number"},value:{description:"The value to be used in the checkbox input. This is the value that will be returned on form submission.",table:{type:{summary:"string | number"}},control:"text"},variant:{description:"The variant of the Switch",table:{type:{summary:"string"}},control:"text"}},args:{onBlur:void 0,onChange:void 0,onFocus:void 0}},t={args:{},render:a=>e.jsxs(f,{display:"flex",alignItems:"center",children:[e.jsx(r,{htmlFor:"email-alerts",mb:"0",children:"Skru på varsler via mail?"}),e.jsx(i,{...a,id:"email-alerts"})]})},s={args:{},render:a=>e.jsxs(w,{align:"center",direction:"row",children:[e.jsx(i,{...a,"aria-label":"Switch small",size:"sm"}),e.jsx(i,{...a,"aria-label":"Switch medium",size:"md"}),e.jsx(i,{...a,"aria-label":"Switch large",size:"lg"})]})},l={args:{isChecked:!0},render:a=>e.jsxs(w,{direction:"row",children:[e.jsx(i,{...a,"aria-label":"Switch green",colorScheme:"green"}),e.jsx(i,{...a,"aria-label":"Switch blue",colorScheme:"blue"}),e.jsx(i,{...a,"aria-label":"Switch red",colorScheme:"red"}),e.jsx(i,{...a,"aria-label":"Switch gray",colorScheme:"gray"})]})},o={args:{},render:a=>e.jsxs(f,{as:x,columns:{base:2,lg:4},children:[e.jsx(r,{id:"isCheckedLabel",htmlFor:"isChecked",children:"isChecked:"}),e.jsx(i,{...a,id:"isChecked",isChecked:!0}),e.jsx(r,{id:"isDisabledLabel",htmlFor:"isDisabled",children:"isDisabled:"}),e.jsx(i,{...a,id:"isDisabled",isDisabled:!0,defaultChecked:!0}),e.jsx(r,{id:"isFocusableLabel",htmlFor:"isFocusable",children:"isFocusable:"}),e.jsx(i,{...a,id:"isFocusable",isFocusable:!0,isDisabled:!0}),e.jsx(r,{id:"isInvalidLabel",htmlFor:"isInvalid",children:"isInvalid:"}),e.jsx(i,{...a,id:"isInvalid",isInvalid:!0}),e.jsx(r,{id:"isReadOnlyLabel",htmlFor:"isReadOnly",children:"isReadOnly:"}),e.jsx(i,{...a,id:"isReadOnly",isReadOnly:!0}),e.jsx(r,{id:"isRequiredLabel",htmlFor:"isRequired",children:"isRequired:"}),e.jsx(i,{...a,id:"isRequired",isRequired:!0})]})};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Skru på varsler via mail?
      </FormLabel>
      <KvibSwitch {...args} id="email-alerts" />
    </FormControl>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,b,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack align="center" direction="row">
      <KvibSwitch {...args} aria-label="Switch small" size="sm" />
      <KvibSwitch {...args} aria-label="Switch medium" size="md" />
      <KvibSwitch {...args} aria-label="Switch large" size="lg" />
    </KvibStack>
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,p,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isChecked: true
  },
  render: args => <KvibStack direction="row">
      <KvibSwitch {...args} aria-label="Switch green" colorScheme="green" />
      <KvibSwitch {...args} aria-label="Switch blue" colorScheme="blue" />
      <KvibSwitch {...args} aria-label="Switch red" colorScheme="red" />
      <KvibSwitch {...args} aria-label="Switch gray" colorScheme="gray" />
    </KvibStack>
}`,...(y=(p=l.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var S,g,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl as={SimpleGrid} columns={{
    base: 2,
    lg: 4
  }}>
      <FormLabel id="isCheckedLabel" htmlFor="isChecked">
        isChecked:
      </FormLabel>
      <KvibSwitch {...args} id="isChecked" isChecked />

      <FormLabel id="isDisabledLabel" htmlFor="isDisabled">
        isDisabled:
      </FormLabel>
      <KvibSwitch {...args} id="isDisabled" isDisabled defaultChecked />

      <FormLabel id="isFocusableLabel" htmlFor="isFocusable">
        isFocusable:
      </FormLabel>
      <KvibSwitch {...args} id="isFocusable" isFocusable isDisabled />

      <FormLabel id="isInvalidLabel" htmlFor="isInvalid">
        isInvalid:
      </FormLabel>
      <KvibSwitch {...args} id="isInvalid" isInvalid />

      <FormLabel id="isReadOnlyLabel" htmlFor="isReadOnly">
        isReadOnly:
      </FormLabel>
      <KvibSwitch {...args} id="isReadOnly" isReadOnly />

      <FormLabel id="isRequiredLabel" htmlFor="isRequired">
        isRequired:
      </FormLabel>
      <KvibSwitch {...args} id="isRequired" isRequired />
    </FormControl>
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const k=["Switch","SwitchSizes","SwitchColors","SwitchStates"],T=Object.freeze(Object.defineProperty({__proto__:null,Switch:t,SwitchColors:l,SwitchSizes:s,SwitchStates:o,__namedExportsOrder:k,default:F},Symbol.toStringTag,{value:"Module"}));export{T as S,t as a,s as b,l as c,o as d};
