FROM node:lts-alpine AS build
LABEL authors="Aman Subhan <>"
RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:lts-alpine AS production
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
USER node
EXPOSE 3000
#CMD [ "pnpm", "run", "start:prod" ]
CMD [ "node", "dist/main.js" ]
