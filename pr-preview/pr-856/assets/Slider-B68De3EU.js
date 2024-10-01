import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as p,af as t,ai as d,ag as c}from"./index-CwI8H_ms.js";import{S,a as u,b as h,c as i}from"./Slider.stories-XFpSHolg.js";import{D as s,F as x,b as l,a as m}from"./Feedback-B4P1ZJhn.js";import{A as k}from"./Alert-CorwDObj.js";import{A as j}from"./chunk-3KCBMPN5-Dapgpkcw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D0-KeAve.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CG31mONj.js";import"./index-DdaX-njP.js";import"./index-DEiKcbOK.js";import"./index-DjrpCY14.js";import"./index-Bdxaq0s4.js";import"./index-wFQsMYyp.js";import"./index-CHDWSgKD.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-TK6VMDNP-BU_NzJ9K.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./chunk-LUYFNC5G-DV8XJogC.js";import"./index-DOEX-ehf.js";import"./index-Bvkiv1cC.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-DJS8qWMq.js";import"./proxy-CdnPo0W_.js";import"./index-DLHofduV.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-DhObpdti.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-C2ChFq4J.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./Icon-tbSQqMaw.js";/* empty css              */import"./chunk-2GBDXOMA-K_WHOyag.js";const f=` 
  const SliderWithTooltip = () => {
    const [sliderValue, setSliderValue] = React.useState(5);
    const [showTooltip, setShowTooltip] = React.useState(false);
    return (
    <KvibSlider
    id="slider"
    aria-label="sliderWithTooltip"
    defaultValue={5}
    onChange={(v) => setSliderValue(v)}
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
  >
    <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
      25%
    </SliderMark>
    <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
      50%
    </SliderMark>
    <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
      75%
    </SliderMark>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <Tooltip hasArrow placement="top" isOpen={showTooltip} label={$sliderValue}>
      <SliderThumb />
    </Tooltip>
  </KvibSlider>
    )
  }
`;function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{of:S}),`
`,r.jsxs(s,{children:[r.jsx(e.h1,{id:"slider",children:"Slider"}),r.jsx(e.p,{children:"Her er en oversikt over Slider-komponenten, og hvordan denne bygges opp av flere andre komponenter."}),r.jsxs(k,{status:"warning",children:[r.jsx(j,{}),r.jsx(e.p,{children:"En Slider skal alltid stå sammen med en Label. Dersom det mot formodning avviker fra dette må aria-label benyttes."})]}),r.jsx("br",{}),r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@kvib/react";
`})}),r.jsx(x,{component:"Slider"}),r.jsx(l,{light:!0,children:"Box props"}),r.jsx(s,{children:r.jsxs(e.p,{children:[`SliderThumb, SliderTrack og SliderFilledTrack er bygget på Box-komponenten, så alle props til Box kan benyttes i disse komponentene for å endre styling. Se
`,r.jsx(e.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]})}),r.jsx(m,{title:"Diskret slider med step",description:"",story:r.jsx(t,{of:u,sourceState:"hidden"}),isVertical:!0}),r.jsx(m,{title:"Slider med tooltip og marks",description:"",story:r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h,sourceState:"none"}),r.jsx(d,{code:f,dark:!0})]}),isVertical:!0}),r.jsx(l,{light:!0,children:"Props"}),r.jsx(t,{of:i}),r.jsx(c,{of:i})]})]})}function wr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}export{wr as default};
