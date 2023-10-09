# Digit-Recognition-
Ce projet vise à combiner les techniques avancées de machine learning et de développement web pour créer une application complète et interactive de reconnaissance de chiffres manuscrits.
Projet de Reconnaissance de Chiffres et de Lettres
Ce projet est une application web qui permet aux utilisateurs de dessiner des chiffres et des lettres à main levée et de les faire reconnaître par un modèle de machine learning. Le projet est divisé en deux parties : le frontend (partie client) et l'API backend (partie serveur).

Frontend
Description
La partie frontend de l'application est développée en utilisant React.js. Elle fournit une interface utilisateur interactive où les utilisateurs peuvent dessiner des chiffres et des lettres à l'aide d'une bibliothèque de dessin à la souris. Les dessins sont ensuite soumis à l'API backend pour reconnaissance.

Configuration
Assurez-vous d'avoir Node.js et npm installés sur votre système.
Clonez ce dépôt Git.
Accédez au répertoire du frontend avec la commande cd frontend.
Installez les dépendances en exécutant npm install.
Lancez l'application avec npm start.
Composants clés
DrawingCanvas.js: Composant pour la zone de dessin à la souris.
RecognitionButton.js: Bouton pour soumettre les dessins pour reconnaissance.
ResultDisplay.js: Composant pour afficher le résultat de la reconnaissance.
Personnalisation
Vous pouvez personnaliser le design de l'interface utilisateur en modifiant les fichiers CSS et en ajoutant des fonctionnalités supplémentaires aux composants React.

API Backend
Description
L'API backend est construite en utilisant Django, un framework web Python. Elle gère la réception des dessins des utilisateurs, les prétraite, les envoie au modèle de machine learning pour la reconnaissance, puis renvoie les résultats aux utilisateurs.

Configuration
Assurez-vous d'avoir Python et Django installés sur votre système.
Clonez ce dépôt Git.
Accédez au répertoire du backend avec la commande cd backend.
Créez un environnement virtuel (recommandé) et activez-le.
Installez les dépendances avec pip install -r requirements.txt.
Appliquez les migrations avec python manage.py migrate.
Lancez le serveur avec python manage.py runserver.
Points clés
Modèles de données Django pour représenter les dessins des utilisateurs.
Vues API pour gérer les requêtes liées aux dessins, y compris la création, la récupération, la mise à jour et la suppression.
Authentification des utilisateurs (si nécessaire) en utilisant Django REST framework.
Configurations CORS pour permettre les requêtes cross-origin (si nécessaire).
