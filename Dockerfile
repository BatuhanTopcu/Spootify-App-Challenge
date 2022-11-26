FROM node:16-alpine3.11 AS appbuild
WORKDIR /usr/src/app
COPY . ./
RUN npm ci
RUN npm run build

FROM nginx:1.21.6
COPY ./nginx.conf /etc/nginx
COPY --from=appbuild  /usr/src/app/build /usr/share/nginx/html