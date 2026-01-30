## Base ##

FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .

## Development ##

FROM base AS development

ARG ENVIRONMENT=development
ENV NODE_ENV=$ENVIRONMENT

EXPOSE 7070

CMD ["npm", "run", "develop"]

## Production Build ##

FROM base AS build

ARG ENVIRONMENT=production
ENV NODE_ENV=$ENVIRONMENT

RUN npm run build

## Reverse-Proxied Production Environment ##

FROM nginx:1.25-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

# (Optional) Copy a custom NGINX configuration file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]