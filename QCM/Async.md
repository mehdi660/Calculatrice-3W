QCM sur l'Asynchrone en JavaScript :
:rocket: Faites le QCM par équipe, répondez en justifant en quelques mots votre réponse.

Qu'est-ce que l'asynchronisme en programmation JavaScript ?
[ ] A. Un concept qui bloque l'exécution du code.
[X] B. Un concept qui permet d'exécuter des tâches en arrière-plan sans bloquer le code.
[ ] C. Une fonction qui retourne une valeur immédiatement.
(permet d'exécuter des tâches en arrière-plan tout en permettant au cde de continuer son exécution sans être bloqué)

Pourquoi l'asynchronisme est-il nécessaire dans le développement web moderne ?
[ ] A. Pour rendre le code plus complexe.
[X] B. Pour gérer efficacement des opérations telles que les requêtes réseau ou l'accès à la base de données.
[ ] C. Pour rendre le code plus lisible.
(améliore la réactivité des applications)

Quel est le rôle des callbacks dans l'asynchrone JavaScript ?
[ ] A. Ils bloquent l'exécution du code.
[X] B. Ce sont des fonctions passées en tant que paramètres à d'autres fonctions, exécutées après une opération asynchrone.
[ ] C. Ils sont utilisés pour définir des variables.

Comment JavaScript gère-t-il les opérations asynchrones avec l'Event Loop ?
[ ] A. En créant un nouveau thread pour chaque opération asynchrone.
[X] B. En plaçant les fonctions asynchrones dans une file d'exécution (Task Queue) et les exécutant via l'Event Loop.
[ ] C. En les exécutant immédiatement après la fonction synchrone.
( assurant une exécution non bloquante du code)

Quelle est la principale caractéristique de la Task Queue en JavaScript ?
[ ] A. Elle gère les fonctions asynchrones en mode LIFO.
[X] B. Elle gère les fonctions asynchrones en mode FIFO.
[ ] C. Elle n'a pas de rôle dans l'asynchronisme.
("First In, First Out". Indique que dans une file d'attente, les éléments sont traités dans l'ordre où ils ont été ajoutés)

Quel est le rôle de la méthode setTimeout dans le code asynchrone ?
[ ] A. Elle accélère l'exécution du code.
[X] B. Elle retarde l'exécution d'une fonction donnée après un certain délai.
[ ] C. Elle arrête immédiatement l'exécution du code.
(permet de créer des opérations asynchrones dans le code)

Quelle est la principale limitation de l'asynchronisme en JavaScript ?
[ ] A. Il est facile à mettre en œuvre.
[X] B. Il est difficile à mettre en œuvre.
[ ] C. Il n'a pas de limitation.
(surtout lorsqu'il implique des opérations complexes ou des structures de contrôle imbriquées.)

Qu'est-ce qu'une Promesse en JavaScript ?
[X] A. Un objet représentant la réussite ou l'échec d'une opération asynchrone.
[ ] B. Une fonction qui retourne une valeur immédiatement.
[ ] C. Une fonction synchrone.
( elle permet de gérer plus facilement les opérations asynchrones et leurs résultats)

Quelle méthode est appelée après le succès d'une Promesse en JavaScript ?
[ ] A. resolve
[ ] B. reject
[X] C. then
(permet de spécifier une fonction à exécuter lorsque la Promesse est résolue avec succès)

Quel mot-clé permet d'attendre la résolution d'une promesse dans une fonction asynchrone ?
[X] A. await
[ ] B. delay
[ ] C. stop
(permet de suspendre l'exécution de la fonction asynchrone jusqu'à ce que la promesse soit résolue)

Qu'est-ce que le Callback Hell en JavaScript ?
[ ] A. Un terme pour décrire une structure pyramidale de fonctions synchrones.
[X] B. Une situation où de nombreuses fonctions de rappel imbriquées rendent le code difficile à lire et à maintenir.
[ ] C. Une fonctionnalité de JavaScript.
(souvent observée dans des scénarios d'asynchronisme complexe)

Comment éviter le Callback Hell en JavaScript ?
[ ] A. En utilisant uniquement des fonctions synchrones.
[X] B. En utilisant des Promesses ou Async/Await pour simplifier la gestion de l'asynchronisme.
[ ] C. En ajoutant plus de fonctions de rappel.

Quel est l'état initial d'une Promesse en JavaScript ?
[ ] A. Resolved
[ ] B. Rejected
[X] C. Pending
(signifie que la promesse n'a pas encore été résolue ni rejetée)

Que fait la méthode catch dans une Promesse ?
[ ] A. Elle résout la promesse.
[ ] B. Elle rejette la promesse.
[X] C. Elle est appelée en cas d'échec de la promesse.
(permet de capturer et de gérer les erreurs survenues pendant l'exécution de la promesse)

Quel avantage offre Async/Await par rapport aux Promesses ?
[X] A. Une syntaxe plus lisible et expressive pour gérer l'asynchronisme.
[ ] B. Une exécution plus rapide du code.
[ ] C. Une gestion plus complexe des erreurs.
