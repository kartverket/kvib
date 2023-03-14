---
id: contentID
title: Dokumentasjon
description: Innhold og struktur i dokumentasjon
slug: /omKvib/dokumentasjon
displayed_sidebar: OmKvibSidebar
---

## Struktur av dokumentasjonen

- Følg alltid overskriftsnivåene nedover, selv om dette nødvendigvis ikke gir riktig størrelse. Begynn med <code><h2\></code> (##) ettersom sidetittelen, <code><h1\></code>, settes i beskrivelsen av _.md_ filen (øverst i filen) ved bruk av “title”.

- Vær oppmerksom på hvor mye innhold som blir i _.md_ filen. Vurder å eventuelt dele opp innholdet i flere _.md_ filer, og legg de samlet i en fellesmappe. Dette må legges til som et nytt undernivå i venstre sidebar (eks. se hvordan dette er løst med knapper).
  En slik strukturering gir mindre scrolling på samme side, og samtidig mer oversikt i høyre sidebar ettersom den kun viser element <code><h2\></code> og <code><h3\></code>.

- Ved opprettelse av ny _.md_ fil skal filens <code>id</code>, <code>title</code>, <code>description</code>, <code>slug</code>, <code>displayed_sidebar</code> og <code>sidebar_position</code> ligge øverst i filen. Se eksempel for radioknapp under:

```markdown title='docs/designsystems/Komponenter/radiobuttons.md'
---
id: radiobuttonID                            /* dokumentets ID brukes blant annet til å legge .md-filen i sidemenyen */
title: Radioknapp                            /* tittelen som vises på siden */
description: Oversikt over radioknapper som blir brukt i Kartverket sine løsninger.
slug: /designsystem/komponenter/radiobutton  /* filstien til .md filen */
displayed_sidebar: designsystemSidebar       /* for å vise filen i sidebaren til designsystems */
sidebar_position: 3                          /* setter posisjonen i sidebaren */
---

Dokumentasjon HER
```

### Innhold

<p class="body-text body-text--sml">
Få alltid godkjent komponenter av designer før det legges inn i KVIB. Bildet under viser hvordan det kan se ut. Dokumentasjon av en komponent skal inneholde:

- Beskrivende tittel: Bruk mest naturlige overskriftselement, avhengig av sturkturen på resten av siden, som tittel på den spesifikke komponenten

* Lag en liten beskrivelse av komponenten under overskriften.

- Vis utseende til komponenten ved å skrive HTML-kode med tilhørende CSS-klasser.

* Vis tilhørende HTML-kode under komponenten ved å bruke en kodeblokk uten tittel, slik som vist under:

<code> `markup <br></br> <code>HTML-kode for komponenter her</code> <br></br> <code>` </code>
</code>

- Tillegg for komponenter som krever Javascript
  - Lag en egen _.html_ fil for komponenten, og link til denne i dokumentasjonen. Dette er hovedsakelig for å demonstrere oppførselen til komponenten
  - Legg evt inn ekstra statiske bilder med beskrivende tekst for å vise flere variasjoner av komponenten

</p>

![documenting_example](/img/image_docs/documenting_example.PNG "Eksempel: Statisk bilde av grønn primærknapp")
