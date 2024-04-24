FROM node:20-alpine

WORKDIR /server

COPY ../../server/package.json ./
COPY ../../server/yarn.lock ./

CMD yarn; yarn run dev