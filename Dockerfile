# Étape 1: Builder l'application Angular
FROM node:22-alpine as builder

# Répertoire de travail
WORKDIR /app

# Copiez les fichiers du projet dans le container
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source de l'application
COPY . .

# Construire l'application Angular
RUN npm run build:ssr

# Étape 2: Lancer l'application SSR dans un environnement Node.js
FROM node:22-alpine as runner

# Répertoire de travail
WORKDIR /app

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist /app/dist

# Installer seulement les dépendances nécessaires pour l'environnement de production
COPY package.json ./
RUN npm install --only=production --legacy-peer-deps

# Définir la variable d'environnement pour le port
ENV PORT=4000

# Exposer le port
EXPOSE 4000

# Lancer l'application Node.js avec SSR
CMD ["node", "dist/plumed-enfant-front-server/main.js"]
