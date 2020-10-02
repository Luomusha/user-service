FROM node:12
WORKDIR /app
COPY package.json ./
RUN npm install --registry https://registry.npm.taobao.org/ --production
COPY dist dist
EXPOSE ${USER_SERVICE_PORT}
CMD ["npm","run","start"]
