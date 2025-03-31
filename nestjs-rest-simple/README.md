<h1 align="center"> Nest-Boilerplate</h1>

## 📄 Todos os Boilerplates

- NestJS API REST Simple;
- NestJS API GraphQL Simple;
- NestJS API GraphQL TypeORM + PostgresSQL + Docker + Full JWT Auth;

## 🚩 Requisitos

- [Git](https://www.git-scm.com/downloads);
- [NodeJS](https://nodejs.org/en/);
- [Nest](https://docs.nestjs.com/);

## 💿 Como iniciar Boilerplate NestJS API REST Simple

- Para iniciar execute os seguintes comandos
- Recomendado usar o terminar do WSL/linux ou Git Bash para funcionar corretamente todos os comandos
- Abrir terminal

- Clone o repositorio na sua máquina local.

```sh
git clone https://github.com/JeanCarlosDelai/nestjs-boilerplate.git
```

- Acesse a pasta clonada

```sh
cd nestjs-boilerplate
```

- Criar arquivo .env com base no arquivo de exemplo, para configuração de variáveis de ambiente:

```sh
cp .env.example .env
```

- Instalar as dependências

```sh
npm i
```

- Adicionar configurações do Husky (Opcional)
- Husky adiciona dus funcionalidades

1.  Verificação nos commits para manter os commits padronizados
2.  Antes de efetuar o commit ele roda alguns scripts para validar o código. Exemplo roda o lint e os testes

```sh
npm run prepare
```

- Agora é só iniciar o servidor em modo de desenvolvimento

```sh
npm run start:dev
```

- Se precisar rodar em produção

```sh
npm run build
npm run start:prod
```

## 🧪 Rodando os testes

- Para rodas os testes unitários:

```sh
npm run test
```

- Para rodar os testes de integração:

```sh
npm run test:integration
```

- Para rodas os testes e2e:

```sh
npm run test:e2e
```

- Para rodas os testes de mutação:

```sh
npm run test:mutation
```

### ✅ Verificar Cobertura Testes unitários

- Para verificar a cobertura dos testes unitários, execute o seguinte comando:

```sh
npm run test:cov
```

## 💻 Tecnologias utilizadas

- Linguagem: `Typescript`
- Ambiente te execução: `Node.js`
- Framework BackEnd: `Nest.js`
- Documentação : `Swagger`
- Testes: `Vitest | Supertest`

## 👨🏻‍💻 Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/112594276?v=4" width="80px;"/>](https://github.com/JeanCarlosDelai)
