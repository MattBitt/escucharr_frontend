FROM node
WORKDIR /app
COPY package.json /app/package.json
RUN npm i
COPY . /app
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]