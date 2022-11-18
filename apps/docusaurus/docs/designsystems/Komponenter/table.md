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

<div class="table__container--large">
<table id="data-input">
     <tbody>
    <tr class="detail detail--sml" name="table-header">
        <th>
            <div class="checkbox">
                <input type="checkbox" id="select-all" name="checkbox-list"/>
                <label for="select-all"></label>
            </div>
        </th>
        <th class="detail detail--sml">Slett</th>
        <th class="detail detail--sml">TEKST INNHOLD</th>
        <th class="detail detail--sml">TALL INNHOLD</th>
        <th class="detail detail--sml">TEKST INNHOLD</th>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_1" name="checkbox-list"/><label for="checkbox_1"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">1</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_2" name="checkbox-list"/><label for="checkbox_2"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">2</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_3" name="checkbox-list"/><label for="checkbox_3"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">3</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_4" name="checkbox-list"/><label for="checkbox_4"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">4</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_5" name="checkbox-list"/><label for="checkbox_5"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">5</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_6" name="checkbox-list"/><label for="checkbox_6"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">6</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_7" name="checkbox-list"/><label for="checkbox_7"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">7</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_8" name="checkbox-list"/><label for="checkbox_8"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">8</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_9" name="checkbox-list"/><label for="checkbox_9"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">9</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_10" name="checkbox-list"/><label for="checkbox_10"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">10</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_11" name="checkbox-list"/><label for="checkbox_11"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">11</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
    <tr>
        <td><div class="checkbox"><input type="checkbox" id="checkbox_12" name="checkbox-list"/><label for="checkbox_12"></label></div></td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">12</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
</tbody>
  </table>
</div>

<br/>

  ```markdown
<table id="data-input">
     <tbody>
    <tr class="detail detail--sml" name="table-header">
        <th>
            <div class="checkbox">
                <input type="checkbox" id="select-all" name="checkbox-list"/>
                <label for="select-all"></label>
            </div>
        </th>
        <th class="detail detail--sml">Slett</th>
        <th class="detail detail--sml">TEKST INNHOLD</th>
        <th class="detail detail--sml">TALL INNHOLD</th>
        <th class="detail detail--sml">TEKST INNHOLD</th>
    </tr>
    <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="checkbox_1" name="checkbox-list"/>
                <label for="checkbox_1"></label>
            </div>
        </td>
        <td class="detail detail--sml"></td>
        <td class="detail detail--sml">TEKST TIL VENSTRE</td>
        <td class="detail detail--sml">1</td>
        <td class="detail detail--sml">TEKST TIL HØYRE</td>
    </tr>
</tbody>
  </table>
  ```