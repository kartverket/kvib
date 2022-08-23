# KVIB - Kartverkets interaksjon- og designbibliotek

[KVIB](https://kartverket.github.io/kvib/) er et prosjekt i regi av eiendomsportalen med mål om å samle designguidelines og kode for Kartverkets applikasjoner.

Dokumentasjonen for KVIB hostes med [github-pages](https://pages.github.com/).

I tillegg har vi også laget et github package, KVIB-css, som inneholder css for designbiblioteket. Kildekoden til dette ligger i css-mappen i dette repoet.

## KVIB-CSS:
For å publisere ny versjon av KVIB-css til Github Packages:
1. Trykk på Github Actions i Kvib Github repository
2. Velg  "KVIB Package publish"
3. Trykk på "Run workflow" på Master branch.

Ny versjon av KVIB-css blir opprettet som Github Package og gjort klar til bruk.

## Rutine ved endringer:
1. Gjør nødvendige endringer i css-filene i css-mappa i src.
2. Sørg for at dokumentasjonen er oppdatert for all ny kode i docs-mappa.
3. Opprett pull-request for endringene dine på github
4. Merg endringene til master når de er godkjent
5. Publiser ny versjon (se steg 1-3 i avsnittet over) av KVIB-css til Github Packages
6. Oppdater blog med informasjon om ny versjon og hva som er endret, (hent versjonsnummer fra package.json, som ble oppdatert når du kjørte steg 3 i publiseringen)
7. Push commit med nytt versjonsnummer og oppdatert blog direkte på master
