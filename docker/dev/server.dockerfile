FROM node:20-alpine

WORKDIR /server

COPY ../../server/package.json ./
COPY ../../server/yarn.lock ./

CMD yarn; npx prisma generate; npx prisma migrate dev --name init; npx prisma migrate deploy; yarn run dev