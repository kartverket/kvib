import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{z as r,D as i,E as n,F as s,G as c,H as p,J as d,K as u,L as m,M as C}from"./index-BJ_Z5O4N.js";const y={title:"Komponenter/Color Picker",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{defaultValue:{description:"The initial value of the color picker when it is first rendered. Use when you do not need to control the state of the color picker.",table:{type:{summary:"Color"}},defaultValue:{summary:"#000000"}},value:{description:"The current color value",table:{type:{summary:"Color"}}},format:{description:"The format of the color picker",table:{type:{summary:"ColorFormat"},defaultValue:{summary:"rgba"}}},defaultOpen:{description:"Whether the color picker is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},positioning:{description:"The positioning of the color picker",table:{type:{summary:"PositioningOptions"}}},open:{description:"Whether the color picker is open",table:{type:{summary:"boolean"}}},onValueChange:{description:"Function called when the color value changes",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},onValueChangeEnd:{description:"Handler that is called when the user stops dragging.",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},onPointerDownOutside:{description:"Function called when the pointer is pressed down outside the component",table:{type:{summary:"(event: PointerDownOutsideEvent) => void"}}},openAutoFocus:{description:"Whether the color picker should autofocus when opened",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}};r.displayName="ColorPicker";i.displayName="ColorPickerArea";n.displayName="ColorPickerContent";s.displayName="ColorPickerControl";c.displayName="ColorPickerEyeDropper";p.displayName="ColorPickerInput";d.displayName="ColorPickerLabel";u.displayName="ColorPickerSliders";m.displayName="ColorPickerTrigger";C.displayName="HStack";const o={render:k=>e.jsxs(r,{...k,children:[e.jsx(d,{children:"Select color"}),e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(m,{})]}),e.jsxs(n,{children:[e.jsx(i,{}),e.jsxs(C,{children:[e.jsx(c,{}),e.jsx(u,{})]})]})]})};var t,a,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <ColorPicker {...args}>
      <ColorPickerLabel>Select color</ColorPickerLabel>
      <ColorPickerControl>
        <ColorPickerInput />
        <ColorPickerTrigger />
      </ColorPickerControl>
      <ColorPickerContent>
        <ColorPickerArea />
        <HStack>
          <ColorPickerEyeDropper />
          <ColorPickerSliders />
        </HStack>
      </ColorPickerContent>
    </ColorPicker>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const h=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{b as C,o as P};
