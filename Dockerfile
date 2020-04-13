FROM node:12-alpine
WORKDIR /src
COPY ./src .
RUN npm install --only=production
EXPOSE 8080
CMD node index.js