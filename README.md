# sistema-antidoping-api

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

API para gerenciamento de atletas e seus exames médicos.

## Tecnologias utilizadas
- Node.js
- TypeScript
- Express.js
- Prisma
- PostgreSQL (Supabase)

## Endpoints

### Atletas
- Retorna todos os atletas cadastrados (`GET /atletas`)
- Retorna um atleta por id (`GET /atletas/{id}`)
- Cadastrar novo atleta (`POST /atletas`)
- Atualizar os dados de um atleta por id (`PUT /atletas/{id}`)
- Deletar o registro de um atleta por id (`DELETE /atletas/{id}`)

### Testes Antidoping
- Retorna todos os testes cadastrados (`GET /testes-antidoping`)
- Retorna um teste por id (`GET /testes-antidoping/{id}`)
- Cadastrar novo teste (`POST /testes-antidoping`)
- Atualizar os dados de um teste por id (`PUT /testes-antidoping/{id}`)
- Deletar o registro de um teste por id (`DELETE /testes-antidoping/{id}`)

## Uso da API

### Exemplo do corpo da requisição para o endpoint `POST /atletas`

- **Endpoint:** `POST /atletas`
- **Corpo da Requisição (Body):**
  ```json
  {
      "nome": "Lucas Silveira",
      "idade": 21,
      "altura": 178,
      "esporte": "Nataçao",
      "peso": 73.6
  }
- **Resposta de sucesso:**
  ```json
  {
      "id": 4,
      "nome": "Lucas Silveira",
      "idade": 21,
      "peso": "73.6",
      "altura": 178,
      "esporte": "Nataçao"
  }

### Exemplo do corpo da requisição para o endpoint `PUT /atletas/{id}`

- **Endpoint:** `PUT /atletas/4`
- **Corpo da Requisição (Body):**
  ```json
  {
      "esporte": "Futebol"
  }
- **Resposta de sucesso:**
  ```json
  {
      "id": 4,
      "nome": "Lucas Silveira",
      "idade": 21,
      "peso": "73.6",
      "altura": 178,
      "esporte": "Futebol"
  }

### Exemplo do corpo da requisição para o endpoint `POST /testes-antidoping`

- **Endpoint:** `POST /testes-antidoping`
- **Corpo da Requisição (Body):**
  ```json
  {
      "data_exame": "2025-09-10",
      "resultado_positivo": true,
      "substancia_detectada": "Trembolona",
      "atleta_id": 3
  }
- **Resposta de sucesso:**
  ```json
  {
      "id": 1,
      "data_exame": "2025-09-10T00:00:00.000Z",
      "resultado_positivo": true,
      "substancia_detectada": "Trembolona",
      "atleta_id": 3
  }
Obs.: Caso `"resultado_positivo": false`, o campo `substancia_detectada` deve ser `null`.

### Exemplo do corpo da requisição para o endpoint `PUT /testes-antidoping/{id}`

- **Endpoint:** `PUT /testes-antidoping/1`
- **Corpo da Requisição (Body):**
  ```json
  {
      "data_exame": "2025-10-01"
  }
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "data_exame": "2025-10-01T00:00:00.000Z",
    "resultado_positivo": true,
    "substancia_detectada": "Trembolona",
    "atleta_id": 3
  }

## Instalação e execução

#### 1. Clonar o repositório
```bash
git clone https://github.com/maats01/sistema-antidoping-api.git
```

#### 2. Instalar dependências
```bash
npm install
```

#### 3. Configurar o ambiente
Copie o arquivo de exemplo `.env.example` para um novo arquivo chamado `.env`:
```bash
cp .env.example .env
```
Em seguida, edite o arquivo `.env` com as informações de conexão do seu banco de dados PostgreSQL.

#### 4. Executar as migrations do prisma
```bash
npx prisma migrate dev
```

#### 5. Iniciar a aplicação
```bash
npm run dev
```
