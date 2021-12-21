# projet_web_s1

<https://youwillbeamazed.netlify.app/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/b894f148-860d-48ec-a847-62c13682010c/deploy-status)](https://app.netlify.com/sites/youwillbeamazed/deploys)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

## Le Project

### Description

Ce project est un site web contenant un jeu en réalité augmenté qui apparaît à la présence d'un marker HIRO disponible ci-dessous.

![MarkerHiroImage](Hiro_marker_ARjs.png)

Vous voyez donc sur ce marker un parcours 3D où il faut exquiver des obstacles rouges en sauter pour celà poitner votre viseur sur le cylindre blanc et effectué une action d'input sur votre appareil.

### Problème rencontré
- L'implémentation `vue.js` + `aframe` + `ar.js` à pris la quasi-totalité de notre temps pour qu'au finale leur compatibilitée ne soit pas compléte et nous oblige à simplifié le projet de base
- Impossible d'importer un objet 3D dans notre project vue js car le project à besoin de loader particulier.
- Une animation des polygones en utilisant les capacité de scripting de `vue.js`  n'a pas été possible car si on modifiais une propriété comme la possition tout en utilisant `ar.js` les polygones ne s'affichaient plus.
- Problème de compatibilité avec les appareils mobiles pour le système de pointeur qui saute à l'infini sans information d'input.
