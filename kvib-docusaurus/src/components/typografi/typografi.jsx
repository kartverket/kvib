import * as React from 'react';
import Box from '@mui/material/Box';

import './typografiStyle.css';
import '../../../../css/main.css';


const h1Variants = [
    { størrelse: "Extra Small", utseende: "H1 / Mulish / Bold / 20 ", klasse: "heading h1--x-small" },
    { størrelse: "Small", utseende: "H1 / Mulish / Bold / 24 ", klasse: "heading h1--small" },
    { størrelse: "Medium", utseende: "H1 / Mulish / Bold / 32 ", klasse: "heading h1--medium"},
    { størrelse: "Large", utseende: "H1 / Mulish / Bold / 36 ", klasse: "heading h1--large"}
  ]

const h2Variants = [
    { størrelse: "Extra Small", utseende: "H2 / Mulish / Bold / 18 ", klasse: "heading h2--x-small" },
    { størrelse: "Small", utseende: "H2 / Mulish / Bold / 20 ", klasse: "heading h2--small" },
    { størrelse: "Medium", utseende: "H2 / Mulish / Bold / 24 ", klasse: "heading h2--medium"},
    { størrelse: "Large", utseende: "H2 / Mulish / Bold / 26 ", klasse: "heading h2--large"}
  ]

const h3Variants= [
    { størrelse: "Extra Small", utseende: "H3 / Mulish / Bold / 16 ", klasse: "heading h3--x-small" },
    { størrelse: "Small", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading h3--s-m" },
    { størrelse: "Medium", utseende: "H3 / Mulish / Bold / 18 ", klasse: "heading h3--s-m"},
    { størrelse: "Large", utseende: "H3 / Mulish / Bold / 20 ", klasse: "heading h3--large"}
  ]

const brodtekstVariants= [
    { størrelse: "Extra Small", utseende: "Brødtekst / Mulish / Regular / 16 ", klasse: "brodtekst" },
    { størrelse: "Small", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "brodtekst s-m-l" },
    { størrelse: "Medium", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "brodtekst s-m-l"},
    { størrelse: "Large", utseende: "Brødtekst / Mulish / Regular / 18 ", klasse: "brodtekst s-m-l"}
  ]

  const labelVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "label--x-small" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "label--s-m-l" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "label--s-m-l"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "label--s-m-l"}
  ]

  const beskrivendeTekstVariants= [
    { størrelse: "Extra Small", utseende: "Label / Mulish / Regular / 12 ", klasse: "label--x-small" },
    { størrelse: "Small", utseende: "Label / Mulish / Regular / 14 ", klasse: "label--s-m-l" },
    { størrelse: "Medium", utseende: "Label / Mulish / Regular / 14 ", klasse: "label--s-m-l"},
    { størrelse: "Large", utseende: "Label / Mulish / Regular / 14", klasse: "label--s-m-l"}
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
    
function Brodtekst() {
    return (
    <div>
        <table >
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {brodtekstVariants.map((val, key) => {
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



function BeskrivendeTekst() {
    return (
    <div>
        <table>
        <tr>
        <th>STØRRELSE</th>
        <th>UTSEENDE</th>
        <th>KLASSE</th>
        </tr>
        {beskrivendeTekstVariants.map((val, key) => {
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
                    <td class="bekskrivende-tekst--s-m-l underline">Alpha Bravo Charlie</td>
                    <td>bekskrivende-tekst--s-m-l underline</td>
                </tr>
                <tr>
                    <td>Uten understrekning</td>
                    <td class="bekskrivende-tekst--s-m-l">Alpha Bravo Charlie</td>
                    <td>bekskrivende-tekst--s-m-l</td>
                </tr>
        </table>
    );
}

export {Heading1,Heading2,Heading3,Brodtekst, Label, BeskrivendeTekst, Underline};