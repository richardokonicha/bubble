FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY ./package.json .
COPY yarn.lock .
RUN yarn install
RUN yarn add nodemon
COPY ./build .
EXPOSE 3000

 
CMD [ "yarn", "run" ]
