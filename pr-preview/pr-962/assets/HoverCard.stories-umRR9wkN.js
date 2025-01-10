import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{af as t,ag as d,ah as l,ai as m}from"./index-i3c0vUEJ.js";import{S as c}from"./stack-B6Ug3qu1.js";import{T as o}from"./text-CO7rLojD.js";const p={title:"Komponenter/Hover Card",component:t,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{closeDelay:{description:"The duration from when the mouse leaves the trigger or content until the hover card closes.",table:{type:{summary:"number"},defaultValue:{summary:"300"}},control:"number"},openDelay:{description:"The duration from when the mouse enters the trigger until the hover card opens.",table:{type:{summary:"number"},defaultValue:{summary:"700"}},control:"number"},size:{description:"The size of the component",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:"radio"},defaultOpen:{description:"The initial open state of the hover card when it is first rendered. Use when you do not need to control its open state.",table:{type:{summary:"boolean"}}},onExitComplete:{description:"Function called when the animation ends in the closed state",table:{type:{summary:"() => void"}}},onOpenChange:{description:"Function called when the hover card opens or closes.",table:{type:{summary:"(details: OpenChangeDetails) => void"}}},open:{description:"Whether the hover card is open",table:{type:{summary:"boolean"}},control:"boolean"}}};t.displayName="HoverCard";const r={render:i=>e.jsxs(t,{...i,children:[e.jsx(d,{asChild:!0,children:e.jsx(l,{href:"#",children:"Hover for å vise et kort"})}),e.jsx(m,{children:e.jsxs(c,{gap:"1",children:[e.jsx(o,{textStyle:"sm",fontWeight:"semibold",children:"Her er det innhold!"}),e.jsx(o,{textStyle:"sm",color:"fg.muted",children:"Denne dukker opp mens man holder over lenken."})]})})]})};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Link href="#">Hover for å vise et kort</Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <Stack gap="1">
          <Text textStyle="sm" fontWeight="semibold">
            Her er det innhold!
          </Text>
          <Text textStyle="sm" color="fg.muted">
            Denne dukker opp mens man holder over lenken.
          </Text>
        </Stack>
      </HoverCardContent>
    </HoverCard>
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{f as H,r as P};
