FROM node:11

ENV APPLICATION_ENV Production
ENV OVERRIDE_ON_INIT Yes

RUN apt-get update -y 
RUN yarn global add nodemon

WORKDIR /app
COPY package.json .
COPY swagger.json .
RUN yarn

CMD [ "yarn", "start" ]
