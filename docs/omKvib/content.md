---
id: contentID
title: Dokumentasjon
description: Innhold og struktur i dokumentasjon
slug: /omKvib/dokumentasjon
displayed_sidebar: OmKvibSidebar
---

## Struktur av dokumentasjonen

* Følg alltid overskriftsnivåene nedover, selv om dette nødvendigvis ikke gir riktig størrelse. Begynn med <code><h2\></code> (##) ettersom sidetittelen, <code><h1\></code>, settes i beskrivelsen av _.mdx_ filen (øverst i filen) ved bruk av “title”.

* Vær oppmerksom på hvor mye innhold som blir i _.mdx_ filen. Vurder å eventuelt dele opp innholdet i flere _.mdx_ filer, og legg de samlet i en fellesmappe. Dette genererer et til undernivå i venstre sidebar (eks. se hvordan dette er løst med knapper).
  En slik strukturering gir mindre scrolling på samme side, og samtidig mer oversikt i høyre sidebar ettersom den kun viser element <code><h2\></code> og <code><h3\></code>.

* Ved opprettelse av ny _.mdx_ fil skal filens <code>id</code>, <code>title</code>, <code>description</code>, <code>slug</code>, <code>displayed_sidebar</code> og <code>sidebar_position</code> ligge øverst i filen. Se eksempel for radioknapp under:
```markdown title='docs/designsystems/Komponenter/radiobuttons.mdx'
---
id: radiobuttonID                            /* dokumentets ID brukes blant annet til å legge .mdx-filen i sidemenyen */
title: Radioknapp                            /* tittelen som vises på siden */
description: Oversikt over radioknapper som blir brukt i Kartverket sine løsninger.
slug: /designsystem/komponenter/radiobutton  /* filstien til .mdx filen */                  
displayed_sidebar: designsystemSidebar       /* for å vise filen i sidebaren til designsystems */
sidebar_position: 3                          /* setter posisjonen i sidebaren */
---

Dokumentasjon HER
```

### Innhold
Få alltid godkjent komponenter av designer før det legges inn i KVIB. Dokumentasjon av en komponent skal inneholde:

* Beskrivende heading: Bruk mest naturlige heading-element, avhengig av sturkturen på resten av siden, som tittel på den spesifikke komponenten


* Lag en liten beskrivelse av komponenten under heading


* Vis utseende til komponenten ved å skrive HTML-kode med tilhørende CSS-klasser


* Vis tilhørende HTML-kode under komponenten ved å bruke en kodeblokk uten tittel (_ ‘''markup <….> '’'_ )


* Tillegg for komponenter som krever Javascript
  - Lag en egen _.html_ fil for komponenten, og link til denne i dokumentasjonen. Dette er hovedsaklig for å demonstrere oppførselen til komponenten
  - Legg evt inn ekstra statiske bilder med beskrivende teskt for å vise flere variasjoner av komponenten



![documenting_example](/img/image_docs/documenting_example.PNG)