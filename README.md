<h1 align="center">
    <br />
    <img src="./apps/storybook/public/assets/kvib.png" style="width:12rem;" />
    <br/><br/>Kvib
</h1>

<div align="center">
    <h4>Kartverkets designsystem</h4>
    <br/>
    <p>
      <a href="https://www.npmjs.com/package/@kvib/react"><img alt="npm" src="https://img.shields.io/npm/v/@kvib/react?label=version" /></a>&nbsp;
      <a href="https://design.kartverket.no"><img alt="Storybook" src="https://shields.io/badge/storybook-white?logo=storybook&style=flat" /></a>&nbsp;
    </p>
    <br/>
</div>

## Kom i gang

Etter man har klonet repoet kommer man i gang ved å laste ned avhengigheter først:

```shell
npm i
```

Bygg ev. prosjektet før man kjører opp:

```shell
npm run build
```

Etterpå kjører man opp Storybook lokalt:

```shell
npm run dev
```

Etterhvert vil man da kunne aksessere http://localhost:6006 og se det samme som befinner seg på https://design.kartverket.no.

## Gjøre endringer

Designsystemet kommer som et turbo-repo med to forskjellige hovedmapper:

```
@kvib/
├── apps/storybook  # alt relatert til dokumentasjon
└── packages/react  # selve komponentbiblioteket
```

Ønsker man å gjøre endringer på selve utseende eller oppførselen til en komponent gjør man dette i `packages/react`. Alle komponentene eksporteres gjennom `index.ts` og er definert i mappene under `src` navngitt etter komponentene selv.

I Kvib 5 bygger komponentene på Chakra UI sin versjon 3, så her er de fleste av Chakra-komponentene bygget opp gjennom Chakra sitt CLI-verktøy som de kaller "snippets". Slike snippets havner under `components/ui`, og endringer på funksjonaliteten til Chakra-komponentene gjøres der.

Fargetema og utseende til slike Chakra-komponenter får styling gjennom et konsept som de kaller `recipe`s. Alle slike oppskrifter er definert i `theme/index.ts`. Gjør man endringer her kan det kreve at man kjører CLI-verktøyet som Chakra tilbyr for å bygge typer, tilgjengelig gjennom:

```shell
npm run typegen
```

### Publisere endringer

Kort fortalt gjøres endringer i følgende rekkefølge:

1. Endring i React-pakken
2. Oppdater Storybook for å reflektere gitt endring
3. Klargjør for lansering ved å opprette et `Changeset` (kun aktuelt for endringer i React-koden)

- Fra rot i prosjektet, kjør:
  ```shell
  npx changeset
  ```
- Naviger med piltastene ned til `@kvib/react`, marker denne med et trykk på `Space`-tasten
- Trykker man `Enter` vil man få spørsmål om hvilken type endring dette er. For de fleste endringer vil det være småjusteringer som kun trenger en patch-release, så dersom endringen ikke er gedigen trykker man `Enter` igjen for spørsmålene om major og minor-releases.
- Etter å ha hoppet over major og minor blir man bedt om å skrive et sammendrag. Dette vil vises i [endringsloggen](https://design.kartverket.no/?path=/docs/endringslogg--docs), så gjør det kort og presist.
- Til slutt sjekker man inn markdown-filen som blir opprettet under `.changeset` og inkluderer denne i PR-en på GitHub.

4. Lag en Pull Request på GitHub og få denne godkjent og merget inn i `master`
5. Siste steg for publisering av endringen i `@kvib/react` krever at man _også_ godkjenner og merger en ny Pull Request kalt Version Packages som opprettes gjennom våre automatiseringer når noe havner i `master`. Ved å merge denne vil man trigge prosessen som lanserer endringen i pakkehåndteringsverktøyet NPM.

En mer utfyllende forklaring på denne prosessen er tilgjengelig [her](https://design.kartverket.no/?path=/docs/kom-i-gang-for-utviklere--docs).
