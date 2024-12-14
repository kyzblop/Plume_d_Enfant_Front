# Étape 1 : Construire l'application Angular avec SSR
FROM node:22 AS build

WORKDIR /app

# Copier les fichiers du projet Angular
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application Angular avec SSR
RUN npm run build:ssr

# Étape 2 : Utiliser une image Node.js pour exécuter l'application SSR
FROM node:22

WORKDIR /app

# Copier les fichiers construits dans le dossier de l'application
COPY --from=build /app/dist/plumed-enfant-front /app

# Installer les dépendances nécessaires à l'exécution du serveur
RUN npm install --only=production

# Exposer le port 4000 pour l'application SSR
EXPOSE 4000

# Démarrer le serveur SSR
CMD ["node", "dist/plumed-enfant-front/server/main.js"]
