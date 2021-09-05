DavidSoucany_6_02092021

6ème projet de la <a href= 'https://openclassrooms.com/fr/paths/185/projects/676/assignment'>formation de développeur web de OpenClassrooms</a>

Scénario : 

Développement d'une application web nommée "Piquante" dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.
Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

Objectifs : 

Développement Backend en Javascript

- Serveur Node.js
- Framework Express
- Base de données MongoDB
    - Hébergement sur MongoDB Atlas
    - Opérations relatives à la BDD réalisées avec mongoose
- API REST
- Sécurité OWASP et RGPD

Mesures de sécurité mises en place :

- Hashage du mot de passe utilisateur avec bcrypt
- Manupulation sécurisée de la base de donnée avec mongoose
- Vérification que l'email utilisateur soit unique dans la base de données avec mongoose-unique-validator
- Utilisation de variables d'environnement pour les données sensibles avec dotenv
- Authentification de l'utilisateur par token avec jsonwebtoken
- Protection des headers avec helmet

Test de l'application :

- Cloner Front

1. Cloner le frontend de l'application (https://github.com/David93400/DavidSoucany_6_02092021/tree/main/frontend)
2. Installer les dépendances : npm install
3. Lancer : npm start

- Cloner Back

1. Cloner le backend de l'application (https://github.com/David93400/DavidSoucany_6_02092021/tree/main/backend)
2. Pour le projet le fichier .env n'est pas ignoré dans gitignore.
3. installer les dépendances : npm install
4. lancer nodemon serve

- Front accessible a l'adresse : http://localhost:8081
- Pour des tests spécifiques (avec postman par exemple), le backend répond à l'adresse: http://localhost:3000 (attention: authentification requise pour toutes les routes /api/sauces/)



