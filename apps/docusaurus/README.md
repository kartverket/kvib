# KVIB - Kartverkets interaksjon- og designbibliotek

[KVIB](https://kartverket.github.io/kvib/) er et prosjekt i regi av eiendomsportalen med mål om å samle designguidelines og kode for Kartverkets applikasjoner.

Dokumentasjonen for KVIB hostes med [github-pages](https://pages.github.com/).

I tillegg har vi også laget npm package, KVIB-css, som inneholder css for designbiblioteket. 
Kildekoden til dette ligger i static/css-mappen i dette repoet.

## KVIB-CSS:
For å publisere ny versjon av KVIB-css:
1. Trykk på Github Actions i Kvib Github repository
2. Velg  "KVIB Package publish"
3. Trykk på "Run workflow" på Master branch.

Ny versjon av KVIB-css blir opprettet og publisert i kartverkets npm konto.

## Rutine ved endringer:
1. Gjør nødvendige endringer i css-filene i css-mappa i static/css.
2. Sørg for at dokumentasjonen er oppdatert for all ny kode i docs-mappa.
3. Opprett pull-request for endringene dine på github.
4. Merg endringene til master når de er godkjent.
5. Publiser ny versjon (se steg 1-3 i avsnittet over) av KVIB-css til npm.
6. Oppdater blog med informasjon om ny versjon og hva som er endret, (hent versjonsnummer fra package.json i static/css, som ble oppdatert når du kjørte steg 3 i publiseringen)
7. Push commit med nytt versjonsnummer og oppdatert blog direkte på master
