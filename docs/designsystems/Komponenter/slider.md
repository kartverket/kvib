---
id: sliderID
title: Slider
description: Sliderere som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/slider
displayed_sidebar: designsystemSidebar
---
Kartverket har to størrelser på en slider; extra small/small og medium/large.
Implementasjon av denne komponenten krever Javascript, i tillegg til CSS-klassene fra KVIB, for å håndtere verdi-endringer. [Se her for demonstrasjon av oppførselen til slideren](pathname:///html/slider.html).
Under følger statiske bilder av slideren for å vise forskjell på de ulike størrelsene, sammen med eksempelkode. Bredden til <code>.slider</code> er satt til 100%, slik at slider-bredden tilpasses ved å legge elementene i f.eks. et <code><div\></code>-element.

For å style <code><label\></code>-elementet, skal egne
[CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)



## Extra small og small



![slider-xs-s](/img/image_docs/slider-xs-s.PNG 'Slider i størrelse extra small og small')

``` markup
  <label for="range-slider"> Skriv tekst her</label>
  <input type="range" id="range-slider" name="range-slider" class="slider slider--xs-s"
           min="0" max="100" />
```


## Medium og large

![slider-m-l](/img/image_docs/slider-m-l.PNG 'Slider i størrelse medium og large')

``` markup
 <label for="range-slider">Skriv tekst her</label>
 <input type="range" id="range-slider" name="range-slider" class="slider slider--m-l"
        min="0" max="100" />
```



