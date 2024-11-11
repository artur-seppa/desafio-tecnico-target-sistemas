# Usa uma imagem base oficial do Node.js
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependência do projeto e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código para o diretório de trabalho
COPY . .

# Expõe a porta de desenvolvimento do React
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]
