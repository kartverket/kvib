---
id: radiobuttonID
title: Radioknapp
description: Radioknapper som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/radiobutton
displayed_sidebar: designsystemSidebar
sidebar_position: 3
---

***OBS! NVDA har en bug som gjør at skjermleseren ikke klarer å lese av riktig state på radioknappen. Den er derfor testet med Chromevox der riktig state blir lest***

***
 
 Radioknapper skal benyttes der en bruker kun skal kunne gjøre ett enkelt valg, og ikke flervalg. Ved et nytt valg skal eventuelle tidligere valg fjernes automatisk. Feilmelding avkrysningsknapp skal brukes for å visualisere feil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ).
 
For å style <code><label\></code>-elementet, skal egne CSS-klasser fra
[_Typografi_](../designTokens/typography.mdx#label)
benyttes. I tillegg skal hver gruppe med radioknapper ligge i <code><fieldset\></code>, og ha en <code><legend\></code> for å vise at elementene hører sammen. Dette er for at skjermleser skal kunne identifisere beskrivelsen til knappene. Se eksempelbruk under.

## Normal radioknapp

Radioknappene får en fokus sirkel når de velges med tastaturet.

<fieldset>
    <legend>Eksempel på gruppe med radioknapper</legend>
    <div class="kv-button__radio">
        <input type="radio" id="radioBtn_1" name="radioGroup1"/>
        <label class="detail detail--sml" for="radioBtn_1">Input tekst</label>
    </div><br/>
    <div class="kv-button__radio">
        <input type="radio" id="radioBtn_2" name="radioGroup1"/>
        <label class="detail detail--sml" for="radioBtn_2">Input tekst</label>
    </div>
</fieldset>

<br/>


```markdown
<fieldset>
    <legend>Eksempel på gruppe med radioknapper</legend>
    <div class="kv-button__radio">
        <input type="radio" id="radioBtn_1" name="radioGroup1"/>
        <label class="detail detail--sml" for="radioBtn_1">Input tekst</label>
    </div><br/>
    <div class="kv-button__radio">
        <input type="radio" id="radioBtn_2" name="radioGroup1"/>
        <label class="detail detail--sml" for="radioBtn_2">Input tekst</label>
    </div>
</fieldset>
```

## Feilmelding radioknapp

Følgende radioknapp får feilmeldingsfarge hvis et av alternativene må være valgt før bruker kan gå videre. Merk at i dette eksempelet er <code>checked={false}</code> brukt for å tvinge frem en feilmelding som demonstrasjon.

<fieldset>
    <legend>Eksempel på gruppe med radioknapper som har feilmelding</legend>
    <div class="kv-button__radio">
        <input type="radio" id="invalidRadioBtn_1" name="radioGroup2" required checked={false}/>
        <label class="detail detail--sml" for="invalidRadioBtn_1">Feilmelding</label>
    </div><br/>
    <div class="kv-button__radio">
        <input type="radio" id="invalidRadioBtn_2" name="radioGroup2"/>
        <label class="detail detail--sml" for="invalidRadioBtn_2">Input tekst</label>
    </div>
</fieldset>
<br/>

```markdown
<fieldset>
    <legend>Eksempel på gruppe med radioknapper som har feilmelding</legend>
    <div class="kv-button__radio">
        <input type="radio" id="invalidRadioBtn_1" name="radioGroup2" required checked={false}/>
        <label class="detail detail--sml" for="invalidRadioBtn_1">Feilmelding</label>
    </div><br/>
    <div class="kv-button__radio">
        <input type="radio" id="invalidRadioBtn_2" name="radioGroup2"/>
        <label class="detail detail--sml" for="invalidRadioBtn_2">Input tekst</label>
    </div>
</fieldset>
```