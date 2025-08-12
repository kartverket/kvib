import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b8 as p,b9 as d,ba as n,bb as r,bc as m,bd as c,be as S,B as o,bf as u}from"./index-BFEzvpvH.js";const x={title:"Komponenter/Steps",component:p,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"green | blue | gray"},defaultValue:{summary:"green"}},options:["green","blue","gray"],control:{type:"radio"}},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};p.displayName="Steps";d.displayName="StepsList";n.displayName="StepsItem";r.displayName="StepsContent";m.displayName="StepsCompletedContent";S.displayName="StepsPrevTrigger";u.displayName="StepsNextTrigger";o.displayName="Button";c.displayName="Group";const t={render:s=>e.jsxs(p,{defaultValue:1,count:2,...s,children:[e.jsxs(d,{children:[e.jsx(n,{index:0,children:"Step 1"}),e.jsx(n,{index:1,children:"Step 2"})]}),e.jsx(r,{index:0,children:"Step 1 content"}),e.jsx(r,{index:1,children:"Step 2 content"}),e.jsx(m,{children:"Done with all steps"}),e.jsxs(c,{children:[e.jsx(S,{asChild:!0,children:e.jsx(o,{size:"sm",colorPalette:s.colorPalette,children:"Previous"})}),e.jsx(u,{asChild:!0,children:e.jsx(o,{size:"sm",colorPalette:s.colorPalette,children:"Next"})})]})]})};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Steps defaultValue={1} count={2} {...args}>
      <StepsList>
        <StepsItem index={0}>Step 1</StepsItem>
        <StepsItem index={1}>Step 2</StepsItem>
      </StepsList>

      <StepsContent index={0}>Step 1 content</StepsContent>
      <StepsContent index={1}>Step 2 content</StepsContent>
      <StepsCompletedContent>Done with all steps</StepsCompletedContent>

      <Group>
        <StepsPrevTrigger asChild>
          <Button size="sm" colorPalette={args.colorPalette}>
            Previous
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button size="sm" colorPalette={args.colorPalette}>
            Next
          </Button>
        </StepsNextTrigger>
      </Group>
    </Steps>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const g=["Preview"],P=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{t as P,P as S};
