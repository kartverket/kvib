import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Z as n,u as x,_ as c,B as a,$ as d,a0 as m,a1 as p,a2 as u,a3 as w,a4 as D,a5 as y}from"./index-h8THNpJ-.js";const C={title:"Komponenter/Drawer",component:n,parameters:{docs:{story:{inline:!0}}},argTypes:{open:{description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onExitComplete:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},id:{description:"The id of the modal",table:{type:{summary:"String"}},control:"text"},placement:{description:"The placement of the drawer",table:{type:{summary:"bottom | top | start | end"}},defaultValue:{summary:"end"},control:"text"},size:{description:"Size of the Drawer",table:{type:{summary:"xs | sm | md | lg | xl | full"},defaultValue:{summary:"xs"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{placement:"end",size:"xs",trapFocus:!0}};n.displayName="Drawer";c.displayName="DrawerTrigger";d.displayName="DrawerPositioner";m.displayName="DrawerContent";u.displayName="DrawerHeader";w.displayName="DrawerTitle";D.displayName="DrawerBody";y.displayName="DrawerFooter";p.displayName="DrawerCloseTrigger";a.displayName="Button";const r={render:o=>{const{open:g,onOpen:h,onClose:t}=x();return e.jsxs(n,{...o,open:g,onExitComplete:t,children:[e.jsx(c,{asChild:!0,children:e.jsx(a,{colorPalette:o.colorPalette,onClick:h,children:"Open Drawer"})}),e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(p,{colorPalette:o.colorPalette,onClick:t}),e.jsx(u,{children:e.jsx(w,{children:"Drawer title"})}),e.jsx(D,{children:"Drawer content"}),e.jsx(y,{children:e.jsx(a,{colorPalette:o.colorPalette,onClick:t,children:"Close"})})]})})]})}};var l,s,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const {
      open,
      onOpen,
      onClose
    } = useDisclosure();
    return <Drawer {...args} open={open} onExitComplete={onClose}>
        <DrawerTrigger asChild>
          <Button colorPalette={args.colorPalette} onClick={onOpen}>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerPositioner>
          <DrawerContent>
            <DrawerCloseTrigger colorPalette={args.colorPalette} onClick={onClose}></DrawerCloseTrigger>

            <DrawerHeader>
              <DrawerTitle>Drawer title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Drawer content</DrawerBody>
            <DrawerFooter>
              <Button colorPalette={args.colorPalette} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPositioner>
      </Drawer>;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{T as D,r as P};
