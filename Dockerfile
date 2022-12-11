FROM node:16.13.1-alpine

WORKDIR /usr/src/app

RUN npm install -g npm@9.2.0

ENV LANG=C.UTF-8
ENV TZ =Asia/Tokyo

