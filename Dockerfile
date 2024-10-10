# Set version latest LTS
FROM node:22.9.0

WORKDIR /app

COPY package*.json .

RUN npm install -g npm@latest && npm install

COPY . .