FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install webpack webpack-cli --save-dev

RUN npm run build

CMD [ "node", "dist/main.js" ]
