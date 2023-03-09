# pull official base image
FROM node:current-alpine

# set working directory
WORKDIR /app

# install bash
RUN apk add --no-cache bash

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm i

# add app
COPY . ./

RUN npm run build

# start app
CMD ["npm", "run", "dev"]

