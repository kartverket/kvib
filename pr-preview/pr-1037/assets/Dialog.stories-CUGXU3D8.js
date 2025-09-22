import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Q as l,R as s,B as t,S as d,T as c,U as g,V as p,W as u,X as m,Y as h}from"./index-BdxnP8I6.js";import{B as y}from"./index-DSremx2O.js";const D={title:"Komponenter/Dialog (Modal)",component:l,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"The size of the component",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},open:{name:"open",description:"Whether the dialog is open",table:{type:{summary:"boolean"}}},closeOnEscape:{description:"Whether the dialog should close when the escape key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnInteractOutside:{description:"Whether the dialog should close when interacting outside of it",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},defaultOpen:{description:"The initial open state of the dialog when it is first rendered. Use when you do not need to control its open state.",table:{type:{summary:"boolean"}},control:"boolean"},modal:{description:"Whether to prevent pointer interaction outside the element and hide all content below it",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},motionPreset:{description:"The motion preset of the dialog",table:{type:{summary:"'scale' | 'slide-in-bottom' | 'slide-in-top' | 'slide-in-left' | 'slide-in-right' | 'none'"},defaultValue:{summary:"'scale'"}},control:{type:"radio"},options:["scale","slide-in-bottom","slide-in-top","slide-in-left","slide-in-right","none"]},onOpenChange:{description:"Callback to be invoked when the dialog is opened or closed",table:{type:{summary:"(details: OpenChangeDetails) => void"}}},onInteractOutside:{description:"Function called when an interaction happens outside the component",table:{type:{summary:"(event: InteractOutsideEvent) => void"}}},onExitComplete:{description:"Function called when the focus is moved outside the component",table:{type:{summary:"(event: FocusOutsideEvent) => void"}}},onEscapeKeyDown:{description:"Function called when the escape key is pressed",table:{type:{summary:"(event: KeyboardEvent) => void"}}},preventScroll:{description:"Whether the dialog should prevent scrolling on the body",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{}};l.displayName="Dialog";s.displayName="DialogTrigger";d.displayName="DialogContent";c.displayName="DialogHeader";g.displayName="DialogTitle";p.displayName="DialogBody";u.displayName="DialogFooter";m.displayName="DialogActionTrigger";h.displayName="DialogCloseTrigger";t.displayName="Button";const a={render:o=>e.jsxs(l,{...o,children:[e.jsx(s,{asChild:!0,children:e.jsx(t,{colorPalette:o.colorPalette,children:"Open Dialog"})}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(g,{children:"Dialog title"})}),e.jsx(p,{children:"Dialog content"}),e.jsxs(u,{justifyContent:"space-between",children:[e.jsx(t,{variant:"tertiary",colorPalette:o.colorPalette,children:"Button"}),e.jsxs(y,{children:[e.jsx(t,{mr:3,variant:"secondary",colorPalette:o.colorPalette,children:"Button"}),e.jsx(m,{asChild:!0,children:e.jsx(t,{colorPalette:o.colorPalette,children:"Button"})})]})]}),e.jsx(h,{})]})]})};var n,i,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
        </DialogHeader>
        <DialogBody>Dialog content</DialogBody>

        <DialogFooter justifyContent="space-between">
          <Button variant="tertiary" colorPalette={args.colorPalette}>
            Button
          </Button>
          <Box>
            <Button mr={3} variant="secondary" colorPalette={args.colorPalette}>
              Button
            </Button>
            <DialogActionTrigger asChild>
              <Button colorPalette={args.colorPalette}>Button</Button>
            </DialogActionTrigger>
          </Box>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </Dialog>
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:b,default:D},Symbol.toStringTag,{value:"Module"}));export{v as D,a as P};
