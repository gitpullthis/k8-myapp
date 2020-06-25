FROM node:8-alpine

WORKDIR /home/node/app

COPY ./app/package.json .

COPY ./app/package-lock.json .

RUN npm install --production

COPY ./app/ .

VOLUME [ "/home/node/app" ]

EXPOSE 3000

CMD [ "npm","start" ]

#fin