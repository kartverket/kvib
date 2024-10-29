import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as n,af as t,ai as d,ag as c}from"./index-D-mFTAEU.js";import{D as i,F as S,b as s,a as l}from"./Feedback-C8oPMuBk.js";import{S as u,a as h,b as x,P as m}from"./Slider.stories-t_77O4yx.js";import{A as f}from"./Alert-DuDev5PS.js";import{A as k}from"./alert-icon-DsIyQRNV.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dg-vxSrj.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./slider-utils-DlyfFmdB.js";import"./owner-DF4q1r8F.js";import"./is-element-C52yPwBl.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-controllable-state-Dnial3e2.js";import"./number-D-Zd7p0h.js";import"./use-update-effect-CNg9DBIF.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./tooltip-Dcf5hq-p.js";import"./use-popper-DwNTykfS.js";import"./use-disclosure-CdGn7wGE.js";import"./use-event-listener-DbiM-QVt.js";import"./portal-BlJtTGys.js";import"./proxy-NyFW0ziH.js";import"./index-BMuBlvl2.js";import"./define-styles-BSAHv3yx.js";import"./icon-BO-EX8Jp.js";import"./spinner-CCN1jjNR.js";const j=` 
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
`;function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:u}),`
`,r.jsxs(i,{children:[r.jsx(e.h1,{id:"slider",children:"Slider"}),r.jsx(e.p,{children:"Her er en oversikt over Slider-komponenten, og hvordan denne bygges opp av flere andre komponenter."}),r.jsxs(f,{status:"warning",children:[r.jsx(k,{}),r.jsx(e.p,{children:"En Slider skal alltid stå sammen med en Label. Dersom det mot formodning avviker fra dette må aria-label benyttes."})]}),r.jsx("br",{}),r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@kvib/react";
`})}),r.jsx(S,{component:"Slider"}),r.jsx(s,{light:!0,children:"Box props"}),r.jsx(i,{children:r.jsxs(e.p,{children:[`SliderThumb, SliderTrack og SliderFilledTrack er bygget på Box-komponenten, så alle props til Box kan benyttes i disse komponentene for å endre styling. Se
`,r.jsx(e.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]})}),r.jsx(l,{title:"Diskret slider med step",description:"",story:r.jsx(t,{of:h,sourceState:"hidden",className:"fullwidth"}),isVertical:!0}),r.jsx(l,{title:"Slider med tooltip og marks",description:"",story:r.jsxs(r.Fragment,{children:[r.jsx(t,{of:x,sourceState:"none",className:"fullwidth"}),r.jsx(d,{code:j,dark:!0})]}),isVertical:!0}),r.jsx(s,{light:!0,children:"Props"}),r.jsx(t,{of:m,className:"fullwidth"}),r.jsx(c,{of:m})]})]})}function Ar(o={}){const{wrapper:e}={...p(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}export{Ar as default};
