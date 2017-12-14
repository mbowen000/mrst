FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install -g swagger --silent --progress=false
RUN npm install --silent --progress=false

COPY . /usr/src/app