import{j as n}from"./index-D6_wGsWO.js";import{bj as r}from"./index-C4Tll0EB.js";const s={title:"Komponenter/Search Async",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{loadOptions:{control:"text"},onChange:{table:{type:{summary:"(newValue: T | null) => void"}},control:"text"},placeholder:{table:{type:{summary:"string"}},control:"text"},autoFocus:{table:{type:{summary:"boolean"}},control:"boolean"},debounceTime:{table:{type:{summary:"number"}},control:"number"},className:{table:{type:{summary:"string"}},control:"text"},clearable:{table:{type:{summary:"boolean"}},control:"boolean"},dropdownIndicator:{table:{type:{summary:"Element"}},control:"text"},size:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},defaultOptions:{table:{type:{summary:"T[] | boolean"}}},variant:{table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},id:{table:{type:{summary:"string"}},control:"text"},multi:{table:{type:{summary:"boolean"},defualtValue:{summary:"false"}},control:"boolean"},noOptionsMessage:{table:{type:{summary:"(obj: { inputValue: string; }) => ReactNode"}},control:"text"},optionLabelFormatter:{table:{type:{summary:"(data: T, formatOptionLabelMeta: FormatOptionLabelMeta<T>) => ReactNode"}},control:"text"},disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},focusBorderColor:{table:{type:{summary:"string"},defaultValue:{summary:"blue.500"}},control:"text"},menuPlacement:{table:{type:{summary:"bottom | top | auto"},defaultValue:{summary:"bottom"}},options:["bottom","top","auto"],control:{type:"radio"}}},args:{onChange:void 0,loadOptions:void 0}},e={parameters:{docs:{canvas:{sourceState:"shown"}}},render:l=>n.jsx(r,{...l})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibSearchAsync {...args} />
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:s},Symbol.toStringTag,{value:"Module"}));export{e as P,y as S};