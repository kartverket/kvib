---
id: infoKvibID
title: Om Kvib
description: Om KVIB
slug: /omkvib
displayed_sidebar: OmKvibSidebar
---
# Om Kvib
<p class="heading heading__h1--s">
Kvib er kartverkets digitale verktøykasse. 
Ved bruk av Kvib jobber vi med en felles kjerne som hjelper oss med god arbeidsflyt og kontinuerlige leveranser
</p>

Et designsystem blir aldri helt ferdig, men er et organisk verktøy som utvikler seg utover tid.

## Kom i gang som designer
<p class="body-text body-text--sml">For å lage skisser til digitale flater bruker vi Figma. Figma er et verktøy som er effektiv i bruk av skisser, prototyping, leveranse, kommunisere og hente ut kode. 
Alt lagres i skyen og trenger ikke å lastes ned, dermed er et supert verktøy samabeide godt.</p>

### Slack
<p class="body-text body-text--sml">
Som kommunikasjonsverktøy bruker vi Slack. Slack er et godt verktøy for både chat og kanaler til faggrupper, prosjektgrupper og annet. 
Kanaler som kan være nyttig for deg er #Kartverkets-designteam, #gen-kvib og #laug-brukeropplevelse. Kartverkets slack finner du her
</p>

### UX-møter
<p class="body-text body-text--sml">
For å sikre helhetlige tjenester og god dialog på tvers av team har vi etablert UX-møter en gang i uka. 
Ønsker du å bli inkludert i møtene kan du sende en mail til wanwisa.johnsrud@kartverket.no. Velkommen!
</p>

## Kom i gang som utvikler
### HTML link
Importer KVIB HTML link:

```markdown
 <link rel="stylesheet" href='https://kartverket.github.io/kvib/css/main.css'>
```

### CSS import
Importer KVIB i index.css i prosjektet:

```markdown
@import url("https://kartverket.github.io/kvib/css/main.css");
```

### Installasjon av KVIB NPM Package

#### (!)KVIB React components
***OBS! KVIB React Components er under konstruksjon:***

#### KVIB-CSS

For å laste ned og ta i bruk KVIB-CSS, skriv følgende kommando i terminalen:

```markdown
npm i @kartverket/kvib-css
```

Importer eller legg til link til biblioteket i CSS eller HTML filen i prosjektet.

- I HTML fil:

```markdown
<link rel="stylesheet" href="PATH/node_modules/@kartverket/kvib/main.css">
```

- I CSS fil:

```markdown
@import 'PATH/node_modules/@kartverket/kvib/main.css';
```

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
Les [BEM sine navngivningskonvensjoner <span class="material-symbols-outlined">open_in_new</span>](https://en.bem.info/methodology/naming-convention/) for en mer detaljert beskrivelse om bruk av konvensjonene, i tillegg til eksempler. Følg disse ved implementasjon av CSS-klasser. 
