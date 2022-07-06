import * as React from 'react';
import './typografiStyle.css';
import '../../css/main.css';


const h1Variants = [
    { størrelse: "Extra Small", utseende: "H1 / Mulish / Bold / 20 ", klasse: "heading heading_h1--x-small" },
    { størrelse: "Small", utseende: "H1 / Mulish / Bold / 24 ", klasse: "heading heading_h1--small" },
    { størrelse: "Medium", utseende: "H1 / Mulish / Bold / 32 ", klasse: "heading heading_h1--medium"},
    { størrelse: "Large", utseende: "H1 / Mulish / Bold / 36 ", klasse: "heading heading_h1--large"}
  ]

const h2Variants = [
    { størrelse: "Extra Small", utseende: "H2 / Mulish / Bold / 18 ", klasse: "heading heading_h2--x-small" },
    { størrelse: "Small", utseende: "H2 / Mulish / Bold / 20 ", klasse: "heading heading_h2--small" },
    { størrelse: "Medium", utseende: "H2 / Mulish / Bold / 24 ", klasse: "heading heading_h2--medium"},
    { størrelse: "Large", utseende: "H2 / Mulish / Bold / 26 ", klasse: "heading heading_h2--large"}
  ]

const h3Variants= [
    { størrelse: "Extra Small", utseende: "H3 / Mulish / Bold / 16 ", klasse: "heading heading_h3--x-small" },
    { størrelse: "Small", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading heading_h3--small-medium" },
    { størrelse: "Medium", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading heading_h3--small-medium"},
    { størrelse: "Large", utseende: "H3 / Mulish / Bold / 20 ", klasse: "heading heading_h3--large"}
  ]

const bodyTextVariants= [
    { størrelse: "Extra Small", utseende: "Brødtekst / Mulish / Regular / 16 ", klasse: "body-text body-text--x-small" },
    { størrelse: "Small", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--small-medium-large" },
    { størrelse: "Medium", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--small-medium-large"},
    { størrelse: "Large", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--small-medium-large"}
  ]

  const labelVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "label label--x-small" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "label label--small-medium-large" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "label label--small-medium-large"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "label label--small-medium-large"}
  ]

  const detailVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "detail detail--x-small" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "detail detail--small-medium-large" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "detail detail--small-medium-large"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "detail detail--small-medium-large"}
  ]



function Heading1() {
    return (
    <div>
        <table >
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {h1Variants.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.størrelse}</td>
            <td className={val.klasse}>{val.utseende}</td>
            <td>{val.klasse}</td>
            </tr>
        )
        })}
        </table>
    </div>        
    );}

function Heading2() {
    return (
    <div>
        <table>
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {h2Variants.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.størrelse}</td>
            <td className={val.klasse}>{val.utseende}</td>
            <td>{val.klasse}</td>
            </tr>
            )
        })}
        </table>
    </div>        
    );}


function Heading3() {
    return (
    <div>
        <table >
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {h3Variants.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.størrelse}</td>
            <td className={val.klasse}>{val.utseende}</td>
            <td>{val.klasse}</td>
            </tr>
        )
        })}
        </table>
    </div>        
    );}
    
function BodyText() {
    return (
    <div>
        <table >
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {bodyTextVariants.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.størrelse}</td>
            <td className={val.klasse}>{val.utseende}</td>
            <td>{val.klasse}</td>
            </tr>
        )
        })}
        </table>
    </div>        
    );}


function Label() {
    return (
    <div>
        <table>
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {labelVariants.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.størrelse}</td>
            <td className={val.klasse}>{val.utseende}</td>
            <td>{val.klasse}</td>
            </tr>
        )
        })}
        </table>
    </div>        
    );}



function Detail() {
    return (
    <div>
        <table>
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {detailVariants.map((val, key) => {
        return (
            <tr key={key}>
                <td>{val.størrelse}</td>
                <td className={val.klasse}>{val.utseende}</td>
                <td>{val.klasse}</td>
            </tr>
        )
        })}
        </table>
    </div>        
    );}
    

function Underline(){
    return (
        <table>
            <tr>
                <th></th>
                <th>UTSEENDE</th>
                <th>KLASSE</th>
            </tr>
                <tr>
                    <td>Med understrekning</td>
                    <td class="detail--small-medium-large underline">Alpha Bravo Charlie</td>
                    <td> underline</td>
                </tr>
                <tr>
                    <td>Uten understrekning</td>
                    <td class="detail--small-medium-large">Alpha Bravo Charlie</td>
                    <td></td>
                </tr>
        </table>
    );
}

export {Heading1,Heading2,Heading3,BodyText, Label, Detail, Underline};