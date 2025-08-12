import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r,a as d,b as l,c as i,d as m,e as o}from"./table-BTX8pb6J.js";const T={title:"Komponenter/Table",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{variant:{description:"The variant of the Table",table:{type:{summary:"line | outline"},defaultValue:{summary:"line"}},options:["line","outline"],control:"radio"},striped:{description:"Whether the Table should have striped rows",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Table",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};r.displayName="Table";d.displayName="TableHeader";l.displayName="TableRow";i.displayName="TableColumnHeader";o.displayName="TableCell";m.displayName="TableBody";const a={render:b=>e.jsxs(r,{...b,children:[e.jsx(d,{children:e.jsx(l,{children:e.jsx(i,{children:"Column 1"})})}),e.jsxs(m,{children:[e.jsx(l,{children:e.jsx(o,{children:"Row 1"})}),e.jsx(l,{children:e.jsx(o,{children:"Row 2"})})]})]})};var n,s,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Column 1</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Row 1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const p=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:p,default:T},Symbol.toStringTag,{value:"Module"}));export{a as P,y as T};
