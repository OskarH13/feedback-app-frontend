FROM node:22-bookworm-slim AS buildstage

ARG REACT_APP_BACKEND_HOST
ARG REACT_APP_BACKEND_PORT

ENV REACT_APP_BACKEND_HOST=$REACT_APP_BACKEND_HOST
ENV REACT_APP_BACKEND_PORT=$REACT_APP_BACKEND_PORT

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27-bookworm

COPY --from=buildstage /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]