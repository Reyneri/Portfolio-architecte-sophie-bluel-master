# Portfolio-architecte-sophie-bluel

Code du projet 6 d'intégrateur web.

## Informations pour lancer le code

Lancez le backend depuis votre terminal en suivant les instructions du fichier ReadMe.

- Si vous désirez afficher le code du backend et du frontend, faites-le dans 2 instances de VSCode différentes pour éviter tout problème.

Bonjour, je m'appelle Thierry. C'est avec enthousiasme que je vous présente aujourd'hui mon projet de site web dédié à l'architecte Sophie Bluel. Ce projet représente une étape significative dans mon parcours de développeur, car il s'agit de mon second projet d'envergure utilisant Javascript.

À partir de la maquette Figma, j'ai développé l'intégralité du front-end en utilisant HTML, CSS et JavaScript. Vous pouvez explorer la conception originale via le lien suivant : [Maquette Figma](https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?node-id=2%3A588&mode=dev)

La pièce coeur de ce projet a été l'intégration du Framework CRUDE avec une API RESTful. Voici les compétences clés que j'ai pu mettre en pratique :

- Génération dynamique d'éléments HTML et manipulation du DOM via JavaScript.
- Création d'un espace administratif pour la gestion de projets.
- Authentification utilisateur sécurisée à l'aide d'un token fourni par le backend, essentiel pour les requêtes API.
- Implémentation des opérations CRUD pour la gestion des projets côté front-end.
- Conception d'un système de filtre pour classer les projets par catégories.
- Développement d'une modale pour la gestion des projets de l'architecte.

J'ai porté une attention particulière aux éléments suivants :

- Extraction et affichage des projets via l'API.
- Optimisation du code pour le filtrage des projets, minimisant ainsi les appels fetch répétés.
- Fonctionnement fluide de la modale d'ajout de projet, dans une approche SPA (Single Page Application), sans rechargement de la page.
- Sécurisation des fonctionnalités sensibles à la session et filtrage de la taille des fichiers images lors de l'envoi dans les modales.

Si vous souhaitez explorer le projet de plus près, voici la marche à suivre :

Clonez le dépôt GitHub avec git bash ou téléchargez-le directement sur git hub :

git clone [https://github.com/Reyneri/Portfolio-architecte-sophie-bluel-master.git]

Dans le répertoire Backend, lancez les commandes suivantes pour installer les dépendances et démarrer le serveur :

npm install
npm start

Pour le front-end, ouvrez `index.html` avec l'extension Live Server de VS Code pour accéder au site et tester toutes ses fonctionnalités.

Un compte de test est à votre disposition pour accéder aux fonctionnalités authentifiées :

- Email : [ sophie.bluel@test.tld ]
- Password : S0phie

La documentation Swagger de l'API est consultable via ce lien, une fois le backend en marche : [Documentation Swagger](Lien pour voir la documentation Swagger).

Je suis ravi de partager ce projet avec vous ependant que je continue à me perfectionner dans ce passionnant domaine du développement web.
