FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 8080

CMD ["sh", "-c", "PORT=${PORT:-8080} node proxy-server.mjs"]
