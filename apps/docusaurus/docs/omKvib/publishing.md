---
id: publishingID
title: Publisering
description: Publisering av CSS-pakke og GitHub Pages
slug: /omKvib/publisering
displayed_sidebar: OmKvibSidebar
---
### GitHub repo

https://github.com/kartverket/kvib

## Publisering av ny CSS-pakke
For å publisere ny versjon av KVIB-CSS til GitHub Packages:
1. Trykk på GitHub Actions i KVIB GitHub repository

2. Velg  "KVIB Package publish"

3. Trykk på "Run workflow" på Master branch.

Ny versjon av KVIB-CSS blir opprettet som GitHub Package og gjort klar til bruk.

## Publisering til GitHub Pages
GitHub Pages bruker gh-pages branchen som kilde.

GitHub actions workflow "Deploy to GitHub Pages" er opprettet for å publisere til GitHub Pages.
Ved push til master branchen, "Test deployment" workflow kjører et build test og etter godkjenning vil "Deploy to GitHub Pages" bli aktivert.