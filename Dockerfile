# ! Important
# Since we rely in our code to environment variables for e.g. db connection
# this can only be run successfully with docker-compose file

# Specify node version and choose image
# also name our image as development (can be anything)
#FROM 18.12.1-bullseye-slim AS dev
FROM node:18.12.1-bullseye AS dev

RUN apt-get update && apt-get -y install procps

# Specify our working directory, this is in our container/in our image
WORKDIR /app

#USER node
#
#RUN chown -R node:node

# Copy the package.jsons from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# COPY prisma ./prisma/

# Here we install all the deps
RUN npm install

# Bundle app source / copy all other files
COPY . .

