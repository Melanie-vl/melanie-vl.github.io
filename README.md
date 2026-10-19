# Portfolio – Melanie van Leeuwen

Portfoliowebsite: een startpagina en zes categoriepagina's. Gewone HTML en CSS, er is geen build-stap nodig.

| Bestand | Inhoud |
|---|---|
| `index.html` | Startpagina: intro, tegels naar de categorieën, over mij, contact |
| `festivals.html` | Parksessies 2026, Parksessies 2025, Sound of Alkmaar |
| `culture.html` | Art programme |
| `games.html` | Twist the Theory, Wannadobetter |
| `place-boost.html` | Bingo & Bubbels, DJYOURSTRESSAWAY |
| `impact.html` | Clothing swap fairs, Appelboomdroom |
| `business.html` | Volt Nederland congress, Volt Europa congress, Healthy Worklife |
| `styles.css` | Vormgeving en kleuren |
| `main.js` | Fotoviewer en het diepte-effect bij scrollen |

Zoek op `TODO` voor de projecten die nog aangevuld moeten worden.

## Foto toevoegen aan een project
Zet de foto in `images/` en voeg binnen de `<div class="stage ...">` van dat project een regel toe:

    <button class="more"><img src="images/bestandsnaam.jpg" alt="Korte beschrijving" loading="lazy"></button>

De eerste drie foto's (`p1`, `p2`, `p3`) vormen de collage, de rest (`more`) zie je via "View all photos".

## Online zetten
GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
