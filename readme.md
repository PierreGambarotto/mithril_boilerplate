# Environnement de base pour frontend mithril.js

Ce projet peut servir de base pour un développer une application basée
sur mithril.js.

## Outils utilisés

### Babel

* [babel](http://babeljs.io) permet d'utiliser es6/ECMASCRIPT2015, et
assure la traduction vers du es5.
* les ensembles de plugin babel 
    * `babel-plugin-transform-react-jsx` : pour traiter du format msx
    * `babel-preset-es2015`: es6
    * `babel-preset-react`: syntaxe jsx


La configuration de `babel` est faite ici par `webpack`, à voir donc dans 
[webpack.config.js](webpack.config.js).

### Webpack

[Webpack](https://webpack.github.io/) permet de construire une
application à destination d'un navigateur en spécifiant ses
dépendances.

En particulier, on utilise ici:

* [babel-loader](https://github.com/babel/babel-loader) qui permet à
`webpack` d'utiliser `babel` dans sa chaîne de traitement.
* [file-loader](https://github.com/webpack/file-loader),
  [html-loader](https://github.com/webpack/html-loader): les loaders
  permettent d'utiliser `webpack` pour d'autres format que du
  javascript.
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  permet de recharger dynamiquement l'application dans le navigateur
  client pour tout changement dans les sources.
* Hot Module Replacement avec
  [ud](https://github.com/AgentME/ud). `Webpack` supporte un mode HMR
  permettant de ne recharger que les modules modifiés au lieu de
  recharcher toute l'application. On utilise ici `ud` pour l'interface
  avec l'API de `webpack`.

La configuration de `webpack` est faite dans
[webpack.config.js](webpack.config.js).

Le lancement rapide du serveur de développement `webpack-dev-server`
est défini dans la partie `scripts` du [package.json](package.json).

## Cycle de développement

L'application principale se trouve dans
[client/app.js](client/app.js).

À partir de ce fichier, on va charger des composants mithril.js à
partir du répertoire [client/components](client/components).

Pour lancer `webpack` en mode développement:

```
npm run watch
```

Il suffit alors de pointer son navigateur vers http://localhost:9000.
Tout changement dans `app.js` ou dans un des modules chargés à partir
de `app.js` entraîne alors le rechargement dans le navigateur.

Pour rajouter un composant mithril `MyComposant` dans l'application, il faut :

* le référencer dans [client/app.js](client/app.js), avec un `require`
adéquat référençant [client/components/MyComponant.js](client/components/MyComponant.js).
* monter le composant quelque part avec `m.component(…)`

## Application de démonstration

L'application de démonstration fournie comporte 2 composants mithril.

* [client/components/Home.js](client/components/Home.js)
* [client/components/Counter.js](client/components/Counter.js)

Le fichier principal [client/app.js](client/app.js) montre un exemple
de l'utilisation du [routage dans mithril](http://mithril.js.org/mithril.route.html).
