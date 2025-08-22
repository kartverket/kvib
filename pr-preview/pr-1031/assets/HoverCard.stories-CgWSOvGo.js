import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{af as r,ag as l,ah as d,ai as m}from"./index-BHV5bN4l.js";import{S as c}from"./stack-DbYzybKU.js";import{T as n}from"./text-2toE5EUW.js";const p={title:"Komponenter/Hover Card",component:r,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{closeDelay:{description:"The duration from when the mouse leaves the trigger or content until the hover card closes.",table:{type:{summary:"number"},defaultValue:{summary:"300"}},control:"number"},openDelay:{description:"The duration from when the mouse enters the trigger until the hover card opens.",table:{type:{summary:"number"},defaultValue:{summary:"700"}},control:"number"},size:{description:"The size of the component",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:"radio"},defaultOpen:{description:"The initial open state of the hover card when it is first rendered. Use when you do not need to control its open state.",table:{type:{summary:"boolean"}}},onExitComplete:{description:"Function called when the animation ends in the closed state",table:{type:{summary:"() => void"}}},onOpenChange:{description:"Function called when the hover card opens or closes.",table:{type:{summary:"(details: OpenChangeDetails) => void"}}},open:{description:"Whether the hover card is open",table:{type:{summary:"boolean"}},control:"boolean"}}};r.displayName="HoverCard";const t={render:o=>e.jsxs(r,{...o,children:[e.jsx(l,{asChild:!0,children:e.jsx(d,{href:"#",colorPalette:o.colorPalette,children:"Hover for content"})}),e.jsx(m,{children:e.jsxs(c,{gap:"1",children:[e.jsx(n,{textStyle:"sm",fontWeight:"semibold",children:"Content title"}),e.jsx(n,{textStyle:"sm",color:"fg.muted",children:"Description"})]})})]})};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Link href="#" colorPalette={args.colorPalette}>
          Hover for content
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <Stack gap="1">
          <Text textStyle="sm" fontWeight="semibold">
            Content title
          </Text>
          <Text textStyle="sm" color="fg.muted">
            Description
          </Text>
        </Stack>
      </HoverCardContent>
    </HoverCard>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{v as H,t as P};
