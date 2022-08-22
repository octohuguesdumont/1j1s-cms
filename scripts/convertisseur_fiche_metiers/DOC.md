## I. Télécharger le fichier XML des fiches métier de l'ONISEP
1. Se rendre sur la page https://opendata.onisep.fr/data/5fe0808a2da6f/2-ideo-fiches-metiers.htm, puis dans l'onglet `Téléchargement`
2. Cliquer sur télécharger et dé-zipper son contenu. Il s'agit des fiches métiers au format XML.

## II. Conversion du fichier XML en JSON
### Pré-requis au lancement du script
- Avoir node installé en local (v.16.13)
- Avoir récupéré le fichier XML des métiers de l'Onisep et le placer au même niveau dans l'arborescence que le fichier `index.js`
- Dans le fichier `index.js`, remplacer la valeur de la constante `ONISEP_XML_FILENAME` par le nom du fichier XML récupéré
### Lancer le script
Installer les dépendances :
```
$ npm install
```

Exécuter le script :
```
$ node index.js
```
Un fichier sera généré, nommé au format `fiches-metier-[date].json`

## III. Import du fichier JSON dans Strapi
1. Ouvrir l'interface d'administration de Strapi.
2. Aller dans `Content Manager` > `Fiche métier`.
3. Cliquer sur le bouton `Import` et sélectionner le fichier JSON préalablement généré.
4. Un onglet `Options` doit apparaitre, le déplier et sélectionner le champ `identifiant` comme identifiant unique.
5. Cliquer sur `Import`. Soyez patient, l'import peut prendre un certain temps.
6. Une fois l'import terminé, rechargez la page. La liste des fiches métiers devrait alors apparaitre.

## IV. Relancer l'indexation des fiches métiers dans Meilisearch
1. Dans Strapi, se rendre sur l'onglet `Meilisearch`
2. Dans la liste des collections disponibles, `fiche-métier` doit être cochée. Cliquer sur le bouton `Update` pour relancer une nouvelle indexation.