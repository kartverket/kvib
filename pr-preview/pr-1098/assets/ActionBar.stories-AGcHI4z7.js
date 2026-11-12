import{o as t,p as h,j as e,q as A,r as i,s as l,t as d,v as p}from"./iframe-Bsatxhr7.js";const C={title:"Komponenter/Action Bar",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}};t.displayName="ActionBar";i.displayName="ActionBarContent";l.displayName="ActionBarSelectionTrigger";d.displayName="ActionBarSeparator";p.displayName="Button";const n={render:o=>{const{open:u,onOpen:m,onClose:r}=h();return e.jsxs(e.Fragment,{children:[e.jsx(A,{onCheckedChange:B=>{B.checked?m():r()},colorPalette:o.colorPalette,children:"Show Action Bar"}),e.jsx(t,{open:u,onExitComplete:r,closeOnInteractOutside:!1,...o,children:e.jsxs(i,{children:[e.jsx(l,{children:"Selection content"}),e.jsx(d,{}),e.jsx(p,{variant:"outline",size:"sm",colorPalette:o.colorPalette,children:"Action"})]})})]})}},g=["Preview"];var a,c,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const x=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:g,default:C},Symbol.toStringTag,{value:"Module"}));export{x as A,n as P};
