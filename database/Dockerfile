FROM node:18

WORKDIR /app

ENV MONGO_URI=mongodb+srv://angeldinahet43:root@cluster0.dpmhigp.mongodb.net/star_wars

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD ["npm", "start"]