---
id: infoKvibID
title: Om Kvib
description: Om KVIB
slug: /omkvib
displayed_sidebar: OmKvibSidebar
---

<p class="heading heading__h1--s">
Kvib er kartverkets digitale verktøykasse. Ved bruk av Kvib jobber vi med en felles kjerne som hjelper oss med god arbeidsflyt og helhetlig brukeropplevelse.
</p>

<p class="body-text body-text--sml">
Et designsystem blir aldri helt ferdig, men er et organisk verktøy som utvikler seg utover tid. Har du kommentarer eller har du lyst til å bidra? <br/> <a href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com?subject=KVIB Feedback">Send oss en mail</a>
</p>

## Kom i gang som designer

### Figma
<p class="body-text body-text--sml">
For å lage skisser til digitale flater bruker vi Figma. Figma er et effektiv verktøy som brukes til skisser, prototyping, leveranse, kommunisere og hente ut kode. Alt lagres i skyen, fungerer både som applikasjon og i nettleser og trenger derfor ikke å lastes ned. 
Et supert verktøy for å lettere kunne dele underveis i prosessen og samabeide godt på tvers av fagfelt.
</p>

<p class="body-text body-text--sml">

[Kartverkets Figma <span class="material-symbols-outlined">open_in_new</span>](https://www.figma.com/files/team/1014807223471806266)

</p>

<p class="body-text body-text--sml">
Har du ikke tilgang eller ønsker å få en kort introduksjon til Figma? <br/> Kontakt <a href="mailto:wanwisa.johnsrud@kartverket.no?subject=KVIB Figma">wanwisa.johnsrud@kartverket.no.</a>
</p>

### Slack
<p class="body-text body-text--sml">
Som kommunikasjonsverktøy bruker vi Slack. Slack er et godt verktøy for både chat og kanaler til faggrupper, prosjektgrupper og annet. 
Kanaler som kan være nyttig for deg er #Kartverkets-designteam, #gen-kvib og #laug-brukeropplevelse.
</p>
<p class="body-text body-text--sml">

Kartverkets slack finner du [Her <span class="material-symbols-outlined">open_in_new</span>](https://kartverketgroup.slack.com/)

</p>

### UX-møter
<p class="body-text body-text--sml">
For å sikre helhetlige tjenester og god dialog på tvers av team har vi etablert UX-møter en gang i uka. 
Ønsker du å bli inkludert i møtene kan du sende en mail til <a href="mailto:wanwisa.johnsrud@kartverket.no?subject=KVIB UX-møte">wanwisa.johnsrud@kartverket.no.</a> Velkommen!
</p>


## Kom i gang som utvikler

### Bruk av CSS

<div class="background--container--green">

#### Ta i bruk @kvib/css via NPM
<p class="body-text body-text--sml">For å laste ned og ta i bruk KVIB-CSS, skriv følgende kommando i terminalen:</p>

```markdown
npm i @kvib/css
```
<p class="body-text body-text--sml">Du kan også angi i package.json fila i prosjektet ditt hvilken versjon av @kvib/css du ønsker å ta i bruk, slik at teamet selv har full kontroll når det kommer oppdateringer til biblioteket.</p>

<p class="body-text body-text--sml">Importer eller legg til link til biblioteket i CSS eller HTML filen i prosjektet.</p>

- I HTML fil:

```markdown
<link rel="stylesheet" href="PATH/node_modules/@kvib/css/main.css">
```

- I CSS fil:

```markdown
@import 'PATH/node_modules/@kvib/css/main.css';
```

<p class="body-text body-text--sml">Vi anbefaler primært å bundle @KVIB/css sammen med front-end koden deres for å ha full kontroll på tilgjengelighet og versjonering av denne. Dersom dere allikevel ønsker å ta i bruk KVIB-css via et CDN er det for eksempel mulig å benytte seg av <a href="https://www.jsdelivr.com/">jsDeliver</a> Dette er et open source CDN som tilbyr alle pakker offentlig tilgjengelige på npm, inkludert KVIB. Vær da oppmerksom på at dere selv må vurdere risiko ved opptid på tjenesten, og at dere bør hente ressursene med crossorigin=anonymous, for å hindre at CDN-et brukes for å spore brukere rundt om kring på nettet. Mer info om crossorigin finner du på <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin">Mozilla developer network</a></p>

</div>

### React
Kommer snart

