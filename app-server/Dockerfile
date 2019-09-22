FROM node:11

ENV APPLICATION_ENV Production
ENV OVERRIDE_ON_INIT Yes

RUN apt-get update -y 

RUN mkdir -p /app
WORKDIR /app
RUN cd /app 

CMD [ "yarn", "start" ]
