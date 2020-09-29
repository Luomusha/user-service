FROM node

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080

CMD ["npm","run","start"]
