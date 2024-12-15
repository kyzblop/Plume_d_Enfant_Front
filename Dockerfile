# Étape 1: Construction de l'application Angular
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape 2: Serveur Nginx
FROM nginx:latest
COPY --from=build /app/dist/plumed-enfant-front/browser /usr/share/nginx/html/plumed-enfant-front/browser
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Exposer le port 8095
EXPOSE 8095

ENTRYPOINT ["/bin/sh", "/docker-entrypoint.sh"]
