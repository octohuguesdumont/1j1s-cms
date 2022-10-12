# 🚀 Getting started with Strapi

### Local :

```
npm run install
```

#### Si c'est la première fois que vous démarrez l'appli

Démarrer le postgres avant de démarrer l'application

```
npm run postgres:up
```

Puis, populate la base

```
npm run postgres:seed
```

Guide pour configurer le service de stockage des medias si cela n'a jamais été fait par un membre de l'
équipe : [ici](doc/media/configuration-stockage-media.md)

#### Sinon

Après chaque mise à jour du contenu du cms, vous devez faire un rebuild de la database si de la data a été ajoutée.

```
npm run postgres:rebuild
```

Mode dev avec l'auto
reload. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

#### Synchroniser la configuration des droits

Strapi stocke les droits des rôles _Public_ et _Authenticated_ en tant que contenu, mais
nous utilisons le plugin `strapi-plugin-config-sync` pour les déclarer dans le code. ils sont synchronisés à chaque
déploiement.

Pour utiliser les roles déclarés dans le codes, utilisez

```
npm run roles:sync
```

Une fois que vous avez adapter les droits sur votre instance locales, faites

```
npm run roles:export
```

et committez les fichiers ainsi créés

### Tester le mode prod en dev

Mode prod. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run build & npm run start
```

#### Pour faire un seed depuis Scalingo

Aller sur [adminer](https://adminer.osc-fr1.scalingo.com/) cliquer sur "Exporter".
Prenez toutes les tables et leurs données.

Copier-coller les "INSERT INTO" dans un fichier sql (à supprimer ensuite) et run cette commande :

``
cat monfichiersql.sql | docker exec -i 1j1s-cms_db_1 psql -U admin-1j1s-cms 1j1s-cms
`` 
