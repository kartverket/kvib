import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bq as m,B as W,br as v,bs as p}from"./index-iDPW5jzC.js";import{u as d}from"./create-slot-recipe-context-D2d5s3G5.js";import{B as r}from"./box-DRWhNOl7.js";import{S as l}from"./stack-DbYzybKU.js";const P={title:"Komponenter/Toast",component:m,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{type:{description:"The status (color) of the toast",table:{type:{summary:"info | warning | success | error | loading"}},defaultValue:{summary:"info"},control:"radio",options:["info","warning","success","error"]},title:{description:"The title of the toast",table:{type:{summary:"string"}},control:"text"},description:{description:"The description of the toast",table:{type:{summary:"string"}},control:"text"},duration:{description:"The duration of the toast in milliseconds",table:{type:{summary:"number"}},control:"number"}},args:{type:"info",title:"Title",description:"Description",duration:3e3}};m.displayName="Toaster";W.displayName="Button";const s={render:n=>e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(W,{colorPalette:n.colorPalette,w:"fit-content",onClick:()=>v.create({title:n.title,description:n.description,type:n.type,duration:n.duration}),children:"Show Toast"})]}),parameters:{docs:{source:{code:`
<Toaster />
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        `}}}},o={render:n=>{const t=d({key:"toast"})({});return e.jsxs(r,{css:t.root,"data-type":"info",children:[e.jsx(p,{type:"info"}),e.jsx(l,{gap:"1",flex:"1",maxWidth:"100%",pb:"1px",children:e.jsx(r,{css:t.description,children:"Saken går til automatisk behandling"})})]})},parameters:{docs:{source:{code:`
toaster.create({
  description: "Saken går til automatisk behandling",
  type: "info",
})
        `}}}},a={render:n=>{const t=d({key:"toast"})({});return e.jsxs(r,{css:t.root,"data-type":"success",children:[e.jsx(p,{type:"success"}),e.jsx(l,{gap:"1",flex:"1",maxWidth:"100%",pb:"1px",children:e.jsx(r,{css:t.description,children:"Takk! Din sak er opprettet."})})]})},parameters:{docs:{source:{code:`
toaster.create({
  description: "Takk! Din sak er opprettet.",
  type: "success",
})
        `}}}},i={render:n=>{const t=d({key:"toast"})({});return e.jsxs(r,{css:t.root,"data-type":"warning",children:[e.jsx(p,{type:"warning"}),e.jsxs(l,{gap:"1",flex:"1",maxWidth:"100%",pb:"1px",children:[e.jsx(r,{css:t.title,children:"Mistet internettforbindelsen"}),e.jsx(r,{css:t.description,children:"Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake."})]})]})},parameters:{docs:{source:{code:`
toaster.create({
  title: "Mistet internettforbindelsen",
  description: "Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.",
  type: "warning",
})
        `}}}},c={render:n=>{const t=d({key:"toast"})({});return e.jsxs(r,{css:t.root,"data-type":"error",children:[e.jsx(p,{type:"error"}),e.jsxs(l,{gap:"1",flex:"1",maxWidth:"100%",pb:"1px",children:[e.jsx(r,{css:t.title,children:"Ingen internettforbindelse"}),e.jsx(r,{css:t.description,children:"Du kan ikke lagre før forbindelsen er tilbake."})]})]})},parameters:{docs:{source:{code:`
toaster.create({
  title: "Ingen internettforbindelse",
  description: "Du kan ikke lagre før forbindelsen er tilbake.",
  type: "error",
})
        `}}}};var y,k,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <>
      <Toaster />
      <Button colorPalette={args.colorPalette} w={"fit-content"} onClick={() => toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration
    })}>
        Show Toast
      </Button>
    </>,
  parameters: {
    docs: {
      source: {
        code: \`
<Toaster />
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        \`
      }
    }
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast"
    });
    const styles = recipe({});
    return <Box css={styles.root} data-type="info">
        <KvibToastIndicator type="info" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.description}>Saken går til automatisk behandling</Box>
        </Stack>
      </Box>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
toaster.create({
  description: "Saken går til automatisk behandling",
  type: "info",
})
        \`
      }
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,T,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast"
    });
    const styles = recipe({});
    return <Box css={styles.root} data-type="success">
        <KvibToastIndicator type="success" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.description}>Takk! Din sak er opprettet.</Box>
        </Stack>
      </Box>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
toaster.create({
  description: "Takk! Din sak er opprettet.",
  type: "success",
})
        \`
      }
    }
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,j,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast"
    });
    const styles = recipe({});
    return <Box css={styles.root} data-type="warning">
        <KvibToastIndicator type="warning" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.title}>Mistet internettforbindelsen</Box>
          <Box css={styles.description}>
            Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.
          </Box>
        </Stack>
      </Box>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
toaster.create({
  title: "Mistet internettforbindelsen",
  description: "Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.",
  type: "warning",
})
        \`
      }
    }
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var _,D,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast"
    });
    const styles = recipe({});
    return <Box css={styles.root} data-type="error">
        <KvibToastIndicator type="error" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.title}>Ingen internettforbindelse</Box>
          <Box css={styles.description}>Du kan ikke lagre før forbindelsen er tilbake.</Box>
        </Stack>
      </Box>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
toaster.create({
  title: "Ingen internettforbindelse",
  description: "Du kan ikke lagre før forbindelsen er tilbake.",
  type: "error",
})
        \`
      }
    }
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const K=["Preview","InformativeToast","SuccessToast","WarningToast","ErrorToast"],N=Object.freeze(Object.defineProperty({__proto__:null,ErrorToast:c,InformativeToast:o,Preview:s,SuccessToast:a,WarningToast:i,__namedExportsOrder:K,default:P},Symbol.toStringTag,{value:"Module"}));export{c as E,o as I,s as P,a as S,N as T,i as W};
