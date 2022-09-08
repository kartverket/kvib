---
id: searchbarID
title: (!)Søkefelt
description: Søkefelt som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/søkefelt
displayed_sidebar: designsystemSidebar
---
***OBS! Under konstruksjon:***
- *** Ikke design for dette i Figma-KVIB ***
- ***Nåværende komponent er bygget opp av inputfelt fra KVIB, med en søkeknapp (utgangspunkt i kartverket.no) inni feltet ***
- ***Ikke tatt høyde for fokus og hover-funksjoner på hverken knapp eller inputfelt ***
- ***Kartverket.no har enda ikke et felles design for søkefelt, men dette kommer etterhvert ***

***

For å endre lengden til søkefeltet, må det legges inn i et <code><div\></code>-element, deretter kan størrelsen endres ved å sette bredde på <code><div\></code>-elementet.

<div class="searchbar__wrapper">
<div class="inputField__wrapper">
    <input class="inputField" type="text" id="inputFieldID" placeholder="Søk..."/>
</div>
    <button class="button button__searchbar">
        <span class="material-symbols-outlined">search</span>
    </button>
</div>

```markup
<div class="searchbar__wrapper">
    <div class="inputField__wrapper">
        <input class="inputField" type="text" id="inputID" placeholder="Søk..."/>
    </div>
    <button class="button button__searchbar">
        <span class="material-symbols-outlined">search</span>
    </button>
</div>
```