FROM node:20-alpine

WORKDIR /server

# Copy package.json and yarn.lock to the working directory
COPY ../../server/package.json ./
COPY ../../server/yarn.lock ./


CMD yarn; yarn run dev

# # Install dependencies
# RUN yarn install

# # Copy the rest of the server files
# COPY ../../server .

# # Build the server
# RUN yarn run dev

# # Command to start the server
# # CMD ["node", "dist/index.js"]