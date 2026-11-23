# FALLOU SAGNSÉ 221 — Tissus africains d'exception

Site vitrine statique (HTML / CSS / JS, aucune dépendance, aucun build) pour la
boutique de tissus africains **FALLOU SAGNSÉ 221** — Dakar, Sénégal.

🌐 **Site en ligne :** https://idimbengue003-web.github.io/fallou-sagnse-221/
🛠️ **Admin (CMS) :** https://idimbengue003-web.github.io/fallou-sagnse-221/admin.html

Contact : +221 78 100 65 21 · Marché HLM, Dakar.

## Architecture

- **`data.json`** — source unique de TOUT le contenu éditable (marque, contact,
  hero, photos, catégories, produits/prix/stock, usages, citations, footer).
- **`index.html`** + **5 pages catégories** (`wax`, `bazin`, `bogolan`, `kente`,
  `indigo`) — HTML statique, rapide et référencé, lié à `styles.css` + `site.js`.
- **`admin.html`** — mini-CMS : édite `data.json`, **régénère les 6 pages HTML**
  en JS et les pousse sur le dépôt en un seul commit (API Git Data de GitHub).
  L'upload de photos se fait dans `assets/`.

## Modifier le site (admin)

1. Ouvrez `admin.html` (lien ci-dessus).
2. Connectez-vous avec un **jeton d'accès GitHub** (classic, scope **`repo`**) :
   GitHub → *Settings* → *Developer settings* → *Personal access tokens* →
   *Tokens (classic)* → *Generate new token* → cochez **repo** → générer.
3. Modifiez n'importe quel champ (marque, prix, stock, photos, textes…),
   ajoutez/supprimez des produits ou catégories, uploadez des photos.
4. Cliquez **« Enregistrer »** : le site se met à jour sur GitHub Pages en ~1 min.

Le jeton reste dans votre navigateur (localStorage) et n'est envoyé qu'à l'API
GitHub. Aucune donnée ne transite par un serveur tiers.
