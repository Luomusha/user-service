FROM node:12

WORKDIR /app

COPY package.json tsconfig.json ./

RUN npm install --registry https://registry.npm.taobao.org/

COPY . .
RUN npm run build

EXPOSE ${USER_SERVICE_PORT}

CMD ["npm","run","start"]
