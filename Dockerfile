# Verwende ein Node-Image als Basis
FROM node:16-alpine AS build

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projekts
COPY . .

# Baue die Anwendung
RUN npm run build

# Verwende ein NGINX-Image für das Deployment
FROM nginx:alpine

# Kopiere den Build in das NGINX-Verzeichnis
COPY --from=build /app/build /usr/share/nginx/html

# Exponiere den Standardport
EXPOSE 80

# Starte NGINX
CMD ["nginx", "-g", "daemon off;"]
