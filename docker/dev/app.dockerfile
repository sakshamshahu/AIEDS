FROM node:20-alpine

WORKDIR /client

COPY ../../client/package.json ./
COPY ../../client/yarn.lock ./

CMD yarn; yarn start