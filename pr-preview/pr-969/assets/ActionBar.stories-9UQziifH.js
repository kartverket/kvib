import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{i as t,j as i,k as l,l as d,B as p,u as h,C as A}from"./index-BJ_Z5O4N.js";const C={title:"Komponenter/Action Bar",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}};t.displayName="ActionBar";i.displayName="ActionBarContent";l.displayName="ActionBarSelectionTrigger";d.displayName="ActionBarSeparator";p.displayName="Button";const n={render:o=>{const{open:m,onOpen:u,onClose:r}=h();return e.jsxs(e.Fragment,{children:[e.jsx(A,{onCheckedChange:B=>{B.checked?u():r()},colorPalette:o.colorPalette,children:"Show Action Bar"}),e.jsx(t,{open:m,onExitComplete:r,closeOnInteractOutside:!1,...o,children:e.jsxs(i,{children:[e.jsx(l,{children:"Selection content"}),e.jsx(d,{}),e.jsx(p,{variant:"outline",size:"sm",colorPalette:o.colorPalette,children:"Action"})]})})]})}};var a,c,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const {
      open,
      onOpen,
      onClose
    } = useDisclosure();
    return <>
        <Checkbox onCheckedChange={(e: SwitchCheckedChangeDetails) => {
        if ((e as {
          checked: boolean;
        }).checked) {
          onOpen();
        } else {
          onClose();
        }
      }} colorPalette={args.colorPalette}>
          Show Action Bar
        </Checkbox>
        <ActionBar open={open} onExitComplete={onClose} closeOnInteractOutside={false} {...args}>
          <ActionBarContent>
            <ActionBarSelectionTrigger>Selection content</ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
              Action
            </Button>
          </ActionBarContent>
        </ActionBar>
      </>;
  }
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const g=["Preview"],j=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:g,default:C},Symbol.toStringTag,{value:"Module"}));export{j as A,n as P};
