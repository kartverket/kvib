import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as n,af as t,ai as d,ag as c}from"./index-DyJmeG6K.js";import{S,a as u,b as h,c as i}from"./Slider.stories-TbxjbIwP.js";import{D as s,F as x,b as m,a as l}from"./Feedback-1PAaDAAT.js";import{A as k}from"./Alert-ijm-s5Dj.js";import{A as j}from"./alert-icon-C25tEepw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-OoWxe4yv.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./slider-q9q6A86f.js";import"./slider-utils-DlyfFmdB.js";import"./owner-DF4q1r8F.js";import"./is-element-C52yPwBl.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-controllable-state-Dnial3e2.js";import"./number-D-Zd7p0h.js";import"./use-update-effect-CNg9DBIF.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./use-theme-CBfqdygA.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./factory-CdGA0D9p.js";import"./context-CBKykClo.js";import"./cx-BDMMs1jM.js";import"./tooltip-C1EqCzLQ.js";import"./use-popper-DwNTykfS.js";import"./use-disclosure-CdGn7wGE.js";import"./use-event-listener-DbiM-QVt.js";import"./portal-BqZkrvYK.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./proxy-CQsau1XN.js";import"./pick-DBnSFT3T.js";import"./index-DVNvNJVv.js";import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./flex-CHlq4-Ax.js";import"./Button-Nuu503uB.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-DYBtj9XH.js";/* empty css              */import"./icon-DQb5sAJm.js";const f=` 
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
`;function p(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:S}),`
`,r.jsxs(s,{children:[r.jsx(e.h1,{id:"slider",children:"Slider"}),r.jsx(e.p,{children:"Her er en oversikt over Slider-komponenten, og hvordan denne bygges opp av flere andre komponenter."}),r.jsxs(k,{status:"warning",children:[r.jsx(j,{}),r.jsx(e.p,{children:"En Slider skal alltid stå sammen med en Label. Dersom det mot formodning avviker fra dette må aria-label benyttes."})]}),r.jsx("br",{}),r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@kvib/react";
`})}),r.jsx(x,{component:"Slider"}),r.jsx(m,{light:!0,children:"Box props"}),r.jsx(s,{children:r.jsxs(e.p,{children:[`SliderThumb, SliderTrack og SliderFilledTrack er bygget på Box-komponenten, så alle props til Box kan benyttes i disse komponentene for å endre styling. Se
`,r.jsx(e.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]})}),r.jsx(l,{title:"Diskret slider med step",description:"",story:r.jsx(t,{of:u,sourceState:"hidden"}),isVertical:!0}),r.jsx(l,{title:"Slider med tooltip og marks",description:"",story:r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h,sourceState:"none"}),r.jsx(d,{code:f,dark:!0})]}),isVertical:!0}),r.jsx(m,{light:!0,children:"Props"}),r.jsx(t,{of:i}),r.jsx(c,{of:i})]})]})}function Kr(o={}){const{wrapper:e}={...a(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(p,{...o})}):p(o)}export{Kr as default};
