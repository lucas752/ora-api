# ORA

## Como executar:

Adicionar um arquivo .env no diretório do projeto com o seguinte conteúdo (substituir pela url do seu banco):

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/ora?schema=public"
```

Posteriormente, basta rodar os seguintes comandos:

```
npm install
```

```
npx prisma migrate dev
```

```
npm run dev
```
