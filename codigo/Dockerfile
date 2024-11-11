# Estágio 1: Construir o Frontend
FROM node:14 AS frontend

WORKDIR /usr/src/frontend

# Copiar package.json e package-lock.json do frontend
COPY frontend/package*.json ./

# Instalar as dependências do frontend
RUN npm install

# Copiar todo o projeto do frontend
COPY frontend/ ./

# Construir o frontend para produção
RUN npm run build

# Estágio 2: Configurar o Backend com os arquivos do Frontend incluídos
FROM node:14 AS backend

WORKDIR /usr/src/app

# Copiar package.json e package-lock.json do backend
COPY backend/package*.json ./

# Instalar as dependências do backend
RUN npm install

# Copiar todo o projeto do backend
COPY backend/ ./

# Copiar o frontend construído do estágio anterior para a pasta de arquivos estáticos do backend
COPY --from=frontend /usr/src/frontend/build ./frontend/build

# Expor a porta para o backend
EXPOSE 5001

# Iniciar o servidor do backend
CMD ["npm", "start"]
