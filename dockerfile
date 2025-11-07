FROM node:20

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3030
CMD ["node", "app.js"]
