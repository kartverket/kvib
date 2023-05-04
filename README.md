# KVIB - Kartverkets interaksjon- og designbibliotek

[KVIB](https://kartverket.github.io/kvib/storybook) er monorepoet til Kartverkets designsystem.

## Innhold

Dette repoet inneholder:

- `apps/storybook`: dokumentasjonssiden for designsystemet
- `packages/react`: komponentbiblioteket i React

## Dokumentasjonsside

Dokumentasjonssiden for designsystemet finner du på https://kartverket.github.io/kvib/storybook. Der dokumenterer vi tokens, retningslinjer for bruk og alle komponentene.

## Ta i bruk

For å ta i bruk komponentbiblioteket må du installere `@kvib/react`.

```
$ npm install @kvib/react
# eller
$ yarn add @kvib/react
```

Etterpå må du wrappe hele react-applikasjonen din `KvibProvider`-komponenten.

```
// I din src/index.tsx fil for eksempel:
import { App } from 'App';
import { KvibProvider } from '@kvib/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <KvibProvider>
    <App />
  </KvibProvider>
);
```

Nå kan du begynne å ta i bruk komponenter i applikasjonen din. For å ta i bruk for eksempel `Button`-komponenten gjør du slik:

```
import { Button } from "@kvib/react";

export const App = () => {
  return (
    <Button variant="primary">
      Rediger
    </Button>
  );
};
```

## Oppsett for å bidra

For å bidra og utvikle lokalt, klon repoet og kjør `npm install` fra rot.

For å bygge applikasjonen og pakken kjør `npm run build`.

Kjør `npm run dev` for å spinne opp utviklingserveren på http://localhost:6006/.

## 🚦 Viktig infomasjon eller kjøreregler for de som ønsker å bidra 🚦

1. Per dags dato er det ikke klart til å gi flere skrivetilganger direkte i repoet.

2. Alle som vil hjelpe til på KVIB må **forke repoet** og lage pull request.

3. Pull requesten vil bli sett på i løpet av **1 - 3 virkedager.** De som skal godkjenne pull requestene er:

@Farhad Ahmadhadi  
@Sebastian Maro  
@Bente Lien Nilsen  
@Espen Henriksen.
@Anna Li
@Anders Larsen
Har dere spørsmål relatert til kode på KVIB kan dere kontakte dem.  
Har dere design spørsmål kan dere kontakte @Frida Støvern eller @Wanni.
