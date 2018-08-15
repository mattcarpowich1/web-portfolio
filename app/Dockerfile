FROM alpine
LABEL matainer="mattcarpowich@gmail.com"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3001
CMD node server.js