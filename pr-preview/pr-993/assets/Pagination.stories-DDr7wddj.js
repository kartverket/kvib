import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{at as t,H as o,au as s,av as l,aw as m}from"./index-BYbB6rBR.js";const u={title:"Komponenter/Pagination",component:t,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{size:{description:"The size of the component.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},variant:{description:"The variant of the component.",table:{type:{summary:"'solid' | 'outline' | 'subtle'"},defaultValue:{summary:"outline"}},control:"radio",options:["outline","solid","subtle"]},defaultPage:{description:"The default page number.",table:{type:{summary:"number"}},control:"number"},page:{description:"The active page.",table:{type:{summary:"number"},defaultValue:{summary:"1"}},control:"number"},count:{description:"The total number of pages.",table:{type:{summary:"number"}},control:"number"},pageSize:{description:"The number of items per page.",table:{type:{summary:"number"},defaultValue:{summary:"10"}},control:"number"},colorPalette:{description:"The color palette of the component.",table:{type:{summary:"'green' | 'blue' | 'gray'"}},defaultValue:{summary:"green"},options:["green","blue","gray"],control:{type:"radio"}},getHref:{description:"Function that returns the href for a page.",table:{type:{summary:"(page: number) => string"}}},siblingCount:{description:"Number of pages to show beside active page.",table:{type:{summary:"number"},defaultValue:{summary:"1"}},control:"number"},onPageChange:{description:"Called when the page number is changed.",table:{type:{summary:"(details: PageChangeDetails) => void"}}},onPageSizeChange:{description:"Called when the page size is changed.",table:{type:{summary:"(details: PageSizeChangeDetails) => void"}}},ids:{description:"The ids of the elements in the accordion. Useful for composition",table:{type:{summary:"Partial<{ root: string ellipsis(index: number): string prevTrigger: string nextTrigger: string item(page: number): string }>"}}},translations:{description:"Specifies the localized strings that identifies the accessibility elements and their states.",table:{type:{summary:"IntlTranslations"}}}},args:{size:"sm",variant:"outline",colorPalette:"green",count:2,defaultPage:1,pageSize:1}};t.displayName="Pagination";l.displayName="PaginationItems";m.displayName="PaginationNextTrigger";s.displayName="PaginationPrevTrigger";o.displayName="HStack";const a={render:g=>e.jsx(t,{...g,children:e.jsxs(o,{children:[e.jsx(s,{}),e.jsx(l,{}),e.jsx(m,{})]})})};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Pagination {...args}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </Pagination>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const p=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{y as P,a};
