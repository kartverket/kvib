import{j as e}from"./extends-CwFRzn3r.js";import{H as p}from"./chunk-3ASUQ6PA-hlsAaDh7.js";import{r as c}from"./index-BwDkhjyp.js";import{c as xe}from"./use-descendant-T3UBTUZf.js";import{c as Ie}from"./context-CBKykClo.js";import{u as Pe}from"./use-controllable-state-Dnial3e2.js";import{a as ge}from"./attr-sHTFgF0E.js";import{c as C}from"./call-all-DDzecCnU.js";import{m as Ve}from"./use-merge-refs-Bdxaq0s4.js";import{f as me}from"./forward-ref-BWI-Phbn.js";import{u as Oe,o as Fe}from"./use-style-config-C4sZEIFb.js";import{c as qe}from"./factory-lWLPzty5.js";import{g as Ke}from"./children-2ZXUntH3.js";import{c as ke}from"./cx-BDMMs1jM.js";import{S as Ce}from"./stack-C3a7yBZW.js";const[He,un,Ae,we]=xe(),[Ee,ze]=Ie({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to place all pin input fields within `<PinInput />`"}),G=t=>t==null?void 0:t.split("");function U(t,a){return(a==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t)}function De(t={}){const{autoFocus:a,value:d,defaultValue:m,onChange:f,onComplete:o,placeholder:F="○",manageFocus:_=!0,otp:z=!1,id:Se,isDisabled:D,isInvalid:N,type:h="number",mask:T}=t,be=c.useId(),H=Se??`pin-input-${be}`,s=Ae(),[M,A]=c.useState(!0),[R,L]=c.useState(-1),[j,y]=Pe({defaultValue:G(m)||[],value:G(d),onChange:l=>f==null?void 0:f(l.join(""))});c.useEffect(()=>{if(a){const l=s.first();l&&requestAnimationFrame(()=>{l.node.focus()})}},[s]);const $=c.useCallback(l=>{if(!M||!_)return;const i=s.next(l,!1);i&&requestAnimationFrame(()=>{i.node.focus()})},[s,M,_]),v=c.useCallback((l,i,u=!0)=>{const S=[...j];S[i]=l,y(S),l!==""&&S.length===s.count()&&S.every(q=>q!=null&&q!=="")?o==null||o(S.join("")):u&&$(i)},[j,y,$,o,s]),_e=c.useCallback(()=>{var u;const l=Array(s.count()).fill("");y(l);const i=s.first();(u=i==null?void 0:i.node)==null||u.focus()},[s,y]),W=c.useCallback((l,i)=>{let u=i;return(l==null?void 0:l.length)>0&&(l[0]===i.charAt(0)?u=i.charAt(1):l[0]===i.charAt(1)&&(u=i.charAt(0))),u},[]);return{getInputProps:c.useCallback(l=>{const{index:i,...u}=l,S=K=>{const b=K.currentTarget.value,k=j[i],w=W(k,b);if(w===""){v("",i);return}if(b.length>2){if(U(b,h)){const E=b.split("").filter(($e,ve)=>ve<s.count());y(E),E.length===s.count()&&(o==null||o(E.join("")))}}else U(w,h)&&v(w,i),A(!0)},B=K=>{var b;if(K.key==="Backspace"&&_)if(K.currentTarget.value===""){const k=s.prev(i,!1);k&&(v("",i-1,!1),(b=k.node)==null||b.focus(),A(!0))}else A(!1)},q=()=>{L(i)},je=()=>{L(-1)},he=R===i;return{"aria-label":"Please enter your pin code",inputMode:h==="number"?"numeric":"text",type:T?"password":h==="number"?"tel":"text",...u,id:`${H}-${i}`,disabled:D,"aria-invalid":ge(N),onChange:C(u.onChange,S),onKeyDown:C(u.onKeyDown,B),onFocus:C(u.onFocus,q),onBlur:C(u.onBlur,je),value:j[i]||"",autoComplete:z?"one-time-code":"off",placeholder:he?"":F}},[s,R,W,H,D,T,N,_,o,z,F,v,y,h,j]),id:H,descendants:s,values:j,setValue:v,setValues:y,clear:_e}}function Ne(t={},a=null){const{getInputProps:d}=ze(),{index:m,register:f}=we();return d({...t,ref:Ve(f,a),index:t.index??m})}function fe(t){const a=Oe("PinInput",t),{children:d,...m}=Fe(t),{descendants:f,...o}=De(m),F=Ke(d).map(_=>c.cloneElement(_,{__css:a}));return e.jsx(He,{value:f,children:e.jsx(Ee,{value:o,children:F})})}fe.displayName="PinInput";const ye=me(function(a,d){const m=Ne(a,d);return e.jsx(qe.input,{...m,className:ke("chakra-pin-input",a.className)})});ye.displayName="PinInputField";const r=({size:t,children:a,...d})=>e.jsx(fe,{...d,size:t,children:a});try{r.displayName="PinInput",r.__docgenInfo={description:"",displayName:"PinInput",props:{}}}catch{}const n=me(({...t},a)=>e.jsx(ye,{...t,ref:a}));try{n.displayName="PinInputField",n.__docgenInfo={description:"",displayName:"PinInputField",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},_hover:{defaultValue:null,description:"",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:"",name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:"",name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:"",name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupOpen:{defaultValue:null,description:"",name:"_groupOpen",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupClosed:{defaultValue:null,description:"",name:"_groupClosed",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:"",name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:"",name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},_open:{defaultValue:null,description:"",name:"_open",required:!1,type:{name:"SystemStyleObject | undefined"}},_closed:{defaultValue:null,description:"",name:"_closed",required:!1,type:{name:"SystemStyleObject | undefined"}},_complete:{defaultValue:null,description:"",name:"_complete",required:!1,type:{name:"SystemStyleObject | undefined"}},_incomplete:{defaultValue:null,description:"",name:"_incomplete",required:!1,type:{name:"SystemStyleObject | undefined"}},_current:{defaultValue:null,description:"",name:"_current",required:!1,type:{name:"SystemStyleObject | undefined"}}}}}catch{}const Te={title:"Skjemaelementer/Pin Input",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{manageFocus:{description:"If true, focus will move automatically to the next input once filled",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},mask:{description:"If true, the input's value will be masked just like `type=password`",table:{type:{summary:"boolean"}},control:"boolean"},otp:{description:'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"The type of values the pin-input should allow",table:{type:{summary:'"number" | "alphanumeric"'}},options:["number","alphanumeric"],control:{type:"radio"}},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},x={render:t=>e.jsx(p,{children:e.jsxs(r,{...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})},I={args:{type:"alphanumeric"},render:t=>e.jsx(p,{children:e.jsxs(r,{...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})},P={args:{otp:!0},render:t=>e.jsx(p,{children:e.jsxs(r,{...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})},g={args:{mask:!0,type:"alphanumeric"},render:t=>e.jsx(p,{children:e.jsxs(r,{...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})},V={render:t=>e.jsxs(Ce,{children:[e.jsx(p,{children:e.jsxs(r,{size:"xs",...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),e.jsx("hr",{}),e.jsx(p,{children:e.jsxs(r,{size:"sm",...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),e.jsx("hr",{}),e.jsx(p,{children:e.jsxs(r,{size:"md",...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),e.jsx("hr",{}),e.jsx(p,{children:e.jsxs(r,{size:"lg",...t,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})]})},O={render:()=>e.jsx(p,{children:e.jsxs(r,{manageFocus:!1,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})};var X,Z,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(J=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,Y,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: "alphanumeric"
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(ee=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,te,ie;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    otp: true
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(ie=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,ae,se;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    mask: true,
    type: "alphanumeric"
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ue,re,de;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <Stack>
      <HStack>
        <KvibPinInput size={"xs"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"sm"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"md"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"lg"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
    </Stack>
}`,...(de=(re=V.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var oe,ce,pe;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <HStack>
      <KvibPinInput manageFocus={false}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Me=["Preview","Alphanumeric","OTP","Mask","Size","Focus"],rn=Object.freeze(Object.defineProperty({__proto__:null,Alphanumeric:I,Focus:O,Mask:g,OTP:P,Preview:x,Size:V,__namedExportsOrder:Me,default:Te},Symbol.toStringTag,{value:"Module"}));export{I as A,O as F,g as M,P as O,rn as P,V as S,x as a};
