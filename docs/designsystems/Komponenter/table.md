---
id: tableID
title: (!)Listevisning
description: Lister som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/table
displayed_sidebar: designsystemSidebar
sidebar_position: 7
---
_**OBS! Under konstruksjon**_

_**Merk at eksempelet lenket nedenfor, samt malen under, er under konstruksjon. De kan dermed ikke tas i bruk på grunn av følgende feil og mangler:**_
* _**Komponenten er ikke testet etter KVIBs rutine for kvalitetskontroll**_
* _**Vertikal scroll forekommer ikke etter 12 rader. Det er nå høyden på containeren rundt listen som bestemmer når scroll settes inn**_
* _**Det er ikke testet om horistontal scroll forekommer ved for mange tegn. Det er heller ikke tatt hensyn til hvordan en eventuell overflyt skal håndteres**_
* _**Avmerkingsboksens label er ikke fjernet i eksempelet**_
* _**Hvis man huker av "Slett alle"-boksen, skal alle avmerkingsboksene markeres. Hvis man så avhuker "Slett alle"-boksen, skal alle avmerkingsbokser gå tilbake til tilstanden de var i før boksen ble huket av. Det vil si at en avmerkingsboks som var markert før "Slett alle"-boksen ble huket av, skal forbli markert når "Slett alle"-boksen avhukes. Se Figma-KVIB for demonstrasjon. Denne oppførselen er ikke implementert enda**_
<hr/>


KVIBs listevisning har en standard mal, som vist under. Det vil si at utvikler må endre innholdet og tilpasse størrelsen til eget design. Det stilles likevel felles krav til alle listevisninger:

* Listen skal vise maks 12 rader. Etter 12 rader skal scroll brukes
* Horisontal scroll skal _aldri_ brukes!
* Celler med tall skal ha høyrestilt innhold
* Celler med tekst skal ha venstrestilt innhold
* Celler med ikoner skal alltid ha ikonet på venstre side av teksten
* Blanke celler brukes der det er behov for celler uten innhold
* Celle med avsjekksliste skal ha en "Slett alle"-funksjon
* Sticky header skal benyttes
* Listen skal aldri gå utover designets maks grid bredde

[Et eksempel som demonstrerer oppførselen til en listevisning og hvordan denne kan se ut finnes her <span class="material-symbols-outlined">open_in_new</span>](pathname:///html/table.html). Ettersom "Slett alle"-funksjonen krever Javascript, kan eksempelet ikke vises på denne siden. Se ellers standard malen under.

<table id="data-input">
    <tr>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
  </table>

<br/>

  ```markdown
<table id="data-input">
    <tr>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
  </table>
  ```