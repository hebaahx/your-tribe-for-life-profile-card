# Your Tribe for Life – Profile Card

Een digitaal visitekaartje gebouwd met SvelteKit, met data uit de FDND Directus database. Live te bekijken op: https://celadon-malasada-fa5e9c.netlify.app/

## Inhoud
- Project setup
- Data ophalen
- HTML structuur
- Componenten
- Styling
- Responsive design
- Deployment

### Project setup
Het project is opgezet met Sveltekit:

Gekozen instellingen:
- Template: SvelteKit minimal
- Type checking: No (gewoon JavaScript)
- Extra tools (Prettier, ESLint, etc.): geen toegevoegd
Development server starten: npm install , npm run dev

### Data ophalen
De profieldata komt uit de FDND Directus API. Dit gebeurt via een load-functie in het bestand **+page.server.js**:
https://github.com/hebaahx/your-tribe-for-life-profile-card/blob/a12d67eb7dd1e06eb7f16ab466f5026c08bc45e6/src/routes/%2Bpage.server.js#L1-L11
In **+page.svelte** wordt de data binnengehaald met:
https://github.com/hebaahx/your-tribe-for-life-profile-card/blob/a12d67eb7dd1e06eb7f16ab466f5026c08bc45e6/src/routes/%2Bpage.svelte#L5

### HTML structuur
De pagina is semantisch opgebouwd:
- <header> — bevat het logo (los component)
- <main> — bevat de kern van de pagina: de profielkaart met naam, bio en interesse-tags
- <footer> — bevat de links naar socials (los component)
De interesse-tags (Amsterdam, Egypte, Muziek, Code) zijn gebouwd met het native HTML <details>/<summary> element. Dit klapt open/dicht bij een klik, volledig zonder JavaScript. De basisfunctionaliteit werkt altijd, ook als CSS of JS niet laadt.

### Componenten
Herbruikbare onderdelen staan als losse Svelte componenten in `src/lib/components`:
- **Header.svelte** — toont het logo, klikbaar naar een externe link
- **Footer.svelte** — toont links naar GitHub, LinkedIn en e-mail; de GitHub-link wordt automatisch gevuld vanuit de database
  
### Styling
De kleuren zijn vastgelegd als CSS-variabelen op :root
https://github.com/hebaahx/your-tribe-for-life-profile-card/blob/a12d67eb7dd1e06eb7f16ab466f5026c08bc45e6/src/routes/%2Bpage.svelte#L54-L61

### Responsive design
Het project is mobile-first opgebouwd: de basisstijl is geschreven voor de kleinste schermen, en @media breakpoints voegen daar bovenop aanpassingen toe voor grotere schermen:
- @media (min-width: 768px) — tablet
- @media (min-width: 1024px) — desktop
Op grotere schermen wordt onder andere de padding en tekst grootte verkleind, zodat alles zonder scrollen op één scherm past.

### Deployment
Het project is live gezet via Netlify, gekoppeld aan de GitHub-repository. Dit zorgt ervoor dat de site de hele tijd up to date is. 
- GitHub repository: https://github.com/hebaahx/your-tribe-for-life-profile-card/tree/main
- Live URL: https://celadon-malasada-fa5e9c.netlify.app/

### Licentie
Dit project is gelicenseerd onder de MIT-licentie (zie LICENSE).
