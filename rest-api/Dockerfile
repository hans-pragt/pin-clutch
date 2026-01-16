## Base ##

FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

## Development ##

FROM base AS development

ARG ENVIRONMENT=development
ENV NODE_ENV=$ENVIRONMENT

EXPOSE 3000

CMD ["npm", "run", "develop"]

## Production Build ##

FROM base AS build

ARG ENVIRONMENT=production
ENV NODE_ENV=$ENVIRONMENT

RUN npm run build