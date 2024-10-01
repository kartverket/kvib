import{j as e}from"./extends-CwFRzn3r.js";import{u as E}from"./chunk-7D6N5TE5-DJ-8GvmY.js";import{f as M,o as P,c,a as N}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{a as H}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{r as m}from"./index-BwDkhjyp.js";import{F as C}from"./Form-control-CG1fyGaW.js";import{F as r}from"./Form-label-D-r0Q-vl.js";import{S as L}from"./chunk-ZHMYA64R-V_96TD_T.js";import{S as B}from"./chunk-NEK3OOAM-DbYvnad0.js";var i=M(function(d,R){const s=H("Switch",d),{spacing:b="0.5rem",children:u,...I}=P(d),{getIndicatorProps:_,getInputProps:K,getCheckboxProps:T,getRootProps:D,getLabelProps:O}=E(I),q=m.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...s.container}),[s.container]),z=m.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...s.track}),[s.track]),V=m.useMemo(()=>({userSelect:"none",marginStart:b,...s.label}),[b,s.label]);return e.jsxs(c.label,{...D(),className:N("chakra-switch",d.className),__css:q,children:[e.jsx("input",{className:"chakra-switch__input",...K({},R)}),e.jsx(c.span,{...T(),className:"chakra-switch__track",__css:z,children:e.jsx(c.span,{__css:s.thumb,className:"chakra-switch__thumb",..._()})}),u&&e.jsx(c.span,{className:"chakra-switch__label",...O(),__css:V,children:u})]})});i.displayName="Switch";const G={title:"Skjemaelementer/Switch",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-describedby":{table:{type:{summary:"string"}},control:"text"},"aria-invalid":{table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},"aria-label":{description:"Defines the string that labels the checkbox element.",table:{type:{summary:"string"}},control:"text"},"aria-labelledby":{description:"Refers to the id of the element that labels the checkbox element.",table:{type:{summary:"string"}},control:"text"},colorScheme:{description:"The visual color appearance of the badge",table:{type:{summary:"green | blue | red | gray"},defultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},defaultChecked:{description:"If true, the checkbox will be initially checked.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},id:{description:"id assigned to input",table:{type:{summary:"string"}},control:"text"},isChecked:{description:"If true, the checkbox will be checked. You'll need to pass onChange to update its value (since it is now controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isFocusable:{description:"If true and isDisabled is passed, the checkbox will remain tabbable but not interactive",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"If true, the checkbox is marked as invalid. Changes style of unchecked state.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the checkbox will be readonly",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isRequired:{description:"If true, the checkbox input is marked as required, and required attribute will be added",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},name:{description:"The name of the input field in a checkbox (Useful for form submission).",table:{type:{summary:"string"}},control:"text"},onBlur:{description:"The callback invoked when the checkbox is blurred (loses focus)",table:{type:{summary:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},control:"function"},onChange:{description:"The callback invoked when the checked state of the Checkbox changes.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}},control:"function"},onFocus:{description:"The callback invoked when the checkbox is focused",table:{type:{summary:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},control:"function"},size:{description:"The size of the Switch",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:"radio"},spacing:{description:"The spacing between the switch and its label text",table:{type:{summary:"ResponsiveValue<string | number | (string & {})> "},defaultValue:{summary:"0.5rem"}},control:"text"},tabIndex:{description:"The tab-index property of the underlying input element.",table:{type:{summary:"number"}},control:"number"},value:{description:"The value to be used in the checkbox input. This is the value that will be returned on form submission.",table:{type:{summary:"string | number"}},control:"text"},variant:{description:"The variant of the Switch",table:{type:{summary:"string"}},control:"text"}},args:{onBlur:void 0,onChange:void 0,onFocus:void 0}},t={args:{},render:a=>e.jsxs(C,{display:"flex",alignItems:"center",children:[e.jsx(r,{htmlFor:"email-alerts",mb:"0",children:"Skru på varsler via mail?"}),e.jsx(i,{...a,id:"email-alerts"})]})},l={args:{},render:a=>e.jsxs(L,{align:"center",direction:"row",children:[e.jsx(i,{...a,"aria-label":"Switch small",size:"sm"}),e.jsx(i,{...a,"aria-label":"Switch medium",size:"md"}),e.jsx(i,{...a,"aria-label":"Switch large",size:"lg"})]})},o={args:{isChecked:!0},render:a=>e.jsxs(L,{direction:"row",children:[e.jsx(i,{...a,"aria-label":"Switch green",colorScheme:"green"}),e.jsx(i,{...a,"aria-label":"Switch blue",colorScheme:"blue"}),e.jsx(i,{...a,"aria-label":"Switch red",colorScheme:"red"}),e.jsx(i,{...a,"aria-label":"Switch gray",colorScheme:"gray"})]})},n={args:{},render:a=>e.jsxs(C,{as:B,columns:{base:2,lg:4},children:[e.jsx(r,{id:"isCheckedLabel",htmlFor:"isChecked",children:"isChecked:"}),e.jsx(i,{...a,id:"isChecked",isChecked:!0}),e.jsx(r,{id:"isDisabledLabel",htmlFor:"isDisabled",children:"isDisabled:"}),e.jsx(i,{...a,id:"isDisabled",isDisabled:!0,defaultChecked:!0}),e.jsx(r,{id:"isFocusableLabel",htmlFor:"isFocusable",children:"isFocusable:"}),e.jsx(i,{...a,id:"isFocusable",isFocusable:!0,isDisabled:!0}),e.jsx(r,{id:"isInvalidLabel",htmlFor:"isInvalid",children:"isInvalid:"}),e.jsx(i,{...a,id:"isInvalid",isInvalid:!0}),e.jsx(r,{id:"isReadOnlyLabel",htmlFor:"isReadOnly",children:"isReadOnly:"}),e.jsx(i,{...a,id:"isReadOnly",isReadOnly:!0}),e.jsx(r,{id:"isRequiredLabel",htmlFor:"isRequired",children:"isRequired:"}),e.jsx(i,{...a,id:"isRequired",isRequired:!0})]})};var h,p,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Skru på varsler via mail?
      </FormLabel>
      <KvibSwitch {...args} id="email-alerts" />
    </FormControl>
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var S,g,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack align="center" direction="row">
      <KvibSwitch {...args} aria-label="Switch small" size="sm" />
      <KvibSwitch {...args} aria-label="Switch medium" size="md" />
      <KvibSwitch {...args} aria-label="Switch large" size="lg" />
    </KvibStack>
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,w,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isChecked: true
  },
  render: args => <KvibStack direction="row">
      <KvibSwitch {...args} aria-label="Switch green" colorScheme="green" />
      <KvibSwitch {...args} aria-label="Switch blue" colorScheme="blue" />
      <KvibSwitch {...args} aria-label="Switch red" colorScheme="red" />
      <KvibSwitch {...args} aria-label="Switch gray" colorScheme="gray" />
    </KvibStack>
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,F,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const A=["Switch","SwitchSizes","SwitchColors","SwitchStates"],ae=Object.freeze(Object.defineProperty({__proto__:null,Switch:t,SwitchColors:o,SwitchSizes:l,SwitchStates:n,__namedExportsOrder:A,default:G},Symbol.toStringTag,{value:"Module"}));export{ae as S,t as a,l as b,o as c,n as d};
