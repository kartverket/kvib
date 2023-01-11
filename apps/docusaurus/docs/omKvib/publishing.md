---
id: publishingID
title: Publisering
description: Publisering av CSS-pakke og GitHub Pages
slug: /omKvib/publisering
displayed_sidebar: OmKvibSidebar
---

## 🚦 Viktig infomasjon eller kjøreregler for de som ønsker å bidra 🚦

1. Per dags dato er det ikke klart til å gi flere skrivetilganger direkte i repoet.  

2. Alle som vil hjelpe til på KVIB må **forke repoet** og lage pull request.  

3. Pull requesten vil bli sett på i løpet av **1 - 3 virkedager.** De som skal godkjenne pull requestene er:  

@Farhad Ahmadhadi  
@Sebastian Maro  
@Bente Lien Nilsen   
@Espen Henriksen.
Har dere spørsmål relatert til kode på KVIB kan dere kontakte dem.  
Har dere design spørsmål kan dere kontakte @Frida Støvern eller @Wan.

## Publisering av ny CSS-pakke
For å publisere ny versjon av KVIB-CSS til GitHub Packages:
1. Trykk på GitHub Actions i KVIB GitHub repository

1. Trykk på Github Actions i Kvib Github repository

2. Velg  "KVIB Package publish"

3. Trykk på "Run workflow" på Master branch.

Ny versjon av KVIB-CSS blir opprettet som GitHub Package og gjort klar til bruk.

## Publisering til GitHub Pages
GitHub Pages bruker gh-pages branchen som kilde.

GitHub actions workflow "Deploy to GitHub Pages" er opprettet for å publisere til GitHub Pages.
Ved push til master branchen, "Test deployment" workflow kjører et build test og etter godkjenning vil "Deploy to GitHub Pages" bli aktivert.