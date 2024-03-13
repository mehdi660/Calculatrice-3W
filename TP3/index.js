// ! DRAGON

import fs from "fs";

// function checkForFiles(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       const jsonData = JSON.parse(data);
//       const dragons = jsonData.dragons;

//       const oldestDragon = dragons.reduce(
//         (acc, dragon) => (dragon.age > acc.age ? dragon : acc),
//         dragons[0]
//       );
//       const youngestDragon = dragons.reduce(
//         (acc, dragon) => (dragon.age < acc.age ? dragon : acc),
//         dragons[0]
//       );

//       resolve({ oldestDragon, youngestDragon });
//     });
//   });
// }

// checkForFiles("./dragons.json")
//   .then((dragons) => {
//     console.log(`Le dragon le plus âgé est : ${dragons.oldestDragon.name}`);
//     console.log(`Le dragon le plus jeune est : ${dragons.youngestDragon.name}`);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// ! FIBONNACI

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function displayFibonacci() {
//   let n = 0;

//   const interval = setInterval(() => {
//     getFibonacciNumbers(n).then((fibonacciNumbers) => {
//       console.log(`Fibonacci(${n}): ${fibonacciNumbers}`);
//       n++;

//       if (n === 15) {
//         clearInterval(interval);
//       }
//     });
//   }, 500);
// }

// function getFibonacciNumbers(n) {
//   return new Promise((resolve) => {
//     const fibonacciNumbers = [];

//     for (let i = 0; i < n; i++) {
//       fibonacciNumbers.push(fibonacci(i));
//     }

//     resolve(fibonacciNumbers);
//   });
// }

// displayFibonacci();

// ! MATRIXE

function increaseValues(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] += 0.15;
    }
  }
}

function displayMatrix(matrix) {
  console.log("Matrice augmente de 0.15 :");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}

fs.readFile("matrix.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier:", err);
    return;
  }

  const matrix = JSON.parse(data);

  increaseValues(matrix);

  displayMatrix(matrix);

  console.log("\nTableau JSON :");
  console.log(matrix);
});
