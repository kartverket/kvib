import * as React from 'react';
import './typografiStyle.css';
import '../../css/main.css';


const h1Variants = [
    { størrelse: "Extra Small", utseende: "H1 / Mulish / Bold / 20 ", klasse: "heading heading__h1--xs" },
    { størrelse: "Small", utseende: "H1 / Mulish / Bold / 24 ", klasse: "heading heading__h1--s" },
    { størrelse: "Medium", utseende: "H1 / Mulish / Bold / 32 ", klasse: "heading heading__h1--m"},
    { størrelse: "Large", utseende: "H1 / Mulish / Bold / 36 ", klasse: "heading heading__h1--l"}
  ]

const h2Variants = [
    { størrelse: "Extra Small", utseende: "H2 / Mulish / Bold / 18 ", klasse: "heading heading__h2--xs" },
    { størrelse: "Small", utseende: "H2 / Mulish / Bold / 20 ", klasse: "heading heading__h2--s" },
    { størrelse: "Medium", utseende: "H2 / Mulish / Bold / 24 ", klasse: "heading heading__h2--m"},
    { størrelse: "Large", utseende: "H2 / Mulish / Bold / 26 ", klasse: "heading heading__h2--l"}
  ]

const h3Variants= [
    { størrelse: "Extra Small", utseende: "H3 / Mulish / Bold / 16 ", klasse: "heading heading__h3--xs" },
    { størrelse: "Small", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading heading__h3--sm" },
    { størrelse: "Medium", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading heading__h3--sm"},
    { størrelse: "Large", utseende: "H3 / Mulish / Bold / 20 ", klasse: "heading heading__h3--l"}
  ]

const bodyTextVariants= [
    { størrelse: "Extra Small", utseende: "Brødtekst / Mulish / Regular / 16 ", klasse: "body-text body-text--xs" },
    { størrelse: "Small", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--sml" },
    { størrelse: "Medium", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--sml"},
    { størrelse: "Large", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "body-text body-text--sml"}
  ]

  const labelVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "label label--xs" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "label label--sml" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "label label--sml"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "label label--sml"}
  ]

  const detailVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "detail detail--xs" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "detail detail--sml" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "detail detail--sml"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "detail detail--sml"}
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
                    <td class="detail--sml underline">Alpha Bravo Charlie</td>
                    <td> underline</td>
                </tr>
                <tr>
                    <td>Uten understrekning</td>
                    <td class="detail--sml">Alpha Bravo Charlie</td>
                    <td></td>
                </tr>
        </table>
    );
}

export {Heading1,Heading2,Heading3,BodyText, Label, Detail, Underline};