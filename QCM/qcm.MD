# QCM

:rocket: Faites le QCM par équipe, répondez en justifant en quelques mots votre réponse.

**Question 1 :** Qui est l'auteur de JavaScript et quelle est sa première version?

- [ ] A. John Resig, version 2000
- [x] B. Brendan Eich, version 1995
- [ ] C. Douglas Crockford, version 2010
- [ ] D. Guido van Rossum, version 1992

---

**Question 2 :** Qu'est-ce que le typage faible en JavaScript permet?

- [x] A. Les conversions de type implicite
- [ ] B. La stricte vérification des types
- [x] C. Les conversions de type explicite
- [ ] D. L'impossibilité de changer le type des variables

(Le typage faible en JavaScript permet les conversions de type implicite, ce qui signifie que les types de données peuvent être convertis automatiquement lors des opérations.)

---

**Question 3 :** Quelle est la norme ECMAScript suivie par JavaScript?

- [ ] A. ECMAScript 2010
- [x] B. ECMAScript 2015 (ES6)
- [ ] C. ECMAScript 2018
- [ ] D. ECMAScript 2020

---

**Question 4 :** Quel est le type d'une variable non initialisée en JavaScript?

- [ ] A. null
- [x] B. undefined
- [ ] C. number
- [ ] D. string

## (Une variable non initialisée en JavaScript a le type undefined, indiquant qu'elle n'a pas encore été définie ou affectée à une valeur)

**Question 5 :** Quels sont les types primitifs en JavaScript?

- [x] B. null
- [x] A. boolean
- [x] C. undefined
- [x] D. number
- [ ] E. Object

## (Les types primitifs en JavaScript sont boolean, undefined, number, et string.)

**Question 6 :** Qu'est-ce que l'opérateur `===` fait en JavaScript?

- [ ] A. Comparaison sans tenir compte du type
- [ ] B. Comparaison en convertissant les types
- [x] C. Comparaison strictement en tenant compte du type
- [ ] D. Aucune des réponses ci-dessus

---

**Question 7 :** Quelle est la portée d'une variable définie avec `let`?

- [ ] A. Portée globale
- [x] B. Portée au niveau du bloc
- [ ] C. Portée de fonction
- [ ] D. Portée de script

(est accessible que dans le bloc où elle est déclarée.)

---

**Question 8 :** Quel est le résultat de l'exécution du code suivant?

```javascript
let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
```

- [x] A. 20, 10
- [ ] B. 10, 20
- [ ] C. 20, 20
- [ ] D. 10, 10

(en dehors de ce bloc, elle conserve sa valeur initiale.)

---

**Question 9 :** Quelle est la syntaxe correcte pour déclarer une fonction fléchée en JavaScript?

- [ ] A. `function add() => {}`
- [ ] B. `const add = function() {}`
- [x] C. `const add = () => {}`
- [ ] D. `function add() {}`

---

**Question 10 :** Comment éviter l'effet de bord sur la propriété `this` dans le code suivant?

```js
const log = {
  count: 100,
  save: function () {
    "use strict";
    console.log(this.count);
  },
};
setTimeout(log.save, 500);
```

- [ ] A. Utiliser une fonction fléchée dans `save`
- [ ] B. Utiliser `bind` pour lier `this`
- [ ] C. Aucune solution.
- [x] D. Utilisez la syntaxe suivante `setTimeout(() => log.save(), 500);`

(maintient la référence correcte à l'objet log.)

---

**Question 11 :** Comment déclare-t-on une variable constante en JavaScript?

- [ ] A. `var`
- [ ] B. `let`
- [x] C. `const`
- [ ] D. `constant`

---

**Question 12 :** Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau?

- [ ] A. `deleteLast()`
- [ ] B. `removeLast()`
- [x] C. `pop()`
- [ ] D. `spliceLast()`

---

**Question 13 :** Quel est le résultat de l'expression `5 + '5'` en JavaScript?

- [ ] A. `10`
- [ ] B. `55`
- [x] C. `55` (en tant que chaîne)
- [ ] D. `undefined`

(lorsqu'un nombre est concaténé avec une chaîne, le nombre est converti en chaîne.)

---

**Question 14 :** Comment accédez-vous au dernier élément d'un tableau nommé `numbers` en JavaScript?

- [ ] A. `numbers.last()`
- [x] B. `numbers[numbers.length - 1]`
- [ ] C. `numbers.pop()`
- [ ] D. `numbers.end()`

(car les indices des tableaux commencent à zéro)

---

**Question 15 :** Quelle méthode JavaScript est utilisée pour ajouter un élément au début d'un tableau?

- [x] A. `unshift()`
- [ ] B. `push()`
- [ ] C. `append()`
- [ ] D. `addToFront()`

---

**Question 16 :** Quelle est la différence entre `let` et `const` en termes de réassignation?

- [x] A. `let` permet la réassignation, `const` ne le permet pas
- [ ] B. `let` ne permet pas la réassignation, `const` le permet
- [ ] C. Les deux permettent la réassignation
- [ ] D. Les deux ne permettent pas la réassignation

(les variables déclarées avec const ne peuvent pas être réassignées à une autre valeur)

---

**Question 17 :** Comment définir une classe en JavaScript?

- [x] A. `class Duck {}`
- [ ] B. `function Duck {}`
- [ ] C. `class = Duck {}`
- [ ] D. `Duck = class() {}`

(permet de créer une structure pour créer des objets avec des propriétés et des méthodes)

---

**Question 18 :** Quelle est la méthode JavaScript utilisée pour parcourir tous les éléments d'un objet?

- [ ] A. `iterate()`
- [x] B. `for...in`
- [] C. `forEach()`
- [ ] D. `loop()`

(permet de boucler à travers les propriétés énumérables de l'objet)

---

**Question 19 :** Quelle est la différence entre `null` et `undefined` en JavaScript?

- [ ] A. Aucune différence, les deux représentent l'absence de valeur
- [] B. `null` est assigné par le programmeur, `undefined` est assigné par le système
- [ ] C. `undefined` est assigné par le programmeur, `null` est assigné par le système
- [x] D. `null` est une valeur spéciale représentant l'absence de valeur, `undefined` signifie qu'une variable n'a pas été assignée

---

**Question 20 :** Comment effectuer une requête HTTP asynchrone en JavaScript?

- [ ] A. `http.getSync()`
- [x] B. `fetch()`
- [ ] C. `ajax()`
- [ ] D. `xhr()`

( permet d'envoyer une requête réseau et de recevoir une réponse de manière asynchrone)
