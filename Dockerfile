FROM node:6.11.4
WORKDIR /usr/src/app
COPY . ./
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3000
