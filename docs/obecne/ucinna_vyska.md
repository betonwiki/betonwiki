# Staticky účinná výška průřezu
*Autor: Jan Novák*   
*Datum poslední změny: 25.11.2024*

Účinná výška průřezu je jedním ze **základních parametrů průřezu**.
Tento parametr je využíván v různých rovnicích, a jeho **přesné stanovení je tedy důležitým krokem** při statickém výpočtu.

## Obecná definice
Účinná výška průřezu (*d*) je vzdálenost těžiště tažené výztuže od nejvíce tlačených vláken betonu.

<img src="ucinna_vyska_1.png" class="center-image" style="width: 400px;"/>

## Účinná výška trámu
Účinnou výšku průřezu trámu stanovíme jednoduše z geometrie průřezu pomocí vztahu  
$$
d = h - c - ⌀_{sw} - ⌀_s/2,
$$
kde
$h$ je výška průřezu,
$c$ je [krytí](kryti.md),
$⌀_{sw}$ je [průměr třmínků](),
$⌀_s$ je [průměr podélné výztuže trámu]().

<img src="ucinna_vyska_tram.png" class="center-image" style="width: 400px;"/>

## Účinná výška desky
Na rozdíl od trámu u desky nemáme třmínky. U desek je však výztuž v obou směrech, což může komplikovat výpočet účinné výšky.

### Účinná výška jednosměrně pnuté desky
Účinná výška jednosměrně pnuté desky se určí pomocí vztahu 
$$
d = h - c - ⌀_s/2,
$$
kde
$h$ je tloušťka desky,
$c$ je [krytí](kryti.md),
$⌀_s$ je [průměr hlavní nosné výztuže desky]().

<img src="ucinna_vyska_deska.png" class="center-image" style="width: 400px;"/>

### Účinná výška obousměrně pnuté desky
Doplnit text.

$$
d_1 = h - c - ⌀_{s,2} - ⌀_{s,1}/2, \\
d_2 = h - c - ⌀_{s,2}/2,
$$

<img src="ucinna_vyska_deska_dvoj.png" class="center-image" style="width: 400px;"/>

### Účinná výška desky ve smyku
Doplnit text, rovnici a a obrázek.