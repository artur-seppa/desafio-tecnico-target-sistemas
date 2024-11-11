# Usa uma imagem base oficial do Node.js
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o diretório de trabalho
COPY . .

# Define a porta que o aplicativo irá expor
EXPOSE 3333

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
