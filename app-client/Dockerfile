FROM node:11

ENV APPLICATION_ENV Production
ENV OVERRIDE_ON_INIT Yes

RUN apt-get update -y 

WORKDIR /app
COPY package.json .
RUN yarn

CMD [ "yarn", "start" ]
