FROM node:18

WORKDIR /app

COPY .env ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD ["npm", "start"]