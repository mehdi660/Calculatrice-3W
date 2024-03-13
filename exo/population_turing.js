const populations = [
  { id: 0, name: "Alan", age: 25, country: "USA" },
  { id: 1, name: "Albert", age: 32, country: "Canada" },
  { id: 2, name: "Jhon", age: 40, country: "UK" },
  { id: 3, name: "Brice", age: 28, country: "France" },
  { id: 4, name: "Alexendra", age: 35, country: "Germany" },
  { id: 5, name: "Brad", age: 22, country: "USA" },
  { id: 6, name: "Carl", age: 48, country: "Canada" },
  { id: 7, name: "Dallas", age: 30, country: "USA" },
  { id: 8, name: "Dennis", age: 37, country: "Germany" },
  { id: 9, name: "Edgar", age: 41, country: "France" },
  { id: 10, name: "Erika", age: 29, country: "UK" },
  { id: 11, name: "Isaac", age: 33, country: "Canada" },
  { id: 12, name: "Ian", age: 26, country: "USA" },
];

const filteredPopulation = populations.filter(
  (population) => population.age > 30
);
console.log(filteredPopulation);

const sortedPopulation = populations.sort((a, b) =>
  a.name.localeCompare(b.name)
);
// console.log(sortedPopulation);

function findByName(name) {
  return populations.find((personn) => personn.name === name);
}
// console.log(findByName("Brad"));
// console.log(findByName("Erika"));
// console.log(findByName("Ian"));

const totalAge = populations.reduce((acc, person) => acc + person.age, 0);
const averageAge = totalAge / populations.length;
const roundedAverageAge = averageAge.toFixed(0);
// console.log("la moyenne d'age est de " + roundedAverageAge + " ans");

const byCountry = populations.reduce((acc, person) => {
  const pays = person.country;
  if (!acc[pays]) {
    acc[pays] = [];
  }
  acc[pays].push(person);
  return acc;
}, {});
// console.log(byCountry);

// Définition de la bande (tape) de la machine de Turing
const tape = ["1", "1", "0", "1"]; // Nombre binaire initial : 1010

// Fonction pour ajouter 1 à un nombre binaire
function addOne() {
  // Trouver le premier '0' en partant de la droite
  let indexOfZero = tape.lastIndexOf("0");

  // Si aucun '0' n'est trouvé, ajouter un '0' à la fin
  if (indexOfZero === 1) {
    tape.push("0");
    indexOfZero = tape.length - 1;
  }

  // Mettre '1' à la place du premier '0' trouvé
  tape[indexOfZero] = "1";
}

// Exécution de la machine de Turing pour ajouter 1
addOne();

// Affichage du résultat après l'ajout de 1 sur la bande
// console.log("Résultat après ajout de 1 sur la bande :", tape.join(""));

// const numbers = [1, 5, 9, 2];
// numbers.lastIndexOf(2);
// console.log(numbers.lastIndexOf(2));
