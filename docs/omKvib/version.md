---
id: versionID
title: Versjon
description: Versjonshåndtering
slug: /omKvib/versjon
displayed_sidebar: OmKvibSidebar
---

## Oppdater versjon
Det er viktig å holde en riktig og oppdatert versjonslogg, slik at det skal bli enklere for brukere av KVIB å kunne se endringer som har blitt gjort mellom hver versjon av biblioteket. Seksjonen øverst i dokumentet viser en oversikt over kommendene endringer.
I versjonsloggen skal den nyeste versjonen stå øverst sammen med utgivelsesdato.

Versjonering følger [konvensjoner fra Semantic Versioning](https://semver.org/).
Hovedsakelig inkrementerer patch-versjon ved bakover kompatibel bug-fix, minor-versjon ved ny bakover kompatibel funksjonalitet og major-versjon ved funksjonalitet som ikke er bakover kompatibel.

For hver endring som gjøres, skal den nye versjonen dokumenteres:

* Legg til ny _.mdx_ fil under _kvib/blog_, med filnavn: **YYYY-MM-DD-version[major.minor.patch].mdx **(formatet gjør at dato generes automatisk)

* Følg strukturen fra eksisterende filer i blog-mappen for å lage en beskrivelse øverst i filen:

  - Sett _"title: Versjon [major.minor.patch]"_.

  - Skriv kort beskrivelse for _.mdx_ filen.

  - Sett passende _tags_.

* Skriv en beskrivelse av endringer som er gjort i versjonen ved å bruke titlene (sett som <code><h2\></code>):

  - Added: nye funksjoner som er lagt til

  - Changed: endringer som er gjort

  - Deprecated: funksjoner som snart skal fjernes.

  - Removed: funskjoner som er fjernet.

  - Fixed: bugs som er fikset.

  - Security: dersom det er sårbarheter i koden.