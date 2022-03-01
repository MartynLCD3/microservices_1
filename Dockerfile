FROM node:14.17.0-alpine
WORKDIR /app
RUN chmod 777 /app
COPY . .
USER 1000
EXPOSE 4000
CMD ["npm", "start"]
