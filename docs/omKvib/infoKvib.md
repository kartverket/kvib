---
id: infoKvibID
title: Om KVIB
description: Om KVIB
slug: /
displayed_sidebar: OmKvibSidebar
---

KVIB består av npm-biblioteket KVIB-CSS, som inneholder felles CSS-filer for Kartkverkets applikasjoner.
Denne nettsiden inneholder dokumentasjon av de felles designprinsippene og bruk av stilene i KVIB-CSS. Designet til komponentene har utgangspunkt i designet som ligger på Figma-KVIB. Innholdet der er laget og godkjent av designer.

## Krav til KVIB

Designbiblioteket skal:

* Alltid være vedlikeholdt
* Være enkelt å ta i bruk
* Kun inneholde UU-godkjente elementer og stiler
* Alltid ha oppdatert dokumentasjon
* Inneholde oppdatert dokumentasjon av alle komponenter, med eksempler på bruk og UU
* Inneholde responsive komponenter
* Ha en endringslogg med beskrivelse av hva som er nytt i hver versjon
* Ha tydelige retningslinjer for nye designere og prosjekter
* Utformes på en slik måte at det er minimalt behov for overrides i de enkelte prosjektene
* Følge KVIB sine navngivningskonvensjoner for CSS-klasser, som er forståelige både for utviklere og designere


## Konvensjoner for CSS-klassenavn
Ved å bruke en felles struktur på navngivning av CSS-klasser blir koden enklere å lese, forstå og vedlikeholde. Det er derfor viktig at kode som implementeres i KVIB følger samme konvensjoner.

KVIB bruker navngivningskonvensjoner fra BEM (Block Element Modifier), som baseres på å dele CSS-klasser inn i tre typer; _blokk, element_ og _modifier_. En blokk brukes om entiter som kan stå alene og fremdeles gi mening.
Blokker kan nøstes og samhandle med andre blokker, men alle er semantiske like.
Et element er en del av en blokk og gir ikke mening alene, og er dermed semantisk knyttet til blokken. En modifier fungerer som flagg til en blokk eller et element, og brukes til å endre utseende, oppførsel eller state.
Les <a href="http://getbem.com/naming/" class="underline"> BEM sine navngivningskonvensjoner</a> for en mer detaljert beskrivelse om bruk av konvensjonene, i tillegg til eksempler. Følg disse ved implementasjon av CSS-klasser. 


